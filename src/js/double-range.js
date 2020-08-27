jQuery(function() {

   //isRange = true

   var inputLeft = document.getElementById("input-left");
   var inputRight = document.getElementById("input-right");

   var thumbLeft = document.querySelector(".js-range-slider__thumb-left");
   var thumbRight = document.querySelector(".js-range-slider__thumb-right");
   var range = document.querySelector(".js-range-slider__progress-bar");
   
 
   function calcPercentBar(value, min, max) {
      let percent = ((value - min) / (max - min)) * 100;
      return percent;
   }

   function calcLeftValue(left, right) {
      let result = Math.min(parseInt(left), parseInt(right) - 1);
      return result;
   }

   function setLeftValue() {
      let min = parseInt(inputLeft.min),
          max = parseInt(inputLeft.max);

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
      let min = parseInt(inputRight.min),
          max = parseInt(inputRight.max);

      inputRight.value = calcRightValue(inputLeft.value, inputRight.value);
      
      let percent = calcPercentBar(inputRight.value, min, max);
      
      thumbRight.style.right = (100-percent) + "%";
      range.style.right = (100-percent) + "%";
   }

   setRightValue();

   inputLeft.addEventListener("input", setLeftValue);
   inputRight.addEventListener("input", setRightValue);


   //isOutput = true

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

   function showLeftValue() {
      var _this = outputLeft,
         min = parseInt(inputLeft.min),
         max = parseInt(inputLeft.max);
      var percent = ((_this.value - min)/ (max-min)) * 100;
   
      thumbLeft.style.left = percent + "%";
      range.style.left = percent + "%";
   
      inputLeft.value = _this.value;
      outputLeft.max = parseInt(inputRight.value) - 1;
   }
   
   function showRightValue() {
      var _this = outputRight,
         min = parseInt(inputRight.min),
         max = parseInt(inputRight.max);
      var percent = ((_this.value - min)/ (max-min)) * 100;
   
      thumbRight.style.right = (100 - percent) + "%";
      range.style.right = (100 - percent) + "%";
   
      inputRight.value = _this.value;
      outputRight.min = parseInt(inputLeft.value) + 1;
   }
   
   inputLeft.addEventListener("input", getLeftValue);
   inputRight.addEventListener("input", getRightValue);
   
   outputLeft.addEventListener("input", showLeftValue);
   outputRight.addEventListener("input", showRightValue);
   
});
