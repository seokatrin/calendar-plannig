export const getCalendarNumbers = (year, month, holidays, activeTrip) => {

  const daysArr = [];

  const date = new Date(year, month, 1);
  let firstDayInMonth = date.getDay();
  const lastDayInMonth =  new Date(date.getFullYear(),
  date.getMonth() + 1,
  0)
  const lastDay = lastDayInMonth.getDate();
  const lastWeekDay = lastDayInMonth.getDay();

  // add days of previous month if current month doesn't start on monday 
  if (firstDayInMonth > 1) {
    for (let i = 2 - firstDayInMonth; i <= 0; i++) {
      daysArr.push(createADay(i, year, month, true, holidays, activeTrip));
    }
  } else if (firstDayInMonth === 0) { //if month starts on Sunday 
    for (let i = -5; i <= 0; i++) {
      daysArr.push(createADay(i, year, month, true, holidays, activeTrip));
    }
  }
  for (let i = 1; i <= lastDay; i++) {  // add days of current month
    daysArr.push(createADay(i, year, month, false, holidays, activeTrip));
  }
  if (lastWeekDay > 0) {   // if month doesn't end on Sunday add day of next month 
    for (let i = lastDay + 1; i <= lastDay + (7 - lastWeekDay); i++) {
      daysArr.push(createADay(i, year, month, true, holidays, activeTrip));
    }
  }

  function createADay(i, year, month, otherMonth, holidays, activeTrip) {
    const date = new Date(year, month, i);
    // check if current day is holiday 
    const event = holidays.find(
      (holiday) => holiday.slice(0, 5) === date.toLocaleDateString().slice(0, 5)
    );
    // check if current day is worker's trip
    const trip = Object.keys(activeTrip).find(
      (day) => day === date.toLocaleDateString()
    );

    return {
      date,
      id: i,
      otherMonth, // to highlight days that are not in current month
      event: trip
        ? activeTrip[date.toLocaleDateString()]  // find city
        : event
        ? "Праздник"
        : date.getDay() === 0 || date.getDay() === 6 // if day is saturday or sunday 
        ? "Выходной"
        : false,
    };
  }

  return daysArr;
};
