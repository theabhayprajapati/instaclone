const Story = ({ img, username }) => {
  return (
    <div>
      <img
        className="h-14  w-14 rounded-full p[1.5px] border-red-500 border-2 object-contain cursor-pointer hover:scale-110 duration-200 ease-out transition transform"
        src={img}
        alt=""
      />
      <p className="text-sm w-14 truncate text-center">{username}</p>
    </div>
  )
}

export default Story
