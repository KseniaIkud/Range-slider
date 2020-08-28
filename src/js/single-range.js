jQuery(function() {

    let rangeSlider = document.querySelector(".range-slider");

    let defaultRange = {
        isRange: true,
        isOutData: true,
        isProgressBarRight: true, // only for single slider
        min: 0,
        max: 300,
        value: 50,
        valueLeft: 30, // only for double slider
        valueRight: 50, // only for double slider
        step: 1,
    }
    
    
    // common html structure

    let rangeSliderForm = document.createElement("div");
    rangeSliderForm.className = "range-slider__form";
    rangeSlider.append(rangeSliderForm);

    let rangeSliderStyle = document.createElement("div");
    rangeSliderStyle.className = "range-slider__style";
    rangeSlider.append(rangeSliderStyle);

    let rangeSliderTrack = document.createElement("div");
    rangeSliderTrack.className = "range-slider__track"
    rangeSliderStyle.append(rangeSliderTrack);

    let rangeSliderProgressBar = document.createElement("div");
    rangeSliderProgressBar.className = "range-slider__progress-bar js-range-slider__progress-bar"
    rangeSliderStyle.append(rangeSliderProgressBar);



     // common variables

    let range = document.querySelector(".js-range-slider__progress-bar");
    
    let inputSingle;
    let inputLeft;
    let inputRight;

    let thumbSingle;
    let thumbLeft;
    let thumbRight;

    let min = defaultRange.min;
    let max = defaultRange.max;

    // common functions

    function calcPercentBar(value, min, max) {
        let percent = ((value - min) / (max - min)) * 100;
        return percent;
    }
     


   // Single range slider

    if(!defaultRange.isRange) {
        
        //html structure - one input and one thumb
        let rangeSliderInput = document.createElement("input");
        rangeSliderInput.type = "range";
        rangeSliderInput.classList = "range-slider__input js-range-slider__input"
        rangeSliderForm.append(rangeSliderInput);

        inputSingle = document.querySelector(".js-range-slider__input");

        let rangeSliderThumb = document.createElement("div");
        rangeSliderThumb.className = "range-slider__thumb js-range-slider__thumb"
        rangeSliderStyle.append(rangeSliderThumb);
 
        thumbSingle = document.querySelector(".js-range-slider__thumb");

        // value, min, max settings

        inputSingle.value = defaultRange.value;
        inputSingle.min = min;
        inputSingle.max = max;

        //set value

        function setValue() {
            let percent = calcPercentBar(inputSingle.value, min, max);
            thumbSingle.style.left = percent + "%";
        }

        setValue();
        inputSingle.addEventListener("input", setValue);

        // progress bar position

        function setLeftProgressBar() {
            let percent = calcPercentBar(inputSingle.value, min, max);
            range.style.right = (100 - percent) + "%";
            range.style.left = 0;
         }
         
     
         function setRightProgressBar() {
             let percent = calcPercentBar(inputSingle.value, min, max);
             range.style.left = percent + "%";
             range.style.right = 0;
         }
     
     // Progress Bar - Right position (only for single slider)
     
        if (defaultRange.isProgressBarRight) {
            setRightProgressBar();
            inputSingle.addEventListener("input", setRightProgressBar);
        } else {
           setLeftProgressBar(); 
           inputSingle.addEventListener("input", setLeftProgressBar);
        }

    } else {
        // Double range slider

        //html strucutre - two inputs, two thumbs

        let rangeSliderInputLeft = document.createElement("input");
        rangeSliderInputLeft.type = "range";
        rangeSliderInputLeft.classList = "js-range-slider__input range-slider__input_left js-range-slider__input_left";
        rangeSliderForm.append(rangeSliderInputLeft);

        let rangeSliderInputRight = document.createElement("input");
        rangeSliderInputRight.type = "range";
        rangeSliderInputRight.classList = "js-range-slider__input range-slider__input_right js-range-slider__input_right";
        rangeSliderForm.append(rangeSliderInputRight);

        inputLeft = document.querySelector(".js-range-slider__input_left");
        inputRight = document.querySelector(".js-range-slider__input_right");

        let rangeSliderThumbLeft = document.createElement("div");
        rangeSliderThumbLeft.className = "range-slider__thumb range-slider__thumb_left js-range-slider__thumb_left"
        rangeSliderStyle.append(rangeSliderThumbLeft);

        let rangeSliderThumbRight = document.createElement("div");
        rangeSliderThumbRight.className = "range-slider__thumb range-slider__thumb_right js-range-slider__thumb_right"
        rangeSliderStyle.append(rangeSliderThumbRight);
 
        thumbRight = document.querySelector(".js-range-slider__thumb_right");
        thumbLeft = document.querySelector(".js-range-slider__thumb_left");

        // min, max, value settings
        
        inputLeft.value = defaultRange.valueLeft;
        inputRight.value = defaultRange.valueRight;
        
        inputLeft.min = min;
        inputRight.min = min;

        inputLeft.max = max;
        inputRight.max = max;
        
        // set value      

        function calcLeftValue(left, right) {
            let result = Math.min(parseInt(left), parseInt(right) - 1);
            return result;
        }
      
        function setLeftValue() {

           inputLeft.value = calcLeftValue(inputLeft.value, inputRight.value);
           
           let percent = calcPercentBar(inputLeft.value, min, max);
        
           thumbLeft.style.left = percent + "%";
           range.style.left = percent + "%";
        }
    
        setLeftValue();
    
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

        // show out data in double slider

        if (defaultRange.isOutData) {

            rangeSliderOutput = document.createElement("div");
            rangeSliderOutput.className = "output-data";
            rangeSlider.append(rangeSliderOutput);
            
            rangeSliderOutputLeft = document.createElement("input");
            rangeSliderOutputLeft.type = "number";
            rangeSliderOutputLeft.classList = "output-data_left js-output-data_left";
    
            rangeSliderOutputRight = document.createElement("input");
            rangeSliderOutputRight.type = "number";
            rangeSliderOutputRight.classList = "output-data_right js-output-data_right";

            rangeSliderOutput.append(rangeSliderOutputLeft);
            rangeSliderOutput.append(rangeSliderOutputRight);
    
            var outputLeft = document.querySelector(".js-output-data_left");
            var outputRight = document.querySelector(".js-output-data_right");
            
            function getLeftValue() {
               outputLeft.value = inputLeft.value;
            }
            function getRightValue() {
               outputRight.value = inputRight.value;
            }
            
            getLeftValue();
            getRightValue();

            outputLeft.min = defaultRange.min;
            outputRight.min = defaultRange.min;

            outputLeft.max = defaultRange.max;
            outputRight.max = defaultRange.max;


            function showLeftValue() {
               var percent = ((outputLeft.value - min)/ (max-min)) * 100;
            
               thumbLeft.style.left = percent + "%";
               range.style.left = percent + "%";
            
               inputLeft.value = outputLeft.value;
               outputLeft.max = parseInt(inputRight.value) - 1;
            }
            
            function showRightValue() {
               var percent = ((outputRight.value - min)/ (max-min)) * 100;
            
               thumbRight.style.right = (100 - percent) + "%";
               range.style.right = (100 - percent) + "%";
            
               inputRight.value = outputRight.value;
               outputRight.min = parseInt(inputLeft.value) + 1;
            }
            
            inputLeft.addEventListener("input", getLeftValue);
            inputRight.addEventListener("input", getRightValue);
            
            outputLeft.addEventListener("input", function() {
                if ((+outputLeft.value >= min) && (+outputLeft.value < +inputRight.value)) {
                    showLeftValue()
                }
            });
            outputRight.addEventListener("input", function () {
                if ((+outputRight.value > +inputLeft.value) && (+outputRight.value <= max)) {
                    showRightValue();
                }
            });
        }
    }
    
})

