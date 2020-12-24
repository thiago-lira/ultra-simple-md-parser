# Ultra Simple Markdown Parser

A very simple markdown parser.

## Summary

* [Getting Started](#getting-started)
* [API](#api)

## Getting Started

**Installing**:

```shell
npm i ultra-simple-md-parser -save
```

**Usage:**
```js
import mdParser from 'ultra-simple-md-parser'
```

## API

Method | Arguments | Description
-------|-----------|------------
`mdParser.header(text)`| `{string} text` | Applies h1-h6 tags in lines starting between # and ##### followed by space
`mdParser.h1(text)`| `{string} text` | Applies h1 tag in lines starting with # followed by space
`mdParser.h2(text)`| `{string} text` | Applies h2 tag in lines starting with ## followed by space
`mdParser.h3(text)`| `{string} text` | Applies h3 tag in lines starting with ### followed by space
`mdParser.h4(text)`| `{string} text` | Applies h4 tag in lines starting with #### followed by space
`mdParser.h5(text)`| `{string} text` | Applies h5 tag in lines starting with ##### followed by space
`mdParser.h6(text)`| `{string} text` | Applies h6 tag in lines starting with ###### followed by space
`mdParser.strike(text)`| `{string} text` | Applies strike tag in terms surrounded by ~
`mdParser.emphasis(text)`| `{string} text` | Applies strike tag in terms surrounded by * or _
`mdParser.strong(text)`| `{string} text` | Applies strike tag in terms surrounded by ** or __
`mdParser.paragraph(text)`| `{string} text` | Applies paragraph tag in not heading lines
`mdParser.anchor(text)`| `{string} text` | Applies anchor tag for pattern [some text](some link)
`mdParser.image(text)`| `{string} text` | Applies image tag for pattern ![alt text](src link)
`mdParser.inlineCode(text)`| `{string} text` | Applies inline code for pattern \`some code\`
