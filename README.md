## Demo page:
https://kseniaikud.github.io/Range-slider/

### Installation
```js
    npm install
```
#### Launch in dev mode
```js
    npm run start
```
#### Launch in prod mode
```js
    npm run build
```
#### Launch tests
```js
    npm run test
```
## How to add the plugin to your project:
1. Place the downloaded files in the required folder.
2. Download and install the jquery library
3. Import files (***.js*** and ***.css***) into your project
```js
    import '../docs/rangeSlider.js'
    import '../docs/rangeSlider.css'
```

4. Ad the slider to the desired html tag and set the options
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
Slider settings description
| Option | Default value | Type | Description |
|:---------:|:---------:|:---------:|:---------:|
| min | 0 | number | Set minimum |
| max | 100 | number | Set maximum |
| initialValue | 50 | number | Set the initial position for the slider with a single value |
| leftValue | 50 | number | Set the initial position for the left slider in a range |
| rightValue | 70 | number | Set the initial position for the right slider in a range |
| isRange | false | boolean | Choose the slider type, ***false*** for a single value, ***true*** for a range |
| rightProgressBar | false | boolean | Choose the position for the progress bar, ***false*** for the left side from slider, ***true*** for the right |
| overThumbElement | false | boolean | Choose ***true*** to display element above the slider |
| step | 1 | number | Set the scale step |
| isVertical | false | boolean | Select the slider orientation, ***false*** for horizontal, ***true*** for vertical |
| isScale | false | boolean | Choose ***true*** to display scale |


## Architecture

Plugin has MVP-like architecture with Passive View.

### Model (class Model)
Business logic and data

### View (class  View)

Contains the calculations necessary for display and also handles user interactions. It is divided into subtypes, each of which represents a slider component. The view interacts with the subtypes, but the subtypes do not interact with each other or with the main view

### Presenter (class Presenter)
Subscribes to the model and view, responds to changes, and updates them. Passes necessary data from the model to the view and vice versa

#### Slider
Creates the slider itself and sets the values for the handles.

#### ProgressBar
Draws the bar based on the selected option: from the value of the first handle to the value of the second handle for a range, from the minimum value to the handle's value for a single value, or from the handle's value to the maximum value when rightProgressBar: true is selected. Does not interact with other subtypes or the main view.

#### Thumb
Creates the handle(s) on the track, as well as an element above the handle that displays the value and follows the mouse.

#### Scale
Creates the value scale within which the handle can move. Calculates the position of the scale.

![UML](/uml/diagram.svg)
