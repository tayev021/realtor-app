import picture from '../../img/house-1.jpg';
import metroPicture from '../../img/metro.png';

function HouseView({title, term, metro, street}) {
  const house = document.createElement('div');
  const description = document.createElement('div');
  const img = document.createElement('img');
  const _title = document.createElement('h2');
  const _term = document.createElement('p');
  const metroBox = document.createElement('div');
  const metroIcon = document.createElement('img');
  const _metro = document.createElement('p');
  const _street = document.createElement('p');

  house.classList.add('house');
  description.classList.add('house__description');
  img.classList.add('house__img');
  _title.classList.add('heading-2');
  _term.classList.add('house__term');
  metroBox.classList.add('house__metro-box');
  metroIcon.classList.add('house__metro-icon');
  _metro.classList.add('house__metro');
  _street.classList.add('house__street');

  img.src = picture;
  img.alt = 'house';
  _title.textContent = title;
  _term.textContent = `Срок сдачи ${term}г.`;
  metroIcon.src = metroPicture;
  metroIcon.alt = 'metro';
  _metro.textContent = metro;
  _street.textContent = street;

  metroBox.append(metroIcon, _metro);
  description.append(_title, _term, metroBox, _street);
  house.append(img, description);

  return house;
}

export default HouseView;

