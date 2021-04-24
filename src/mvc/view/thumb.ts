class Thumb {

    thumbDefault!: HTMLDivElement
    thumbRight!: HTMLDivElement
    thumbOutput!: HTMLDivElement
    thumbOutputRight?: HTMLDivElement

    init (parent: HTMLDivElement, 
        isDouble: boolean, 
        toggleElement: boolean, 
        defaultValue: number, 
        rightValue?: number) {

        this.createThumb(parent, isDouble)
        if (toggleElement) {
            this.createThumbElement(isDouble, this.thumbDefault, this.thumbRight)
            this.setThumbValue(isDouble, defaultValue, rightValue)
        }
    }
    createThumb(parent: HTMLDivElement, isDouble: boolean) {
        if(isDouble) {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.classList.add('range-slider__thumb')
            this.thumbDefault.classList.add('range-slider__thumb_left')
            parent.append(this.thumbDefault)

            this.thumbRight = document.createElement('div')
            this.thumbRight.classList.add('range-slider__thumb')
            this.thumbRight.classList.add('range-slider__thumb_right')
            parent.append(this.thumbRight)

        } else {
            this.thumbDefault = document.createElement('div')
            this.thumbDefault.className = 'range-slider__thumb'
            parent.append(this.thumbDefault)

            
        }
    }
    createThumbElement(isDouble: boolean, parent: HTMLDivElement, rightParent?: HTMLDivElement) {
        if (isDouble) {
            this.thumbOutputRight = document.createElement('div')
            this.thumbOutputRight.classList.add('range-slider__value-thumb')
            rightParent!.append(this.thumbOutputRight)
        }
        this.thumbOutput = document.createElement('div')
        this.thumbOutput.className = 'range-slider__value-thumb'
        parent.append(this.thumbOutput)
    }
    setThumbValue(isDouble: boolean, value: number, rightValue?: number) {
        if (this.thumbOutput) {
            this.thumbOutput.textContent = String(value)
            if (isDouble) {
                this.thumbOutputRight!.innerText = String(rightValue)
            }
        }   
    }
    
    placeThumb(isDouble: boolean, percent: number, percentRight?: number): void {
        this.thumbDefault.style.left = percent + '%'
        if (isDouble) {
            this.thumbRight.style.right = (100 - (percentRight || 0)) + '%'
        }
    }
}

export {Thumb}