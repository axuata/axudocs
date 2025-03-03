# addAffix
Adds an affix to the log message.

## Parameters
- `affix` (string): The **affix** to add to the log message.

## Example
```typescript
import {Logger} from "@axuata/logica"; // [!code focus]

const logger = new Logger(); // [!code focus]

logger
    .addAffix('⚡') // [!code focus]
    .out('log');
```