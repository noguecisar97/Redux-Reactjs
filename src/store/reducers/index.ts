import { combineReducers } from 'redux'

import { busca } from './busca'
import reproduzVideo from './reproduzVideo/index'

const rootReducer = combineReducers({
  busca,
  reproduzVideo
})

export default rootReducer;