## DOM events

[DOMContentLoaded](https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event) — event fires when the HTML document has been completely parsed, and all deferred scripts (\<script defer src="…"> and \<script type="module">) have downloaded and executed. It doesn't wait for other things like images, subframes, and async scripts to finish loading.
```javascript
window.addEventListener('DOMContentLoaded', (event) => {})
window.onDOMContentLoaded = (event) => {}
```

[load](https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event) — event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
```javascript
window.addEventListener('load', (event) => {})
window.onload = (event) => {}
```

[beforeunload](https://developer.mozilla.org/en-US/docs/Web/API/Window/beforeunload_event) — event is fired when the window, the document and its resources are about to be unloaded. The document is still visible and the event is still cancelable at this point.
```javascript
window.addEventListener('beforeunload', (event) => {})
window.onbeforeunload = (event) => {}
```

[click](https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event) — element receives a click event when a pointing device button (such as a mouse's primary mouse button) is both pressed and released while the pointer is located inside the element.
```javascript
element.addEventListener('click', function (event) {
  event.preventDefault() // revoke default event
  console.log('this') // object on which the event fired
  console.log(event) // event information
  // handling event bubbling
  const child = event.target.closest('.element__child') || null
  if (child) {
    // do somethihg
  }
})
```

[change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event) — event is fired for input, select, and textarea elements when the user modifies the element's value. Unlike the input event, the change event is not necessarily fired for each alteration to an element's value.
```javascript
addEventListener('change', (event) => {});
onchange = (event) => {};
```

[input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) —event fires when the value of an input, select, or textarea element has been changed.
```javascript
addEventListener('input', (event) => {});
oninput = (event) => { };
```

[mousedown](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event) — event is fired at an Element when a pointing device button is pressed while the pointer is inside the element.
```javascript
addEventListener('mousedown', (event) => {});
onmousedown = (event) => {};
```

[mouseup](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseup_event) — event is fired at an Element when a button on a pointing device (such as a mouse or trackpad) is released while the pointer is located inside it.
```javascript
addEventListener('mouseup', (event) => {});
onmouseup = (event) => {};
```

[mouseover](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event) — event is fired at an Element when a pointing device (such as a mouse or trackpad) is used to move the cursor onto the element or one of its child elements.
```javascript
addEventListener('mouseover', (event) => {});
onmouseover = (event) => {};
```

[mouseout](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseout_event) — event is fired at an Element when a pointing device (usually a mouse) is used to move the cursor so that it is no longer contained within the element or one of its children.
```javascript
addEventListener('mouseout', (event) => {});
onmouseout = (event) => {};
```

[mouseenter](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event) — event is fired at an Element when a pointing device (usually a mouse) is initially moved so that its hotspot is within the element at which the event was fired. Does not bubble.
```javascript
addEventListener('mouseenter', (event) => {});
onmouseenter = (event) => {};
```

[mouseleave](https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseleave_event) — event is fired at an Element when the cursor of a pointing device (usually a mouse) is moved out of it. Does not bubble
```javascript
addEventListener('mouseleave', (event) => {});
onmouseleave = (event) => {};
```

[contextmenu](https://developer.mozilla.org/en-US/docs/Web/API/Element/contextmenu_event) — event fires when the user attempts to open a context menu. This event is typically triggered by clicking the right mouse button, or by pressing the context menu key.
```javascript
addEventListener('contextmenu', (event) => {});
oncontextmenu = (event) => {};
```

[resize](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) — event fires when the document view (window) has been resized.
```javascript
addEventListener('resize', (event) => {});
onresize = (event) => {};
```

---
[Home](/README.md) > [JavaScript](javascript.md) > [DOM](dom.md)
