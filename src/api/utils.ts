import { REACT_APP_BE_URI } from 'config';

export const extractActionName = (
  requestUrl = '',
  removeTokenRegex = /[\w=-]+\.[\w=-]+\.?[\w+./=-]*/g,
  removeGIMRegex = /^\/|\/$/gim,
  replaceSlashRegex = /[ /-]+/g,
) =>
  requestUrl
    .replace(removeTokenRegex, '')
    .replace(removeGIMRegex, '')
    .replace(replaceSlashRegex, '_');

export const resetReCaptcha = async (action: string) => {
  const validActionName = action.replace(/-/g, '_');

  return (window as any).grecaptcha
    .execute(process.env.REACT_APP_CAPTCHA_SITE_KEY, {
      action: validActionName,
    })
    .then((captchaResponse: string) => captchaResponse);
};

const getApiUrl = () => REACT_APP_BE_URI;
export const apiUrl = getApiUrl();
