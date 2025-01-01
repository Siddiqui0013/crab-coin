import { useState } from "react";
import HeroCrab from "../assets/hero-crab.png";

export default function Hero() {
	const [copySuccess, setCopySuccess] = useState(false);
	const handleCopy = async () => {
		try {
			const text = document.querySelector(
				".address .overflow-hidden"
			)?.textContent;
			if (text) {
				await navigator.clipboard.writeText(text);
			} else {
				throw new Error("No text found to copy");
			}
			setCopySuccess(true);
			setTimeout(() => setCopySuccess(false), 2000);
		} catch (err) {
			console.error("Failed to copy text: ", err);
			setCopySuccess(false);
		}
	};

	return (
		<div className="bg-[url('./src/assets/hero-coins.png')] relative bg-contain bg-left-top md:bg-right-bottom bg-no-repeat px-8 flex flex-col md:flex-row justify-around items-center">

			<div className="info flex flex-col order-2 md:order-1 gap-8 w-[90%] md:w-[45%] items-start">

				<h1 className="text-4xl md:text-9xl mt-12 text-stroke">$CRAB</h1>
				
                <p className="text-lg md:text-2xl">
					Ride the Waves of Fun with the Crab-Themed Meme Coin for Sideways
					Traders!
				</p>
				
                <p className="text-lg md:text-2xl font-bold text-[#FF6F61]">
					Token Address
				</p>

				<div className="relative flex items-center justify-center md:w-[65%] w-[100%]">
					<div className="overflow-hidden text-lg md:text-xl py-4 w-full border-black border-b-4 border-r-4 px-2 rounded-lg border">
						fgjreigrwhueht8438rhfuhfsuh
					</div>
					<button
						onClick={handleCopy}
						className="absolute right-2 top-2 h-10 px-4 bg-[#FF6F61] rounded-lg"
					>
						{copySuccess ? "Copied!" : "Copy"}
					</button>
				</div>
			</div>

            <div className="image w-[90%] md:w-[45%] flex order-1 md:order-2 justify-center items-center">
                <img src={HeroCrab} width={400} className="md:absolute -bottom-32 " alt="hero crab" />
            </div>


        </div>
	);
}
