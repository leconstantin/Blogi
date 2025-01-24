import Image from "next/image";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import {
  FaBookmark,
  FaCommentDots,
  FaRegCommentDots,
  FaShare,
} from "react-icons/fa";
export default function PostCard() {
  return (
    <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
      <div className="flex flex-col items-center rounded-lg bg-black p-3.5 lg:p-6">
        {/* top section */}
        <div className="flex justify-between w-full pb-2 border-b-2 border-dashed border-zinc-800">
          <div className="flex items-center space-x-2">
            <Image
              src="/test.jpg"
              width={36}
              height={36}
              alt="profile"
              className="w-9 h-9 rounded-full"
            />
            <div className="flex flex-col -space-y-1">
              <div className="font-bold tracking-tight">Leo Constantin</div>
              <div className="text-zinc-500 text-sm">Software Engineer</div>
            </div>
          </div>
          <div className="text-sm">education</div>
        </div>
        {/* middle content */}
        <div className="text-justify line-clamp-3 pt-2 text-base text-zinc-300 tracking-wide leading-7 text-balance">
          Once upon a time, in a small village, there lived a curious cat named
          Whiskers who loved to explore the world beyond the hills.Whiskers
          would embark on daily adventures, meeting new friends and discovering
          hidden treasures. Each day brought a new story, filled with excitement
          and wonder.
        </div>

        {/* actions */}
        <div className="flex justify-between w-full pt-2 border-t-2 border-dashed border-zinc-800 mt-2">
          <div className="flex space-x-4">
            <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
              <AiFillLike className="size-4 text-blue-300" />
              <span className="text-sm">6k</span>
            </button>
            <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
              <AiFillDislike className="size-4 text-blue-300" />
              <span className="text-sm">0k</span>
            </button>
            <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
              <FaShare className="size-4 text-blue-300" />
              <span className="text-sm">share</span>
            </button>

            <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
              <FaBookmark className="size-4 text-blue-300" />
              <span className="text-sm">bookmark</span>
            </button>
          </div>
          <div className="text-zinc-400 text-sm">Posted on: 2023-10-05</div>
        </div>
      </div>
    </div>
  );
}
