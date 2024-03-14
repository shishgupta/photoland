import React from 'react';
import useFetch from '../hooks/useFetch';
import ProductSlider from '../components/ProductSlider'

const LatestProducts = () => {
  const {data} = useFetch('/products?populate=*&filters[isNew]=true')
  return( 
  <div className='mb-16'>
  <div className="container  mx-auto">
<h2 className='h2 text-center mb-6 xl:text-left'>Latest Products</h2>
  </div>
  <ProductSlider data={data} />
</div>
  )
};

export default LatestProducts;
