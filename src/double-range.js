var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var outputLeft = document.getElementById("output-left");
var outputRight = document.getElementById("output-right");

outputLeft.value = inputLeft.value;
outputRight.value = inputRight.value;

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");



function setLeftValue() {
   var _this = inputLeft,
      min = parseInt(_this.min),
      max = parseInt(_this.max);
   _this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);
   var percent = ((_this.value - min) / (max-min)) * 100;

   thumbLeft.style.left = percent + "%";
   range.style.left = percent + "%";
   outputLeft.value = _this.value;
}

function setRightValue() {
   var _this = inputRight,
      min = parseInt(_this.min),
      max = parseInt(_this.max);
   _this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
   var percent = ((_this.value - min) / (max-min)) * 100;
   
   thumbRight.style.right = (100-percent) + "%";
   range.style.right = (100-percent) + "%";
   outputRight.value = _this.value;
}

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);