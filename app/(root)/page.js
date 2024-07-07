
import React from 'react'
import Featured from '@/components/featured/Featured'
import CategoryList from '@/components/categoryList/CategoryList'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'


const Page = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1; 
  return (
    <>

      <Featured />
      <CategoryList />
      <div className='flex gap-10 wrapper'>
      <CardList page={page} />
      <Menu />
      </div>
      
    </>
);
};

export default Page
