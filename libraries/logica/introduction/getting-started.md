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
$ npm install @axuata/logica
```

```shell [yarn]
$ yarn add @axuata/logica
```

```shell [pnpm]
$ pnpm install @axuata/logica
```
:::

## Example
```typescript
import {Logger} from "@axuata/logica";

const logger = new Logger();

logger.addStatus('info', 'primary').addMessage('Hello World').out('log');
```
will be:
```text
 INFO  Hello World // " INFO " has a background color.
```