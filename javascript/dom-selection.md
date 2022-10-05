## DOM selection

[getElementById](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) — return a reference to the element by its ID.
```javascript
document.getElementById('id')
```

[getElementsByClassName](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName) — return an array-like object (live HTMLCollection) of all child elements which have all of the given class name(s).
```javascript
document.getElementsByClassName('class')
```

[getElementsByTagName](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) — return a live HTMLCollection of elements with the given tag name.
```javascript
document.getElementsByTagName('div')
```

[querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) — return the first Element within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.
```javascript
document.querySelector('.class')
```

[querySelectorAll](https://developer.mozilla.org/en-US/docs/Web/API/Element/getElementsByTagName) — return a live HTMLCollection of elements with the given tag name.
```javascript
document.querySelectorAll('div, .class')
```

[childNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes) — read-only property of the Node interface returns a live NodeList of child nodes of the given element where the first child node is assigned index 0. Child nodes include elements, text and comments.
```javascript
// First check that the element has child nodes
if (parg.hasChildNodes()) {
  let children = parg.childNodes
  for (const node of children) {
    // Do something with each child as children[i]
  }
}
```

[parentNode](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentNode) — read-only property of the Node interface returns the parent of the specified node in the DOM tree.
```javascript
node.parentNode
```

[firstChild](https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild) — read-only property of the Node interface returns the node's first child in the tree, or null if the node has no children.
```javascript
node.firstChild
```

[lastChild]() — read-only property of the Node interface returns the last child of the node. If its parent is an element, then the child is generally an element node, a text node, or a comment node. It returns null if there are no child nodes.
```javascript
node.firstChild
```

[parentElement](https://developer.mozilla.org/en-US/docs/Web/API/Node/parentElement) — read-only property of Node interface returns the DOM node's parent Element, or null if the node either has no parent, or its parent isn't a DOM Element.
```javascript
node.parentElement
```

[nextSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) — read-only property of the Node interface returns the node immediately following the specified one in their parent's childNodes, or returns null if the specified node is the last child in the parent element.
```javascript
node.nextSibling
```

[previousSibling](https://developer.mozilla.org/en-US/docs/Web/API/Node/previousSibling) — read-only property of the Node interface returns the node immediately preceding the specified one in its parent's childNodes list, or null if the specified node is the first in that list.
```javascript
node.previousSibling
```

[hasChildNodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/hasChildNodes) — return a boolean value indicating whether the given Node has child nodes or not.
```javascript
const parentElement = document.getElementById('parentElement')
if (parentElement.hasChildNodes()) {
  // Do something with 'parentElement.childNodes'
}
```

[offsetParent](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent) — read-only property returns a reference to the element which is the closest (nearest in the containment hierarchy) positioned ancestor element.
```javascript
el.offsetParent
```

[className](https://developer.mozilla.org/en-US/docs/Web/API/Element/className) — property of the Element interface gets and sets the value of the class attribute of the specified element.
```javascript
const el = document.getElementById('item')
el.className = el.className === 'active' ? 'inactive' : 'active'
```

[getAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute) — return the value of a specified attribute on the element.
```javascript
const el = document.getElementById('item');
el.getAttribute('name');
```

[data attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) — HTML5 is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as non-standard attributes, or extra properties on DOM.
```html
<article
  id="electric-cars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
</article>
```
```javascript
const article = document.querySelector('#electric-cars')
article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```
```css
article::before {
  content: attr(data-parent)
}
```

---
[Home](/README.md) > [JavaScript](javascript.md) > [DOM](dom.md)
