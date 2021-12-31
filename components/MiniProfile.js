const MiniProfile = () => {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        src="https://media.istockphoto.com/photos/headshot-of-44-year-old-mixed-race-man-in-casual-polo-shirt-picture-id1264106963?b=1&k=20&m=1264106963&s=170667a&w=0&h=dLQliHpFkaweGQhiRfkNGkwsAPoKCEy9UWWk-m2iCCk="
        alt=""
        className="rounded-full border h-16 w-16 p-[2px]"
      />
      <div className="flex-1 mx-4">
        <h2 className="font-bold">theahaya</h2>
        <h3 className="text-sm text-gray-400">Welcome to instagram</h3>
      </div>
      <button className="text-blue-400 text-sm  font-semibold">Sign Out</button>
    </div>
  )
}

export default MiniProfile
