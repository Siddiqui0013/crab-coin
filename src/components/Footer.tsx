import Crab from '../assets/roadmap-crab.png'

export default function Footer() {
  return (
    <div className="md:bg-[url('./src/assets/hero-coins.png')] relative bg-cover md:bg-right-bottom bg-no-repeat
    bg-[#6DC9C2]  px-8 flex md:flex-row flex-col items-center gap-20 justify-center">
      <div className="order-1 md:order-2 md:w-[45%] w-[95%]">
      <img src={Crab} alt="logo" className="w-[100%] " />
      </div>
      <div className="info md:w-[45%] w-[95%] text-center order-2 md:order-1">
        <h1 className="text-4xl mb-12 font-extrabold md:text-7xl">$CRAB</h1>
        <p className="text-lg font-bold md:mb-0 mb-20 md:text-2xl">Ride the Waves of Fun with the Crab-Themed Meme Coin for Sideways Traders. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem, saepe cum ullam commodi dolorum quos, dignissimos inventore id vol</p>
      </div>
    </div>
  )
}
