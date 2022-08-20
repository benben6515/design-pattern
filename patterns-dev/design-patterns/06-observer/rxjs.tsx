// With RxJS, we can create observables and subscribe to certain events!
// Let's look at an example that's covered in their documentation, which logs whether a user was dragging in the document or not.

import React from 'react'
import ReactDOM from 'react'
import { fromEvent, merge } from 'rxjs'
import { sample, mapTo } from 'rxjs/operators'

merge(
  fromEvent(document, "mousedown").pipe(mapTo(false)),
  fromEvent(document, "mousemove").pipe(mapTo(true))
)
  .pipe(sample(fromEvent(document, "mouseup")))
  .subscribe(isDragging => {
    console.log(`Were you dragging? => ${isDragging}`)
  })

ReactDOM.render(
  <div className="App">Click or drag anywhere and check the console!</div>,
  document.getElementById('root')
)
