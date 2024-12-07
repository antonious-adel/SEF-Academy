import { createStore } from 'redux'
import Reducer1 from './Reducer1'

const toEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_
const  Store = createStore(Reducer1 , toEnhancer)

export default Store
