# startGroup
Starts a new log group with the specified label.

## Parameters
- `label` (string): The **label** for the log group.

## Example
```typescript
import {Utils} from "@axuata/logica"; // [!code focus]

const utils = new Utils(); // [!code focus]

utils
    .startGroup('testLabel'); // [!code focus]
```