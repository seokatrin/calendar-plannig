import { useEffect, useState } from "react";
import "./App.css";
import CalendarWrapper from "./Components/CalendarWrapper";
import Workers from "./Components/Workers";
import { Api } from "./DataApi";
import { Glogal, StyledAppWrapper, StyledFlex, StyledTitle } from "./Styles";

function App() {
  const [holidays, setHolidays] = useState([]);
  const [trips, setTrips] = useState({});
  const [cityColor, setCityColor] = useState([]);
  const [activeWorker, setActiveWorker] = useState("");
  const [activeTrips, setActiveTrips] = useState({});
  const [chosenDate, setChosenDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeDate, setActiveDate] = useState(new Date());

  useEffect(() => {
    setHolidays(Api.getHolidays());
    setTrips(Api.getTrips());
    setCityColor(Api.getColors());
  }, []);

  const handleSelect = (worker) => {
    setActiveWorker(worker);
    setActiveTrips(trips[worker]);
  };

  const handleChoseDate = (date) => {
    if (activeWorker && new Date() < new Date(date)) {
      const day = new Date(date).toLocaleDateString();
      setChosenDate({ date: day, city: activeTrips[day] });
      setIsModalOpen(true);
    }
  };

  const addTrip = (worker, date, city) => {
    Api.addTrip(worker, date, city);
    const trips = Api.getTrips();
    setTrips(trips);
    setActiveTrips(trips[worker]);
  };

  const deleteTrip = (worker, date) => {
    Api.deleteTrip(worker, date.date);
    const trips = Api.getTrips();
    setTrips(trips);
    setActiveTrips(trips[worker]);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const selectActiveDate = (date) => setActiveDate(date);

  return (
    <>
      <Glogal />
      <StyledAppWrapper padding="0 0 60px ">
        <StyledTitle>Планирование</StyledTitle>
        <StyledFlex>
          <CalendarWrapper
            holidays={holidays}
            cityColor={cityColor}
            activeTrips={activeTrips}
            handleChoseDate={handleChoseDate}
            activeDate={activeDate}
            selectActiveDate={selectActiveDate}
          />
          <Workers
            workers={Object.keys(trips)}
            trips={trips}
            handleSelect={handleSelect}
            activeWorker={activeWorker}
            activeTrips={activeTrips}
            isModalOpen={isModalOpen}
            cities={Object.keys(cityColor)}
            chosenDate={chosenDate}
            addTrip={addTrip}
            closeModal={closeModal}
            deleteTrip={deleteTrip}
            activeDate={activeDate.toLocaleDateString()}
          />
        </StyledFlex>
      </StyledAppWrapper>
    </>
  );
}

export default App;
