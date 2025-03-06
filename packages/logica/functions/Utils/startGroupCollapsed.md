# startGroupCollapsed
Starts a new collapsed log group with the specified label.

## Parameters
- `label` (string): The **label** for the collapsed log group.

## Example
```typescript
import {Utils} from "@axuata/logica"; // [!code focus]

const utils = new Utils(); // [!code focus]

utils
    .startGroupCollapsed('testLabelCollapsed'); // [!code focus]
```