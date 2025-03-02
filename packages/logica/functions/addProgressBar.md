# addProgressBar
Adds a progress bar to the log.

## Parameters
- `percent` (number): The **current progress** as a **percentage** (0-100).

## Example
```typescript
logger
    .addProgressBar(50) // [!code focus]
    .out('log');
```