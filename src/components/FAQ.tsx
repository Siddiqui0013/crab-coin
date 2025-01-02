import { useState } from "react"
import Coins from "../assets/hero-coins.png"
import CrabCoin from "../assets/hero-crab.png"

export default function FAQ() {

    const FAQs= [
        {
            question: "What is Crab Coin?",
            answer: "Crab Coin is a crab-themed meme coin celebrating the art of sideways trading and market stability. It unites a community of hodlers who embrace patience, consolidation, and a playful trading lifestyle. With sustainable tokenomics and a lighthearted spirit, Crab Coin adds fun and memes to your portfolio. 🚶‍♂️🦀."
        },
        {
            question: "How do I buy Crab Coin?",
            answer: "You can buy Crab Coin on DEXs like Raydium, Orca, and PancakeSwap. Simply connect your wallet, swap your tokens, and start hodling!"
        },
        {
            question: "How do I join the community?",
            answer: "Join the Crab Coin community on Twitter, Telegram, and Discord. Share your memes, trading tips, and crab-themed content with fellow hodlers!"
        },
        // {
        //     question: "What are the tokenomics of Crab Coin?",
        //     answer: "Crab Coin has a total supply of 1,000,000,000,000,000 CRAB. Of this, 50% was burned at launch, 40% was added to liquidity, and 10% was reserved for marketing and development. The token has a 10% transaction fee, with 5% redistributed to holders and 5% added to liquidity."
        // }
    ]

    const [selected, setSelected] = useState<number | null>(null)

  return (
    <>
                <h1 className="text-4xl md:text-6xl text-center mt-20 text-black font-extrabold">Frequently Asked Questions</h1>
    <div className='w-full flex items-center justify-center relative pt-12 px-8'>

<div className="img w-[45%] hidden md:block">
    <img src={Coins} className="" width={1200} alt="" />
</div>

<div className="box1 md:w-[45%] w-[100%] ">
    {
        FAQs.map((faq, index) => {
            return (
                <div className="w-full flex flex-col border-black border-4 p-5 md:p-8 rounded-2xl bg-[#FFA764] items-start justify-center mt-4" 
                key={index} onClick={() => selected === index ? setSelected(null) : setSelected(index)}>
                    <div className="flex cursor-pointer justify-between w-full">
                      <div className="1 flex gap-8 md:gap-12">
                      <h1 className="md:text-[28px] font-bold text-[22px]">Q.{ ++index } </h1>
                    <h1 className="md:text-[36px] text-[22px]">{faq.question}</h1>
                      </div>
                    <div className="2">
                      <h1 className="md:text-[38px] font-extrabold text-[26px]">{selected === index ? "-" : "+"}</h1>
                    </div>
                    </div>
                    {
                        selected === index && <p className="text-[20px] mt-8 md:text-[24px]">{faq.answer}</p>
                    }
                </div>
            )
        })
    }
</div>

<img src={CrabCoin} className="absolute md:rotate-12 -rotate-[30deg] -bottom-60 left-40 md:left-[10%] w-[40%] z-10 " alt="" />

</div>
    </>
    
  )
}
