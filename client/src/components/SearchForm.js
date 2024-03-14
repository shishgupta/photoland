import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState('');
  const [isAnimating, setisAnimating] = useState(false);
  useEffect(()=>{
    const timeout = setTimeout(() => {
      setisAnimating(false)
    }, 1000);
    return () => clearTimeout(timeout)
  })
  const handleSearchInput = (e) =>{
    setsearchTerm(e.target.value)
  } 
  const handleSubmit = (e) =>{
    e.preventDefault();
    // console.log(searchTerm)
    if(searchTerm.length>0){
      navigate(`/search?query=${searchTerm}`);
      document.querySelector('input').value='';
      setsearchTerm('')
    }
    else{
      setisAnimating(true)
      // alert('please search for something')
    }
  }
  return(
    <form onSubmit={handleSubmit} className={`${ isAnimating ? 'animate-shake':'animate-none'} w-full relative`}>
      <input onChange={handleSearchInput} className='input' type='text' placeholder='Search for a product...' />
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
        <FiSearch className='text-xl' />
      </button>
    </form>

  )
};

export default SearchForm;
