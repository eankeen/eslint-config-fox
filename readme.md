# eslint-config-fox

Edwin's ESLint configuration

## Behavior

- Styling issues are always _warnings_ and auto-fixable
- Syntax issues are usually _errors_ when either auto-fixable or not
  - Exceptions include obviously temporary errors (ex. `no-lone-blocks` (`{}`)) (which may be _off_ or _warning)
- Extra syntax issues may be _error_ on `NODE_ENV === production` (ex. loggers)

## Options

### Example

```js
// .fox.js
export default {
  lint: 'off | cozy (default) || strict || excessive'
}
```

### Description

#### off

turns of all functional linting. formatting options are still enabled, though

#### cozy

catches code that is
- hard to debug / easy to be buggy
- deprecated syntax

#### strict

catches code that is
- not up to best practices
- unecessarily verbose / unecessarily misleading
  - ex. needlessly using `.bind()`
- ambiguous

#### excessive

Essentially the same as `strict`, but includes options that are
more annoying than helpfull when coding a project

- ex. forcing default to exist at end of switch
