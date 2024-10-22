import React from 'react'

function Livraison() {
  return (
    <div style={{display:'grid', gridTemplateColumns:"2fr 1fr"}}>
<div  style={{borderRadius:"30px", borderStyle:"ridge", marginTop:"30px", marginLeft:"20px"}}><h1 style={{paddingTop:"50px", marginLeft:"20px"}}>Livraison et Echange</h1>
<ul style={{paddingTop:"20px"}}>Livraison :
<li>Livraison à domicile en 48h-72h sur toute la Tunisie avec un frais s'élevant à 7 dt. </li>

<li>Vous pouvez  récupérer gratuitement votre commande dans notre boutique Fedia Fashion à Ksar Hellal .
     Commandez maintenant et nos livreurs seront à temps pour vous remettre vos colis.</li>

<li>Le délai de livraison sera calculé à partir du moment où le colis est réceptionné par le livreur .</li>
</ul>
<p style={{marginLeft:"20px"}}>Les jours ouvrés : du lundi au Samedi (Les Dimanches et les jours fériés ne sont pas inclus ).</p>


<ul>L'échange :
<li> L'échange ne peut être effectué qu'avant un délai de 24 heures à compter de la livraison de votre commande.</li>

</ul>

</div>
<img src="https://cdn.cloudtiktak.com/media/static/media/livraison_et_echange_-site_2_Plan_de_travail_1.jpg"  
style={{width:"550px", height:"550px", margin:"8px",padding:"5px 0px 5px 5px", borderRadius:"30px"}} />


    </div>
  )
}

export default Livraison