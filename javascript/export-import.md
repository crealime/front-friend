## [Export](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export)
The export declaration is used to export values from a JavaScript module. Exported values can then be imported into other programs with the import declaration or dynamic import. The value of an imported binding is subject to change in the module that exports it — when a module updates the value of a binding that it exports, the update will be visible in its imported value.
```javascript
// Exporting declarations
export let name1, name2/*, … */ // also var
export const name1 = 1, name2 = 2/*, … */ // also var, let
export function functionName() { /* … */ }
export class ClassName { /* … */ }
export function* generatorFunctionName() { /* … */ }
export const { name1, name2: bar } = o
export const [ name1, name2 ] = array

// Export list
export { name1, /* …, */ nameN }
export { variable1 as name1, variable2 as name2, /* …, */ nameN }
export { variable1 as "string name" }
export { name1 as default /*, … */ }

// Default exports
export default expression;
export default function functionName() { /* … */ }
export default class ClassName { /* … */ }
export default function* generatorFunctionName() { /* … */ }
export default function () { /* … */ }
export default class { /* … */ }
export default function* () { /* … */ }

// Aggregating modules
export * from "module-name"
export * as name1 from "module-name"
export { name1, /* …, */ nameN } from "module-name"
export { import1 as name1, import2 as name2, /* …, */ nameN } from "module-name"
export { default, /* …, */ } from "module-name"
```

## [Import](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)
The static import declaration is used to import read-only live bindings which are exported by another module. The imported bindings are called live bindings because they are updated by the module that exported the binding, but cannot be modified by the importing module.
```javascript
import defaultExport from "module-name"
import * as name from "module-name"
import { export1 } from "module-name"
import { export1 as alias1 } from "module-name"
import { default as alias } from "module-name"
import { export1, export2 } from "module-name"
import { export1, export2 as alias2, /* … */ } from "module-name"
import { "string name" as alias } from "module-name"
import defaultExport, { export1, /* … */ } from "module-name"
import defaultExport, * as name from "module-name"
import "module-name"
```

---
[Home](/README.md) > [JavaScript](javascript.md)
