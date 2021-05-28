import Scale from '../../src/mvc/view/scale';

describe('scale test', () => {
  let scale;
  beforeEach(() => {
    scale = new Scale();
  });
  test('scale created with several elements (for every value and for scale itself)', () => {
    const scaleValues = [1, 2, 3, 4, 5];
    jest.spyOn(document, 'createElement');
    scale.createScale(scaleValues);
    expect(document.createElement).toHaveBeenCalledTimes(scaleValues.length + 1);
  });
  test('scale position adapted to wrapper width', () => {
    const x = 450;
    expect(scale.placeScale(x)).toBe((0.42 * x + 777.8) / x);
  });
});
