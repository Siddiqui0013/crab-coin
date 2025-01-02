import tokenomicsImage from "../assets/tokenomics.png"
import CrabImg from "../assets/hero-crab.png"

export default function Tokenomics() {

    const tokenomicsData = [
        {
          category: "Community & Airdrops",
          percentage: "40%",
          allocated: "400,000,000"
        },
        {
          category: "Liquidity Pool",
          percentage: "25%",
          allocated: "250,000,000"
        },
        {
          category: "Team Allocation",
          percentage: "15%",
          allocated: "150,000,000"
        },
        {
          category: "Marketing & Partnership",
          percentage: "15%",
          allocated: "150,000,000"
        },
        {
          category: "Reserve & Future Burns",
          percentage: "5%",
          allocated: "50,000,000"
        }
      ];

  return (
    <div className="md:bg-[url('./src/assets/hero-coins.png')] relative bg-cover md:bg-right-bottom bg-no-repeat flex justify-center w-full py-12 p-2 md:px-8 min-h-[80vh]">
        <div className="token w-[100%] md:w-[80%] mt-12 border-8 border-black rounded-3xl bg-[#FFA764]">
            <h1 className="text-4xl md:text-7xl text-center mt-12 text-black font-extrabold">Tokenomics</h1>

        <div className="md:p-8 p-3 z-50">
        <div className="overflow-x-auto">
          <table className="w-full mb-20">
            <thead>
              <tr className="">
                <th className="text-left p-4 text-xl font-bold">Category</th>
                <th className="text-left md:block hidden p-4 text-xl font-bold">Percentage</th>
                <th className="text-left p-4 text-xl font-bold">Allocated Token</th>
              </tr>
            </thead>
            <tbody>
              {tokenomicsData.map((item, index) => (
                <tr key={index} className="border-b border-black/20">
                  <td className="p-4 text-lg">{item.category}</td>
                  <td className="p-4 text-lg hidden md:block">{item.percentage}</td>
                  <td className="p-4 text-lg">{item.allocated}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </div>

        <img src={tokenomicsImage} className="absolute md:-bottom-40 -bottom-40 md:w-[450px] w-[200px] right-0" alt="" />
        <img src={CrabImg} className="absolute hidden md:block md:-bottom-40 -bottom-40 left-0" width={300} alt="" />
        </div>
    </div>
  )
}
