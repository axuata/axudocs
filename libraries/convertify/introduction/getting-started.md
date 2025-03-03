# Getting Started
Do you want to know how to install/use this package?

## Prerequisites
- [Node.js](https://nodejs.org/) 18 or above
- [TypeScript](https://www.typescriptlang.org/) 5.0 or above

## Installation
::: warning
This package **cannot** be installed directly.
:::

::: code-group
```shell [npm]
$ npm install @axuata/convertify
```

```shell [yarn]
$ yarn add @axuata/convertify
```

```shell [pnpm]
$ pnpm install @axuata/convertify
```
:::

## Example
```typescript
import {Converter} from "@axuata/convertify";

const converter = new Converter();

console.log(converter.length(1500, 'm', 'km'));
```
will be:
```text
1.5
```