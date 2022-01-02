const data = {
  holidays: [
    "01.01.2021",
    "02.01.2021",
    "03.01.2021",
    "04.01.2021",
    "05.01.2021",
    "06.01.2021",
    "07.01.2021",
    "08.01.2021",
    "23.02.2021",
    "08.03.2021",
    "01.05.2021",
    "09.05.2021",
    "12.06.2021",
    "04.11.2021",
  ],
  trips: {
    "Петров Владимир": {
      "11.01.2022": "Екатеринбург",
      "12.01.2022": "Екатеринбург",
      "09.01.2022": "Москва",
      "10.01.2022": "Москва",
      "17.01.2022": "Санкт-Петербург",
      "18.01.2022": "Санкт-Петербург",
      "28.01.2022": "Сочи",
      "29.01.2022": "Сочи",
      "30.01.2022": "Сочи",
    },
    "Соколов Сергей": {
      "11.01.2022": "Москва",
      "15.01.2022": "Пермь",
      "17.01.2022": "Новосибирск",
      "18.01.2022": "Новосибирск",
      "23.01.2022": "Магадан",
      "29.01.2022": "Казань",
    },
    "Храмова Светлана": {
      "13.01.2022": "Казань",
      "17.01.2022": "Пермь",
      "17.01.2022": "Москва",
      "28.01.2022": "Екатеринбург",
      "29.01.2022": "Екатеринбург",
    },
  },
  cityColor: {
    Екатеринбург: "#0071B3",
    Москва: "#59A646",
    "Санкт-Петербург": "#AF032C",
    Сочи: "#DE911D",
    Пермь: "#D86413",
    Новосибирск: "#716613",
    Магадан: "#29BFB8",
    Казань: "#794355",
    Праздник: "grey",
  },
  addTrip(worker, date, city) {
    this.trips[worker][date] = city;
  },
};

export const Api = {
  //   getPlan() {
  //     return JSON.parse(localStorage.getItem("plan") || "[]");
  //   },

  //   initialize() {
  //     if (this.plan.length === 0) {
  //       localStorage.setItem("plan", JSON.stringify(data));
  //       this.plan = JSON.parse(localStorage.getItem("plan") || "[]");
  //     }
  //   },
  //   plan: JSON.parse(localStorage.getItem("plan") || "[]"),

  getPlan() {
    let plan = JSON.parse(localStorage.getItem("plan") || "[]");
    if (plan.length === 0) {
      localStorage.setItem("plan", JSON.stringify(data));
      plan = data;
    }
    return plan;
  },

  getHolidays() {
    return this.getPlan().holidays;
  },

  getTrips() {
    return this.getPlan().trips;
  },

  getColors() {
    return this.getPlan().cityColor;
  },

  addTrip(worker, date, city) {
    const plan = this.getPlan();
    plan.trips[worker][date] = city;
    localStorage.setItem("plan", JSON.stringify(plan));
  },
  deleteTrip(worker, date) {
    const plan = this.getPlan();
    delete plan.trips[worker][date]
    localStorage.setItem("plan", JSON.stringify(plan));
  }
};

// Api.initialize();
