const thumbHeight = 64; // duplicated in css

const listCity = [
  {
    name: 'Россия',
  },
  {
    name: 'Алтайский край',
  },
  {
    name: 'Барнаул',
    region: 'Алтайский край',
  },
  {
    name: 'Бийск',
    region: 'Алтайский край',
  },
  {
    name: 'Змеиногорск',
    region: 'Алтайский край',
  },
  {
    name: 'Заринск',
    region: 'Алтайский край',
  },
  {
    name: 'Камень-на-Оби',
    region: 'Алтайский край',
  },
  {
    name: 'Алейск',
    region: 'Алтайский край',
  },
  {
    name: 'Славгород',
    region: 'Алтайский край',
  },
  {
    name: 'Рубцовск',
    region: 'Алтайский край',
  },
  {
    name: 'Белокуриха',
    region: 'Алтайский край',
  },
  {
    name: 'Горняк',
    region: 'Алтайский край',
  },
  {
    name: 'Новоалтайск',
    region: 'Алтайский край',
  },
  {
    name: 'Яровое',
    region: 'Алтайский край',
  },
  {
    name: 'Новосибирская область',
  },
  {
    name: 'Новосибирск',
    region: 'Новосибирская область',
  },
  {
    name: 'Искитим',
    region: 'Новосибирская область',
  },
  {
    name: 'Бердск',
    region: 'Новосибирская область',
  },
  {
    name: 'Карасук',
    region: 'Новосибирская область',
  },
  {
    name: 'Каргат',
    region: 'Новосибирская область',
  },
  {
    name: 'Болотное',
    region: 'Новосибирская область',
  },
  {
    name: 'Купино',
    region: 'Новосибирская область',
  },
  {
    name: 'Чулым',
    region: 'Новосибирская область',
  },
  {
    name: 'Куйбышев',
    region: 'Новосибирская область',
  },
  {
    name: 'Обь',
    region: 'Новосибирская область',
  },
  {
    name: 'Тогучин',
    region: 'Новосибирская область',
  },
  {
    name: 'Барабинск',
    region: 'Новосибирская область',
  },
  {
    name: 'Черепаново',
    region: 'Новосибирская область',
  },
  {
    name: 'Татарск',
    region: 'Новосибирская область',
  },
  {
    name: 'Колывань',
    region: 'Новосибирская область',
  },
  {
    name: 'Красноярский край',
  },
  {
    name: 'Красноярск',
    region: 'Красноярский край',
  },
  {
    name: 'Бородино',
    region: 'Красноярский край',
  },
  {
    name: 'Ачинск',
    region: 'Красноярский край',
  },
  {
    name: 'Железногорск',
    region: 'Красноярский край',
  },
  {
    name: 'Норильск',
    region: 'Красноярский край',
  },
  {
    name: 'Лесосибирск',
    region: 'Красноярский край',
  },
  {
    name: 'Дивногорск',
    region: 'Красноярский край',
  },
  {
    name: 'Шарыпово',
    region: 'Красноярский край',
  },
  {
    name: 'Енисейск',
    region: 'Красноярский край',
  },
  {
    name: 'Боготол',
    region: 'Красноярский край',
  },
  {
    name: 'Сосновоборск',
    region: 'Красноярский край',
  },
  {
    name: 'Назарово',
    region: 'Красноярский край',
  },
  {
    name: 'Дудинка',
    region: 'Красноярский край',
  },
  {
    name: 'Артемовск',
    region: 'Красноярский край',
  },
  {
    name: 'Игарка',
    region: 'Красноярский край',
  },
  {
    name: 'Кодинск',
    region: 'Красноярский край',
  },
  {
    name: 'Зеленогорск',
    region: 'Красноярский край',
  },
  {
    name: 'Заозерный',
    region: 'Красноярский край',
  },
  {
    name: 'Минусинск',
    region: 'Красноярский край',
  },
  {
    name: 'Ужур',
    region: 'Красноярский край',
  },
  {
    name: 'Канск',
    region: 'Красноярский край',
  },
  {
    name: 'Уяр',
    region: 'Красноярский край',
  },
];

class City {
  wrapper;

  drop;

  down;

  input;

  cancel;

  selectWrapper;

  list;

  tape;

  thumb;

  dragData;

  selectedCities;

  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  init() {
    this.drop = this.wrapper.querySelector('.js-city__drop');
    this.down = this.wrapper.querySelector('.js-city__down');
    this.input = this.wrapper.querySelector('.js-city__input');
    this.cancel = this.wrapper.querySelector('.js-city__cancel');
    this.selectWrapper = this.wrapper.querySelector('.js-city__select-wrapper');
    this.list = this.wrapper.querySelector('.js-city__list');
    this.thumb = this.wrapper.querySelector('.js-city__thumb');
    this.dragData = {};

    const open = new Open(this);
    const scroll = new Scroll(this);
    const showThumb = new ShowThumb(this);
    const hideThumb = new HideThumb(this);
    const startDrag = new StartDrag(this);
    const input = new Input(this);
    const clear = new Clear(this);
    const submit = new Submit(this);
    const handleListMousedown = new HandleListMousedown(this);
    const handleSelectMousedown = new HandleSelectMousedown(this);

    this.wrapper.addEventListener('mousedown', open);
    this.wrapper.addEventListener('focusin', open);
    this.down.addEventListener('mousedown', stop);
    this.down.addEventListener('submit', submit);
    this.selectWrapper.addEventListener('mousedown', handleSelectMousedown);
    this.list.addEventListener('scroll', scroll);
    this.list.addEventListener('mouseover', showThumb);
    this.list.addEventListener('mouseout', hideThumb);
    this.list.addEventListener('mousedown', handleListMousedown);
    this.thumb.addEventListener('mousedown', startDrag);
    this.thumb.addEventListener('pointerdown', startDrag);
    this.thumb.addEventListener('dragstart', prevent);
    this.input.addEventListener('input', input);
    this.cancel.addEventListener('click', clear);

    this.selectedCities = [];

    this.updateCity();
  }

  updateTape(list) {
    const keyRegExp = new RegExp(this.input.value, 'i');

    const tape = document.createElement('div');
    tape.classList.add('city__tape', 'js-city__tape');

    list.forEach((item) => {
      const keyString = item.name.match(keyRegExp);

      if (keyString === null) {
        return;
      }

      const listItem = document.createElement('div');
      listItem.classList.add('city__list-item', 'js-city__list-item');
      listItem.setAttribute('data-city', item.name);

      const name = document.createElement('span');
      name.classList.add('city__list-item-name', 'js-city__list-item-name');
      name.innerHTML = item.name.replace(keyRegExp, `<span class="city__key">${keyString[0]}</span>`);

      listItem.appendChild(name);

      if (item.region !== undefined) {
        const region = document.createElement('span');
        region.classList.add('city__list-item-region', 'js-city__list-item-region');
        region.innerText = item.region;

        listItem.appendChild(region);
      }

      tape.appendChild(listItem);
    });

    this.tape = tape;

    this.list.innerHTML = '';
    this.list.appendChild(tape);

    if (tape.offsetHeight > this.list.offsetHeight) {
      this.thumb.classList.remove('city__thumb_invisible');
    } else {
      this.thumb.classList.add('city__thumb_invisible');
    }

    this.thumb.style.height = `${this.list.offsetHeight - thumbHeight}px`;
  }

  updateCity() {
    const old = this.selectWrapper.querySelector('.js-city__select');
    if (old !== null) {
      old.remove();
    }

    if (this.selectedCities.length > 0) {
      this.drop.querySelector('.js-city__drop-content').remove();

      const dropContent = document.createElement('span');
      dropContent.classList.add('city__drop-content', 'js-city__drop-content');
      dropContent.innerText = this.selectedCities.join(', ');

      this.drop.appendChild(dropContent);

      const select = document.createElement('div');
      select.classList.add('city__select', 'js-city__select');

      this.selectedCities.forEach((selectedCity) => {
        const chosen = document.createElement('div');
        chosen.classList.add('city__chosen', 'js-city__chosen');
        chosen.innerText = selectedCity;
        select.appendChild(chosen);
      });

      this.selectWrapper.appendChild(select);
    } else {
      this.drop.innerHTML = '<span class="city__drop-content js-city__drop-content">Любой регион</span>';
    }
  }
}

function Open(city) {
  this.city = city;

  this.handleEvent = () => {
    const { wrapper } = this.city;

    this.city.updateTape(listCity);

    wrapper.removeEventListener('mousedown', this);
    wrapper.removeEventListener('focusin', this);

    wrapper.classList.add('city_open', 'city_just-now-open');

    const close = new Close(this.city);

    document.addEventListener('mousedown', close);
    document.addEventListener('focusin', close);
    document.addEventListener('submit', close);
  };
}

function Close(city) {
  this.city = city;

  this.handleEvent = () => {
    const { wrapper, down, input } = this.city;

    if (wrapper.classList.contains('city_just-now-open')) {
      wrapper.classList.remove('city_just-now-open');

      down.addEventListener('focusin', stop);

      input.focus();

      return;
    }

    document.removeEventListener('mousedown', this);
    document.removeEventListener('focusin', this);
    document.removeEventListener('submit', this);

    wrapper.classList.remove('city_open');

    down.removeEventListener('focusin', stop);

    const open = new Open(this.city);

    wrapper.addEventListener('mousedown', open);
    wrapper.addEventListener('focusin', open);
  };
}

function Scroll(city) {
  this.city = city;

  this.handleEvent = () => {
    const { list, tape, thumb } = this.city;

    thumb.style.transform = `translateY(${(list.scrollTop * 100) / (tape.offsetHeight - list.offsetHeight)}%)`;
  };
}

function ShowThumb(city) {
  this.city = city;

  this.handleEvent = () => {
    const { thumb } = this.city;

    thumb.classList.add('city__thumb_visible');
  };
}

function HideThumb(city) {
  this.city = city;

  this.handleEvent = () => {
    const { thumb } = this.city;

    thumb.classList.remove('city__thumb_visible');
  };
}

function StartDrag(city) {
  this.city = city;

  this.handleEvent = (event) => {
    const { list, thumb, dragData } = this.city;

    thumb.removeEventListener('mousedown', this);
    thumb.removeEventListener('pointerdown', this);

    const listPosition = list.getBoundingClientRect().top;
    const thumbSize = thumb.clientHeight;
    const thumbPosition = thumb.getBoundingClientRect().top;

    const grabPoint = event.clientY - thumbPosition;
    dragData.minRestriction = grabPoint + listPosition;
    dragData.maxRestriction = dragData.minRestriction + thumbSize;
    dragData.size = thumbSize;

    dragData.drag = new Drag(this.city);
    dragData.endDrag = new EndDrag(this.city);

    document.addEventListener('mousemove', dragData.drag);
    document.addEventListener('pointermove', dragData.drag);
    document.addEventListener('mouseup', dragData.endDrag);
    document.addEventListener('pointerup', dragData.endDrag);

    thumb.classList.add('city__thumb_draggable');
  };
}

function Drag(city) {
  this.city = city;

  this.handleEvent = (event) => {
    const {
      list,
      tape,
      thumb,
      dragData,
    } = this.city;

    const {
      minRestriction,
      maxRestriction,
      size,
    } = dragData;

    const { clientY } = event;

    if (clientY < minRestriction) {
      dragData.innerOffset = 0;
    } else if (clientY > maxRestriction) {
      dragData.innerOffset = size;
    } else {
      dragData.innerOffset = clientY - minRestriction;
    }

    thumb.style.transform = `translateY(${(dragData.innerOffset * 100) / size}%)`;
    list.scrollTop = ((tape.offsetHeight - list.offsetHeight) * dragData.innerOffset) / size;
  };
}

function EndDrag(city) {
  this.city = city;

  this.handleEvent = () => {
    const { input, thumb, dragData } = this.city;

    document.removeEventListener('mousemove', dragData.drag);
    document.removeEventListener('pointermove', dragData.drag);
    document.removeEventListener('mouseup', dragData.endDrag);
    document.removeEventListener('pointerup', dragData.endDrag);

    const startDrag = new StartDrag(this.city);

    thumb.addEventListener('mousedown', startDrag);
    thumb.addEventListener('pointerdown', startDrag);

    thumb.classList.remove('city__thumb_draggable');

    input.focus();
  };
}

function Input(city) {
  this.city = city;

  this.handleEvent = () => {
    const { input, cancel } = this.city;

    this.city.updateTape(listCity);

    if (input.value !== '') {
      cancel.classList.remove('city__cancel_invisible');
    } else {
      cancel.classList.add('city__cancel_invisible');
    }
  };
}

function Clear(city) {
  this.city = city;

  this.handleEvent = () => {
    const { input, cancel } = this.city;

    input.value = '';
    input.focus();

    this.city.updateTape(listCity);

    cancel.classList.add('city__cancel_invisible');
  };
}

function HandleListMousedown(city) {
  this.city = city;

  this.handleEvent = (event) => {
    const { selectedCities } = this.city;

    const name = event.target.closest('.js-city__list-item').getAttribute('data-city');

    const index = selectedCities.indexOf(name);

    if (index > -1) {
      selectedCities.splice(index, 1);
    } else {
      selectedCities.push(name);
    }

    this.city.updateCity();
  };
}

function HandleSelectMousedown(city) {
  this.city = city;

  this.handleEvent = (event) => {
    if (!event.target.classList.contains('js-city__chosen')) {
      return;
    }

    const { selectedCities } = this.city;

    const name = event.target.innerText;

    const index = selectedCities.indexOf(name);

    if (index > -1) {
      selectedCities.splice(index, 1);
    } else {
      selectedCities.push(name);
    }

    this.city.updateCity();
  };
}

function Submit(city) {
  this.city = city;

  this.handleEvent = (event) => {
    event.preventDefault();
  };
}

function stop(event) {
  event.stopPropagation();
}

function prevent(event) {
  event.preventDefault();
}

Array.from(document.querySelectorAll('.js-city'))
  .forEach(
    (wrapper) => {
      const city = new City(wrapper);
      city.init();
    },
  );
