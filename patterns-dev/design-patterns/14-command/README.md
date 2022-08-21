# Command Pattern (命令模式)

> 1 of 23 types of Design Patterns by GoF

藉由下命令（command）的方式去執行任務，以達到解耦合的目地

一開始看可能會對 Command, Execute 有點混餚，多看幾次就會好了點了

好處：

1. Command Pattern 可以讓我們在 object 跟 command 解耦合
2. 在需要有特定的周期或是 command 需要依序執類時，Command Pattern 提供更多的控制權
3. Single Responsibility Principle (SRP) ，可以在調用舉執行 Command 之間解耦合
4. Open/Close Principle (OCP) ，你可以引入新的 Commands 而不用破壞現有的 client code
5. 可以實作 undo/redo
6. 可以實作延遲執行 Command
7. 可以集合一系列的簡單的 Command 成一個複雜的 Command

壞處：

1. 使用 Command Pattern 相當局限，且需要多寫 boilerplate
2. Code 可能會變得非常複雜，因為需要在發送者和接收者之間引入一層連結
