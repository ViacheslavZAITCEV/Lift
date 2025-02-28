import React from 'react';
import styled from 'styled-components';



interface WindowProps {
  isLit: boolean;
  isOpen: boolean;
}

const WindowStyled = styled.span<WindowProps>`
  margin: 40px 1vw 20px;
  width: 60px;
  height: 120px;
  background-color: ${props => props.isLit ? 'yellow' : 'black'};
  color: ${props => props.isLit ? 'black' : 'white'};
  border: 1px solid grey;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const Window: React.FC<WindowProps> = ({ isLit, isOpen }) => {
  const [winLit, setWinLit] = React.useState(isLit);
  const [winOpen, setWinOpen] = React.useState(isOpen);
  const handleClick = () => {
    setWinLit(!winLit);
  }
  return (
    < WindowStyled
      isLit={winLit}
      isOpen={winOpen}
      onClick={() => handleClick()}
    />
  );
};

export default Window