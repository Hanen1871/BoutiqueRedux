import { Link } from 'react-router-dom'
import Productspromo from './Productspromo'
import { useSelector } from 'react-redux'

function Promos() {
  return (
    <div style={{display:"flex", justifyContent:"space-around"}}>

<Link to="/productpromo">
<img src="https://th.bing.com/th/id/OIP.0Hfk3UNPB5Zbf-KP1vm33wHaE7?w=626&h=417&rs=1&pid=ImgDetMain" 
 style={{width:"550px", height:"550px", margin:"8px",padding:"5px 0px 5px 5px", borderRadius:"30px"}} /></Link>

<Link to="/productpromo1">
<img src="https://th.bing.com/th/id/OIP.QOoBuC2Yh13R5lrlWfEt4AHaHa?w=1200&h=1200&rs=1&pid=ImgDetMain"  
style={{width:"550px", height:"550px", margin:"8px",padding:"5px 0px 5px 5px", borderRadius:"30px"}} /></Link>



</div>
  )
}

export default Promos