## [Flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)


### Container

[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) — property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

`display: flex` —

`display: inline-flex` —

[flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) — sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).

`flex-direction: column` — The flex container's main-axis is the same as the block-axis. The main-start and main-end points are the same as the before and after points of the writing-mode.

`flex-direction: column-reverse` — Behaves the same as column but the main-start and main-end are opposite to the content direction.

`flex-direction: row` — The flex container's main-axis is defined to be the same as the text direction. The main-start and main-end points are the same as the content direction.

`flex-direction: row-reverse` — Behaves the same as row but the main-start and main-end points are opposite to the content direction.

[flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) — sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.

`flex-wrap: nowrap` — The flex items are laid out in a single line which may cause the flex container to overflow. The cross-start is either equivalent to start or before depending on the flex-direction value. This is the default value.

`flex-wrap: wrap` — The flex items break into multiple lines. The cross-start is either equivalent to start or before depending flex-direction value and the cross-end is the opposite of the specified cross-start.

`flex-wrap: wrap-reverse` — Behaves the same as wrap but cross-start and cross-end are permuted.

[flex-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-flow) — specifies the direction of a flex container, as well as its wrapping behavior. This property is a shorthand for the following CSS properties: `flex-direction` and `flex-wrap`

`flex-flow` = `flex-direction` + `flex-wrap`

`flex-flow: row`
`flex-flow: row-reverse`
`flex-flow: column`
`flex-flow: column-reverse`

`flex-flow: nowrap`
`flex-flow: wrap`
`flex-flow: wrap-reverse`

`flex-flow: row nowrap`
`flex-flow: column wrap`
`flex-flow: column-reverse wrap-reverse`

[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) — defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.

`justify-content: center` — Pack items around the center.

`justify-content: start` — Pack items from the start.

`justify-content: end` — Pack items from the end.

`justify-content: flex-start` — Pack flex items from the start.

`justify-content: flex-end` — Pack flex items from the end.

`justify-content: left` — Pack items from the left.

`justify-content: right` — Pack items from the right.

`justify-content: normal` — Normal alignment.

`justify-content: space-between` Distribute items evenly. The first item is flush with the start, the last is flush with the end.

`justify-content: space-around` — Distribute items evenly. Items have a half-size space on either end.

`justify-content: space-evenly` — Distribute items evenly. Items have equal space around them.

`justify-content: stretch` — Distribute items evenly. Stretch 'auto'-sized items to fit the container.

[align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) — sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.

`align-content: normal` — Normal alignment.

`align-content: baseline`

`align-content: first baseline`

`align-content: last baseline`

`align-content: space-between` — Distribute items evenly. The first item is flush with the start, the last is flush with the end.

`align-content: space-around` — Distribute items evenly. Items have a half-size space on either end.

`align-content: space-evenly` — Distribute items evenly. Items have equal space around them.

`align-content: stretch` — Distribute items evenly. Stretch 'auto'-sized items to fit the container.

`align-content: safe center`

`align-content: unsafe center`

[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) — sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.

`align-items: normal` — 

`align-items: stretch` — Stretch 'auto'-sized items to fit.

`align-items: center` — Pack items around the center.

`align-items: start` — Pack items from the start.

`align-items: end` — Pack items from the end.

`align-items: flex-start` — Pack flex items from the start.

`align-items: flex-end` — Pack flex items from the end.


### Items

[order](https://developer.mozilla.org/en-US/docs/Web/CSS/order) — sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.

`order: 5`
`order: -2`

[flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) — sets the flex grow factor of a flex item's main size.

`flex-grow: 3`
`flex-grow: 0.6`

[flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink) — sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.

`flex-shrink: 2`
`flex-shrink: 0.6`

[flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) — sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.

`flex-basis: 10em`
`flex-basis: 3px`
`flex-basis: 50%`
`flex-basis: auto`

[flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) — sets how a flex item will grow or shrink to fit the space available in its flex container.

`flex` = `flex-grow` + `flex-shrink` + `flex-basis`

`flex: 2`
`flex: 10em`
`flex: 30%`
`flex: min-content`

`flex: 1 30px` `flex: 2 2`

`flex: 2 2 10%`

[align-self]() — overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.

`align-self: auto`

`align-self: normal`

`align-self: center` — Put the item around the center.

`align-self: start` — Put the item at the start.

`align-self: end` — Put the item at the end.

`align-self: self-start` — Align the item flush at the start.

`align-self: self-end` — Align the item flush at the end.

`align-self: flex-start` — Put the flex item at the start.

`align-self: flex-end` — Put the flex item at the end.

`align-self: baseline`

`align-self: first baseline`

`align-self: last baseline`

`align-self: stretch` — Stretch 'auto'-sized items to fit the container.

`align-self: safe center`

`align-self: unsafe center`





---
[Home](../README.md) > [CSS](css.md)
