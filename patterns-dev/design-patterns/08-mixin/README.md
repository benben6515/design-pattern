# Mixin Pattern (混合模式)

> 在 objects 或 classes 中加入功能，而不透過繼承的方式

我們不能單獨使用 mixin ，不符合 Single Response Principle ，他的功能就只有在 objects 或 classes 中加入功能。

在 ES6 之前，React 不推薦使用 Mixin Pattern，因為他可能難以維護跟覆用，React 推薦使用 Higher Order Components，隨著 ES6 跟 React Hooks 的推出，Higher Order Components 又可以被 Hooks 取代了。

Mixin Pattern 使我們能夠輕易的加入功能至物件中，但修改 objects 的 prototype 似乎不是一個好辨法，可能導致 prototype 被汙染。
