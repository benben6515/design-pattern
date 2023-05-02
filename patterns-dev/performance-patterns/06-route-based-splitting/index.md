# Route based splitting

REF: [Route Based Splitting](https://www.patterns.dev/posts/route-based)

> Dynamically load components based on the current route

## 核心概念

- 結合 `React Suspense` (或是 loadable-components) 與 `react-router` 之類的 library ，就可以介由 routes 動態的載入 components

## 例子

```typescript
import React, { lazy, Suspense } from 'react'
import {render} from 'react-dom'
import {Switch, Route, BrowserRouter as Router} from 'react-router-dom'

const App = lazy(() => import(/* webpackChunkName: "home" */ "./App"));
const Overview = lazy(() =>
  import(/* webpackChunkName: "overview" */ "./Overview")
);
const Settings = lazy(() =>
  import(/* webpackChunkName: "settings" */ "./Settings")
);

render(
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/overview">
          <Overview />
        </Route>
        <Route path="/settings">
          <Settings />
        </Route>
      </Switch>
    </Suspense>
  </Router>,
  document.getElementById("root")
);

module.hot.accept();
```
