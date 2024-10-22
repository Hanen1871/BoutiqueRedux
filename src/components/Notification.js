import React from 'react'

function Notification() {
  return (
    <div className='notif'> 
 <div className='not'>
<h3>Tous les notifications </h3>
<hr/>
<p class="NotificationPage__CategoryName-sc-4i0wcz-5 cUWBlV">Deals</p>
<hr/>

<p class="NotificationPage__CategoryName-sc-4i0wcz-5 cUWBlV">Your Orders</p>
<hr/>

<p class="NotificationPage__CategoryName-sc-4i0wcz-5 cUWBlV">Other</p>
<hr/>

</div>

<div>
<svg viewBox="0 0 201 216" class="Notification__EmptyPageStyle-uc4ing-10-Component lcagPE">
    <g fill="none" fill-rule="evenodd">
    <path d="M-16-8h232v232H-16z">
    </path>
    <g fill-rule="nonzero"><path d="M0 183l199.875-1.78s1.185-104.324 1.123-111.678c-3.54-5.294-89.655-66.23-89.655-66.23s-9.994-7.268-19.186-.271C81.539 10.076 0 71.657 0 71.657S.92 80.007 0 183z" fill="#D4E3EB">
        </path><path fill="#FFF" d="M23 30h157v163H23z"></path><path fill="#F0F5F7" d="M61 67h83v4H61zm0 27h83v4H61zm0 25h83v4H61z">
            </path><path fill="#F0F5F7" d="M201 73l-96 74.432L201 213zM0 73l96 74.424L0 213z">
                </path>
<path d="M2.762 216h194.344s5.3-1.758 3.533-8.796c-3.533-5.272-93.692-65.037-93.692-65.037s-6.297-5.66-15.466 1.316c-10.617 7.015-87.06 63.76-87.06 63.76s-8.726 5.234-1.659 8.757z" fill="#F8FAFB">
    </path></g></g></svg>
   
    <h2>Vous n’avez pas de notifications </h2>
    </div>
   
    </div>

  )
}

export default Notification