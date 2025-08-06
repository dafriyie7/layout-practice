import React from "react";
import Title from "./Title";
import { Image, PlayCircle, Star, Video } from "lucide-react";

const Trekkers = () => {
	return (
		<div className="w-full p-10">
			<Title heading={"Trekker's Highlights"} />

			<div className="flex max-md:flex-col">
				<div className="max-w-lg mt-10">
					<div className="flex items-center gap-3">
						<div className="bg-gray-300 h-15 w-15 rounded-full"></div>

						<div>
							<p className="text-xl font-semibold">
								Person's Name
							</p>
							<p className="text-md text-gray-700">
								Something here
							</p>
						</div>
					</div>

					<div className="flex">
						<Star className="h-7 pt-3" />
						<Star className="h-7 pt-3" />
						<Star className="h-7 pt-3" />
						<Star className="h-7 pt-3" />
						<Star className="h-7 pt-3" />
					</div>

					<p className="text-lg font-semibold pt-1">
						Some random heading here
					</p>
					<p className="text-gray-700 pt-1">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Possimus est consequatur laborum qui recusandae neque
						modi temporibus, suscipit, iste rerum nobis minima. Eum
						animi dolore accusamus, earum hic voluptatibus nobis!
					</p>
				</div>

				<div className="flex gap-5 max-md:mt-5 max-sm:flex-col">
					<div className="bg-gray-300 w-90 h-80 rounded-xl flex items-center justify-center">
						<Image size={44} />
					</div>

					<div className="flex flex-col w-70 gap-3">
						<div className="bg-gray-300 flex justify-center items-center h-40 rounded-xl">
							<PlayCircle size={44} />
						</div>

						<p className="text-lg font-semibold">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Perspiciatis
						</p>

						<div className="w-full flex justify-center cursor-pointer">
							<button className="border-3 border-gray-80 w-35 py-1 rounded-full cursor-pointer">
								Button
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Trekkers;
