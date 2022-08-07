# Proxy Pattern 代理人模式

讓你可以確保不會直接改變操作資料，讓你的資料 pure

好處：

1. 你可以在 client 不知道的情況下，控制 service object
2. 可以管理 client 不在乎的 life cycle of service object
3. proxy 可以 work 就算 service object 還沒準備好或是壞了
4. Open/Close Principle. 你可以在不改變 service 或 client 的情況下引入新的 proxy

壞處：

1. code 會變得更複雜，因為你需要引入更多的 classes
2. service 的 response 可能會延遲

Ref

- [Proxy Pattern](https://www.patterns.dev/posts/proxy-pattern/)
- [Proxy and Reflect](https://javascript.info/proxy)
