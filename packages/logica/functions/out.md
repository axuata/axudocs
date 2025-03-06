# out
Outputs the logged messages to the console.
::: warning
This function is the **exit point** of the logging process.
:::

## Parameters
- `level` ([LogLevel](/libraries/logica/types/LogLevel)): The **log level**.

## Example
```typescript
logger
    .addMessage('Hello World')
    .out('log'); // [!code focus]
```