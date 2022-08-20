# 容器/表象模式 Container/Presentational Pattern

> Not in 23 GoF design patterns

藉由分開畫面跟邏輯，強調關注點分離

在 React 中，我們可以分成兩個部分

- 1. Presentational Components
  - Components 關心 **如何** 呈現畫面，像是：rending a list

- 2. Container Components
  - Components 關心 **什麼** 內容是要呈現給使用者的，像是：fetch data

好處：

1. 使用容器/表象模式易於達成關注點分離
2. Presentational Components 更易於複用
3. 因為 Presentational Components 不處理邏輯，非技術人員即使不知道 codebase 也可以修改，並再整個 app 中維持一致
4. 易於測試，因為 Presentational Components 是 pure functions

壞處：

1. 在 Hooks 中，可以更容易達成同樣的結果，而不用使用容器/表象模式
2. 我們可以在 Hooks 中使用，在小型的 app 中使用容器/表象模式，就有點殺雞用牛刀了
