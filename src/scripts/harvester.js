import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"

const soybeanSeed = createSoybean()
const wheatSeed = createWheat()
const asparagusSeed = createAsparagus()
const potatoSeed = createPotato()
const sunflowerSeed = createSunflower()

const seperatedCorn ={
    type: "Corn",
    height: 180,
    output: 6
}

export const harvestPlants = (plants) => {
    const Sowed = []
    // for (let i = 0; i < plant.output/2; i++) {
      //  Sowed.push(plants[i])
    //}
    for (const plant of plants)
    if (plant.output === 6 && plant.type ==="Corn"){
        Sowed.push(seperatedCorn)
        Sowed.push(seperatedCorn)
        Sowed.push(seperatedCorn)
    } else if (plant.output === 4 && plant.type === "Asparagus"){
    Sowed.push(asparagusSeed)
    Sowed.push(asparagusSeed)
    Sowed.push(asparagusSeed)
    Sowed.push(asparagusSeed)
    } else if (plant.output === 4 && plant.type === "Soybean"){
        Sowed.push(soybeanSeed)
        Sowed.push(soybeanSeed)
        Sowed.push(soybeanSeed)
        Sowed.push(soybeanSeed)
    } else if (plant.output === 6 && plant.type === "Wheat"){
        Sowed.push(wheatSeed)
        Sowed.push(wheatSeed)
        Sowed.push(wheatSeed)
        Sowed.push(wheatSeed)
        Sowed.push(wheatSeed)
        Sowed.push(wheatSeed)
    } else if (plant.output === 2){
        Sowed.push(potatoSeed)
        Sowed.push(potatoSeed)
    } else if (plant.output === 3 ){
        Sowed.push(sunflowerSeed)
        Sowed.push(sunflowerSeed)
        Sowed.push(sunflowerSeed)
    } return Sowed
    
}
