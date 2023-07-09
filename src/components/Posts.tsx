import Image from "next/image";

function Posts() {
  return <div className="flex justify-center">
    <div>
      <div className="w-[650px] h-[80px] border-[1.4px] border-x-[#000000]/25">
        <p className="font-Khula font-semibold text-[28px] mt-5 ml-10">Home</p>
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
            <button className="bg-black1 text-white w-[79px] h-[34px] rounded-[20px] fonts">Post</button>
          </div>
        </div>
      </div>
      <div className="w-[650px] h-[60px] border-x-[1.4px] border-[#000000]/25">
        <p className="font-Khula text-center pt-5 text-black1">Show latest posts</p>
      </div>
      {/* Post 1 */}
      <div className="w-[650px] h-[250px] border-[1.4px] border-[#000000]/25">
        <div className="flex">
          <div className="pt-8 pl-10 basis-[15%]">
            <Image src={"/Web3Ninja.svg"} alt="logo" width={46} height={43} />
          </div>
          <div className="basis-[85%]">
            <h3 className="text-black1 text-[16px] font-Khula font-bold pt-8">ruwaifa</h3>
            <div className="font-Khula">
              <p className="pr-16 text-[14px]">I launched my boring niche version of zoominfo with ~10k leads on a google sheet at the end of Aug 2022...</p>
              <p className="pr-16 text-[14px] pt-3">I cold emailed prospects and if they were interested sent them a stripe payment link..</p>
              <p className="pr-16 text-[14px] pt-3">After payment they requested access to the g sheet..</p>
              <p className="pr-16 text-[14px] pt-3">That was my mvp..</p>
            </div>
          </div>
        </div>
      </div>
      {/* Post 2 */}
      <div className="w-[650px] h-[250px] border-x-[1.4px] border-[#000000]/25">
        <div className="flex">
          <div className="pt-8 pl-10 basis-[15%]">
            <Image src={"/Web3Ninja.svg"} alt="logo" width={46} height={43} />
          </div>
          <div className="basis-[85%]">
            <h3 className="text-black1 text-[16px] font-Khula font-bold pt-8">ruwaifa</h3>
            <div className="font-Khula">
              <p className="pr-16 text-[14px]">I launched my boring niche version of zoominfo with ~10k leads on a google sheet at the end of Aug 2022...</p>
              <p className="pr-16 text-[14px] pt-3">I cold emailed prospects and if they were interested sent them a stripe payment link..</p>
              <p className="pr-16 text-[14px] pt-3">After payment they requested access to the g sheet..</p>
              <p className="pr-16 text-[14px] pt-3">That was my mvp..</p>
            </div>
          </div>
        </div>
      </div>
      {/* Post 3 */}
      <div className="w-[650px] h-[200px] border-[1.4px] border-[#000000]/25">
        <div className="flex">
          <div className="pt-8 pl-10 basis-[15%]">
            <Image src={"/Web3Ninja.svg"} alt="logo" width={46} height={43} />
          </div>
          <div className="basis-[85%]">
            <h3 className="text-black1 text-[16px] font-Khula font-bold pt-8">ruwaifa</h3>
            <div className="font-Khula">
              <p className="pr-16 text-[14px]">I launched my boring niche version of zoominfo with ~10k leads on a google sheet at the end of Aug 2022...</p>
              <p className="pr-16 text-[14px] pt-3">I cold emailed prospects and if they were interested sent them a stripe payment link..</p>
              <p className="pr-16 text-[14px] pt-3">After payment they requested access to the g sheet..</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default Posts;
