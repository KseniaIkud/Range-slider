import Slider from './slider';
import Track from './track';
import ProgressBar from './progressBar';
import Thumb from './thumb';
import Scale from './scale';

interface IDataView {
  min: number
  max: number
  defaultValue: number
  rightValue: number
  isRange: boolean
  rightProgressBar: boolean
  overThumbElement: boolean
  isVertical: boolean
  isScale: boolean
  scaleValues: number[]
}
interface IObserverView {
  updateModel(arg0: number, arg1: boolean): void
}

class View {
  parent: HTMLElement;

  wrapper!: HTMLDivElement;

  singleInput?: HTMLInputElement;

  leftInput?: HTMLInputElement;

  rightInput?: HTMLInputElement;

  form: Slider;

  styles: Track;

  progressBar: ProgressBar;

  thumb: Thumb;

  scale: Scale;

  options: IDataView;

  observers: IObserverView[];

  constructor(parent: HTMLElement, form: Slider, styles: Track, progressBar: ProgressBar,
    thumb: Thumb, scale: Scale) {
    this.parent = parent;
    this.form = form;
    this.styles = styles;
    this.progressBar = progressBar;
    this.thumb = thumb;
    this.scale = scale;

    // default data
    this.options = {
      min: 0,
      max: 100,
      defaultValue: 10,
      rightValue: 50,
      isRange: true,
      rightProgressBar: false,
      overThumbElement: true,
      isVertical: false,
      isScale: false,
      scaleValues: [],
    };

    this.observers = [];
  }

  subscribe(observer: IObserverView) {
    this.observers.push(observer);
  }

  init = () => {
    this.createWrapper();

    this.form.init(
      this.wrapper,
      this.options.isRange,
      this.options.min,
      this.options.max,
    );
    this.styles.init(this.wrapper);
    this.progressBar.createProgressBar(this.styles.style);
    this.thumb.init(
      this.styles.style,
      this.options.isRange,
      this.options.overThumbElement,
      this.options.defaultValue,
      this.options.rightValue,
    );

    this.setInput();
    this.eventInput();
    this.progressBar.bar.onmousedown = (elem) => {
      this.clickOnBar(elem);
    };
    this.styles.track.onmousedown = (elem) => {
      this.clickOnBar(elem);
    };
    this.eventHover();
    this.eventActive();

    if (this.options.isVertical) {
      this.wrapper.classList.add('range-slider_vertical');
      if (this.options.overThumbElement) {
        this.thumb.thumbOutput.classList.add('range-slider__value-thumb_vertical');
        this.thumb.thumbOutputRight?.classList.add('range-slider__value-thumb_vertical');
      }
    }
    if (this.options.isScale) {
      const scale = this.scale.createScale(this.options.scaleValues, this.wrapper.offsetWidth);
      const { scaleElement } = scale;
      const scaleValues = scale.values;

      this.wrapper.append(scaleElement);

      for (let i = 0; i < scaleValues.length; i += 1) {
        const onClick = () => {
          this.eventClick(scaleValues[i].value);
        };
        scaleValues[i].element.addEventListener('click', onClick);
      }
    }
  };

  createWrapper = () => {
    this.wrapper = document.createElement('div');
    this.wrapper.classList.add('range-slider');
    this.setAttributesValue();
    this.parent.append(this.wrapper);
  };

  setAttributesValue = () => {
    if (this.options.isRange) {
      this.wrapper.setAttribute('left-value', String(this.options.defaultValue));
      this.wrapper.setAttribute('right-value', String(this.options.rightValue));
    } else {
      this.wrapper.setAttribute('default-value', String(this.options.defaultValue));
    }
  };

  setInput = () => {
    this.form.setInputValue(this.options.isRange, this.options.defaultValue,
      this.options.rightValue);
    const placeDefault: number = this.progressBar.calcPercent(
      Number(this.form.defaultInput.value),
      Number(this.form.defaultInput.min),
      Number(this.form.defaultInput.max),
    );

    const placeRight: number = this.form.rightInput
      ? this.progressBar.calcPercent(
        Number(this.form.rightInput.value),
        Number(this.form.rightInput.min),
        Number(this.form.rightInput.max),
      )
      : NaN;

    this.progressBar.setDefault(this.options.isRange, placeDefault, placeRight);
    if (this.options.rightProgressBar && !this.options.isRange) {
      this.progressBar.setRight(placeDefault);
    }
    this.thumb.placeThumb(this.options.isRange, placeDefault, placeRight);
  };

  eventInput = () => {
    let isDefault;
    const onDefaultInput = () => {
      isDefault = true;
      this.update(Number(this.form.defaultInput.value), isDefault);
    };
    const onRightInput = () => {
      isDefault = false;
      this.update(Number(this.form.rightInput.value), isDefault);
    };
    this.form.defaultInput.addEventListener('input', onDefaultInput);
    if (this.options.isRange) {
      this.form.rightInput.addEventListener('input', onRightInput);
    }
  };

  getValueByCoords(element: MouseEvent, coords: DOMRect) {
    let length: number = coords.width;
    const range: number = this.options.max - this.options.min;
    let currentPosition: number = element.clientX - coords.left;
    if (this.options.isVertical) {
      currentPosition = element.clientY - coords.top;
      length = coords.height;
    }
    const percent: number = (currentPosition / length) * 100;
    const coordsValue: number = Math.round(this.options.min + ((range) * percent) / 100);
    return coordsValue;
  }

  clickOnBar(elem: MouseEvent) {
    const coords: DOMRect = this.styles.track.getBoundingClientRect();
    const newValue = this.getValueByCoords(elem, coords);
    this.eventClick(newValue);
  }

  update(newValue: number, isDefault: boolean) {
    if (isDefault) {
      this.options.defaultValue = newValue;
    } else {
      this.options.rightValue = newValue;
    }
    this.setInput();
    this.observers.forEach((observer) => {
      if (observer.updateModel) {
        observer.updateModel(newValue, isDefault);
      }
    });
    this.setAttributesValue();
    this.thumb.setThumbValue(this.options.isRange,
      this.options.defaultValue, this.options.rightValue);
  }

  eventClick(newValue: number) {
    const halfOfBar: number = (this.options.rightValue + this.options.defaultValue) / 2;
    const isRightBar: boolean = this.options.isRange && newValue > halfOfBar;
    if (isRightBar) {
      this.update(newValue, false);
    } else {
      this.update(newValue, true);
    }
  }

  eventHover = () => {
    const onMouseOver = (thumb: HTMLDivElement, thumbOut: HTMLDivElement | undefined) => {
      if (this.options.overThumbElement && thumbOut) {
        thumbOut.classList.add('range-slider__value-thumb_big');
      }
      thumb.classList.add('range-slider__thumb_hover');
    };
    const onDefaultMouseOver = () => {
      onMouseOver(this.thumb.thumbDefault, this.thumb.thumbOutput);
    };
    const onRightMouseOver = () => {
      onMouseOver(this.thumb.thumbRight, this.thumb.thumbOutputRight);
    };
    this.form.defaultInput.addEventListener('mouseover', onDefaultMouseOver);
    if (this.options.isRange) {
      this.form.rightInput.addEventListener('mouseover', onRightMouseOver);
    }
    const onMouseOut = (thumb: HTMLDivElement, thumbOut: HTMLDivElement | undefined) => {
      if (this.options.overThumbElement && thumbOut) {
        thumbOut.classList.remove('range-slider__value-thumb_big');
      }
      thumb.classList.remove('range-slider__thumb_hover');
    };
    const onDefaultMouseOut = () => {
      onMouseOut(this.thumb.thumbDefault, this.thumb.thumbOutput);
    };
    const onRightMouseOut = () => {
      onMouseOut(this.thumb.thumbRight, this.thumb.thumbOutputRight);
    };
    this.form.defaultInput.addEventListener('mouseout', onDefaultMouseOut);
    if (this.options.isRange) {
      this.form.rightInput.addEventListener('mouseout', onRightMouseOut);
    }
  };

  eventActive = () => {
    const onDefaultMouseDown = () => {
      this.thumb.thumbDefault.classList.add('range-slider__thumb_active');
    };
    const onDefaultMouseUp = () => {
      this.thumb.thumbDefault.classList.remove('range-slider__thumb_active');
    };
    const onRightMouseDown = () => {
      this.thumb.thumbRight.classList.add('range-slider__thumb_active');
    };
    const onRightMouseUp = () => {
      this.thumb.thumbRight.classList.remove('range-slider__thumb_active');
    };

    this.form.defaultInput.addEventListener('mousedown', onDefaultMouseDown);
    this.form.defaultInput.addEventListener('mouseup', onDefaultMouseUp);
    if (this.options.isRange) {
      this.form.rightInput.addEventListener('mousedown', onRightMouseDown);
      this.form.rightInput.addEventListener('mouseup', onRightMouseUp);
    }
  };
}

export default View;
