import Image from "next/image";
import Link from "next/link";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaBookmark, FaShare } from "react-icons/fa";
import { IoReturnUpBack } from "react-icons/io5";
export default function Page() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <Link href="/">
          <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
            <IoReturnUpBack />
            <span>Back</span>
          </button>
        </Link>
        <Link href="/">Similar Posts</Link>
      </div>
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

          <div className="pt-6 text-lg text-zinc-300 tracking-tight space-y-5">
            <h1 className="text-2xl font-bold text-white">
              The Adventures of Whiskers
            </h1>
            <p>
              Once upon a time, in a small village, there lived a curious cat
              named Whiskers who loved to explore the world beyond the hills.
              Whiskers would embark on daily adventures, meeting new friends and
              discovering hidden treasures. Each day brought a new story, filled
              with excitement and wonder.
            </p>
            <p>
              Once upon a time, in a small village, there lived a curious cat
              named Whiskers who loved to explore the world beyond the hills.
              Whiskers would embark on daily adventures, meeting new friends and
              discovering hidden treasures. Each day brought a new story, filled
              with excitement and wonder.
            </p>
            <p>
              Once upon a time, in a small village, there lived a curious cat
              named Whiskers who loved to explore the world beyond the hills.
              Whiskers would embark on daily adventures, meeting new friends and
              discovering hidden treasures. Each day brought a new story, filled
              with excitement and wonder.
            </p>
          </div>

          {/* actions */}
          <div className="flex justify-between w-full py-6 border-t-2 border-dashed border-zinc-800 mt-2">
            <div className="flex space-x-4">
              <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
                <AiFillLike className="size-4 text-blue-300" />
                <span className="text">6k</span>
              </button>
              <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
                <AiFillDislike className="size-4 text-blue-300" />
                <span className="text">0k</span>
              </button>
              <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
                <FaShare className="size-4 text-blue-300" />
                <span className="text-">share</span>
              </button>

              <button className="flex items-center space-x-1 text-zinc-300 hover:text-white">
                <FaBookmark className="size-4 text-blue-300" />
                <span className="text-">bookmark</span>
              </button>
            </div>
            <div className="text-zinc-400 text-sm">Posted on: 2023-10-05</div>
          </div>
        </div>
      </div>
    </>
  );
}
