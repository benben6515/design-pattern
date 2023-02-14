# Streaming Server-Side Rendering

使用 **Streaming Server-Side Rendering** 是為了減少 TTI (Time To Interactive) 為目地，一般的 SSR 產生單一、巨大的 HTML 檔案，介由 Streaming Server-Side Rendering 使用 "串流" 的方式，繼續傳送 response object，只要一接收到資料的 "chunks" 便開始 render 。

origin SSR

```sh

           FCP               TTI
            |                 |
GET/        |                 |
       GET/bundle.js          |
             -----------------=============
                         render(app)
```

Stream SSR

```sh

           FCP        TTI
            |          |
GET/        |          |
       GET/bundle.js   |
             ----------==--==--==--==--==
                  render(app)
```

- React 內鍵的 `renderToNodeStream`

1. `ReactDOMServer.renderToNodeStream`：跟 `ReactDOMServer.renderToString(element)` 是一樣的，只是是在 Node 的環境中
2. `ReactDOMServer.renderToStaticNodeStream`

- 好處

1. 效能改進：只要一接收到 `first byte` 就開始 render，TTFB(Time to first byte) 比 SSR 還要好
2. 低網速處理：因為是透過串流的方式傳送資料，在低網速的地區，反應會比較快
3. 支援 SEO：串流的回傳也可以被爬蟲爬到，所以對於 SEB 也比較友好

- 壞處

1. 在使用 SSR 的框架中，產生的模版中需要先被加入 document 中，如 `<style>` tag 之前
2. `renderToStaticMarkup` 被使用在產生模板時 `renderToString` 也被呼叫產生動態的內容，因為對應的字串不能被串流所取代
