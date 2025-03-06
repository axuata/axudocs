# addAffix
Adds a divider to the log message.

## Example
```typescript
import {Logger} from "@axuata/logica"; // [!code focus]

const logger = new Logger(); // [!code focus]

logger
    .addDivider() // [!code focus]
    .out('log');
```