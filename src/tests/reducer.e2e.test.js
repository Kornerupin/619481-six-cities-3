import {reducer, ActionTypes} from "../reducer";

const MONEY_TYPES = {
  euro: {
    icon: `€`,
  },
};

const testOffersFirstTown = [
  {
    id: 1050,
    townId: 1612,
    mark: `Premium`,
    coords: [52.3909553943508, 4.85309666406198],
    img: {
      imgLink: `apartment-01.jpg`,
      imgAlt: `title 0`,
    },
    link: `#`,
    price: {
      priceValue: `120`,
      priceText: `night`,
      priceType: MONEY_TYPES.euro.icon,
    },
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    id: 1051,
    townId: 1612,
    mark: ``,
    coords: [52.369553943508, 4.85309666406198],
    img: {
      imgLink: `room.jpg`,
      imgAlt: `title 1`,
    },
    link: `#`,
    price: {
      priceValue: `80`,
      priceText: `night`,
      priceType: MONEY_TYPES.euro.icon,
    },
    rating: 5,
    title: `Wood and stone place`,
    type: `Private room`,
  },
  {
    id: 1052,
    townId: 1612,
    mark: ``,
    coords: [52.3909553943508, 4.929309666406198],
    img: {
      imgLink: `apartment-02.jpg`,
      imgAlt: ``,
    },
    link: `#`,
    price: {
      priceValue: `132`,
      priceText: `night`,
      priceType: MONEY_TYPES.euro.icon,
    },
    rating: 1,
    title: `Canal View Prinsengracht`,
    type: `Apartment`,
  },
  {
    id: 1053,
    townId: 1612,
    mark: `Premium`,
    coords: [52.3809553943508, 4.939309666406198],
    img: {
      imgLink: `apartment-03.jpg`,
      imgAlt: `title 3`,
    },
    link: `#`,
    price: {
      priceValue: `180`,
      priceText: `night`,
      priceType: MONEY_TYPES.euro.icon,
    },
    rating: 3,
    title: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
  },
];
const testOffersSecondTown = [
  {
    id: 2391,
    townId: 2191,
    mark: `Premium`,
    coords: [48.846273, 2.3653278],
    img: {
      imgLink: `apartment-01.jpg`,
      imgAlt: `title 0`,
    },
    link: `#`,
    price: {
      priceValue: `120`,
      priceText: `night`,
      priceType: MONEY_TYPES.euro.icon,
    },
    rating: 4,
    title: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
  },
  {
    id: 2392,
    townId: 2191,
    mark: ``,
    coords: [48.859813, 2.3141898],
    img: {
      imgLink: `room.jpg`,
      imgAlt: `title 1`,
    },
    link: `#`,
    price: {
      priceValue: `80`,
      priceText: `night`,
      priceType: MONEY_TYPES.euro.icon,
    },
    rating: 5,
    title: `Wood and stone place`,
    type: `Private room`,
  },
];

const initialStore = {
  currentTown: null,
  activeOffer: null,
  sortType: ActionTypes.SORT_POPULAR,
  currentOffers: [],
};
const mockStoreFirst = {
  currentOffers: testOffersFirstTown,
  currentTown: 0,
  sortType: ActionTypes.SORT_POPULAR,
  activeOffer: null,
};
const mockStoreSecond = {
  currentOffers: testOffersSecondTown,
  currentTown: 1,
  sortType: ActionTypes.SORT_POPULAR,
  activeOffer: null,
};

describe(`Reducer actions test`, () => {
  it(`INIT action test`, () => {
    const res = reducer(initialStore, {type: ActionTypes.INIT});

    expect(res).toEqual(mockStoreFirst);
  });

  it(`SET_TOWN action test`, () => {
    const res = reducer(initialStore, {type: ActionTypes.SET_TOWN, payload: 0});
    const res2 = reducer(initialStore, {type: ActionTypes.SET_TOWN, payload: 1});

    expect(res).toEqual(mockStoreFirst);
    expect(res2).toEqual(mockStoreSecond);
  });

  it(`SET_ACTIVE_OFFER action test`, () => {
    const res = reducer({activeOffer: null}, {type: ActionTypes.SET_ACTIVE_OFFER, payload: 1051});
    const res2 = reducer({activeOffer: null}, {type: ActionTypes.SET_ACTIVE_OFFER, payload: -45});

    expect(res).toEqual({activeOffer: 1051});
    expect(res2).toEqual({activeOffer: null});
  });

  it(`RESET_ACTIVE_OFFER action test`, () => {
    const res = reducer({activeOffer: 1051}, {type: ActionTypes.RESET_ACTIVE_OFFER});
    const res2 = reducer({activeOffer: null}, {type: ActionTypes.RESET_ACTIVE_OFFER});

    expect(res).toEqual({activeOffer: null});
    expect(res2).toEqual({activeOffer: null});
  });

  it(`SORT_HIGH_TO_LOW action test`, () => {
    const mockHightToLow = {
      currentOffers: [
        {
          id: 1053,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3809553943508, 4.939309666406198],
          img: {
            imgLink: `apartment-03.jpg`,
            imgAlt: `title 3`,
          },
          link: `#`,
          price: {
            priceValue: `180`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 3,
          title: `Nice, cozy, warm big bed apartment`,
          type: `Apartment`,
        },
        {
          id: 1052,
          townId: 1612,
          mark: ``,
          coords: [52.3909553943508, 4.929309666406198],
          img: {
            imgLink: `apartment-02.jpg`,
            imgAlt: ``,
          },
          link: `#`,
          price: {
            priceValue: `132`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 1,
          title: `Canal View Prinsengracht`,
          type: `Apartment`,
        },
        {
          id: 1050,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3909553943508, 4.85309666406198],
          img: {
            imgLink: `apartment-01.jpg`,
            imgAlt: `title 0`,
          },
          link: `#`,
          price: {
            priceValue: `120`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 4,
          title: `Beautiful & luxurious apartment at great location`,
          type: `Apartment`,
        },
        {
          id: 1051,
          townId: 1612,
          mark: ``,
          coords: [52.369553943508, 4.85309666406198],
          img: {
            imgLink: `room.jpg`,
            imgAlt: `title 1`,
          },
          link: `#`,
          price: {
            priceValue: `80`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 5,
          title: `Wood and stone place`,
          type: `Private room`,
        },
      ],
      currentTown: 0,
      sortType: ActionTypes.SORT_HIGH_TO_LOW,
      activeOffer: null,
    };
    const res = reducer(mockStoreFirst, {type: ActionTypes.SORT_HIGH_TO_LOW});

    expect(res).toEqual(mockHightToLow);
  });

  it(`SORT_LOW_TO_HIGH action test`, () => {
    const mockLowToHighMock = {
      currentOffers: [
        {
          id: 1051,
          townId: 1612,
          mark: ``,
          coords: [52.369553943508, 4.85309666406198],
          img: {
            imgLink: `room.jpg`,
            imgAlt: `title 1`,
          },
          link: `#`,
          price: {
            priceValue: `80`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 5,
          title: `Wood and stone place`,
          type: `Private room`,
        },
        {
          id: 1050,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3909553943508, 4.85309666406198],
          img: {
            imgLink: `apartment-01.jpg`,
            imgAlt: `title 0`,
          },
          link: `#`,
          price: {
            priceValue: `120`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 4,
          title: `Beautiful & luxurious apartment at great location`,
          type: `Apartment`,
        },
        {
          id: 1052,
          townId: 1612,
          mark: ``,
          coords: [52.3909553943508, 4.929309666406198],
          img: {
            imgLink: `apartment-02.jpg`,
            imgAlt: ``,
          },
          link: `#`,
          price: {
            priceValue: `132`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 1,
          title: `Canal View Prinsengracht`,
          type: `Apartment`,
        },
        {
          id: 1053,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3809553943508, 4.939309666406198],
          img: {
            imgLink: `apartment-03.jpg`,
            imgAlt: `title 3`,
          },
          link: `#`,
          price: {
            priceValue: `180`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 3,
          title: `Nice, cozy, warm big bed apartment`,
          type: `Apartment`,
        },
      ],
      currentTown: 0,
      sortType: ActionTypes.SORT_LOW_TO_HIGH,
      activeOffer: null,
    };
    const res = reducer(mockStoreFirst, {type: ActionTypes.SORT_LOW_TO_HIGH});

    expect(res).toEqual(mockLowToHighMock);
  });

  it(`SORT_TOP_RATED action test`, () => {
    const mockTopRated = {
      currentOffers: [
        {
          id: 1051,
          townId: 1612,
          mark: ``,
          coords: [52.369553943508, 4.85309666406198],
          img: {
            imgLink: `room.jpg`,
            imgAlt: `title 1`,
          },
          link: `#`,
          price: {
            priceValue: `80`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 5,
          title: `Wood and stone place`,
          type: `Private room`,
        },
        {
          id: 1050,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3909553943508, 4.85309666406198],
          img: {
            imgLink: `apartment-01.jpg`,
            imgAlt: `title 0`,
          },
          link: `#`,
          price: {
            priceValue: `120`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 4,
          title: `Beautiful & luxurious apartment at great location`,
          type: `Apartment`,
        },
        {
          id: 1053,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3809553943508, 4.939309666406198],
          img: {
            imgLink: `apartment-03.jpg`,
            imgAlt: `title 3`,
          },
          link: `#`,
          price: {
            priceValue: `180`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 3,
          title: `Nice, cozy, warm big bed apartment`,
          type: `Apartment`,
        },
        {
          id: 1052,
          townId: 1612,
          mark: ``,
          coords: [52.3909553943508, 4.929309666406198],
          img: {
            imgLink: `apartment-02.jpg`,
            imgAlt: ``,
          },
          link: `#`,
          price: {
            priceValue: `132`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 1,
          title: `Canal View Prinsengracht`,
          type: `Apartment`,
        },
      ],
      currentTown: 0,
      sortType: ActionTypes.SORT_TOP_RATED,
      activeOffer: null,
    };
    const res = reducer(mockStoreFirst, {type: ActionTypes.SORT_TOP_RATED});

    expect(res).toEqual(mockTopRated);
  });

  it(`SORT_POPULAR action test`, () => {
    const mockPopular = {
      currentOffers: [
        {
          id: 1050,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3909553943508, 4.85309666406198],
          img: {
            imgLink: `apartment-01.jpg`,
            imgAlt: `title 0`,
          },
          link: `#`,
          price: {
            priceValue: `120`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 4,
          title: `Beautiful & luxurious apartment at great location`,
          type: `Apartment`,
        },
        {
          id: 1051,
          townId: 1612,
          mark: ``,
          coords: [52.369553943508, 4.85309666406198],
          img: {
            imgLink: `room.jpg`,
            imgAlt: `title 1`,
          },
          link: `#`,
          price: {
            priceValue: `80`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 5,
          title: `Wood and stone place`,
          type: `Private room`,
        },
        {
          id: 1052,
          townId: 1612,
          mark: ``,
          coords: [52.3909553943508, 4.929309666406198],
          img: {
            imgLink: `apartment-02.jpg`,
            imgAlt: ``,
          },
          link: `#`,
          price: {
            priceValue: `132`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 1,
          title: `Canal View Prinsengracht`,
          type: `Apartment`,
        },
        {
          id: 1053,
          townId: 1612,
          mark: `Premium`,
          coords: [52.3809553943508, 4.939309666406198],
          img: {
            imgLink: `apartment-03.jpg`,
            imgAlt: `title 3`,
          },
          link: `#`,
          price: {
            priceValue: `180`,
            priceText: `night`,
            priceType: MONEY_TYPES.euro.icon,
          },
          rating: 3,
          title: `Nice, cozy, warm big bed apartment`,
          type: `Apartment`,
        },
      ],
      currentTown: 0,
      sortType: ActionTypes.SORT_POPULAR,
      activeOffer: null,
    };
    const res = reducer(mockStoreFirst, {type: ActionTypes.SORT_POPULAR});

    expect(res).toEqual(mockPopular);
  });
});
