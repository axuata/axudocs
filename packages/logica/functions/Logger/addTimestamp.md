# addTimestamp
Adds a timestamp to the log with the specified format.

## Parameters
- `format` (string): The **format** string for the timestamp.
::: details Format

|          Format           |                     Description                      |
|:-------------------------:|:----------------------------------------------------:|
|           `[Y]`           |                   Year (e.g. 2025)                   |
|          `[uY]`           |                 UTC Year (e.g. 2025)                 |
|           `[M]`           |                     Month (1-12)                     |
|          `[uM]`           |                   UTC Month (1-12)                   |
|          `[MM]`           |                2-digit Month (01-12)                 |
|          `[uMM]`          |              UTC 2-digit Month (01-12)               |
|          `[MMM]`          |     Abbreviated Month (e.g. Jan, Feb, Mar, ...)      |
|         `[MMMM]`          | Full Month Name (e.g. January, February, March, ...) |
|         `[uMMM]`          |                UTC Abbreviated Month                 |
|         `[uMMMM]`         |                 UTC Full Month Name                  |
|           `[D]`           |                      Day (1-31)                      |
|          `[uD]`           |                    UTC Day (1-31)                    |
|          `[DD]`           |                 2-digit Day (01-31)                  |
|          `[uDD]`          |               UTC 2-digit Day (01-31)                |
|          `[DDD]`          |  Day with ordinal suffix (1st, 2nd, 3rd, 4th, ...)   |
|         `[uDDD]`          |             UTC Day with ordinal suffix              |
|           `[h]`           |                     Hour (0-23)                      |
|          `[uh]`           |                   UTC Hour (0-23)                    |
|          `[hh]`           |                 2-digit Hour (00-23)                 |
|          `[uhh]`          |               UTC 2-digit Hour (00-23)               |
|           `[m]`           |                    Minute (0-59)                     |
|          `[um]`           |                  UTC Minute (0-59)                   |
|          `[mm]`           |                2-digit Minute (00-59)                |
|          `[umm]`          |              UTC 2-digit Minute (00-59)              |
|           `[s]`           |                    Second (0-59)                     |
|          `[us]`           |                  UTC Second (0-59)                   |
|          `[ss]`           |                2-digit Second (00-59)                |
|          `[uss]`          |              UTC 2-digit Second (00-59)              |
|           `[l]`           |                 Millisecond (0-999)                  |
|          `[ul]`           |               UTC Millisecond (0-999)                |
|          `[ll]`           |            3-digit Millisecond (000-999)             |
|          `[ull]`          |          UTC 3-digit Millisecond (000-999)           |
|           `[w]`           |      Day of the Week (e.g. Sun, Mon, Tue, ...)       |
|          `[uw]`           |    UTC Day of the Week (e.g. Sun, Mon, Tue, ...)     |
|          `[ww]`           |   Full Day of the Week (e.g. Sunday, Monday, ...)    |
|          `[uww]`          | UTC Full Day of the Week (e.g. Sunday, Monday, ...)  |
|  `[timezoneOffsetHours]`  |           Timezone offset hours (e.g. +9)            |
| `[timezoneOffsetMinutes]` |         Timezone offset minutes (e.g. +540)          |
|        `[iso8601]`        |    ISO 8601 Date (e.g. 2025-03-01T16:01:51.123Z)     |
:::

## Example
```typescript
import {Logger} from "@axuata/logica"; // [!code focus]

const logger = new Logger(); // [!code focus]
const format: string = '[Y]-[MM]-[DD] [hh]:[mm]:[ss] (UTC[timezoneOffsetHours])';  // [!code focus]

logger
    .addTimestamp(format) // [!code focus]
    .out('log');
```