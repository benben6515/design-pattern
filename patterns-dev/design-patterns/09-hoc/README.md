# HOC Pattern

> Not in 23 types of Design Patterns by GoF

將可以覆用的邏輯透過 props 傳下去給整個 App

HOC (higher order component) 是一個接收 component 的 component，裡面有特定的邏輯給我們想要當作參數的 component

也可以組合 (Compose) 多個 HOC

在某些情況下，我們可以用 React Hooks 來取代一些 HOC ，像是一些邏輯

一般來說，React Hooks 不是用來取代 HOC ，但 React 的文件提到，在大多數得情況下，Hooks 就足以減少大部分的巢狀結構，但 HOC 會照成巢狀，像是：

```jsx
<withAuth>
  <withLayout>
    <withLoading>
      <Component />
    </withLoading>
  </withLayout>
</withAuth>
```

使用 HOC 的最佳時機：

- 重覆的、不能被客制化的行為，但整個 App 中有很多地方會用到
- Component 可以在不加入客制的邏輯下被獨立使用

使用 Hooks 的最佳時機：

- Component 的行為是需要被客制化的
- Component 的行為是只有在少數地方才用得到的
- Component 的行為需要加入很多 props

好處：

1. HOC 可以讓共用的邏輯保持在同一個地方
2. 保持你的 code DRY 跟更容易達成關注點分離

壞處：

1. HOC 中的 props 很有可能照成命名衝突
2. 當使用 Composed 的 HOC ，該 HOC 之中的 props 難以區分職責
