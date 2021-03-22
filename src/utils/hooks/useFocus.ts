import { MutableRefObject, useState, useEffect } from 'react';

export function useFocus(ref: MutableRefObject<any>, defaultState = false) {
  const [state, setState] = useState(defaultState);

  useEffect(() => {
    const onFocus = () => setState(true);
    const onBlur = () => setState(false);
    ref.current.addEventListener('focus', onFocus);
    ref.current.addEventListener('blur', onBlur);

    return () => {
      ref.current.removeEventListener('focus', onFocus);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ref.current.removeEventListener('blur', onBlur);
    };
  }, [ref]);

  return state;
}
