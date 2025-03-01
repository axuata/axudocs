# addAffix
Adds an affix to the log message.

## Parameters
- `affix` (string): The **affix** to add to the log message.

## Example
```typescript
logger
    .addAffix('⚡') // [!code focus]
    .out('log');
```