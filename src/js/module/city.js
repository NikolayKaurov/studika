const defaultCity = 'Москва';

const list = [
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
  city;

  drop;

  down;

  list;

  constructor(city) {
    this.city = city;
    this.drop = city.querySelector('.js-city__drop');
    this.down = city.querySelector('.js-city__down');
    this.list = city.querySelector('.js-city__list');

    this.drop.innerText = defaultCity;

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

    this.list.appendChild(tape);
  }
}

Array.from(document.querySelectorAll('.js-city'))
  .forEach(
    (city) => {
      const jsCity = new City(city);
    },
  );
