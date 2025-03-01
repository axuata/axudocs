# addStatus
Adds a status label to the log with a specific theme.

## Parameters
- `level` ([LogLevel](/packages/logica/types/LogLevel)): The **log level**.
- `theme` ([Theme](/packages/logica/types/Theme)): The **theme** of the label.

## Example
```typescript
logger
    .addStatus('info', 'primary') // [!code focus]
    .out('log');
```