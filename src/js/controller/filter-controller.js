import HouseView from "../view/house-view";
import DataService from "../model/index";

export default class FilterController {
  dataService = new DataService();

  constructor(root) {
    this._root = root;
    this._houses = root.querySelector('.houses');
    this.set = this.dataService.getDataSet();
    this.filtered = this.set;

    this._metroCheckboxes = root.querySelectorAll('.metro__list input[type="checkbox"]');
    this._termRadioButtons = root.querySelectorAll('.term__list input[type="radio"]');
    this._optionCheckboxes = root.querySelectorAll('.options__list input[type="checkbox"]');
    this._servicesCheckbox = root.querySelector('#services-checkbox');

    root.onclick = this.handleEvent.bind(this);

    this._display();
  }

  _display() {
    this._houses.innerHTML = '';

    for(let data of this.filtered) {
      const house = new HouseView(data);
      this._houses.append(house);
    }
  }

  filter() {
    this.filtered = this.set;
    this.filtered = this.filtered.filter(this._filterMetroDistance());
    this.filtered = this.filtered.filter(this._filterTerm());
    this.filtered = this.filtered.filter(this._filterOptions());
    this._display();
  }

  _filterMetroDistance = () => {
    const checked = Array.from(this._metroCheckboxes).map((i) => i.checked);

    if(checked[4]) return () => true;

    const filters = [];
    if(checked[0]) filters.push((i) => i <= 10);
    if(checked[1]) filters.push((i) => i > 10 && i <= 20);
    if(checked[2]) filters.push((i) => i > 20 && i <= 30);
    if(checked[3]) filters.push((i) => i > 30);

    return (i) => {
      for(let filter of filters) {
        if(filter(i.metroDistance)) return true;
      }

      return false;
    };
  }

  _filterTerm = () => {
    const term = Array.from(this._termRadioButtons).findIndex((i) => i.checked);
    let filter;

    switch(term) {
      case 1: filter = (i) => i.term < 2021; break;
      case 2: filter = (i) => i.term === 2021; break;
      case 3: filter = (i) => i.term === 2021 + 1; break;
      default: filter = () => true;
    }

    return filter;
  }

  _filterOptions = () => {
    const checked = Array.from(this._optionCheckboxes).map((i) => i.checked);

    return (item) => {
      for(let i = 0; i < item.options.length; i++) {
        if(checked[i] && item.options[i] !== checked[i]) return false;
      }

      return true;
    };
  }

  reset() {
    if(!this._metroCheckboxes[4].checked) {
      this._metroCheckboxes[4].dispatchEvent(new MouseEvent('click'));
    }

    this._termRadioButtons[0].checked = true;

    for(let check of this._optionCheckboxes) {
      check.checked = false;
    }

    this._servicesCheckbox.checked = false;

    this.filtered = this.set;
    this._display();
  }

  show() {
    const rest = [this.dataService.getData(), this.dataService.getData(), this.dataService.getData()];
    this.set.push(...rest);
    this.filter();
  }

  handleEvent(event) {
    const action = event.target.dataset.action;

    if(action) {
      this[action]();
    }
  }
}
