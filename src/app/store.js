import { configureStore } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { rootReducer } from './rootReducer'


export const store = configureStore({
    reducer: rootReducer,
})


