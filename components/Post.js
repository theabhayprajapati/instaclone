import { DotsHorizontalIcon } from '@heroicons/react/solid'
import { EmojiHappyIcon, HeartIcon } from '@heroicons/react/outline'
import { HeartIcon as HeartFilled } from '@heroicons/react/outline'
import {
  BookmarkIcon,
  ChatIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { lorem } from 'faker'

const Post = ({ id, username, useImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* herder */}
      <div className="flex items-center p-5 ">
        <img
          src={img}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username} </p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      <img src={img} className="object-cover lg:w-full " alt="" />
      <div className="flex justify-between">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <PaperAirplaneIcon className="btn" />
          <ChatIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* cAPTION  */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        <span>
          {
            'LoremVelit ex amet aliquip ea velit sit deserunt eiusmod esse ut reprehenderit eu.'
          }
        </span>
      </p>

      {/* commmemnts */}

      {/* inpuit bos */}

      <div>
        <form action="" className="flex items-center p-4">
          <EmojiHappyIcon className="btn" />
          <input
            type="text"
            placeholder="Add a comment..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button className="font-semibold text-blue-400"fe>Post</button>
        </form>
      </div>
    </div>
  )
}

export default Post
