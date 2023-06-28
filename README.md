# MultiPara.js

Version 0.2.0

# Demo

[Example in Codepen](https://codepen.io/louisho5/pen/BaGpbrm)

## Summary

Apply multiple layered parallax effects in single line of code. 

* <strong>Multiple layers support</strong><br>
* <strong>Both vertical and horizontal support</strong><br>
* <strong>Super lightweight, only 1KB</strong><br>
* <strong>Minimal and ease to use</strong><br>

## Author

@louisho5

## Installation

To include the plugin in your code:

```js script

<script src="multipara.js"></script>

```

or


```js script

<script src="multipara.min.js"></script>
	
```

## Requirements/Browsers

Works in Edge 12+, Chrome 29+, Safari 9+, Firefox 28+.

## Code Example

**index.html**:

```html

<div class="multipara">
    <div class="layer" data-multipara-y="0" data-multipara-x="-0.2">A</div>
    <div class="layer" data-multipara-y="0.3">B</div>
</div>

<script src="multipara.min.js"></script>
<script>
    new MultiPara({
        container: ".multipara",
        layer: ".layer"
    });
</script>

```

## Parameters

There are 3 optional parameters in this plugin:

```js script

new MultiPara({
    container: ".multipara", // The outside container
    layer: ".layer", // The inside layers
    stoppable: false // Default false, set true is you want to stop the animation at the end
});		

```

## Reminder

This plugin will override the original value of CSS "transform", avoid to style the layers with "transform".

## License

This plugin is under the MIT license.
