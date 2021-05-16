import { Thumb } from '../../src/mvc/view/thumb';

const testThumb = new Thumb();

describe('setThumbValue', () => {
  test('should not do anything', () => {
    testThumb.setThumbValue(false, 2);
  });
  test('thumb value should be 50', () => {
    testThumb.createThumbElement(false, document.body);
    testThumb.setThumbValue(false, 50);
    expect(testThumb.thumbOutput.textContent).toBe('50');
  });
  test('thumb values should be -200 and 0', () => {
    testThumb.createThumbElement(true, document.body, document.body);
    testThumb.setThumbValue(true, -200, 0);
    expect(testThumb.thumbOutput.textContent).toBe('-200');
    expect(testThumb.thumbOutputRight.textContent).toBe('0');
  });
});

describe('createThumbElement', () => {
  test('one thumb should be created', () => {
    const createElementMock = jest.spyOn(document, 'createElement');
    jest.clearAllMocks();
    testThumb.createThumbElement(false, document.body);
    expect(document.createElement).toHaveBeenCalledTimes(1);
    createElementMock.mockRestore();
  });
  test('two thumbs should be created', () => {
    const createElementMock = jest.spyOn(document, 'createElement');
    jest.clearAllMocks();
    testThumb.createThumbElement(true, document.body, document.body);
    expect(document.createElement).toHaveBeenCalledTimes(2);
    createElementMock.mockRestore();
  });
});
