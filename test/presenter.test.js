import Presenter from '../src/mvc/presenter';
import Model from '../src/mvc/model';
import View from '../src/mvc/view/view';
import Slider from '../src/mvc/view/slider';
import Track from '../src/mvc/view/track';
import ProgressBar from '../src/mvc/view/progressBar';
import Thumb from '../src/mvc/view/thumb';
import Scale from '../src/mvc/view/scale';

const testPresenter = new Presenter(
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
    expect(testPresenter.init).toBeDefined();
  });
  test('init function for model should be called', () => {
    testPresenter.model.init = jest.fn();
    testPresenter.init();
    expect(testPresenter.model.init).toBeCalled();
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
    testPresenter.model.dataForView = data;
    testPresenter.init();
    expect(testPresenter.view.options).toEqual(data);
  });
  test('init function for view should be called', () => {
    testPresenter.view.init = jest.fn();
    testPresenter.init();
    expect(testPresenter.view.init).toBeCalled();
  });
  test('controller should be subscribed for model', () => {
    testPresenter.model.subscribe = jest.fn();
    testPresenter.init();
    expect(testPresenter.model.subscribe).toHaveBeenCalledWith(testPresenter);
  });
  test('controller should be subscribed for view', () => {
    testPresenter.view.subscribe = jest.fn();
    testPresenter.init();
    expect(testPresenter.view.subscribe).toHaveBeenCalledWith(testPresenter);
  });
});

describe('update model function', () => {
  test('updateModel function should be defined', () => {
    expect(testPresenter.updateModel).toBeDefined();
    testPresenter.model.update = jest.fn();
    testPresenter.updateModel('');
  });
  test('update function should be called for model with arguments 10 and default', () => {
    testPresenter.model.update = jest.fn();
    testPresenter.updateModel(10, 'default');
    expect(testPresenter.model.update).toHaveBeenCalledWith(10, 'default');
  });
  test('update function should be called for model with arguments -1001 and right', () => {
    testPresenter.model.update = jest.fn();
    testPresenter.updateModel(-1001, 'right');
    expect(testPresenter.model.update).toHaveBeenCalledWith(-1001, 'right');
  });
});
describe('update view function', () => {
  test('updateView function should be defined', () => {
    expect(testPresenter.updateView).toBeDefined();
  });
  test('default (left or single) value for view should be update with new value 42', () => {
    testPresenter.model.defaultValue = 42;
    testPresenter.updateView();
    expect(testPresenter.view.options.defaultValue).toBe(42);
  });
  test('default (left or single) value for view should be update with new value 0', () => {
    testPresenter.model.defaultValue = 0;
    testPresenter.updateView();
    expect(testPresenter.view.options.defaultValue).toBe(0);
  });
  test('right value for view should be update with new value 0', () => {
    testPresenter.model.rightValue = 0;
    testPresenter.updateView();
    expect(testPresenter.view.options.rightValue).toBe(0);
  });
  test('right value for view should be update with new value -100', () => {
    testPresenter.model.rightValue = -100;
    testPresenter.updateView();
    expect(testPresenter.view.options.rightValue).toBe(-100);
  });
  test('view function setInput should be called', () => {
    testPresenter.view.setInput = jest.fn();
    testPresenter.updateView();
    expect(testPresenter.view.setInput).toBeCalled();
  });
});
