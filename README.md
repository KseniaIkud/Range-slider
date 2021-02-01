## Demo page:
https://kseniaikud.github.io/Range-slider/

## How to add the plugin to your page:
1. Download the project from this [link](https://github.com/KseniaIkud/Range-slider/archive/master.zip)
2. Unzip the file 
3. Put downloaded files into corresponding folders 
4. Load jquery library 
5. Import files (***.js*** and ***.css***) to your script
```js
    import '../docs/rangeSlider.js'
    import '../docs/rangeSlider.css'
```

6. Add range slider to the desired html tag and set options
```html
    <div id="id1"></div>
```
```js
    $('#id1').rangeSlider({
        min: 0,
        max: 200,
        range: true
    })
```

## API
Description of range slider settings
| Option | Default | Type | Description |
|:---------:|:---------:|:---------:|:---------:|
| min | 0 | number | Set slider minimum |
| max | 100 | number | Set slider maximum |
| initialValue | 50 | number | Set start position for the single thumb |
| leftValue | 50 | number | Set start position for the left thumb |
| rightValue | 70 | number | Set start position for the right thumb |
| isRange | false | boolean | Choose slider type, ***false*** for one thumb, ***true*** for two |
| rightProgressBar | false | boolean | Choose progress bar position, ***false*** on the left of the single thumb, ***true*** on the right |
| overThumbElement | false | boolean | Choose ***true*** to show an element over the thumb |
| step | 1 | number | Set sliders step |
| isVertical | false | boolean | Choose slider positioning, ***false*** for horizontal, ***true*** for vertical |
| isScale | false | boolean | Choose ***true*** to show a scale near to the slider |
