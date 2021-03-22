import { isInternetExplorer, isSafari } from './browser';

const ieAgentStr = `Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)`;
const safariAgentStr = `Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`;
const chromeAgentStr = `Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047`;
const fireFoxAgentStr = `Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0`;

let userAgentGetter: any;

beforeEach(() => {
  userAgentGetter = jest.spyOn(window.navigator, 'userAgent', 'get');
});

describe('Browser dectetion', () => {
  it('Should detect internet explorer', () => {
    userAgentGetter.mockReturnValue(ieAgentStr);
    expect(isInternetExplorer()).toBe(true);
  });

  it('Should detect safari', () => {
    userAgentGetter.mockReturnValue(safariAgentStr);
    expect(isSafari()).toBe(true);
  });

  it('Should be false when detecting chrome using isInternetExplorer detection', () => {
    userAgentGetter.mockReturnValue(chromeAgentStr);
    expect(isInternetExplorer()).toBe(false);
  });

  it('Should be false when detecting safari using isInternetExplorer detection', () => {
    userAgentGetter.mockReturnValue(safariAgentStr);
    expect(isInternetExplorer()).toBe(false);
  });

  it('Should be false when detecting firefox using isInternetExplorer detection', () => {
    userAgentGetter.mockReturnValue(fireFoxAgentStr);
    expect(isInternetExplorer()).toBe(false);
  });
  it('Should be false when detecting IE using isSafari detection', () => {
    userAgentGetter.mockReturnValue(ieAgentStr);
    expect(isSafari()).toBe(false);
  });

  it('Should be false when detecting chrome using isSafari detection', () => {
    userAgentGetter.mockReturnValue(chromeAgentStr);
    expect(isSafari()).toBe(false);
  });
  it('Should be false when detecting firefox using isSafari detection', () => {
    userAgentGetter.mockReturnValue(fireFoxAgentStr);
    expect(isSafari()).toBe(false);
  });
});
