import Title from './Title'

const BeforeFooter = () => {
  return (
	  <div className='w-full bg-gray-400 flex flex-col items-center'>
		  <h2 className='text-5xl max-w-2xl text-center font-extrabold pt-17 text-white'>Get Your Gravel Inspiration Straight to Your Inbox</h2>

		  <div className='max-w-2xl flex gap-5 pt-8'>
			  <input type="email" placeholder='example.gmail.com' className='bg-white rounded-full pl-2' />
			  <button className='bg-gray-800 px-5 rounded-full text-white py-1'>Button</button>
		  </div>

		  <p className='pt-5 pb-12 text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In recusandae atque quia voluptatum quidem,</p>
	</div>
  )
}

export default BeforeFooter