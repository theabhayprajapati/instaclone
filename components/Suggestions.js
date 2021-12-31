import React, { useState, useEffect } from 'react'

const Suggestions = () => {
  const [flloweusers, setflloweusers] = useState([])
  useEffect(() => {
    const floweup = fetch('https://jsonplaceholder.typicode.com/photos')
      .then((resp) => resp.json())
      .then((data) => setflloweusers(data) & console.log(Array.isArray(data)))
  }, [])

  return (
    <div>
      <div className="mt-4 ml-10">
        <div className="flex justify-between text-sm mb-5">
          <h3 className="text-sm font-bold text-gray-400">
            Suggetion to follow
          </h3>
          <button className="font-semibold text-blue-600">Show All</button>
        </div>
      </div>
      {flloweusers.slice(0, 5).map((nowflow) => {
        return (
          <div
            key={nowflow.id}
            className="flex items-center justify-between mt-3"
          >
            <img
              className="rounded-full w-10 h-10 border p-[2px]"
              src={nowflow.thumbnailUrl}
              alt=""
            />
            <div className="flex-1 ml-4">
              <h2 className="text-sm font-semibold">
                {nowflow.title.slice(0, 15).trim()}
              </h2>
              <h2 className="text-xs text-gray-400">
                {' '}
                Works at {nowflow.title.slice(10, 20)}
              </h2>
            </div>
            <button className="text-blue-400 font-bold text-xs">Follow</button>
          </div>
        )
      })}
    </div>
  )
}

export default Suggestions
