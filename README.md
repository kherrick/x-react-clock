# x-react-clock

## Build

Run `npm i && npm run bundle` to install the dependencies and bundle the source.

## Install

After bundling, be sure to `git commit -a` to prepare for installation. Next, go to the project where x-react-clock is to be installed, and add it using `npm i git+file:///home/path/to/x-react-clock`. When x-react-clock has been included in the project, add it to the page:

```javascript
import * as XReactClock from 'x-react-clock'

window.customElements.define('x-react-clock', XReactClock.default)
```

## Usage

```html
<x-react-clock rendernumbers size="150"></x-react-clock>
```