import Image from "next/image";

function PostHeader() {
  return <div className="flex justify-center">
    <div>
      <div className="w-[650px] h-[80px] border-[1.4px] border-x-[#000000]/25">
        <p className="ont-semibold text-[28px] mt-5 ml-10">Home</p>
      </div>
      <div className="w-[650px] h-[100px] border-[1.4px] border-[#000000]/25">
        <div className="flex">
          {/* Logo */}
          <div className="pt-5 pl-10">
            <Image src={"/Web3Ninja.svg"} alt="logo" width={46} height={43} />
          </div>
          {/* Input menu */}
          <div className="pt-8 pl-3">
            <input placeholder="What is happening?!" />
          </div>
          {/* Buttom */}
          <div className="ml-44 mt-12">
            <button className="bg-black1 text-white w-[79px] h-[34px] rounded-[20px] pt-[2px]">Post</button>
          </div>
        </div>
      </div>
      <div className="w-[650px] h-[60px] border-x-[1.4px] border-[#000000]/25">
        <p className="text-center pt-5 text-black1">Show latest posts</p>
      </div>
    </div>
  </div>;
}

export default PostHeader;
