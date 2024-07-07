

import React from 'react';
import Featured from '@/components/featured/Featured';
import CategoryList from '@/components/categoryList/CategoryList';
import CardList from '@/components/cardList/CardList';
import Menu from '@/components/menu/Menu';

const CategoryPage = ({searchParams}) => {

  const page = parseInt(searchParams.page) || 1
  const category = searchParams.cat;

  return (
    <>
      <div>
        <p className='h5-bold flex-center wrapper '>Category: {category}</p>
      </div>
      <div className='flex gap-10 wrapper'>
        <CardList page={page} cat={category} />
        <Menu />
      </div>
    </>
  );
};

export default CategoryPage;
