import React from 'react'
import Promos from './Promos'
import Marquee from 'react-fast-marquee'

function Productspromo() {
  return (<Marquee direction='right' >
    <div>
    <div className='prod'style={{display:"flex", justifyContent:"space-around", marginTop:"30px", flexWrap:"wrap"}}>


<img src='https://th.bing.com/th/id/OIP.S_K8vfIYuwDzARMOez60FwHaHd?rs=1&pid=ImgDetMain'style={{width:"300px", height:"280px"}} />
<img src='https://static01.eu/icatalogue.fr/images/uploads/310723/vetement-d-interieur92738.jpg' style={{width:"300px", height:"280px"}} />
<img src='https://th.bing.com/th/id/OIP.Ljtlh4-m9Bk4NW7yK33lKwHaMj?rs=1&pid=ImgDetMain' style={{width:"300px", height:"280px"}}/>
<img src='https://www.bleu-bonheur.fr/media/catalog/product/cache/1cf62c7e09bfb2dd36a43a996e02ea13/5/3/53527-01.jpg'style={{width:"300px", height:"280px"}}/>
<img src='https://www.bleu-bonheur.fr/media/catalog/product/cache/1cf62c7e09bfb2dd36a43a996e02ea13/5/3/53131-01.jpg' style={{width:"300px", height:"280px"}} />
</div>

<div className='prod'style={{display:"flex", justifyContent:"space-around", marginTop:"30px", flexWrap:"wrap"}}>

<img src='https://cataloguesfrance.com/wp-content/uploads/2023/02/5fa84f4ff0f94962d43f505c8cf7f75b.jpg' style={{width:"300px", height:"280px"}} />
<img src="https://th.bing.com/th/id/OIP.qmN217wbnnSjeMDyc9v5XAHaHa?rs:1&pid:ImgDetMain" style={{width:"300px", height:"280px"}}/> 
<img src='https://www.bleu-bonheur.fr/media/catalog/product/cache/1cf62c7e09bfb2dd36a43a996e02ea13/5/2/52757-01.jpg' style={{width:"300px", height:"280px"}}/>
<img src="https://th.bing.com/th/id/OIP.QIvEbMZwZcA93IRYzFrm7AHaE7?rs:1&pid:ImgDetMain" style={{width:"300px", height:"280px"}}/>
<img src="https://www.francetvinfo.fr/image/75im4hgi8-af93/570/320/14111315.jpg" style={{width:"300px", height:"280px"}}/>

    </div>
    </div>

    </Marquee>
  )
}

export default Productspromo