import React, { useState } from "react";
import { StyledSecondTitle, StyledWrapper } from "../Styles";
import DeleteModal from "./DeleteModal";
import SelectingList from "./SelectingList";

const AddTripModal = ({
  cities,
  activeWorker,
  date,
  addTrip,
  closeModal,
  deleteTrip,
}) => {
  const [city, setCity] = useState("");
  const [deleteWindow, setDeleteWindow] = useState(date.city);

  const handleClick = (city) => setCity(city);

  const handleOnAddTrip = () => city && addTrip(activeWorker, date.date, city);

  const handleOnNoDelete = () => setDeleteWindow(false);

  const handleOnYesDelete = () => {
    deleteTrip(activeWorker, date);
    closeModal();
  };

  const title = [
    <StyledSecondTitle key="1">Сотрудник: {activeWorker}</StyledSecondTitle>,
    <StyledSecondTitle key="2">Поездка на: {date.date}</StyledSecondTitle>,
  ];

  return (
    <StyledWrapper margin="30px 0">
      {deleteWindow ? (
        <DeleteModal
          handleOnNoDelete={handleOnNoDelete}
          deletingCity={date.city}
          handleOnYesDelete={handleOnYesDelete}
        />
      ) : (
        <SelectingList
          itemsList={cities.slice(0, cities.length - 1)}
          onClick={handleClick}
          activeItem={city}
          title={title}
          subtitle="Выберете город"
          addButton={true}
          handleOnAddTrip={handleOnAddTrip}
          onCloseModal={closeModal}
        />
      )}
    </StyledWrapper>
  );
};

export default AddTripModal;
