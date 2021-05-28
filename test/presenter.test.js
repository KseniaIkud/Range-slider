import Presenter from '../src/mvc/presenter';
import Model from '../src/mvc/model';
import View from '../src/mvc/view/view';
import Slider from '../src/mvc/view/slider';
import ProgressBar from '../src/mvc/view/progressBar';
import Thumb from '../src/mvc/view/thumb';
import Scale from '../src/mvc/view/scale';

describe('test Presenter', () => {
  let presenter;
  beforeEach(() => {
    presenter = new Presenter(
      new Model({}),
      new View(document.body, new Slider(), new ProgressBar(), new Thumb(), new Scale()),
    );
  });
  test('Model is initialized', () => {
    jest.spyOn(presenter.model, 'init');
    presenter.init();
    expect(presenter.model.init).toHaveBeenCalled();
  });
  test('View is initialized', () => {
    jest.spyOn(presenter.view, 'init');
    presenter.init();
    expect(presenter.view.init).toHaveBeenCalled();
  });
  test('presenter subscribed to Model', () => {
    jest.spyOn(presenter.model, 'subscribe');
    presenter.init();
    expect(presenter.model.subscribe).toHaveBeenCalledWith(presenter);
  });
  test('presenter subscribed to View', () => {
    jest.spyOn(presenter.view, 'subscribe');
    presenter.init();
    expect(presenter.view.subscribe).toHaveBeenCalledWith(presenter);
  });
  test('transfer data from model to view', () => {
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
    presenter.model.dataForView = data;
    presenter.init();
    expect(presenter.view.options).toEqual(data);
  });
  test('Model updates with correct arguments, default settings', () => {
    const updateArgs = {
      value: 10,
      isDefault: true,
    };
    const { value: correctValue, isDefault: correctOption } = updateArgs;
    jest.spyOn(presenter.model, 'update');
    presenter.updateModel(correctValue, correctOption);
    expect(presenter.model.update).toHaveBeenCalledWith(correctValue, correctOption);
  });
  test('Model updates with correct arguments, right thumb', () => {
    const updateArgs = {
      value: -1001,
      isDefault: false,
    };
    const { value: correctValue, isDefault: correctOption } = updateArgs;
    jest.spyOn(presenter.model, 'update');
    presenter.updateModel(correctValue, correctOption);
    expect(presenter.model.update).toHaveBeenCalledWith(correctValue, correctOption);
  });
  test('View updates with correct arguments, default (single or left) thumb', () => {
    const correctThumbValue = 42;
    presenter.model.defaultValue = correctThumbValue;
    presenter.updateView();
    expect(presenter.view.options.defaultValue).toBe(correctThumbValue);
  });
  test('View updates with correct arguments, right thumb', () => {
    const correctThumbValue = 0;
    presenter.model.rightValue = correctThumbValue;
    presenter.updateView();
    expect(presenter.view.options.rightValue).toBe(correctThumbValue);
  });
  test('setInput function called after View update', () => {
    jest.spyOn(presenter.view, 'setInput');
    presenter.updateView();
    expect(presenter.view.setInput).toHaveBeenCalled();
  });
});
