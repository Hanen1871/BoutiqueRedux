import { createSlice } from '@reduxjs/toolkit'



const initialState = {
    Boutiquelist:[
      {
        description: "ISADORA pour femme de taille intermidiaire " ,
        prix: "95 dt",
        rating:"5",
        image :"https://th.bing.com/th/id/OIP.bq1lumnoPYMUcMwJmIzYhwHaJQ?w:1080&h:1349&rs:1&pid:ImgDetMain",
         },
        
        {
        description: "Chemisier en dentelle guipure à col montant" ,
        prix: "105 dt",
        rating:"3",
        image:"https://cdn.shopify.com/s/files/1/0454/7110/5181/products/72ba331c-163d-4cdf-a378-206ebab6c063-71825-1_1024x1024@2x.jpg?v:1620937044",  
              },
         {  
        description: "Robe ISADORA pour femme T34 à 50 " ,        
        rating:"4",
        prix: "95 dt",
        image:"https://i.pinimg.com/originals/fc/a9/15/fca91552000de64c2ba5d14b10bb1124.jpg", 
        },
        
        {
            image:"https://th.bing.com/th?id=OIF.cggpXwlDX%2b9heHB11iefMw&rs=1&pid=ImgDetMain",
            description: "Chemisier JESSICA Chic caché avec sous-patte" ,
            prix: "95 dt",
            rating:"3",

                },
            
            {
            image:"https://th.bing.com/th/id/OIP.DzSUffM-DmHzcbn5OghXywHaHa?rs:1&pid:ImgDetMain",  
            description: "Ensemble pour fillette de differents age " ,
            prix: "95 dt",
            rating:"4",

                        },
        
             {  
            image : "https://i.pinimg.com/736x/fa/3d/eb/fa3deb45d2ab99f61f81a13af1d70c17.jpg",  
            description: " Robe ISADORA pour fille differents couleur" ,
            prix: "95 dt",
            rating:"3",

            },
        
            {
                image:"https://static.parisfashionshops.com/paris/images/femme/issyma/ensembles/a0AW5000006qQivMAE/ensemble-haut-oversize-et-pantalon-decontracte_camel_66f0c85e49f38.jpg?image_process=resize,w_1900",
                description: " Enbsemble Haut oversize et pantalon décontract" ,
                prix: "200 dt",
                rating:"4",
                    },
                
                {
                
                image:"https://th.bing.com/th/id/OIP.QIvEbMZwZcA93IRYzFrm7AHaE7?rs:1&pid:ImgDetMain",  
                description: " Des Accessoires qui occupent une place  dans le stylisme " ,
                rating:"5",
                prix: "115 dt",
                            },
                 {  
                image:"https://hayden-hill.com/cdn/shop/files/AdobeStock_275629153.jpg?v:1656438263&width:512",  
                description: "des sacs à main , les bijoux et les lunettes de soleil" ,
                rating:"3",
                prix: "95 dt",
                },
                {
                    image:"https://i.pinimg.com/originals/2e/43/57/2e4357d1a81c8c88245af3e8460aa67d.jpg",
                    description: "Vous et votre enfant rayonnerez dans cette superbe robe " ,
                    rating:"4",
                    prix: "80 dt",
                        },
                    
                    {
                    
                    image:"https://th.bing.com/th/id/OIP.qmN217wbnnSjeMDyc9v5XAHaHa?rs:1&pid:ImgDetMain",  
                    description: "Tenue sport pour homme tres sport chic " ,
                    rating:"5",
                    prix: "120 dt",
                                },
                     {  
                     
                    image:"https://th.bing.com/th/id/OIP.5NSewauADlK4demmJGozZQAAAA?rs=1&pid=ImgDetMain",  
                    description: "Ensemble de quatres pièces bébé garçon " ,
                    rating:"5",
                    prix: "85dt",
                    }        
        ]
};

export const boutiqueSlice = createSlice({
  name: 'boutique',
  initialState,
  reducers: {

    addboutique: (state, action) => {
     state.Boutiquelist.push(action.payload)
    },
    editboutique: (state, action) => {
        let i =state.Boutiquelist.findIndex((el)=>el.id===action.payload.id);
        state.Boutiquelist[i]=action.payload.edited
       },
  },
})

export const { addboutique, editboutique } = boutiqueSlice.actions

export default boutiqueSlice.reducer