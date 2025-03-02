# addIndentation
Adds indentation to the log message.

## Parameters
- `depth` (number): The **number of indentation levels** to apply (each level adds 2 spaces).

## Example
```typescript
import {Logger} from "@axuata/logica"; // [!code focus]

const logger = new Logger(); // [!code focus]

logger
    .addIndentation(3) // [!code focus]
    .out('log');
```