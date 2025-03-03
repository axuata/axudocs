# `length`
Converts length units.

## ⚙️ Parameters
- `value` (number): The **value** to convert.
- `from` ([LengthUnit](/libraries/convertify/types/LengthUnit)): The **unit** to convert from.
- `to` ([LengthUnit](/libraries/convertify/types/LengthUnit)): The **unit** to convert to.

## 📝 Example
::: code-group
```typescript [Code]
import {Converter} from "@axuata/convertify";

const converter = new Converter();

console.log(converter.length(1500, 'm', 'km'));
```

```text [Result]
1.5
```
:::