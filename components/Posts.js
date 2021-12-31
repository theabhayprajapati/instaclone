import React, { useState, useEffect } from 'react'
import Post from './Post'
import axios from 'axios'

const Posts = () => {
  const [newimg, setimg] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )
      .then((res) => {
        setimg(res.data)
        console.log(newimg)
      })
      .catch((error) => alert('Not able to connet with server... '))
    return () => {}
  }, [])

  return (
    <div>
      {newimg.map((post) => {
        return <Post key={post.id} img={post.image} username={post.id} />
      })}
    </div>
  )
}

export default Posts
