import React from 'react'
const Hero = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4'>
            <div className='max-h-[500px] relative'>
                <div className='absolute w-full h-full text-gray-200 max-h-[500px] 
                bg-black/15 flex flex-col justify-center'>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                        The <span className='text-green-800'> Best </span> 
                    </h1>
                    <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>
                        <span className='text-green-800'> Foods </span> Delivered
                    </h1>
                </div>
                <img className='w-full max-h-[500px] object-cover' src="https://images.pexels.com/photos/5949923/pexels-photo-5949923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>
            {/* Overlay */}
        </div>
    )
}

export default Hero