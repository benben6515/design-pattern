# Hooks Pattern (勾子模式?)

> Not in 23 types of Design Patterns by GoF

= 使用 functions 在多個 components 中重複利用有狀態的邏輯

Hooks 在 React 16.8 中被推出，雖然 Hooks 不是 Design Pattern 中必要的部分，但 Hooks 確實可以取代不少傳統的 Design Patterns

Class Component

```javascript
class MyComponents extends React.Component {
  constructor() {
    super()
    this.state = { /* ... */ }
    this.customMethodOne = this.customMethodOne.bind(this)
    this.customMethodTwo = this.customMethodTwo.bind(this)
  }

  // Lifecycle Methods
  componentDidMount()
  componentWillUnmount()

  // Custom methods
  customMethodOne()
  customMethodTwo()

  render() {
    return ( /* <div> ... </div> */ )
  }
}
```

使用 Hooks 可以讓邏輯更集中管理，當你的 component 越來越大時，好處就會更明顯。在 Hooks 中，可以將相關的 state, function, effect 放在一起，修改時就不用一直捲動畫面，可以更加專注在眼前的工作。
