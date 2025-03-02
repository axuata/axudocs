# addMessage
Adds a message to the log.

## Parameters
- `message` (string): The **message** to be added to the log.

## Example
```typescript
import {Logger} from "@axuata/logica"; // [!code focus]

const logger = new Logger(); // [!code focus]

logger
    .addMessage('Hello World') // [!code focus]
    .out('log');
```