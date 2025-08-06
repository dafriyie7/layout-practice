import { Image } from "lucide-react";

const SmallCards = () => {
	return (
		<div className="flex gap-4">
			<div>
				<div className="bg-gray-300 w-29 h-29 rounded-xl flex justify-center items-center">
					<Image size={34} />
				</div>
			</div>
			<div>
				<p className="text-gray-700">Some text</p>
				<h3 className="font-semibold mt-2">
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Laboriosam aspernatur nobis quidem nesciunt ut corrupti,
				</h3>
				<p className="text-gray-700 mt-4">Another text</p>
			</div>
		</div>
	);
};

export default SmallCards;
