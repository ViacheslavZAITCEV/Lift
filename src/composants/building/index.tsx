import React from 'react'
import Window from '../window'
import styled from 'styled-components';
import Lift from '../lift';

interface BuildingProps {
  floors: number;
  doors: { isOpen: boolean }[];
  windowsLeft: { isLit: boolean, isOpen: boolean }[];
  windowsRight: { isLit: boolean, isOpen: boolean }[];
}

const BuildingStyled = styled.div`
  margin: 2vh 2vw;
  width: 50vw;
  height: 70vh;
  background-color: #222;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;


function Building(props: BuildingProps) {

  let { floors, windowsLeft, windowsRight } = props;

  if (windowsLeft === undefined) {
    windowsLeft = []
  }
  let windowsLeftComponents = windowsLeft.map((w, index) => {
    return (
      <Window
        key={index}
        isLit={w.isLit}
        isOpen={w.isOpen}
      />
    )
  });

  if (windowsRight === undefined) {
    props.windowsRight = []
  }
  let windowsRightComponents = windowsRight.map((w, index) => {
    return (
      <Window
        key={index}
        isLit={w.isLit}
        isOpen={w.isOpen}
      />
    )
  });



  return (
    <BuildingStyled>
      <span>
        {windowsLeftComponents}
      </span>
      <span>
        <Lift
          floors={floors}
          floorLift={0}
          isMoving={false}
          liftDirectionMoving='none'
          isDoorOpen={true}
          isDoorMoving={false}
          liftDoorDirectionMoving='none'
        />

      </span>
      <span>
        {windowsRightComponents}
      </span>
    </BuildingStyled>
  )
}

export default Building