import SmallCards from "./SmallCards";
import Title from "./Title";
import { Image } from "lucide-react";

const LatestStories = () => {
	return (
		<div className="w-full p-10">
			<Title heading={"Latest Stories"} />

			<div className="p-10 flex max-md:flex-col justify-between gap-10">
				<div className="flex flex-col gap-5">
					<div className="bg-gray-300 h-70 w-lg rounded-xl flex items-center justify-center">
						<Image size={44} />
					</div>
					<p className="text-gray-700">Some random text</p>
					<h3 className="text-lg font-semibold">
						Another set of random text
					</h3>
					<p className="max-w-lg text-gray-700 text-sm">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Ratione explicabo eligendi, dolores quaerat
						laudantium error, repellat eum delectus suscipit
						quibusdam vitae veritatis aspernatur. Repellendus magni
						dicta iusto mollitia a totam!
					</p>
				</div>

				<div className="flex gap-3 flex-col">
					<SmallCards />
					<SmallCards />
					<SmallCards />
					<SmallCards />
				</div>
			</div>
		</div>
	);
};

export default LatestStories;
