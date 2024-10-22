import React from 'react'
import { useSelector } from 'react-redux'
import BoutiqueCard from './BoutiqueCard';

function BoutiqueList({text, rate}) 
{
    const boutiques =useSelector((state)=> state.boutique.Boutiquelist);
    console.log(boutiques)
    return (
    <div>
      
      <div className='containerr'>
      
    {boutiques.filter((el)=>el.description.toLowerCase().includes(text.toLowerCase()) &&
     (el.rating>=rate)).map((el)=><BoutiqueCard boutique={el} />).reverse()}

    </div></div>
  )
}

export default BoutiqueList