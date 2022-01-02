import React from "react";
import { StyledSelect, Button, StyledSecondTitle } from "../Styles";

const months = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const SelectMonth = ({month, year, onClick}) => {
  return (
    <StyledSelect justify="space-between" align="center">
      <Month year={year} month={months[month]} />
      <SelectButtons onClick={onClick} />
    </StyledSelect>
  );
};

function Month({ month, year }) {
  return (
    <StyledSecondTitle size='26px'>
      {month} {year}
    </StyledSecondTitle>
  );
}

function SelectButtons({onClick}) {
  return (
    <div>
      <Button onClick={() => onClick('back')} >{"<"}</Button>
      <Button onClick={() => onClick('forward')} >{">"}</Button>
    </div>
  );
}

export default SelectMonth;
