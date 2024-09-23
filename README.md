# svg-icon-paths

Collection of SVG paths for icons.

## Getting started

```
$ npm install svg-icon-paths
```

_somewhere.js[x]_

```
import edit from 'svg-icon-paths/edit'

export default function MyComponent () {
	return (
		<button><svg viewBox={edit.viewBox}><path d={edit}/></svg></button>
	)
}
```

_somewhere.css_

```
.toolbar {
  display: flex;

	& button {
	  width: 2em;
		height: 2em;
		padding: 0;
		margin-right: 0.2em;

		&:last-child {
			margin-right: 0;
		}
	}
}
```

## Attributes

Some paths include a collection of recommended attributes:

```
import reveal from 'svg-icon-paths/reveal'

const attributes = Object.keys(reveal.attributes).map(k => `${k}="${reveal.attributes[k]}`).join(' ')
const svgSrc = `<svg viewBox="${edit.viewBox}"><path d={reveal} ${attributes}/></svg>`
```

## Available paths:

[docs/index.html](http://htmlpreview.github.io/?https://github.com/pgraham/svg-icon-paths/blob/master/docs/index.html)
