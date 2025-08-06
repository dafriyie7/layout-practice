import BeforeFooter from './components/BeforeFooter';
import Hero from './components/Hero'
import LatestStories from './components/LatestStories';
import Navbar from './components/Navbar';
import TopDestinations from './components/TopDestinations';
import Trekkers from './components/Trekkers';

const App = () => {
  return (
		<main className="flex flex-col items-center bg-gray-100 min-h-screen w-full max-w-screen-xl mx-auto">
		  <Navbar />
		  <Hero />
		  <TopDestinations />
		  <LatestStories />
		  <Trekkers />
		  <BeforeFooter />
		</main>
  );
}

export default App