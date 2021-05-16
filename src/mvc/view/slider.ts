class Slider {
  form!: HTMLDivElement;

  defaultInput!: HTMLInputElement;

  rightInput!: HTMLInputElement;

  init(parent: HTMLDivElement, isDouble: boolean, min: number, max: number): void {
    this.createForm(parent);
    this.createInput(isDouble);
    this.setMin(isDouble, min);
    this.setMax(isDouble, max);
  }

  createForm(parent: HTMLDivElement): void {
    this.form = <HTMLDivElement>(document.createElement('div'));
    this.form.classList.add('range-slider__form');
    parent.append(this.form);
  }

  createInput(isDouble: boolean): void {
    if (isDouble) {
      this.defaultInput = document.createElement('input');
      this.defaultInput.type = 'range';
      this.defaultInput.classList.add('range-slider__input');
      this.defaultInput.classList.add('range-slider__input_left');
      this.form.append(this.defaultInput);

      this.rightInput = document.createElement('input');
      this.rightInput.type = 'range';
      this.rightInput.classList.add('range-slider__input');
      this.rightInput.classList.add('range-slider__input_right');
      this.form.append(this.rightInput);
    } else {
      this.defaultInput = document.createElement('input');
      this.defaultInput.type = 'range';
      this.defaultInput.classList.add('range-slider__input');
      this.form.append(this.defaultInput);
    }
  }

  setInputValue(isDouble: boolean, value: number, rightValue?: number): void {
    this.defaultInput.value = String(value);
    if (isDouble) {
      this.rightInput.value = String(rightValue);
    }
  }

  setMin(isDouble: boolean, min: number): void {
    this.defaultInput.min = String(min);
    if (isDouble) {
      this.rightInput.min = String(min);
    }
  }

  setMax(isDouble: boolean, max: number = 100): void {
    this.defaultInput.max = String(max);
    if (isDouble) {
      this.rightInput.max = String(max);
    }
  }
}

export { Slider };
