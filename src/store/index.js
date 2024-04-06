import {configureStore} from '@reduxjs/toolkit'
import randmReducer from './randmSlice'

export default configureStore({
    reducer: {
        randm: randmReducer,
    }
})