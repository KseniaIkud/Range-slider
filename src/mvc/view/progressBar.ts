class ProgressBar {
  bar!: HTMLDivElement;

  createProgressBar(parent: HTMLDivElement): void {
    this.bar = document.createElement('div');
    this.bar.classList.add('range-slider__progress-bar');
    parent.append(this.bar);
  }

  calcPercent(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
  }

  setDefault(isDouble: boolean, percent: number, percentRight?: number): void {
    if (isDouble) {
      this.bar.style.left = `${percent}%`;
      this.bar.style.right = `${100 - (percentRight || 0)}%`;
    } else {
      this.bar.style.right = `${100 - percent}%`;
      this.bar.style.left = String(0);
    }
  }

  setRight(percent: number): void {
    this.bar.style.left = `${percent}%`;
    this.bar.style.right = `${String(-1)}px`;
  }
}

export default ProgressBar;
