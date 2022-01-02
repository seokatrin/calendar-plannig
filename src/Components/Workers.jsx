import React from "react";
import { StyledAppWrapper, StyledSecondTitle } from "../Styles";
import AddTripModal from "./AddTripModal";
import SelectingList from "./SelectingList";
import WorkerInfo from "./WorkerInfo";

const Workers = ({
  workers,
  handleSelect,
  activeWorker,
  activeTrips,
  isModalOpen,
  cities,
  chosenDate,
  addTrip,
  closeModal,
  deleteTrip,
  activeDate
}) => {

  const title = <StyledSecondTitle>Сотрудник</StyledSecondTitle>

  return (
    <StyledAppWrapper width="400px" margin="0 30px">
      <SelectingList
        itemsList={workers}
        onClick={handleSelect}
        activeItem={activeWorker}
        title={title}
        subtitle='Выберете сотрудника'
      />
      <WorkerInfo activeTrips={activeTrips} activeDate={activeDate}/>
      {isModalOpen && (
          <AddTripModal
            cities={cities}
            activeWorker={activeWorker}
            date={chosenDate}
            addTrip={addTrip}
            closeModal={closeModal}
            deleteTrip={deleteTrip}
          />
        )}
    </StyledAppWrapper>
  );
};

export default Workers;
