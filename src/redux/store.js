import { configureStore } from '@reduxjs/toolkit'
import boutiqueSlice  from './boutiqueslice'

export const store = configureStore({
  reducer: {
    boutique :boutiqueSlice
  },
})

