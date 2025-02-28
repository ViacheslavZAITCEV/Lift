import React, { useState } from 'react'
import Building from '../../composants/building'
// import ControlPanel from '../../composants/controlPanel'
//import { connect } from 'react-redux'
import { WindowsType } from '../../composants/types'


export const Home = () => {
  /*
    const [windowsLeft, setWindowsLeft] = useState<WindowsType>([
      { isLit: false, isOpen: true },
      { isLit: true, isOpen: true },
      { isLit: false, isOpen: true }
    ])
  */

  const floors = 3
  const doors = [{ isOpen: true }, { isOpen: true }, { isOpen: true }]
  var windowsLeft: WindowsType = [
    { isLit: false, isOpen: true },
    { isLit: true, isOpen: true },
    { isLit: false, isOpen: true },
  ]
  var windowsRight: WindowsType = [
    { isLit: false, isOpen: true },
    { isLit: true, isOpen: true },
    { isLit: false, isOpen: true },
  ]
  //const doors = [{ isOpen: true }, { isOpen: true }, { isOpen: true }]

  // <ControlPanel />

  return (
    <div>
      Home Page
      <Building
        floors={floors}
        doors={doors}
        windowsLeft={windowsLeft}
        windowsRight={windowsRight}
      />

    </div>
  )
}










