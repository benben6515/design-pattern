# Overview of React

REF: [Overview of React.js](https://www.patterns.dev/posts/reactjs/)

> A UI library for building reusable user interface components

## 核心概念

- components 元件
- props 屬性 (properties)
- state 狀態

## 術語表

- **React / React.js / ReactJS** - React library, created by Facebook in 2013
- **ReactDOM** - The package for DOM and server rendering
- **JSX** - Syntax extension to JavaScript
- **Redux** - Centralized state container
- **Hooks** - A new way to use state and other React features without writing a class
- **ReactNative** - The library to develop cross-platform native apps with Javascript
- **Webpack** - JavaScript module bundler, popular in React community.
- **CRA** (Create React App) - A CLI tool to create a scaffolding React app for bootstrapping a project.
- **Next.js** - A React framework with many best-in-class features including SSR, Code-splitting, optimized for performance, etc.

## 其他應該還算好理解

// Omit

## 狀態

不理解狀態機，別說你理解狀態

但是！什麼是「狀態」

像是：

1. 門：有「開著」跟「關著」兩種
2. 水：有「固」、「液」、「氣」三種
3. 紅綠燈：有「紅」、「綠」、「黃」三種

JavaScript 中的狀態：[X-state](https://xstate.js.org/)

> TL;DR

先來看一下一個簡單的開關怎麼寫：

```javascript
import { createMachine, interpret } from 'xstate';

// Stateless machine definition
// machine.transition(...) is a pure function used by the interpreter.
const toggleMachine = createMachine({
  id: 'toggle',
  initial: 'inactive',
  states: {
    inactive: { on: { TOGGLE: 'active' } },
    active: { on: { TOGGLE: 'inactive' } }
  }
});

// Machine instance with internal state
const toggleService = interpret(toggleMachine)
  .onTransition((state) => console.log(state.value))
  .start();
// => 'inactive'

toggleService.send('TOGGLE');
// => 'active'

toggleService.send('TOGGLE');
// => 'inactive'
```

等等，React 不是一行就寫完了？

```javascript
const ReactButton = () => {
  const [toggle, setToggle] = useState(false)
  setToggle((prev) => !prev)
  setToggle((prev) => !prev)
}
```

好啦，也要 2 ~ 3 行！

你 484 有寫過這種扣：

```javascript
const submit = () => {
  if (!form.username) {
    return;
  }
  if (!form.password) {
    return;
  }
  // WTF ? if you need add one more state like: `isExpired`
  if (!isLoading && !isDisabled && checkIsValid(form.username) && checkIsPassword(form.password)) {
    return;
  }

  // finally submit
}
```

但使用 X-State 可以明確的定義好狀態、在當前狀態下可執行的動作

簡單看一下「電梯」，如果你是設計者，你會怎麼設計？

明天上班看到電梯就會有不一樣的感受了！

如果你想要很有「安全感」，X-State 是你的好侈伴，但是還是要一點學習成本的

簡而言之

- X-State 的學習成本 >  Redux
- X-State 可以做到 Redux 做不到的事
- Redux 做不到 X-State 可以做到的事
