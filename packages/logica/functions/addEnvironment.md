# addEnvironment
Adds an environment label to the log message.

## Parameters
- `env` ('development' | 'production'): The **environment** label to add to the log message.

## Example
```typescript
logger
    .addEnvironment('development') // [!code focus]
    .out('log');
```