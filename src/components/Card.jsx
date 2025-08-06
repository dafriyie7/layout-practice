import { Image } from "lucide-react";

const Card = () => {
	return (
		<div>
			<div className="bg-gray-300 rounded-xl w-60 h-96 flex justify-center items-center">
				<Image size={44} />
			</div>
			<p className="text-xl pt-4 font-semibold">Some random text</p>
			<p className="text-gray-600">Another text</p>
		</div>
	);
};

export default Card;
