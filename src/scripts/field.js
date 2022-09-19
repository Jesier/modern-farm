const plants = []

//fuction that accepts a seed object and checks if its an array, if it is it will push each element in the array else just push the seed
export const addPlant = (seed) => {
    if(Array.isArray(seed) == true){
       seed.forEach(element => {
       plants.push(element)         
       }); 
    }  else {
     plants.push(seed)
 }
}

export const usePlant = () => {
    return plants.map(plant=>({...plant}))
}