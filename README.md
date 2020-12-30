Demo page:
https://kseniaikud.github.io/Range-slider/

# How to add the plugin to your page:
Download the project
Put downloaded files into corresponding folders
Load jquery library
Import files (.js and .css) to your script
```js
    import '../docs/rangeSlider.js'
    import '../docs/rangeSlider.css'
```

Add range slider to the desired html tag and set options
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


