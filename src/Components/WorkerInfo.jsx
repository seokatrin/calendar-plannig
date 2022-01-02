import React from "react";
import {
  StyledFlex,
  StyledSelect,
  StyledTripSpan,
  StyledWrapper,
} from "../Styles";

const WorkerInfo = ({activeTrips, activeDate}) => {
    
    const tripDays = []
    for(let day in activeTrips) {
      if(day.slice(3) === activeDate.slice(3)) {
        // add cities that are in current date
        tripDays.push(activeTrips[day])
      }
    }
    let days = tripDays.length; 
    const trips = []
    for(let i = 0; i < tripDays.length; i++) {
      if(tripDays[i] !== tripDays[i + 1]){ // count only cities
        trips.push(tripDays[i])
      }
    }

  return (
    <StyledWrapper padding="20px" margin="0px 0px 20px">
      <StyledSelect justify="space-between" border="1px" padding="0 0 20px"  align='center'>
        <StyledTripSpan size="24px" weight="600">
          {trips.length}
        </StyledTripSpan>
        <StyledTripSpan>поездки</StyledTripSpan>
      </StyledSelect>
      <StyledFlex justify="space-between" align='center'>
        <StyledTripSpan size="24px" weight="600">
          {days}
        </StyledTripSpan>
        <StyledTripSpan>дней коммандировки</StyledTripSpan>
      </StyledFlex>
    </StyledWrapper>
  );
};

export default WorkerInfo;
