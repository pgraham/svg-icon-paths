# svg-icon-paths

Collection of SVG paths for icons.

## Getting started

```
$ npm install svg-icon-paths
```

*somewhere.js[x]*
```
import edit from 'svg-icon-paths/edit'

export default function MyComponent () {
	return (
		<button><svg><path d={edit}/></svg></button>
	)
}
```

*somewhere.css*
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

## Available paths:

[http://htmlpreview.github.io/?https://github.com/pgraham/svg-icon-paths/blob/master/docs/index.html](docs/index.html)
