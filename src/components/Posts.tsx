import Image from "next/image";

function Posts() {
    return <div className="flex justify-center">
        <div className="w-[650px] h-[250px] border-[1.4px] border-x-[#000000]/25">
            <div className="flex">
                <div className="pt-8 pl-10 basis-[15%]">
                    <Image src={"/Web3Ninja.svg"} alt="logo" width={46} height={43} />
                </div>
                <div className="basis-[85%]">
                    <h3 className="text-black1 text-[16px] font-bold pt-8">ruwaifa</h3>
                    <div >
                        <p className="pr-16 text-[14px]">I launched my boring niche version of zoominfo with ~10k leads on a google sheet at the end of Aug 2022...</p>
                        <p className="pr-16 text-[14px] pt-3">I cold emailed prospects and if they were interested sent them a stripe payment link..</p>
                        <p className="pr-16 text-[14px] pt-3">After payment they requested access to the g sheet..</p>
                        <p className="pr-16 text-[14px] pt-3">That was my mvp..</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Posts;
