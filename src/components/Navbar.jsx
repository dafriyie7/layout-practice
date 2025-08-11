

const Navbar = () => {
  return (
		<nav className="flex items-center justify-between bg-white w-full pb-3 pt-6 px-10">
			<p className="text-3xl font-bold">Logo</p>

			<ul className="flex gap-5 font-semibold">
				<li className="hover:text-lg">Item</li>
				<li className="hover:text-lg">Item</li>
				<li className="hover:text-lg">Item</li>
				<li className="hover:text-lg">Item</li>
				<li className="hover:text-lg">Item</li>
			</ul>

			<div className="flex gap-3 items-center">
				<p className="font-semibold">Info</p>
				<button className="font-semibold bg-gray-800 text-white px-4 py-1 rounded-full">
					Button
				</button>
			</div>
		</nav>
  );
}

export default Navbar