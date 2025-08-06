import { Image } from "lucide-react";

const Hero = () => {
	return (
		<section className="flex items-center between mb-15 p-10 max-md:flex-col md:flex-row">
			<div className="md:max-w-1/2 flex flex-col mr-20">
				<h1 className="text-7xl font-extrabold leading-25">
					Discover the World's <span>Hidden </span>Wonders
				</h1>

				<p className="text-gray-600">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Ipsa tempore suscipit, quas nobis veritatis incidunt
					quibusdam saepe eius? Assumenda deserunt nostrum adipisci
					veritatis atque pariatur vel rem! Provident, iusto saepe?
				</p>

				<div>
					<button className="text-white flex px-5 py-1 font-semibold bg-gray-800 rounded-full mt-5">
						Button
					</button>
				</div>
			</div>

			<div className="flex gap-10 items-center">
				<div className="bg-gray-300 rounded-xl w-60 h-96 flex justify-center items-center">
					<Image size={44} />
				</div>
				<div className="flex flex-col gap-10">
					<div className="bg-gray-300 rounded-xl w-60 h-72 flex justify-center items-center">
						<Image size={44} />
					</div>

					<div className="bg-gray-300 rounded-xl w-60 h-56 flex justify-center items-center">
						<Image size={44} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
