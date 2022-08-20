# Singleton Pattern

Ref: <https://www.patterns.dev/posts/singleton-pattern/>

精神：為了要讓一個 Object 或是 Class 只存在一個的模式

好處：

  1. 可以確保你存取的都是同一個 instance (object/class)
  2. 可以全域的存取同一個 instance
  3. instance 只會在你第一次需要的時候建立 (init)

壞處：

  1. 違反 SRP (Single Responsibility Principle) 原則，他一次做了兩件事
  2. 如果共同的元件太多，就會造成高藕合
  3. 不能創造出多個 singleton instance
  4. 不好做 unit test，因為許多的測試框架依賴繼承，而許多的語言不能覆寫 static method，需要想出有創意的方法，或是要嘛不要寫測試，要嘛不要用 Singleton pattern

實際範例

1. Global behavior
2. State management (Redux, Vuex)
