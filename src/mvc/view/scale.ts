class Scale {
  createScale = (scaleValues: Array<number>, width: number) => {
    const scaleElement = document.createElement('div');
    scaleElement.classList.add('range-slider__scale');

    const values = [];
    for (let i = 0; i < scaleValues.length; i += 1) {
      const divValue: HTMLDivElement = document.createElement('div');
      divValue.classList.add('range-slider__value');
      const value: number = scaleValues[i];
      divValue.textContent = String(`– ${value}`);
      scaleElement.append(divValue);
      const min = scaleValues[0];
      const max = scaleValues[scaleValues.length - 1];
      const percent: number = Math.round(((value - min) / (max - min)) * 100);
      divValue.style.left = `${percent}%`;

      values.push({ element: divValue, value });

      divValue.style.marginLeft = `-${this.placeScale(width)}%`;
    }
    return {
      scaleElement,
      values,
    };
  };

  placeScale = (containerWidth: number): number => (0.42 * containerWidth + 777.8) / containerWidth;
}

export { Scale };
