class Track {
  style!: HTMLDivElement;

  track!: HTMLDivElement;

  init(parent: HTMLDivElement) {
    this.createStyles(parent);
    this.createTrack();
  }

  createStyles(parent: HTMLDivElement): void {
    this.style = document.createElement('div');
    this.style.classList.add('range-slider__style');
    parent.append(this.style);
  }

  createTrack(): void {
    this.track = document.createElement('div');
    this.track.classList.add('range-slider__track');
    this.style.append(this.track);
  }
}

export default Track;
