import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Posts from './Posts'
import Story from './Story'
// import { useDispatch } from 'react-redux'
const Stories = () => {
  const [coins, setcoins] = useState([])

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false',
      )
      .then((res) => {
        setcoins(res.data)
        console.log(coins.reverse())
      })
      .catch((error) => alert('Not able to connet with server... '))
    return () => {}
  }, [])
  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-hide">
      {coins.map((coin) => {
        return <Story key={coin.id} img={coin.image} username={coin.id} />
        //
      })}
    </div>
  )
}

export default Stories
