import React from "react";
import { StyledAddButton, StyledFlex, StyledSecondTitle, StyledWrapper } from "../Styles";

const DeleteModal = ({ handleOnNoDelete, deletingCity, handleOnYesDelete }) => {
    return (
      <StyledWrapper padding="20px 30px" margin="0px 0px 20px">
        <StyledSecondTitle key="1">Удалить поездку: {deletingCity}</StyledSecondTitle>
        <StyledFlex justify="space-between">
          <StyledAddButton onClick={handleOnYesDelete}>Да</StyledAddButton>
          <StyledAddButton onClick={handleOnNoDelete}>Нет</StyledAddButton>
        </StyledFlex>
      </StyledWrapper>
    );
  };

  export default DeleteModal