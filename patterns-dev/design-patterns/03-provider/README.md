# Provider Pattern 供應者模式

讓 data 能在多個子 component 中被取得

> Provider Pattern 並不在標準的 23 種 design pattern 之中

像是在 react 中的 prop drilling ，那麼 Provider Pattern 可以幫住我們決解這個問題，react 中有內鍵 `useContent` hook 就是使用這個 ~~pattern~~

好處：

1. 可以讓你傳遞 data 而不用手動一層一層傳 props
2. 重構時可以減少 bug ，如：重新命名資料不用一個一個命
3. 有了 Provider Patter 不用擔心 prop drilling 問題，也不用理解複雜的 dataflow
4. 讓 global state 保持簡單，使得我們可以在 component 中使用

壞處：

1. 在一些情況下， Provider Pattern 會造成效能問題，所有使用到 context 的 component 會 re-render
2. 在小的專案中不須要擔心效能問題，但在大型專案中頻繁的更新 context 中的資料，效能問題就會浮現

Provider Pattern 共享全域的資料非常有用，常見的例子如 UI 的 state 在 component 中共享
