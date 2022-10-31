## Number of event listeners on the page

```javascript
Array.from(document.querySelectorAll('*'))
  .reduce(function(acc, domElement){
    const eventObject = getEventListeners(domElement)
    Object.keys(eventObject).forEach(event => {
      if (typeof acc[event] === 'undefined') {
        acc[event] = 0
      }
      acc[event] += eventObject[event].length
    })
    return acc
  }, {})
```