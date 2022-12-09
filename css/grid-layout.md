## [Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)

CSS Grid Layout excels at dividing a page into major regions or defining the relationship in terms of size, position, and layer, between parts of a control built from HTML primitives.

Like tables, grid layout enables an author to align elements into columns and rows. However, many more layouts are either possible or easier with CSS grid than they were with tables. For example, a grid container's child elements could position themselves so they actually overlap and layer, similar to CSS positioned elements.

### Properties

[display](https://developer.mozilla.org/en-US/docs/Web/CSS/display) — property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.

`display: grid`

[grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns) — defines the line names and track sizing functions of the grid columns.

`grid-template-columns: none`

`grid-template-columns: 100px 1fr`
`grid-template-columns: [linename] 100px`
`grid-template-columns: [linename1] 100px [linename2 linename3]`
`grid-template-columns: minmax(100px, 1fr)`
`grid-template-columns: fit-content(40%)`
`grid-template-columns: repeat(3, 200px)`
`grid-template-columns: subgrid`⌚
`grid-template-columns: masonry`⌚

`grid-template-columns: 200px repeat(auto-fill, 100px) 300px`
`grid-template-columns: minmax(100px, max-content) repeat(auto-fill, 200px) 20%`
`grid-template-columns: [linename1] 100px [linename2] repeat(auto-fit, [linename3 linename4] 300px) 100px`
`grid-template-columns: [linename1 linename2] 100px repeat(auto-fit, [linename1] 300px) [linename3]`

[grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows) — defines the line names and track sizing functions of the grid rows.

`grid-template-rows: none`

`grid-template-rows: 100px 1fr`
`grid-template-rows: [linename] 100px`
`grid-template-rows: [linename1] 100px [linename2 linename3]`
`grid-template-rows: minmax(100px, 1fr)`
`grid-template-rows: fit-content(40%)`
`grid-template-rows: repeat(3, 200px)`
`grid-template-rows: subgrid`⌚
`grid-template-rows: masonry`⌚

`grid-template-rows: 200px repeat(auto-fill, 100px) 300px`
`grid-template-rows: minmax(100px, max-content) repeat(auto-fill, 200px) 20%`
`grid-template-rows: [linename1] 100px [linename2] repeat(auto-fit, [linename3 linename4] 300px) 100px`
`grid-template-rows: [linename1 linename2] 100px repeat(auto-fit, [linename1] 300px) [linename3]`

[grid-template-areas](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas) — specifies named grid areas, establishing the cells in the grid and assigning them names. Those areas are not associated with any particular grid item, but can be referenced from the grid-placement properties `grid-row-start`, `grid-row-end`, `grid-column-start`, `grid-column-end`, and their shorthands `grid-row`, `grid-column`, and `grid-area`.

`grid-template-areas: none`

`grid-template-areas: "a b"`
`grid-template-areas: "a b b" "a c d"`

[grid-template](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template) — shorthand property for defining grid columns, grid rows, and grid areas. This property is a shorthand for the following CSS properties: `grid-template-areas` `grid-template-columns` `grid-template-rows`

`grid-template: none`

grid-template-rows / grid-template-columns values
`grid-template: 100px 1fr / 50px 1fr`
`grid-template: auto 1fr / auto 1fr auto`
`grid-template: [linename] 100px / [columnname1] 30% [columnname2] 70%`
`grid-template: fit-content(100px) / fit-content(40%)`

grid-template-areas grid-template-rows / grid-template-column values
`grid-template: "a a a" "b b b"`
`grid-template: "a a a" 20% "b b b" auto`
`grid-template: [header-top] "a a a" [header-bottom] [main-top] "b b b" 1fr [main-bottom] / auto 1fr auto`

[grid-auto-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns) — specifies the size of an implicitly-created grid column track or pattern of tracks.

`grid-auto-columns: min-content`
`grid-auto-columns: max-content`
`grid-auto-columns: auto`

`grid-auto-columns: 100px`
`grid-auto-columns: 20cm`
`grid-auto-columns: 50vmax`

`grid-auto-columns: 10%`
`grid-auto-columns: 33.3%`

`grid-auto-columns: 0.5fr`
`grid-auto-columns: 3fr`

`grid-auto-columns: minmax(100px, auto)`
`grid-auto-columns: minmax(max-content, 2fr)`
`grid-auto-columns: minmax(20%, 80vmax)`

`grid-auto-columns: fit-content(400px)`
`grid-auto-columns: fit-content(5cm)`
`grid-auto-columns: fit-content(20%)`

`grid-auto-columns: min-content max-content auto`
`grid-auto-columns: 100px 150px 390px`
`grid-auto-columns: 10% 33.3%`
`grid-auto-columns: 0.5fr 3fr 1fr`
`grid-auto-columns: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax)`
`grid-auto-columns: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px)`

[grid-auto-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows) — specifies the size of an implicitly-created grid row track or pattern of tracks.

`grid-auto-rows: min-content`
`grid-auto-rows: max-content`
`grid-auto-rows: auto`

`grid-auto-rows: 100px`
`grid-auto-rows: 20cm`
`grid-auto-rows: 50vmax`

`grid-auto-rows: 10%`
`grid-auto-rows: 33.3%`

`grid-auto-rows: 0.5fr`
`grid-auto-rows: 3fr`

`grid-auto-rows: minmax(100px, auto)`
`grid-auto-rows: minmax(max-content, 2fr)`
`grid-auto-rows: minmax(20%, 80vmax)`

`grid-auto-rows: fit-content(400px)`
`grid-auto-rows: fit-content(5cm)`
`grid-auto-rows: fit-content(20%)`

`grid-auto-rows: min-content max-content auto`
`grid-auto-rows: 100px 150px 390px`
`grid-auto-rows: 10% 33.3%`
`grid-auto-rows: 0.5fr 3fr 1fr`
`grid-auto-rows: minmax(100px, auto) minmax(max-content, 2fr) minmax(20%, 80vmax)`
`grid-auto-rows: 100px minmax(100px, auto) 10% 0.5fr fit-content(400px)`

[grid-auto-flow](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-flow) — controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.

`grid-auto-flow: row`
`grid-auto-flow: column`
`grid-auto-flow: dense`
`grid-auto-flow: row dense`
`grid-auto-flow: column dense`

[grid]() — shorthand property that sets all of the explicit and implicit grid properties in a single declaration. Using grid you specify one axis using `grid-template-rows` or `grid-template-columns`, you then specify how content should auto-repeat in the other axis using the implicit grid properties: `grid-auto-rows`, `grid-auto-columns`, and `grid-auto-flow`. This property is a shorthand for the following CSS properties: `grid-auto-columns` `grid-auto-flow` `grid-auto-rows` `grid-template-areas` `grid-template-columns` `grid-template-rows`

`grid: none`
`grid: "a" 100px "b" 1fr`
`grid: [linename1] "a" 100px [linename2]`
`grid: "a" 200px "b" min-content`
`grid: "a" minmax(100px, max-content) "b" 20%`
`grid: 100px / 200px`
`grid: minmax(400px, min-content) / repeat(auto-fill, 50px)`

`grid: 200px / auto-flow`
`grid: 30% / auto-flow dense`
`grid: repeat(3, [line1 line2 line3] 200px) / auto-flow 300px`
`grid: [line1] minmax(20em, max-content) / auto-flow dense 40%`

`grid: auto-flow / 200px`
`grid: auto-flow dense / 30%`
`grid: auto-flow 300px / repeat(3, [line1 line2 line3] 200px)`
`grid: auto-flow dense 40% / [line1] minmax(20em, max-content)`

[grid-row-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-start) — specifies a grid item's start position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start edge of its grid area.

`grid-row-start: auto`

`grid-row-start: somegridarea`

`grid-row-start: 2`
`grid-row-start: somegridarea 4`

`grid-row-start: span 3`
`grid-row-start: span somegridarea`
`grid-row-start: 5 somegridarea span`

[grid-column-start]() — specifies a grid item's start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.

`grid-column-start: auto`

`grid-column-start: somegridarea`

`grid-column-start: 2`
`grid-column-start: somegridarea 4`

`grid-column-start: span 3`
`grid-column-start: span somegridarea`
`grid-column-start: span somegridarea 5`

[grid-row-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-end) — specifies a grid item's end position within the grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-end edge of its grid area.

`grid-row-end: auto`

`grid-row-end: somegridarea`

`grid-row-end: 2`
`grid-row-end: somegridarea 4`

`grid-row-end: span 3`
`grid-row-end: span somegridarea`
`grid-row-end: 5 somegridarea span`

[grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end) — specifies a grid item's end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.

`grid-column-end: auto`

`grid-column-end: somegridarea`

`grid-column-end: 2`
`grid-column-end: somegridarea 4`

`grid-column-end: span 3`
`grid-column-end: span somegridarea`
`grid-column-end: 5 somegridarea span`

[grid-row](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row) — specifies a grid item's size and location within a grid row by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area. This property is a shorthand for the following CSS properties: `grid-row-end` `grid-row-start`.

`grid-row: auto`
`grid-row: auto / auto`

`grid-row: somegridarea`
`grid-row: somegridarea / someothergridarea`

`grid-row: somegridarea 4`
`grid-row: 4 somegridarea / 6`

`grid-row: span 3`
`grid-row: span somegridarea`
`grid-row: 5 somegridarea span`
`grid-row: span 3 / 6`
`grid-row: span somegridarea / span someothergridarea`
`grid-row: 5 somegridarea span / 2 span`

[grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column) — specifies a grid item's size and location within a grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area. This property is a shorthand for the following CSS properties: `grid-column-end` `grid-column-start`.

`grid-column: auto`
`grid-column: auto / auto`

`grid-column: somegridarea`
`grid-column: somegridarea / someothergridarea`

`grid-column: somegridarea 4`
`grid-column: 4 somegridarea / 6`

`grid-column: span 3`
`grid-column: span somegridarea`
`grid-column: 5 somegridarea span`
`grid-column: span 3 / 6`
`grid-column: span somegridarea / span someothergridarea`
`grid-column: 5 somegridarea span / 2 span`

[grid-area](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area) — specifies a grid item's size and location within a grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area. This property is a shorthand for the following CSS properties: `grid-row-start` `grid-column-start` `grid-row-end` `grid-column-end`

`grid-area: auto`
`grid-area: auto / auto`
`grid-area: auto / auto / auto`
`grid-area: auto / auto / auto / auto`

`grid-area: some-grid-area`
`grid-area: some-grid-area / another-grid-area`

`grid-area: 4 some-grid-area`
`grid-area: 4 some-grid-area / 2 another-grid-area`

`grid-area: span 3`
`grid-area: span 3 / span some-grid-area`
`grid-area: 2 span / another-grid-area span`

[row-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/row-gap) — sets the size of the gap (gutter) between an element's rows.

`row-gap: 20px`
`row-gap: 1em`
`row-gap: 3vmin`
`row-gap: 0.5cm`
`row-gap: 10%`

[column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/column-gap) — sets the size of the gap (gutter) between an element's columns.

`column-gap: normal`
`column-gap: 3px`
`column-gap: 2.5em`
`column-gap: 3%`

[gap]() — sets the gaps (gutters) between rows and columns. It is a shorthand for `row-gap` and `column-gap`.

`gap: 20px`
`gap: 1em`
`gap: 3vmin`
`gap: 0.5cm`

`gap: 16%`
`gap: 100%`

`gap: 20px 10px`
`gap: 1em 0.5em`
`gap: 3vmin 2vmax`
`gap: 0.5cm 2mm`

`gap: 16% 100%`
`gap: 21px 82%`

`gap: calc(10% + 20px)`
`gap: calc(20px + 10%) calc(10% - 5px)`

[masonry-auto-flow⌚](https://developer.mozilla.org/en-US/docs/Web/CSS/masonry-auto-flow) — The masonry-auto-flow CSS property modifies how items are placed when using masonry in CSS Grid Layout.

`masonry-auto-flow: pack`
`masonry-auto-flow: next`
`masonry-auto-flow: ordered`
`masonry-auto-flow: definite-first`
`masonry-auto-flow: next ordered`

[align-tracks⌚](https://developer.mozilla.org/en-US/docs/Web/CSS/align-tracks) — The align-tracks CSS property sets the alignment in the masonry axis for grid containers that have masonry in their block axis.

`align-tracks: start`
`align-tracks: space-between`
`align-tracks: center`
`align-tracks: start, center, end`

[justify-tracks⌚](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-tracks) — The justify-tracks CSS property sets the alignment in the masonry axis for grid containers that have masonry in their inline axis.

`justify-tracks: start`
`justify-tracks: space-between`
`justify-tracks: center`
`justify-tracks: start, center, end`

### Functions

[repeat()](https://developer.mozilla.org/en-US/docs/Web/CSS/repeat) — repeated fragment of the track list, allowing a large number of columns or rows that exhibit a recurring pattern to be written in a more compact form.

track-repeat values
`repeat(4, 1fr)`
`repeat(4, [col-start] 250px [col-end])`
`repeat(4, [col-start] 60% [col-end])`
`repeat(4, [col-start] 1fr [col-end])`
`repeat(4, [col-start] min-content [col-end])`
`repeat(4, [col-start] max-content [col-end])`
`repeat(4, [col-start] auto [col-end])`
`repeat(4, [col-start] minmax(100px, 1fr) [col-end])`
`repeat(4, [col-start] fit-content(200px) [col-end])`
`repeat(4, 10px [col-start] 30% [col-middle] auto [col-end])`
`repeat(4, [col-start] min-content [col-middle] max-content [col-end])`

auto-repeat values
`repeat(auto-fill, 250px)`
`repeat(auto-fit, 250px)`
`repeat(auto-fill, [col-start] 250px [col-end])`
`repeat(auto-fit, [col-start] 250px [col-end])`
`repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])`
`repeat(auto-fill, 10px [col-start] 30% [col-middle] 400px [col-end])`

fixed-repeat values
`repeat(4, 250px)`
`repeat(4, [col-start] 250px [col-end])`
`repeat(4, [col-start] 60% [col-end])`
`repeat(4, [col-start] minmax(100px, 1fr) [col-end])`
`repeat(4, [col-start] fit-content(200px) [col-end])`
`repeat(4, 10px [col-start] 30% [col-middle] 400px [col-end])`

[minmax()]() — defines a size range greater than or equal to min and less than or equal to max. It is used with CSS Grids.

inflexible-breadth, track-breadth values
`minmax(200px, 1fr)`
`minmax(400px, 50%)`
`minmax(30%, 300px)`
`minmax(100px, max-content)`
`minmax(min-content, 400px)`
`minmax(max-content, auto)`
`minmax(auto, 300px)`
`minmax(min-content, auto)`

fixed-breadth, track-breadth values
`minmax(200px, 1fr)`
`minmax(30%, 300px)`
`minmax(400px, 50%)`
`minmax(50%, min-content)`
`minmax(300px, max-content)`
`minmax(200px, auto)`

inflexible-breadth, fixed-breadth values
`minmax(400px, 50%)`
`minmax(30%, 300px)`
`minmax(min-content, 200px)`
`minmax(max-content, 200px)`
`minmax(auto, 300px)`

[fit-content()](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content_function) — clamps a given size to an available size according to the formula min(maximum size, max(minimum size, argument)).

`fit-content(200px)`
`fit-content(5cm)`
`fit-content(30vw)`
`fit-content(100ch)`

`fit-content(40%)`


---
[Home](../README.md) > [CSS](css.md)
