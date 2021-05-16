/* eslint-disable default-case */
interface IData {
  min: number
  max: number
  defaultValue: number
  rightValue: number
  isRange: boolean
  rightProgressBar: boolean
  overThumbElement: boolean
  isVertical: boolean
  step?: number
  isScale: boolean
  scaleValues: Array<number>
}
interface IObserverModel {
  updateView(): void
}
class Model {
  min: number;

  max: number;

  defaultValue: number;

  rightValue: number;

  isRange: boolean;

  rightProgressBar: boolean;

  overThumbElement: boolean;

  dataForView: IData;

  step: number;

  isVertical: boolean;

  isScale: boolean;

  scaleValues: number[];

  observers: IObserverModel[];

  constructor(options: IData) {
    this.min = Number(options.min || 0);
    this.max = Number(options.max === 0 ? 0 : (options.max || 100));
    this.defaultValue = Number(options.defaultValue === 0 ? 0 : (options.defaultValue || 50));
    this.rightValue = Number(options.rightValue === 0 ? 0 : (options.rightValue || 70));
    this.step = Number(options.step || 1);
    this.isRange = options.isRange || false;
    this.rightProgressBar = options.rightProgressBar || false;
    this.overThumbElement = options.overThumbElement || false;
    this.isVertical = options.isVertical || false;
    this.isScale = options.isScale || false;
    this.scaleValues = [];
    this.observers = [];
    this.dataForView = {
      min: this.min,
      max: this.max,
      defaultValue: this.defaultValue,
      rightValue: this.rightValue,
      isRange: this.isRange,
      rightProgressBar: this.rightProgressBar,
      overThumbElement: this.overThumbElement,
      isVertical: this.isVertical,
      isScale: this.isScale,
      scaleValues: this.getScale(),
    };
  }

  subscribe(observer: IObserverModel) {
    this.observers.push(observer);
  }

  init = () => {
    this.getScale();
  };

  update(newValue: number, option: string) {
    if (this.isRange) {
      this.limitToggle(newValue, option);
    } else {
      this.limitStep(newValue, option);
    }
  }

  getScale(min: number = this.min,
    max: number = this.max,
    step: number = this.step,
    isScale: boolean = this.isScale): number[] {
    if (step <= 0) {
      step = 1;
    }
    const scaleValues: number[] = [];
    if (!isScale) {
      return scaleValues;
    }
    const possibleValues = (max - min) / step;

    if (possibleValues <= 11) {
      for (let i: number = min; i <= max; i += step) {
        scaleValues.push(i);
      }
    } else {
      const scaleStep = Math.round(possibleValues / 10);
      let currentValue = min;
      for (let i: number = 0; i < possibleValues; i += scaleStep) {
        if (currentValue <= max) {
          scaleValues.push(currentValue);
        }
        currentValue += step * scaleStep;
      }
      if (currentValue <= max) {
        scaleValues.push(currentValue);
      }
    }
    if (scaleValues[scaleValues.length - 1] !== max) {
      scaleValues.pop();
      scaleValues.push(max);
    }

    return scaleValues;
  }

  limitToggle(newValue: number, option: string) {
    switch (option) {
      case ('default'):
        if (newValue < this.rightValue) {
          this.limitStep(newValue, option);
        } else {
          this.updateObservers();
        }
        break;
      case ('right'):
        if (newValue > this.defaultValue) {
          this.limitStep(newValue, 'right');
        } else {
          this.updateObservers();
        }
    }
  }

  limitStep(newValue: number, option: string) {
    switch (option) {
      case ('default'):
        if (newValue % this.step === 0) {
          this.setDefaultValue(newValue);
        } else {
          const value: number = this.calcNearest(newValue);
          this.setDefaultValue(value);
          this.updateObservers();
        }
        break;
      case ('right'):
        if (newValue % this.step === 0) {
          this.setRightValue(newValue);
        } else {
          const value: number = this.calcNearest(newValue);
          this.setRightValue(value);
          this.updateObservers();
        }
        break;
    }
  }

  setDefaultValue(value: number) {
    this.defaultValue = value;
  }

  setRightValue(value: number) {
    this.rightValue = value;
  }

  updateObservers() {
    this.observers.forEach((observer) => {
      observer.updateView();
    });
  }

  calcNearest(newValue: number, step: number = this.step): number {
    const roundToMin = newValue - (newValue % step);
    if ((newValue % step) > (step / 2)) {
      return step + roundToMin;
    }
    return roundToMin;
  }
}

export { Model };
