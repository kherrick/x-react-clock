# x-react-clock

**A custom element wrapper for react-clock.**

## Demo an unpkg installation

Everything defined in one file, without a build step @ [https://j.mp/2Hsutor](https://j.mp/2Hsutor).

## Usage with NPM

### Install

```bash
npm i x-react-clock
```

### Import

```javascript
import * as XReactClock from 'x-react-clock'
```

### Define
```javascript
window.customElements.define('x-react-clock', XReactClock.default)
```

### Declare

```html
<x-react-clock rendernumbers size="150"></x-react-clock>
```

### Style

Styles are extracted from [react-clock](https://www.npmjs.com/package/react-clock) and placed in [separate css files](https://github.com/kherrick/x-react-clock/blob/master/lib/es/x-react-clock.css). Apply them, or the clock will be blank when first viewed. See [the demo]([https://j.mp/2Hsutor) for an example.