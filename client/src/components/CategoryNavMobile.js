import React from 'react';
import { FiX } from 'react-icons/fi'
import {Link} from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const CategoryNavMobile = ({setcatNavMobile}) => {
  const {data} = useFetch('/categories');
  return(
    <div className='w-full h-full bg-primary p-8'>
      <div className='flex justify-end mb-8 '>
        <FiX onClick={()=>setcatNavMobile(false)} className='text-3xl cursor-pointer' />
      </div>
      <div className='flex flex-col gap-y-8'>
        {data?.map((category) => {
          return <Link onClick={() => setcatNavMobile(false)} to={`products/${category.id}`} className='uppercase font-medium' key={category.id}>{category.attributes.title} cameras</Link>
        })}
      </div>
    </div>
  )
};

export default CategoryNavMobile;
