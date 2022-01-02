import React, { useState } from "react";
import { StyledWrapper } from "../Styles";
import Calendar from "./Calendar";
import SelectMonth from "./SelectMonth";

const CalendarWrapper = ({
  holidays,
  cityColor,
  activeTrips,
  handleChoseDate,
  activeDate,
  selectActiveDate,
}) => {
  let month = activeDate.getMonth();
  let year = activeDate.getFullYear();

  const handleClick = (arrow) => {
    if (arrow === "back") {
      month === 0
        ? selectActiveDate(new Date(--year, 11))
        : selectActiveDate(new Date(year, --month));
    } else {
      month === 11
        ? selectActiveDate(new Date(++year, 0))
        : selectActiveDate(new Date(year, ++month));
    }
  };
  return (
    <StyledWrapper padding="20px" width="1000px">
      <SelectMonth year={year} month={month} onClick={handleClick} />
      <Calendar
        year={year}
        month={month}
        holidays={holidays}
        activeTrip={activeTrips}
        cityColor={cityColor}
        handleChoseDate={handleChoseDate}
      />
    </StyledWrapper>
  );
};

export default CalendarWrapper;
