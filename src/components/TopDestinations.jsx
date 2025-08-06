import Title from "./Title";
import Card from "./Card";

const TopDestinations = () => {
	return (
		<div className="p-10 w-full">
			<Title heading={"Top Destinations"} />

			<div className="flex justify-center items-center py-7">
				<ul className="flex gap-10 text-xl text-gray-600">
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
				</ul>

				<button className="ml-7 bg-transparent text-black border-3 border-b-black px-10 rounded-full py-1 font-semibold cursor-pointer">
					Button
				</button>
			</div>

			<div className="flex gap-10 justify-center flex-1 overflow-scroll no-scrollbar">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default TopDestinations;
