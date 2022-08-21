# Flyweight Pattern (享元模式)

> 1 of 23 types of Design Patterns by GoF

處理相同 object 時重用現有 instance (共享元件)

當我們創建大量的相似 object， Flyweight Pattern 可以幫助我們節省記憶體

在 JavaScript 中，可以介由 Prototype Inheritance 幫助我們節省記憶體，加上現在的 RAM 也都好幾 GB 了，Flyweight Pattern 也就沒這麼重要了

好處：

1. 如果你有大量的相似 object，可以節省大量的記憶體

壞處：

1. 可能會使用 RAM 交換 CPU，有些 context 會需要重覆計算
2. code 可能會變得非常複雜，新進的人員會好奇為什麼要以這種方式分離 state
