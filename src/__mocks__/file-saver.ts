const fileSaver: any = jest.genMockFromModule('file-saver');
fileSaver.saveAs = jest.fn((blob, filename) => filename);

jest.mock('file-saver', () => ({ saveAs: jest.fn() }));

// eslint-disable-next-line import/no-default-export
export default fileSaver;
