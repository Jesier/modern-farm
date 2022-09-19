import { addPlant } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createPotato } from "./seeds/potato.js"
import { usePlant } from "./field.js"

const soybeanSeed = createSoybean()
const wheatSeed = createWheat()
const asparagusSeed = createAsparagus()
const potatoSeed = createPotato()
const sunflowerSeed = createSunflower()
const cornSeed = createCorn()









export const plantSeeds = (yearlyplan) => {
    for (const row of yearlyplan){
        for (const plants of row){
            if (plants === "Corn"){
                addPlant(cornSeed)
            } else if (plants === "Asparagus"){
            addPlant(asparagusSeed)
            } else if (plants === "Soybean"){
                addPlant(soybeanSeed)
            } else if (plants === "Wheat"){
                addPlant(wheatSeed)
            } else if (plants === "Potato"){
                addPlant(potatoSeed)
            } else if (plants === "Sunflower"){
                addPlant(sunflowerSeed)
            }
        } 
    }
}