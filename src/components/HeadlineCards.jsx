import React from 'react'

const HeadlineCards = () => {
    return (
        <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* Card */}
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='Font-bold text-2xl px-2 pt-4'>Sun's Out</p>
                    <p className='px-2'>Through 1/12</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Name</button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover rounded-ss-xl'
                    src="https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt='/'
                />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='Font-bold text-2xl px-2 pt-4'>New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Name</button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover rounded-ss-xl'
                    src="https://images.pexels.com/photos/803963/pexels-photo-803963.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt='/'
                />
            </div>
            <div className='rounded-xl relative'>
                {/* Overlay */}
                <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                    <p className='Font-bold text-2xl px-2 pt-4'>We Deliver Pasta</p>
                    <p className='px-2'>Pasta Treats</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'>Order Name</button>
                </div>
                <img className='rounded-xl max-h-[160px] md:max-h-[200px] w-full object-cover rounded-ss-xl'
                    src="https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt='/'
                />
            </div>
        </div>
    )
}

export default HeadlineCards