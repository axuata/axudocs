# out
Outputs the logged messages to the console.

## Parameters
- `level` ([LogLevel](/libraries/logica/types/LogLevel)): The **log level**.

## Example
```typescript
logger
    .addMessage('Hello World')
    .out('log'); // [!code focus]
```