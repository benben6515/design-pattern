# Module Pattern (模組模式)

> Not in 23 types of Design Patterns by GoF

將你的 code 折分成更小、更可覆用的部分

模組可以讓特定的值保持私有 (private)，並而被封裝 (be encapsulated)

JavaScript 從 ES2015 (aka ES6) 開始就加入了組模功能

- 動態導入 module: 當我們需要的時候才 load, parse, compile 我們需要的 code

```javascript
import('module').then(module => {
  module.default()
  module.namedExport()
})

// or async/await
(async () => {
  const module = await import('module')
  module.default()
  module.namedExport()
})
```

其他好像不需要特別講，平常有在用 library 的應該就會用到了 0.0

因為在 React 中有大量的 export/import，不只是 React ，只要管理大量的 components 一定會很常碰到

比較須注意的是 `export default` 的檔案用 import * as foo from 'foo.js' 的話，要用 `foo.default` 去呼叫
