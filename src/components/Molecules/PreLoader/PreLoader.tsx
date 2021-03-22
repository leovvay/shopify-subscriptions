import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { LoadingIndicator } from 'components/Atoms/LoadingIndicator/LoadingIndicator';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const PreLoader = () => {
  const [delayed, setDelayed] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setDelayed(false), 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Wrapper data-testid="loading-indicator" data-analytics-id="pre-loader">
      {!delayed && <LoadingIndicator />}
    </Wrapper>
  );
};
