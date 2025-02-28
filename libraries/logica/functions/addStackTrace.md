# addStackTrace
Adds the stack trace of an error to the log.

## Parameters
- `error` (Error): The **error** object containing the stack trace.

## Example
```typescript
const error = new Error('Test Error'); // [!code focus]

logger
    .addStackTrace(error) // [!code focus]
    .out('log');
```