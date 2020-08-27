jQuery(function() {

    let defaultRange = {
        isRange: false,
        isOutData: false,
        isProgressBarRight: false,
        min: 0,
        max: 200,
        value: 100,
        step: 1,
    }
    
    let rangeSlider = document.querySelector(".range-slider");
    

    //html structure

    let rangeSliderForm = document.createElement("div");
    rangeSliderForm.className = "range-slider__form";
    rangeSlider.append(rangeSliderForm);

    let rangeSliderInput = document.createElement("input");
    rangeSliderInput.type = "range";
    rangeSliderInput.classList = "range-slider__input js-range-slider__input"
    rangeSliderForm.append(rangeSliderInput);

    let rangeSliderStyle = document.createElement("div");
    rangeSliderStyle.className = "range-slider__style";
    rangeSlider.append(rangeSliderStyle);

    let rangeSliderTrack = document.createElement("div");
    rangeSliderTrack.className = "range-slider__track"
    rangeSliderStyle.append(rangeSliderTrack);

    let rangeSliderProgressBar = document.createElement("div");
    rangeSliderProgressBar.className = "range-slider__progress-bar js-range-slider__progress-bar"
    rangeSliderStyle.append(rangeSliderProgressBar);

    let rangeSliderThumb = document.createElement("div");
    rangeSliderThumb.className = "range-slider__thumb js-range-slider__thumb"
    rangeSliderStyle.append(rangeSliderThumb);

    // end of html structure


    let inputSingle = document.querySelector(".js-range-slider__input");
    let thumb = document.querySelector(".js-range-slider__thumb");
    let range = document.querySelector(".js-range-slider__progress-bar");

    if (defaultRange.value) {
        inputSingle.value = defaultRange.value;
    }

    let min;
    if (inputSingle.min) {
        min = inputSingle.min;
    } else {
        min = defaultRange.min;
        inputSingle.min = min;
    }
    
    let max 
    if (inputSingle.max) {
        max = inputSingle.max;
    } else {
        max = defaultRange.max;
        inputSingle.max = max;
    }

    

    function calcPercentBar(value, min, max) {
        let percent = ((value - min) / (max - min)) * 100;
        return percent;
    }
     
    function setValue() {
       let percent = calcPercentBar(inputSingle.value, min, max);
       thumb.style.left = percent + "%";
       
    }
    
    setValue();
    inputSingle.addEventListener("input", setValue);
    
    function setLeftProgressBar() {
       let percent = calcPercentBar(inputSingle.value, min, max);
       range.style.right = (100 - percent) + "%";
       range.style.left = 0;
    }
    setLeftProgressBar();

    function setRightProgressBar() {
        let percent = calcPercentBar(inputSingle.value, min, max);
        range.style.left = percent + "%";
        range.style.right = 0;
    }

// Progress Bar - Right position

    if (defaultRange.isProgressBarRight && !defaultRange.isRange) {
        setRightProgressBar();
        inputSingle.addEventListener("input", setRightProgressBar);
    } else if (!defaultRange.isRange) {
        inputSingle.addEventListener("input", setLeftProgressBar);
    }

// Range - double

    if (defaultRange.isRange) {
    

        let rangeSliderInputRight = document.createElement("input");
        rangeSliderInputRight.type = "range";
        rangeSliderInputRight.classList = "js-range-slider__input range-slider__input_right js-range-slider__input_right";
        rangeSliderForm.append(rangeSliderInputRight);

        

        let rangeSliderThumbRight = document.createElement("div");
        rangeSliderThumbRight.className = "range-slider__thumb range-slider__thumb_right js-range-slider__thumb_right"
        rangeSliderStyle.append(rangeSliderThumbRight);

        
        let inputRight = document.querySelector(".js-range-slider__input_right");
        inputRight.value = 100;
        let thumbLeft = thumb;
        let thumbRight = document.querySelector(".js-range-slider__thumb_right")

        function calcLeftValue(left, right) {
            let result = Math.min(parseInt(left), parseInt(right) - 1);
            return result;
        };

        function setLeftValue() {
            inputLeft.value = calcLeftValue(inputLeft.value, inputRight.value);
            
            let percent = calcPercentBar(inputLeft.value, min, max);
         
            thumbLeft.style.left = percent + "%";
            range.style.left = percent + "%";
        };
        //setLeftValue();

        function calcRightValue(left, right) {
            let result = Math.max(parseInt(right), parseInt(left) + 1);
            return result;
        }
         
        function setRightValue() {
            inputRight.value = calcRightValue(inputLeft.value, inputRight.value);
            
            let percent = calcPercentBar(inputRight.value, min, max);
            thumbRight.style.right = (100-percent) + "%";
            range.style.right = (100-percent) + "%";
        }
    
        setRightValue();
    
        inputLeft.addEventListener("input", setLeftValue);
        inputRight.addEventListener("input", setRightValue);
      



    }

   
})



