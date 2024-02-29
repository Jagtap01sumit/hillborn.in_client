import React, { useState } from 'react'
import { useEffect } from 'react'
import Appcontext from './Appcontext'

const Appstate = (props) => {

   const [overlay,setOverlay]=useState(false)
   const [themes,setThemes]=useState()
   const [categories,setCategories]=useState()

  return (
    <Appcontext.Provider value={{overlay,setOverlay,themes,setThemes,categories,setCategories}}>
        {props.children}
    </Appcontext.Provider>
  )
}

export default Appstate
