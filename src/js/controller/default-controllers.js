const metro = document.querySelector('.metro__list')
const checkboxes = metro.querySelectorAll('input[type="checkbox"]');
const general = checkboxes[4];
const other = Array.from(checkboxes).slice(0, 4);

metro.addEventListener('click', function ({target}) {
  if(target !== general && !other.every((i) => i.checked)) {
    general.checked = false;
  }

  if(other.every((i) => i.checked)) {
    general.checked = true;
  }
});

general.addEventListener('change', function ({target}) {
  if (target.checked) {
    for (let checkbox of checkboxes) {
      checkbox.checked = true;
    }
  }
});

const hideButtons = Array.from(document.querySelectorAll('.control-panel__chevron'));

for(let hider of hideButtons) {
  hider.addEventListener('click', ({target}) => {
    const content = target.nextElementSibling;

    if(target.classList.contains('control-panel__chevron--hide')) {
      target.classList.remove('control-panel__chevron--hide');
      content.style.display = '';
    } else {
      target.classList.add('control-panel__chevron--hide');
      content.style.display = 'none';
    }
  });
}