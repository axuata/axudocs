# startGroup
Starts a new log group with the specified label.

## Parameters
- `label` (string): The **label** for the log group.

## Example
```typescript
logger
    .startGroup('testLabel') // [!code focus]
    .out('log');
```