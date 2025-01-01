import AboutBg from "../assets/about.png"
import Coins from "../assets/hero-coins.png"

export default function About() {
  return (
    <div className='w-full relative py-12 px-8'>
        <div className="img md:h-[450px]">
            <div className="flex flex-col md:hidden items-center justify-center">
                <h1 className="text-3xl font-extrabold text-center ">About $CRAB</h1>
                <p className="text-center mt-4">Crab Coin is a crab-themed meme coin celebrating the art of sideways trading and market stability. It unites a community of hodlers who embrace patience, consolidation, and a playful trading lifestyle. With sustainable tokenomics and a lighthearted spirit, Crab Coin adds fun and memes to your portfolio. 🚶‍♂️🦀.</p>
            </div>
            <img src={AboutBg} className="hidden md:block absolute z-50 -bottom-72 right-[10%]" width={800} alt="" />
            <img src={Coins} className=" absolute md:-bottom-72 -bottom-40 left-40 md:left-[10%] z-10 " width={800} alt="" />
        </div>
    </div>
  )
}
