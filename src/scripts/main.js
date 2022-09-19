console.log("Welcome to the main module")

import {createPlan} from './plan.js'
import {createCorn} from './seeds/corn.js'
import {addPlant} from './field.js'
import { usePlant } from './field.js'
import {plantSeeds} from './tractor.js'
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'




const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)
//const addSeed = addPlant(plantingSeeds)
const plantedField = usePlant()
const individualFoods = harvestPlants(plantedField)
const foodCatalog = catalog(individualFoods)


console.log(yearlyPlan)
console.log(plantedField)
console.log(individualFoods)

const parentHTMLElement = document.querySelector(".container")

parentHTMLElement.innerHTML = catalog(individualFoods)