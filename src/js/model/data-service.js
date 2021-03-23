import House from './house';

export default class DataService {
  getData(base) {
    return new House (
      2021 + base,
      5 * base,
      [base % 2, base % 2, base % 2, base % 2, base % 2]
    );
  }

  getDataSet() {
    const set = [];

    for (let i = 1; i < 10; i++) {
      set.push(this.getData(i));
    }

    return set;
  }
}
