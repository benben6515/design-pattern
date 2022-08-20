# Observer Pattern (觀察者模式)

> 1 of 23 GoF design patterns

當有事件發生的時候，觀察者通知訂閱者

通當由 3 個重要的部分組成

1. observers: 一個 array ，當事件發生時，需要被通知的 observers
2. subscribe() / unsubscribe(): 加入/移除 observer 到 observer list
3. notify(): 當事件發生時，通知所有的 observers

雖然我們可以在很多情況下使用觀察者模式，但最有利的還是在處理非同步、基於事件的資料

案例：一個熱門的大量使用觀察者模式的 library: **RxJS**

好處：

1. Open/Close Principle. 可以引入新的 subscriber 而不用修改 publisher 的程式碼
2. 當程式執行的時候，可以建立好物件跟物件的關係

壞處：

1. Subscribers 不保證依序被通知 (in random order)
