

import {imports as wp} from './gutenberg/imports'



import { configureAPI } from './api/api-fetch'


export const Laraberg = {

 
  wordpress: wp,

  configureAPI: configureAPI
}



window.Laraberg = Laraberg

export default Laraberg

