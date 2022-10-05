## DOM manipulation


[innerText](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText) — property of the HTMLElement interface represents the rendered text content of a node and its descendants.
```javascript
element.innerText
```

[textContent](https://developer.mozilla.org/ru/docs/Web/API/Node/textContent) — property of the Node interface represents the text content of the node and its descendants.
```javascript
element.textContent
```

[innerHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML) — get or set the HTML or XML markup contained within the element.
```javascript
let contents = myElement.innerHTML
document.body.innerHTML = "<p>some text</p>"
```

[insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) — parse the specified text as HTML or XML and inserts the resulting nodes into the DOM tree at a specified position.
```javascript
someElement.insertAdjacentHTML("beforebegin", '<strong>inserted text</strong>')
// "beforebegin"
// Before the element. Only valid if the element is in the DOM tree and has a parent element.

// "afterbegin"
// Just inside the element, before its first child.

// "beforeend"
// Just inside the element, after its last child.

// "afterend"
// After the element. Only valid if the element is in the DOM tree and has a parent element.
```

[insertAdjacentElement](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) — insert a given element node at a given position relative to the element it is invoked upon.
```javascript
someElement.insertAdjacentElement('afterend', document.createElement('div'))
// 'beforebegin': Before the targetElement itself.
// 'afterbegin': Just inside the targetElement, before its first child.
// 'beforeend': Just inside the targetElement, after its last child.
// 'afterend': After the targetElement itself.
```

[createDocumentFragment](https://developer.mozilla.org/en-US/docs/Web/API/Document/createDocumentFragment) — Create a new empty DocumentFragment into which DOM nodes can be added to build an offscreen DOM tree.
```javascript
const fragment = document.createDocumentFragment()
```

[createElement](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) — create the HTML element specified by tagName, or an HTMLUnknownElement if tagName isn't recognized.
```javascript
const element = document.createElement(tagName)
const elementWithOptions = document.createElement(tagName, options)
```

[createTextNode](https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode) — create a new Text node. This method can be used to escape HTML characters.
```javascript
const someText = document.createTextNode('Some text')
```

[appendChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) — method of the Node interface adds a node to the end of the list of children of a specified parent node. If the given child is a reference to an existing node in the document, appendChild() moves it from its current position to the new position.
```javascript
const paragraph = document.body.appendChild(document.createElement('p'))
```

[append](https://developer.mozilla.org/ru/docs/Web/API/Element/append) — insert a set of Node objects or string objects after the last child of the Element. String objects are inserted as equivalent Text nodes.
```javascript
const div = document.createElement("div")
const p = document.createElement("p")
div.append(p) // Appending an element
div.append("Some text") // Appending text
div.append("Some text", p) // Appending an element and text
```

[insertBefore](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) — insert a node before a reference node as a child of a specified parent node.
```javascript
const newNode = document.createElement("span")
const parentDiv = document.getElementById("childElement").parentNode
let sp2 = document.getElementById("childElement")
parentDiv.insertBefore(newNode, sp2)
```

[removeChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) — remove a child node from the DOM and returns the removed node.
```javascript
const child = document.getElementById("child")
document.removeChild(child)
```

[replaceChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild) — replace a child node within the given (parent) node.
```javascript
parentEl.replaceChild(newChild, oldChild)
```

[classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) — read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.
```javascript
const div = document.createElement("div")
div.className = "foo"
div.classList.remove("foo")
div.classList.add("anotherclass")
div.classList.toggle("visible")
div.classList.contains('foo')
```

[setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute) — set the value of an attribute on the specified element. If the attribute already exists, the value is updated; otherwise a new attribute is added with the specified name and value.
```javascript
const el = document.getElementById('item')
el.setAttribute("name", "helloButton")
```

---
[Home](/README.md) > [JavaScript](javascript.md) > [DOM](dom.md)
