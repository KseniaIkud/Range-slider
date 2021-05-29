import Thumb from '../../src/mvc/view/thumb';

describe('thumb test', () => {
  let thumb;
  let thumbOptions;
  let createThumb;
  beforeEach(() => {
    thumb = new Thumb();
    thumbOptions = {
      isRange: false,
      newValue: -20,
      leftPercent: 20,
      newValueRight: 0,
      rightPercent: 30,
    };
    createThumb = () => { thumb.createThumb(document.body, thumbOptions.isRange); };
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });
  test('value in the single thumb element over the thumb is correct', () => {
    const { isRange, newValue } = thumbOptions;
    thumb.createThumbElement(isRange, document.body);
    thumb.setThumbValue(isRange, newValue);
    expect(thumb.thumbOutput.textContent).toBe(String(newValue));
  });
  test('value in both thumb elements over the double thumb are correct', () => {
    thumbOptions.isRange = true;
    const { isRange, newValue, newValueRight } = thumbOptions;
    thumb.createThumbElement(isRange, document.body, document.body);
    thumb.setThumbValue(isRange, newValue, newValueRight);
    expect(thumb.thumbOutput.textContent).toBe(String(newValue));
    expect(thumb.thumbOutputRight.textContent).toBe(String(newValueRight));
  });
  test('thumb value is not set in the abscence of thumb element', () => {
    thumb.setThumbValue(false, 2);
  });
  test('single thumb is placed', () => {
    createThumb();
    const { isRange, leftPercent } = thumbOptions;
    thumb.placeThumb(isRange, leftPercent);
    expect(thumb.thumbDefault.style.left).toBe(`${leftPercent}%`);
  });
  test('double thumb are placed', () => {
    thumbOptions.isRange = true;
    createThumb();
    const { isRange, leftPercent, rightPercent } = thumbOptions;
    thumb.placeThumb(isRange, leftPercent, rightPercent);
    expect(thumb.thumbDefault.style.left).toBe(`${leftPercent}%`);
    expect(thumb.thumbRight.style.right).toBe(`${100 - rightPercent}%`);
  });
  test('right thumb is placed on the left corner by default', () => {
    thumbOptions.isRange = true;
    createThumb();
    const { isRange, leftPercent } = thumbOptions;
    thumb.placeThumb(isRange, leftPercent, undefined);
    expect(thumb.thumbRight.style.right).toBe('100%');
  });
});
