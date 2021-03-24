export default class House {
  constructor({term = 2022,
              metroDistance = 5,
              options = [false, false, false, false, false]}) {

    this.title = 'ЖК Ильинские луга';
    this.metro = 'Гагарина';
    this.street = 'пр. Льва Толстого 180А';
    this.term = term;
    this.metroDistance = metroDistance;
    this.options = options;
  }
}