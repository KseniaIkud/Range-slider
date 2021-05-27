/* eslint-disable max-classes-per-file */

import Model from '../src/mvc/model';

describe('test Model', () => {
  let model;
  beforeEach(() => {
    model = new Model({});
  });
  test('max value set to 100 if not defined', () => {
    expect(model.max).toBe(100);
  });
  test('max set value is correct', () => {
    const correctMax = 10;
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
  test('get values for scale', () => {
    expect(model.getScale(0, 1, 1, false)).toEqual([]);
    const expectArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    expect(model.getScale(0, 100, 10, true)).toEqual(expectArray);
  });
  test('overwrite step if it is less or equal to 0', () => {
    const expectArray = [1, 2, 3, 4, 5];
    expect(model.getScale(1, 5, 0, true)).toEqual(expectArray);
    expect(model.getScale(1, 5, -100, true)).toEqual(expectArray);
  });
  test('last value for scale is equal to max value', () => {
    // even if it doesn't fit the step
    const expectArray = [0, 5, 10, 16];
    expect(model.getScale(0, 16, 5, true)).toEqual(expectArray);
  });
  test('default value changes to the same value when it fits the step', () => {
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
  test('default value changes to the different value when it does not fit the step', () => {
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
  test('right value changes to the same value when it fits the step', () => {
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
  test('default value changes to the different value when it does not fit the step', () => {
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
  test('nearest value calculated', () => {
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
  test('thumb is limited and not allowed to move further, observers update', () => {
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

// const testModel = new Model({});

// describe('max value', () => {
//   test('if max is not defined, default value is 100', () => {
//     expect(testModel.max).toBe(100);
//   });
//   test('max should be equal to 10', () => {
//     const modelMax = new Model({
//       max: 10,
//     });
//     expect(modelMax.max).toBe(10);
//   });
//   test('max should be equal to 0', () => {
//     const modelMax = new Model({
//       max: 0,
//     });
//     expect(modelMax.max).toBe(0);
//   });
// });

// describe('main value, single or left', () => {
//   test('if the value is not defined, default value is 50', () => {
//     expect(testModel.defaultValue).toBe(50);
//   });
//   test('the value should be equal to 1000', () => {
//     const modelDefault = new Model({
//       defaultValue: 1000,
//     });
//     expect(modelDefault.defaultValue).toBe(1000);
//   });
//   test('the value should be equal to 0', () => {
//     const modelDefault = new Model({
//       defaultValue: 0,
//     });
//     expect(modelDefault.defaultValue).toBe(0);
//   });
// });

// describe('right value', () => {
//   test('if right value is not defined, default value is 70', () => {
//     expect(testModel.rightValue).toBe(70);
//   });
//   test('right value should be equal to -200', () => {
//     const modelRight = new Model({
//       rightValue: -200,
//     });
//     expect(modelRight.rightValue).toBe(-200);
//   });
//   test('right value should be equal to 0', () => {
//     const modelRight = new Model({
//       rightValue: 0,
//     });
//     expect(modelRight.rightValue).toBe(0);
//   });
// });

// describe('update observers function', () => {
//   test('updateObservers function should be defined', () => {
//     expect(testModel.updateObservers).toBeDefined();
//   });
//   test('example class should be added in observers', () => {
//     class ExampleClass {
//       updateView() {

//       }
//     }
//     const exampleClass = new ExampleClass();
//     testModel.subscribe(exampleClass);
//     exampleClass.updateView = jest.fn();
//     testModel.updateObservers();
//     expect(exampleClass.updateView).toHaveBeenCalled();
//   });
// });
// describe('get scale values function', () => {
//   test('if there is no scale, getScaleValues function should return empty array', () => {
//     expect(testModel.getScale(0, 1, 1, false)).toEqual([]);
//   });
//   test('minimum 0, maximum 100, step 10 should return every 10 number', () => {
//     const expectArray = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
//     expect(testModel.getScale(0, 100, 10, true)).toEqual(expectArray);
//   });
//   test('should work with negativies', () => {
//     const expectArray = [-6, -4, -2, 0, 2, 4];
//     expect(testModel.getScale(-6, 4, 2, true)).toEqual(expectArray);
//   });
//   test('should overwrite step if it is less or equal to zero', () => {
//     const expectArray = [1, 2, 3, 4, 5];
//     expect(testModel.getScale(1, 5, 0, true)).toEqual(expectArray);
//     expect(testModel.getScale(1, 5, -100, true)).toEqual(expectArray);
//   });
//   test('the last value should be the max even if it does not fit the step', () => {
//     const expectArray = [0, 5, 10, 16];
//     expect(testModel.getScale(0, 16, 5, true)).toEqual(expectArray);
//   });
//   test('should return only 11 numbers max', () => {
//     const expectArray = [100, 190, 280, 370, 460, 550, 640, 730, 820, 910, 1000];
//     expect(testModel.getScale(100, 1000, 10, true)).toEqual(expectArray);
//   });
// });
// describe('set default value function', () => {
//   test('function should be defined', () => {
//     expect(testModel.setDefaultValue).toBeDefined();
//   });
//   test('default value should be set', () => {
//     testModel.setDefaultValue(50);
//     expect(testModel.defaultValue).toBe(50);
//   });
// });
// describe('set right value function', () => {
//   test('function should be defined', () => {
//     expect(testModel.setRightValue).toBeDefined();
//   });
//   test('default value should be set', () => {
//     testModel.setRightValue(500);
//     expect(testModel.rightValue).toBe(500);
//   });
// });
// describe('limit step function', () => {
//   test('limit step function should be defined', () => {
//     expect(testModel.limitStep).toBeDefined();
//   });

//   test('setDefaultValue should be called with the same argument', () => {
//     // the value is on the scale and it's left or single
//     testModel.setDefaultValue = jest.fn();
//     testModel.step = 1;
//     testModel.limitStep(5, true);
//     expect(testModel.setDefaultValue).toHaveBeenCalledWith(5);
//   });
//   test('setDefaultValue should be called with different argument', () => {
//     // the value is NOT on the scale and it's left or single
//     testModel.setDefaultValue = jest.fn();
//     testModel.step = 10;
//     testModel.limitStep(33, true);
//     expect(testModel.setDefaultValue).toHaveBeenCalledWith(30);
//   });
//   test('setRightValue should be called with the same argument', () => {
//     // the value is on the scale and it's right
//     testModel.setRightValue = jest.fn();
//     testModel.step = 1;
//     testModel.limitStep(50, false);
//     expect(testModel.setRightValue).toHaveBeenCalledWith(50);
//   });
//   test('setRightValue should be called with different argument', () => {
//     // the value is NOT on the scale and it's right
//     testModel.setRightValue = jest.fn();
//     testModel.step = 5;
//     testModel.limitStep(33, false);
//     expect(testModel.setRightValue).toHaveBeenCalledWith(35);
//   });
// });
// describe('limit toggle function', () => {
//   test('limit toggle function should be defined', () => {
//     expect(testModel.limitToggle).toBeDefined();
//   });
//   test('limit step function should be called with the same argument', () => {
//     // new value is for single handle slider or it's left and less then the right value
//     testModel.limitStep = jest.fn();
//     testModel.rightValue = 10;
//     testModel.limitToggle(9, true);
//     expect(testModel.limitStep).toHaveBeenCalledWith(9, true);
//   });
//   test('limit step function should NOT be called and update observers should', () => {
//     // new value pretending to be for left handle, but it's greater than the right value
//     testModel.limitStep = jest.fn();
//     testModel.updateObservers = jest.fn();
//     testModel.rightValue = 10;
//     testModel.limitToggle(100, true);
//     expect(testModel.limitStep).not.toHaveBeenCalled();
//     expect(testModel.updateObservers).toHaveBeenCalled();
//   });
//   test('limit step function should be called with the same arguments', () => {
//     // new value is for right handle and it's less than the left value
//     testModel.limitStep = jest.fn();
//     testModel.defaultValue = 15;
//     testModel.limitToggle(100, false);
//     expect(testModel.limitStep).toHaveBeenCalledWith(100, false);
//   });
//   test('limit step function should NOT be called and update observers should', () => {
//     // new value pretending to be for right handle, but it's less than the left value
//     testModel.limitStep = jest.fn();
//     testModel.updateObservers = jest.fn();
//     testModel.defaultValue = -25;
//     testModel.limitToggle(-26, false);
//     expect(testModel.limitStep).not.toHaveBeenCalled();
//     expect(testModel.updateObservers).toHaveBeenCalled();
//   });
// });
// describe('calc nearest function', () => {
//   test('calc nearest function should be defined', () => {
//     expect(testModel.calcNearest).toBeDefined();
//   });
//   test('should return 4 as the nearest even number for 5', () => {
//     expect(testModel.calcNearest(5, 2)).toBe(4);
//   });
//   test('should return 9 as the nearest number for 8 in a row of every 3 number', () => {
//     expect(testModel.calcNearest(8, 3)).toBe(9);
//   });
//   test('should work with 0 and negative numbers', () => {
//     expect(testModel.calcNearest(-1, 10)).toBe(0);
//   });
// });
// describe('subscribe function', () => {
//   test('subscribe functions should be defined', () => {
//     expect(testModel.subscribe).toBeDefined();
//   });
//   test('an item should be added to the observers list', () => {
//     class ExampleClass {
//       updateView() {

//       }
//     }
//     testModel.subscribe(ExampleClass);
//     expect(testModel.observers).toContain(ExampleClass);
//   });
// });
// describe('init function', () => {
//   test('init function should be defined', () => {
//     expect(testModel.init).toBeDefined();
//   });
//   test('should call getScaleValues function', () => {
//     testModel.getScale = jest.fn();
//     testModel.init();
//     expect(testModel.getScale).toHaveBeenCalled();
//   });
// });
// describe('update function', () => {
//   test('update function should be defined', () => {
//     expect(testModel.update).toBeDefined();
//   });
//   test('new limit for range slider handles should be set', () => {
//     testModel.limitToggle = jest.fn();
//     testModel.isRange = true; // range slider (two handles)

//     testModel.update(5, true);
//     expect(testModel.limitToggle).toHaveBeenCalledWith(5, true);

//     testModel.update(500, false);
//     expect(testModel.limitToggle).toHaveBeenCalledWith(500, false);
//   });
//   test('new step limit for single handle slider should be set', () => {
//     testModel.limitStep = jest.fn();
//     testModel.isRange = false; // one handle slider

//     testModel.update(4002, true);
//     expect(testModel.limitStep).toHaveBeenCalledWith(4002, true);
//   });
// });
