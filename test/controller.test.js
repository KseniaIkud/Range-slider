import { Controller } from '../src/mvc/controller';
import { Model } from '../src/mvc/model';
import { View } from '../src/mvc/view/view';
import { Slider } from '../src/mvc/view/slider';
import { Track } from '../src/mvc/view/track';
import { ProgressBar } from '../src/mvc/view/progressBar';
import { Thumb } from '../src/mvc/view/thumb';
import { Scale } from '../src/mvc/view/scale';

const testController = new Controller(
  new Model({}),
  new View(
    document.body,
    new Slider(),
    new Track(),
    new ProgressBar(),
    new Thumb(),
    new Scale(),
  ),
);

describe('init function', () => {
  test('init function should be defined', () => {
    expect(testController.init).toBeDefined();
  });
  test('init function for model should be called', () => {
    testController.model.init = jest.fn();
    testController.init();
    expect(testController.model.init).toBeCalled();
  });
  test('view should receive data from model', () => {
    const data = {
      min: 0,
      max: 100,
      defaultValue: 11,
      rightValue: 23,
      isRange: true,
      rightProgressBar: false,
      overThumbElement: true,
      isVertical: true,
      isScale: true,
      scaleValues: [0, 50, 100],
    };
    testController.model.dataForView = data;
    testController.init();
    expect(testController.view.options).toEqual(data);
  });
  test('init function for view should be called', () => {
    testController.view.init = jest.fn();
    testController.init();
    expect(testController.view.init).toBeCalled();
  });
  test('controller should be subscribed for model', () => {
    testController.model.subscribe = jest.fn();
    testController.init();
    expect(testController.model.subscribe).toHaveBeenCalledWith(testController);
  });
  test('controller should be subscribed for view', () => {
    testController.view.subscribe = jest.fn();
    testController.init();
    expect(testController.view.subscribe).toHaveBeenCalledWith(testController);
  });
});

describe('update model function', () => {
  test('updateModel function should be defined', () => {
    expect(testController.updateModel).toBeDefined();
    testController.model.update = jest.fn();
    testController.updateModel('');
  });
  test('update function should be called for model with arguments 10 and default', () => {
    testController.model.update = jest.fn();
    testController.updateModel(10, 'default');
    expect(testController.model.update).toHaveBeenCalledWith(10, 'default');
  });
  test('update function should be called for model with arguments -1001 and right', () => {
    testController.model.update = jest.fn();
    testController.updateModel(-1001, 'right');
    expect(testController.model.update).toHaveBeenCalledWith(-1001, 'right');
  });
});
describe('update view function', () => {
  test('updateView function should be defined', () => {
    expect(testController.updateView).toBeDefined();
  });
  test('default (left or single) value for view should be update with new value 42', () => {
    testController.model.defaultValue = 42;
    testController.updateView();
    expect(testController.view.options.defaultValue).toBe(42);
  });
  test('default (left or single) value for view should be update with new value 0', () => {
    testController.model.defaultValue = 0;
    testController.updateView();
    expect(testController.view.options.defaultValue).toBe(0);
  });
  test('right value for view should be update with new value 0', () => {
    testController.model.rightValue = 0;
    testController.updateView();
    expect(testController.view.options.rightValue).toBe(0);
  });
  test('right value for view should be update with new value -100', () => {
    testController.model.rightValue = -100;
    testController.updateView();
    expect(testController.view.options.rightValue).toBe(-100);
  });
  test('view function setInput should be called', () => {
    testController.view.setInput = jest.fn();
    testController.updateView();
    expect(testController.view.setInput).toBeCalled();
  });
});
