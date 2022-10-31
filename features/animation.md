## Animation

Transfer the load from the CPU to the GPU
```css
.element {transform: translateZ(0)}
/* Or */
.element {transform: translate3D(10px, 10px, 0)}

.element {will-change: transform, opacity}
.element {will-change: auto}
.element {will-change: scroll-position}
```

[requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) — tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
```javascript
const element = document.getElementById('element-for-animate')
let start, previousTimeStamp, done = false

function step(timestamp) {
  if (start === undefined) {start = timestamp}
  const elapsed = timestamp - start

  if (previousTimeStamp !== timestamp) {
    // Math.min() is used here to make sure the element stops at exactly 200px
    const count = Math.min(0.1 * elapsed, 200)
    element.style.transform = `translateX(${count}px)`
    if (count === 200) done = true
  }

  if (elapsed < 2000) { // Stop the animation after 2 seconds
    previousTimeStamp = timestamp
    if (!done) {
      window.requestAnimationFrame(step)
    }
  }
}

window.requestAnimationFrame(step)
```

Delete the element after animation

```javascript
const preloader = document.querySelector('.preloader')

fadeOut(preloader, 500, 1000)

function fadeOut(element, duration, delay) {
  const animation = element.animate([
    {opacity: 1},
    {opacity: 0}
  ], {
    delay,
    duration,
    easing: 'ease-out'
  })
  animation.addEventListener('finish', function() {
    element.remove()
  })
}
```

---
[Home](/README.md) > [Features](features.md)
