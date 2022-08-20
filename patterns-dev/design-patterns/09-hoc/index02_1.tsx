// withLoader
import React, { useEffect, useState } from 'react'

export default (Element, url) => {
  return (props) => {
    const [data, setData] = useState(null)

    useEffect(() => {
      const getData = async () => {
        const res = await fetch(url)
        const data = await res.json()
        setData(data)
      }
      getData()
    }, [])

    if (!data) {
      return <div>Loading ...</div>
    }

    return <Element {...props} data={data} />
  }
}
