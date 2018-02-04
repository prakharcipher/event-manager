import { ADD_EVENT, DELETE_EVENT, FILTER_EVENT } from '../constants';
import { bake_cookie, read_cookie } from 'sfcookies';

const event = action => {
  let { name, desc, venue, date, price, discount } = action;
  return {
    id: Math.random(),
    name,
    desc,
    venue,
    date,
    price,
    discount
  };
};

const removeById = (state = [], id) => {
  const events = state.filter(event => event.id !== id);
  return events;
};

const filterByPrice = (state = [], price, discount, opt) => {
  if (opt === 'free') {
    const events = state.filter(event => event.price === '0');
    return events;
  } else if (opt === 'Having Discount') {
    const events = state.filter(event => event.discount !== '0');
    return events;
  } else if (opt === 'No Discount') {
    const events = state.filter(event => event.discount === '0');
    return events;
  } else {
    const events = state;
    return events;
  }
};

const events = (state = [], action) => {
  let events = null;
  state = read_cookie('events');
  switch (action.type) {
    case ADD_EVENT:
      events = [...state, event(action)];
      bake_cookie('events', events);
      return events;
    case DELETE_EVENT:
      events = removeById(state, action.id);
      bake_cookie('events', events);
      return events;
    case FILTER_EVENT:
      events = filterByPrice(state, action.price, action.discount, action.opt);
      // bake_cookie('events', events);
      return events;
    default:
      return state;
  }
};

export default events;
