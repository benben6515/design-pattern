# Factory Pattern (工廠模式)

> 1 of 23 types of Design Patterns by GoF

使用一個 Factory function 去創造 objects

一個 Factory function 會 return 一個新的 object ，而不用 `new` 鍵關字

Factory Pattern 在創造相對複雜且可配置的 objects 時，非常有用，像是在特定環境的設定值。

有了 Factory Pattern ，我們可以輕易地使用客製化的 key 跟 value 創造 object，像是：

```javascript
const createObjectFormArray = ([key, value]) => ({
  [key]: value
})

createObjectFormArray(['name', 'Benben'])
```

好處：

1. 在創造多個小的 objects ，可以共享同樣的 properties
2. 可以依照不同的環境或是使用者的設定，創造客製化的 objects
3. 可以避免 creator 跟 instance 的高耦合
4. Single Responsibility Principle (SRP)，可以將 creator 的 code 集中在一個地方管理
5. Open/Close Principle (OCP)，可以加入新的種類，而不會破壞現有的 client code

壞處：

1. 在 JavaScript 中，Factory Pattern 不是只使用 `new` 而創造一個 object，ES6 的箭頭函式可以讓我們隱式建立一小的 Factory function
2. 在大多的情況下創造新的 instances 會比創造新的 objects 還要更省記憶體
3. code 可能會變得非常複雜，因為引入了新的 subclasses 。最好的情況下，是在現有的 creator class 階級中引入
