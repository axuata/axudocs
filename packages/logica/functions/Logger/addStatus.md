# addStatus
Adds a status label to the log with a specific theme.

## Parameters
- `level` ([LogLevel](/libraries/logica/types/LogLevel)): The **log level**.
- `theme` ([Theme](/libraries/logica/types/Theme)): The **theme** of the label.

## Example
```typescript
import {Logger} from "@axuata/logica"; // [!code focus]

const logger = new Logger(); // [!code focus]

logger
    .addStatus('info', 'primary') // [!code focus]
    .out('log');
```