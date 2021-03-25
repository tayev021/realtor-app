import House from './house';

export default class StaticDataService {

  // local static data for stable testing filter

  _localData = [
    {
      term: 2020,
      metroDistance: 5,
      options: [true, true, true, true, true]
    },
    {
      term: 2020,
      metroDistance: 15,
      options: [true, false, true, false, true]
    },
    {
      term: 2020,
      metroDistance: 25,
      options: [false, true, false, true, false]
    },
    {
      term: 2021,
      metroDistance: 15,
      options: [true, true, true, true, true]
    },
    {
      term: 2021,
      metroDistance: 25,
      options: [true, false, true, false, true]
    },
    {
      term: 2021,
      metroDistance: 35,
      options: [false, true, false, true, false]
    },
    {
      term: 2022,
      metroDistance: 5,
      options: [true, true, true, true, true]
    },
    {
      term: 2022,
      metroDistance: 25,
      options: [true, false, true, false, true]
    },
    {
      term: 2022,
      metroDistance: 35,
      options: [false, true, false, true, false]
    }
  ];

  getData(base = Math.floor(Math.random() * 9)) {
    return new House (this._localData[base]);
  }

  getDataSet() {
    const set = [];

    for (let i = 0; i < 9; i++) {
      set.push(this.getData(i));
    }

    return set;
  }
}
