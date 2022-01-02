import React from "react";
import { getCalendarNumbers } from "../calendarNumbers";
import { Div, Table, TD, TH } from "../Styles";

const Calendar = ({
  year,
  month,
  holidays,
  cityColor,
  activeTrip,
  handleChoseDate,
}) => {
  const week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  const daysArr = getCalendarNumbers(year, month, holidays, activeTrip);

  const weeksCount = daysArr.length / 7;
  const daysInWeek = 7;
  const tBody = [];
  // create array of tr with td
  for (let i = 0; i < weeksCount; i++) {
    tBody.push(
      <TR
        arr={daysArr.slice(i * daysInWeek, i * daysInWeek + daysInWeek)}
        indx={i}
        cityColor={cityColor}
        key={i}
      />
    );
  }

  return (
    <Table
      onDoubleClick={(e) => {
        handleChoseDate(e.target.dataset.date);
      }}
    >
      <thead>
        <tr>
          {week.map((day) => (
            <TH key={day}>{day}</TH>
          ))}
        </tr>
      </thead>
      <tbody>{tBody}</tbody>
    </Table>
  );
};

export default Calendar;



function TR({ arr, indx, cityColor }) {
  return (
    <tr key={indx + 40}>
      {arr.map((day) => (
        <TD
          color={day.otherMonth ? "#a4b0be" : "#000"}
          key={day.id}
          data-date={day.date}
        >
          {day.date.getDate()}
          {day.event ? (
            <Div background={cityColor[day.event]}>{day.event} </Div>
          ) : (
            ""
          )}
        </TD>
      ))}
    </tr>
  );
}
