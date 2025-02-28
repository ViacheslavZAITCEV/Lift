import React from "react";
import styled from "styled-components";
import { enumDirection, enumDoorDirection } from "../types";



interface LiftProps {
  floors: number;
  floorLift: number;
  isMoving: boolean;
  liftDirectionMoving: enumDirection;
  isDoorOpen: boolean;
  isDoorMoving: boolean;
  liftDoorDirectionMoving: enumDoorDirection;
}

interface LiftDoorProps {
  isDoorOpen: boolean;
}


const LiftStyled = styled.div`
  margin: 40px 1vw 20px;
  width: 60px;
  height: 120px;
  background-color: grey;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const LiftDoorStyled = styled.div<LiftDoorProps>`
  width: 28px;
  height: 118px;
  background-color: ${props => props.isDoorOpen ? 'black' : 'white'};
  color: ${props => props.isDoorOpen ? 'white' : 'black'};
  border: 1px solid grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Lift: React.FC<LiftProps> = ({ floors, floorLift, isMoving, liftDirectionMoving, isDoorOpen, isDoorMoving, liftDoorDirectionMoving }) => {
  const [liftFloor, setLiftFloor] = React.useState(floorLift);
  const [liftMoving, setLiftMoving] = React.useState(isMoving);
  const [liftDirection, setLiftDirection] = React.useState(liftDirectionMoving);
  const [liftDoorOpen, setLiftDoorOpen] = React.useState(isDoorOpen);
  const [liftDoorMoving, setLiftDoorMoving] = React.useState(isDoorMoving);
  const [liftDoorDirection, setLiftDoorDirection] = React.useState(liftDoorDirectionMoving);

  function handleClickDoor() {
    setLiftDoorOpen(!liftDoorOpen);
  }

  return (
    <LiftStyled>
      <span>
        <LiftDoorStyled
          isDoorOpen={liftDoorOpen}
          onClick={() => handleClickDoor()}
        />
      </span>
      <span>
        <LiftDoorStyled
          isDoorOpen={liftDoorOpen}
          onClick={() => handleClickDoor()}
        />
      </span>
    </LiftStyled>
  );
};

export default Lift;