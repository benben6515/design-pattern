# Bundle splitting

REF: [Bundle Splitting](https://www.patterns.dev/posts/bundle-splitting)

> Split your code into small, reusable pieces

## 核心概念

- 將原本一份打包檔（Bundle） code 折分成多個可重覆使用的打包檔（Bundle）
- 提升載入速度以及減少未使用的 code
- 雖然現代的瀏灠器已經內鍵串流（stream） bundle 大幅改善了執行的時間，但開發者自行還是可以自行決定如何打包，以更優化使用者體驗
