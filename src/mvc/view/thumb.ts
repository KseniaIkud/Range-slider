class Thumb {
  thumbDefault!: HTMLDivElement;

  thumbRight!: HTMLDivElement;

  thumbOutput!: HTMLDivElement;

  thumbOutputRight?: HTMLDivElement;

  init(parent: HTMLDivElement,
    isDouble: boolean,
    toggleElement: boolean,
    defaultValue: number,
    rightValue?: number) {
    this.createThumb(parent, isDouble);
    if (toggleElement) {
      this.createThumbElement(isDouble, this.thumbDefault, this.thumbRight);
      this.setThumbValue(isDouble, defaultValue, rightValue);
    }
  }

  createThumb(parent: HTMLDivElement, isDouble: boolean) {
    this.thumbDefault = document.createElement('div');
    this.thumbDefault.className = 'range-slider__thumb';
    parent.append(this.thumbDefault);
    if (isDouble) {
      this.thumbDefault.classList.add('range-slider__thumb_left');
      this.thumbRight = document.createElement('div');
      this.thumbRight.classList.add('range-slider__thumb');
      this.thumbRight.classList.add('range-slider__thumb_right');
      parent.append(this.thumbRight);
    }
  }

  createThumbElement(isDouble: boolean, parent: HTMLDivElement, rightParent?: HTMLDivElement) {
    this.thumbOutput = document.createElement('p');
    this.thumbOutput.className = 'range-slider__value-thumb';
    parent.append(this.thumbOutput);
    if (isDouble) {
      this.thumbOutputRight = document.createElement('p');
      this.thumbOutputRight.classList.add('range-slider__value-thumb');
      rightParent!.append(this.thumbOutputRight);
    }
  }

  setThumbValue(isDouble: boolean, value: number, rightValue?: number) {
    if (this.thumbOutput) {
      this.thumbOutput.textContent = String(value);
      if (isDouble) {
        this.thumbOutputRight!.textContent = String(rightValue);
      }
    }
  }

  placeThumb(isDouble: boolean, percent: number, percentRight?: number): void {
    this.thumbDefault.style.left = `${percent}%`;
    if (isDouble) {
      this.thumbRight.style.right = `${100 - (percentRight || 0)}%`;
    }
  }

  rotateElements() {
    const className = 'range-slider__value-thumb_vertical';
    this.thumbOutput.classList.add(className);
    if (this.thumbOutputRight) {
      this.thumbOutputRight.classList.add(className);
    }
  }
}

export default Thumb;
