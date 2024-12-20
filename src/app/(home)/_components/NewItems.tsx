import React from 'react';
import TrendingItemsCard from './TrendingItemsCard';

const categories = [
    {
        name: 'All product',
        id: 1
    }, 
    {
        name: 'Bathroom',
        id: 1
    }, 
    {
        name: 'Bedroom',
        id: 1
    }, 
    {
        name: 'Decor',
        id: 1
    }, 
    {
        name: 'Furniture',
        id: 1
    }, 
    {
        name: 'Living Room',
        id: 1
    }
]

const NewItems = () => {
    const items = [1, 2, 3, 4, 5, 6, 7]
    return (
        <div className='mt-12'>
            <div>
                <div className='flex justify-between items-end'>
                    <button className='btn-secondary'>New Items</button>
                    <ul className='lg:flex gap-5 text-sm mb-[2px] hidden'>
                        {
                            categories.map((category) => <li className='group cursor-pointer hover:text-primary'>
                                {category.name}
                                <div className='h-[2px] mt-2 w-0 bg-primary group-hover:w-full transition-all duration-500'></div>
                            </li>
                            )
                        }
                    </ul>
                </div>
                <div className='bg-[#EEEEEE] w-full h-[1.4px] -mt-[1.4px] mb-10'>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
                {
                    items.map((item, i) => (
                        <div className={`${i === 0 && " md:col-span-2"}`}>
                            <TrendingItemsCard key={item} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default NewItems;