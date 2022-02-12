# pound-foolish

- concise methods: `it` and `expect` totally.
- support ESM.
- really low light: `pound-foolish` (3.84kb), `jest` (4.74kb)

A name comes from "penny-wise" of "It".

## install

```shell
yarn add -D pound-foolish
```

or

```shell
npm i -D pound-foolish
```

## use case

```javascript
import { it, expect } from 'pound-foolish';

const sum = (first, second) => {
    return first + second;
}

it('sum should plus both numbers', () => {
    const result  = sum(1,2);
    expect(result).toBe(3);
})
```
