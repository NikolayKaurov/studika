const defaultCity = 'Москва';

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
];

class City {
  wrapper;

  drop;

  down;

  list;

  tape;

  constructor(wrapper) {
    this.wrapper = wrapper;
  }

  init() {
    this.drop = this.wrapper.querySelector('.js-city__drop');
    this.down = this.wrapper.querySelector('.js-city__down');
    this.list = this.wrapper.querySelector('.js-city__list');

    this.drop.innerText = defaultCity;

    const open = new Open(this);
    const scroll = new Scroll(this);

    this.wrapper.addEventListener('mousedown', open);
    this.wrapper.addEventListener('focusin', open);
    this.down.addEventListener('mousedown', stop);
    this.list.addEventListener('scroll', scroll);

    this.tape = getTape(listCity);

    this.list.appendChild(this.tape);
  }
}

function Open(city) {
  this.city = city;

  this.handleEvent = () => {
    const { wrapper } = this.city;

    wrapper.removeEventListener('mousedown', this);
    wrapper.removeEventListener('focusin', this);

    wrapper.classList.add('city_open', 'city_just-now-open');

    const close = new Close(this.city);

    document.addEventListener('mousedown', close);
    document.addEventListener('focusin', close);
  };
}

function Scroll(city) {
  this.city = city;

  this.handleEvent = () => {
    const { list, tape } = this.city;

    /* console.log(list.scrollTop);
    console.log(list.offsetHeight); */
    console.log(list.scrollTop / (tape.offsetHeight - list.offsetHeight));
  };
}

function Close(city) {
  this.city = city;

  this.handleEvent = () => {
    const { wrapper, down } = this.city;

    if (wrapper.classList.contains('city_just-now-open')) {
      wrapper.classList.remove('city_just-now-open');

      down.addEventListener('focusin', stop);

      return;
    }

    document.removeEventListener('mousedown', this);
    document.removeEventListener('focusin', this);

    wrapper.classList.remove('city_open');

    down.removeEventListener('focusin', stop);

    const open = new Open(this.city);

    wrapper.addEventListener('mousedown', open);
    wrapper.addEventListener('focusin', open);
  };
}

function getTape(list) {
  const tape = document.createElement('div');
  tape.classList.add('city__tape', 'js-city__tape');

  list.forEach((item) => {
    const listItem = document.createElement('div');
    listItem.classList.add('city__list-item', 'js-city__list-item');

    const name = document.createElement('span');
    name.classList.add('city__list-item-name', 'js-city__list-item-name');
    name.innerText = item.name;

    listItem.appendChild(name);

    if (item.region !== undefined) {
      const region = document.createElement('span');
      region.classList.add('city__list-item-region', 'js-city__list-item-region');
      region.innerText = item.region;

      listItem.appendChild(region);
    }

    tape.appendChild(listItem);
  });

  return tape;
}

function stop(event) {
  event.stopPropagation();
}

Array.from(document.querySelectorAll('.js-city'))
  .forEach(
    (wrapper) => {
      const city = new City(wrapper);
      city.init();
    },
  );
