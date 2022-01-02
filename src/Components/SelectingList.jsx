import React, { useState } from "react";
import {
  StyledWrapper,
  StiledV,
  StyledMenu,
  StyledMenuItem,
  StyledSelectItem,
  StyledAddButton,
  StyledFlex,
} from "../Styles";

const SelectingList = ({
  itemsList,
  onClick,
  activeItem,
  title,
  subtitle,
  addButton,
  handleOnAddTrip,
  onCloseModal,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledWrapper padding="20px" margin="0px 0px 20px">
      {title}
      <StyledSelectItem
        justify="space-between"
        align="center"
        onClick={handleClick}
      >
        {activeItem ? <span>{activeItem}</span> : <span>{subtitle}</span>}

        <StiledV>v</StiledV>
        {isOpen && (
          <StyledMenu>
            {itemsList.map((item) => (
              <StyledMenuItem onClick={() => onClick(item)} key={item}>
                {item}
              </StyledMenuItem>
            ))}
          </StyledMenu>
        )}
      </StyledSelectItem>
      {addButton && (
        <AddButton onClick={handleOnAddTrip} onCloseModal={onCloseModal} />
      )}
    </StyledWrapper>
  );
};
export default SelectingList;

const AddButton = ({ onClick, onCloseModal }) => {
  return (
    <StyledFlex justify="space-between">
      <StyledAddButton onClick={onClick}>Добавить поездку</StyledAddButton>
      <StyledAddButton onClick={onCloseModal}>X</StyledAddButton>
    </StyledFlex>
  );
};
