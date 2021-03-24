import House from './house';

export default class RandomDataService {
  getData() {
    return new House({
      term: 2021 + Math.floor(Math.random() * 5),
      metroDistance: 5 + Math.floor(Math.random() * 40),
      options: [Math.random() > 0.49, Math.random() > 0.49, Math.random() > 0.49, Math.random() > 0.49, Math.random() > 0.49]
    });
  }

  getDataSet() {
    const set = [];

    for (let i = 0; i < 9; i++) {
      set.push(this.getData());
    }

    return set;
  }
}
