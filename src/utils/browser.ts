export const isInternetExplorer = () => {
  const UA = global.navigator.userAgent;
  const firefox = UA.includes('Firefox');
  return (UA.includes('MSIE') || UA.includes('rv:')) && !firefox;
};

export const isSafari = () => {
  const UA = global.navigator.userAgent;
  const isChrome = UA.includes('Chrome');
  return UA.includes('Safari') && !isChrome;
};
