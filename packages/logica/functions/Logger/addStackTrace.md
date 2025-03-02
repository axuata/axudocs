# addStackTrace
Adds the stack trace of an error to the log.

## Parameters
- `error` (Error): The **error** object containing the stack trace.

## Example
```typescript
import {Logger} from "@axuata/logica"; // [!code focus]

const logger = new Logger(); // [!code focus]
const error = new Error('Test Error'); // [!code focus]

logger
    .addStackTrace(error) // [!code focus]
    .out('log');
```