import Model from '../src/mvc/model';

describe('test Model', () => {
  let model;
  beforeEach(() => {
    model = new Model({});
  });
  test('max value set to 100 if not defined', () => {
    expect(model.max).toBe(100);
  });
  test('max value is correct', () => {
    const correctMax = 10;
    const modelMax = new Model({ max: correctMax });
    expect(modelMax.max).toBe(correctMax);
  });
  test('max value might be zero', () => {
    const correctMax = 0;
    const modelMax = new Model({ max: correctMax });
    expect(modelMax.max).toBe(correctMax);
  });
  test('default value set to 50 if not defined', () => {
    expect(model.defaultValue).toBe(50);
  });
  test('default value is correct', () => {
    const correctDefault = -100000;
    const modelMax = new Model({ defaultValue: correctDefault });
    expect(modelMax.defaultValue).toBe(correctDefault);
  });
  test('default value might be zero', () => {
    const correctDefault = 0;
    const modelMax = new Model({ defaultValue: correctDefault });
    expect(modelMax.defaultValue).toBe(correctDefault);
  });
  test('default value is set', () => {
    const newDefaultValue = 50;
    model.setDefaultValue(newDefaultValue);
    expect(model.defaultValue).toBe(newDefaultValue);
  });
  test('right value set to 70 if not defined', () => {
    expect(model.rightValue).toBe(70);
  });
  test('right value is correct', () => {
    const correctRight = 0;
    const modelMax = new Model({ rightValue: correctRight });
    expect(modelMax.rightValue).toBe(correctRight);
  });
  test('right value is set', () => {
    const newRightValue = 500;
    model.setRightValue(newRightValue);
    expect(model.rightValue).toBe(newRightValue);
  });
  test('values for scale recieved', () => {
    expect(model.getScale(0, 1, 1, false)).toEqual([]);
    const expectArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(model.getScale(0, 100, 10, true)).toEqual(expectArray);
  });
  test('step is overwritten when it is less or equal to 0', () => {
    const expectArray = [1, 2, 3, 4, 5];
    expect(model.getScale(1, 5, 0, true)).toEqual(expectArray);
    expect(model.getScale(1, 5, -100, true)).toEqual(expectArray);
  });
  test('last value for scale is equal to max value', () => {
    // even if it doesn't fit the step
    const expectArray = [0, 5, 10, 16];
    expect(model.getScale(0, 16, 5, true)).toEqual(expectArray);
  });
  test('maximum length for scale - 11', () => {
    const expectArray = [100, 190, 280, 370, 460, 550, 640, 730, 820, 910, 1000];
    expect(model.getScale(100, 1000, 10, true)).toEqual(expectArray);
  });
  test('default value set to the new value when it fits the step', () => {
    // limitStep function call setDefaultValue with the same argument
    jest.spyOn(model, 'setDefaultValue');
    const limitData = {
      step: 1,
      newValue: 5,
      isDefault: true,
    };
    model.step = limitData.step;
    model.limitStep(limitData.newValue, limitData.isDefault);
    expect(model.setDefaultValue).toHaveBeenCalledWith(limitData.newValue);
  });
  test('default value set to the different value when it does not fit the step', () => {
    // limitStep function call setDefaultValue with the closest value, which fits the step
    jest.spyOn(model, 'setDefaultValue');
    const limitData = {
      step: 10,
      newValue: 33,
      closestStepValue: 30,
      isDefault: true,
    };
    model.step = limitData.step;
    model.limitStep(limitData.newValue, limitData.isDefault);
    expect(model.setDefaultValue).not.toHaveBeenCalledWith(limitData.newValue);
    expect(model.setDefaultValue).toHaveBeenCalledWith(limitData.closestStepValue);
  });
  test('right value set to the new value when it fits the step', () => {
    // limitStep function call setRightValue with the same argument
    jest.spyOn(model, 'setRightValue');
    const limitData = {
      step: 1,
      newValue: 50,
      isDefault: false,
    };
    model.step = limitData.step;
    model.limitStep(limitData.newValue, limitData.isDefault);
    expect(model.setRightValue).toHaveBeenCalledWith(limitData.newValue);
  });
  test('default value set to the different value when it does not fit the step', () => {
    // limitStep function call setRightValue with the closest value, which fits the step
    jest.spyOn(model, 'setRightValue');
    const limitData = {
      step: 5,
      newValue: 33,
      closestStepValue: 35,
      isDefault: false,
    };
    model.step = limitData.step;
    model.limitStep(limitData.newValue, limitData.isDefault);
    expect(model.setRightValue).not.toHaveBeenCalledWith(limitData.newValue);
    expect(model.setRightValue).toHaveBeenCalledWith(limitData.closestStepValue);
  });
  test('nearest value is calculated', () => {
    let values = {
      newValue: 5,
      step: 2,
      nearestFitsStep: 4,
    };
    expect(model.calcNearest(values.newValue, values.step)).toBe(values.nearestFitsStep);
    values = {
      newValue: 8,
      step: 3,
      nearestFitsStep: 9,
    };
    expect(model.calcNearest(values.newValue, values.step)).toBe(values.nearestFitsStep);
    values = {
      newValue: -1,
      step: 10,
      nearestFitsStep: 0,
    };
    expect(model.calcNearest(values.newValue, values.step)).toBe(values.nearestFitsStep);
  });
  test('thumb is not limited', () => {
    const thumbValues = {
      right: 10,
      left: 5,
      newValue: 9,
      isNewForLeft: true,
    };
    jest.spyOn(model, 'limitStep');
    model.rightValue = thumbValues.right;
    model.limitToggle(thumbValues.newValue, thumbValues.isNewForLeft);
    expect(model.limitStep).toHaveBeenCalledWith(thumbValues.newValue, thumbValues.isNewForLeft);

    thumbValues.isNewForLeft = false;
    model.defaultValue = thumbValues.left;
    model.limitToggle(thumbValues.newValue, thumbValues.isNewForLeft);
    expect(model.limitStep).toHaveBeenCalledWith(thumbValues.newValue, thumbValues.isNewForLeft);
  });
  test('thumb is limited when left value is more then right, observers update', () => {
    const thumbValues = {
      right: 10,
      newValue: 11,
      isNewForLeft: true,
    };
    jest.spyOn(model, 'limitStep');
    jest.spyOn(model, 'updateObservers');
    model.rightValue = thumbValues.right;
    model.limitToggle(thumbValues.newValue, thumbValues.isNewForLeft);
    expect(model.limitStep).not.toHaveBeenCalled();
    expect(model.updateObservers).toHaveBeenCalled();
  });
  test('new limits for thumb set when model update', () => {
    model.isRange = true;
    const updateData = {
      newValue: 500,
      isThumbDefault: true,
      updateModel() {
        model.update(this.newValue, this.isThumbDefault);
      },
      test() {
        expect(model.limitToggle).toHaveBeenCalledWith(this.newValue, this.isThumbDefault);
      },
    };
    jest.spyOn(model, 'limitToggle');
    updateData.updateModel();
    updateData.test();

    updateData.newValue = 1000;
    updateData.isThumbDefault = false;
    updateData.updateModel();
    updateData.test();
  });
  test('subscriber updated data', () => {
    const observer = {
      updateView() {},
    };
    model.subscribe(observer);
    jest.spyOn(model.observers[0], 'updateView');
    model.updateObservers();
    expect(model.observers[0].updateView).toHaveBeenCalled();
  });
});
