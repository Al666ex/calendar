import React from 'react'
import { TypedUseSelectorHook } from 'react-redux'
import { RootType } from '../store'
import { useSelector } from 'react-redux'

export const useTypedSelector :TypedUseSelectorHook<RootType> = useSelector
                                