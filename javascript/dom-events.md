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

[]() —
```javascript

```

[]() —
```javascript

```

[]() —
```javascript

```

[]() —
```javascript

```

[]() —
```javascript

```

---
[Home](/README.md) > [JavaScript](javascript.md) > [DOM](dom.md)
