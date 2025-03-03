# m`ass`
Converts mass units.

## ⚙️ Parameters
- `value` (number): The **value** to convert.
- `from` ([MassUnit](/libraries/convertify/types/MassUnit)): The **unit** to convert from.
- `to` ([MassUnit](/libraries/convertify/types/MassUnit)): The **unit** to convert to.

## 📝 Example
::: code-group
```typescript [Code]
import {Converter} from "@axuata/convertify";

const converter = new Converter();

console.log(converter.mass(15, 'g', 't'));
```

```text [Result]
0.000015
```
:::