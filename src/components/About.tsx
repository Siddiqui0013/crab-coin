import AboutBg from "../assets/about.png"
import Coins from "../assets/hero-coins.png"

export default function About() {
  return (
    <div className='w-full relative pt-12 px-8'>
        <div className="img md:h-[450px]">
            <div className="flex flex-col md:hidden items-center justify-center">
                <h1 className="text-3xl my-4 font-extrabold text-center ">About $CRAB</h1>
                <p className="text-center mt-4">Crab Coin is a crab-themed meme coin celebrating the art of sideways trading and market stability. It unites a community of hodlers who embrace patience, consolidation, and a playful trading lifestyle. With sustainable tokenomics and a lighthearted spirit, Crab Coin adds fun and memes to your portfolio. 🚶‍♂️🦀.</p>
            </div>
            <img src={AboutBg} className="hidden md:block absolute z-50 -bottom-72 right-[10%]" width={800} alt="" />
            <img src={Coins} className="hidden md:block absolute md:-bottom-72 -bottom-40 left-40 md:left-[10%] w[80%]" />
        </div>
        <div className="absolute">
        <img src={Coins} className=" md:hidden -bottom-40 left-40 w[80%]" />
        </div>
    </div>
  )
}


// export default function About() {
//   return (
//     // Add relative and overflow-hidden to the main container
//     <div className='w-full relative py-12 px-8 overflow-hidden'>
//       {/* Add specific height for mobile and desktop */}
//       <div className="img md:h-[450px] h-[300px] relative">
//         <div className="flex flex-col md:hidden items-center justify-center">
//           <h1 className="text-3xl font-extrabold text-center">About $CRAB</h1>
//           <p className="text-center mt-4">
//             Crab Coin is a crab-themed meme coin celebrating the art of sideways trading and market stability. It unites a community of hodlers who embrace patience, consolidation, and a playful trading lifestyle. With sustainable tokenomics and a lighthearted spirit, Crab Coin adds fun and memes to your portfolio. 🚶‍♂️🦀.
//           </p>
//         </div>
//         <img 
//           src={AboutBg} 
//           className="hidden md:block absolute z-50 -bottom-72 right-[10%]" 
//           width={800} 
//           alt="" 
//         />
//         {/* Adjust mobile positioning and add max-width for mobile */}
//         <img 
//           src={Coins} 
//           className="absolute md:-bottom-72 -bottom-20 left-40 md:left-[10%] max-w-[90%] md:max-w-none"
//           alt=""
//         />
//       </div>
//     </div>
//   )
// }