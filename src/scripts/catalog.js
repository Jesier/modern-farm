
export const catalog = (Sowed) => {
   
      let htmlString = ``
    
     for (const items of Sowed){
     htmlString += `<section class="plant">${items.type}</section>`
     }
     

     return htmlString
 }