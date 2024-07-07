import React from 'react'
import MenuCard from '../shared/menuCard/MenuCard'
import CategoryList from '../categoryList/CategoryList'
import MenuCategoryList from '../shared/menuCategoryList/MenuCategoryLIst'

const menu = () => {
  return (
    <div className='basis-2/6 md:flex hidden'>

      <div className='flex flex-col gap-10'>
        <div>
        <span className=' text-gray-500 p-medium-16'>What's is hot</span>
        <h2 className='h5-bold'>Most Popular</h2>
        </div>
       
        <MenuCard />
        <MenuCard />
        <MenuCard />

        <div>
        <span className=' text-gray-500 p-medium-16'>Check More!</span>
        <h2 className='h5-bold'>Categories</h2>
        </div>

        <MenuCategoryList />

      </div>
    </div>

  )
}

export default menu