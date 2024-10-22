import React from 'react'
import Carrousel from './Carrousel'
import Editboutique from './EditBoutique'
import BoutiqueList from './BoutiqueList'
import ReactStars from "react-rating-stars-component";
import  boutiqueSlice  from '../redux/boutiqueslice';


function BoutiqueCard({boutique}) {
  return ( 
    

  <div className='cardd1'>
    <div className='cardd'>
<img src={boutique.image } style={{minWidthwidth:"250px", maxWidth:"250", minHeight:"350", maxHeight:"350"}} />
</div>
<div style={{ display:'flex', flexWrap:"wrap",justifyContent:"center", marginTop:"6px", textAlign:"center"}} >

<p style={{fontFamily:"cursive" , fontSize:"16px"  }} >{boutique.description}</p>

<ReactStars
                    edit={true}
                    count={5}
                    value={boutique.rating}
                    size={22}
                    activeColor="#ffd700" 
                  /> 

<p style={{fontFamily:"cursive" , fontSize:"16px", fontWeight:"bolder"}} >{boutique.prix}</p> 
</div>

<Editboutique boutique={boutique}/>

</div>
  )
}

export default BoutiqueCard