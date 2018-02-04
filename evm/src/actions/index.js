import { ADD_EVENT, DELETE_EVENT, FILTER_EVENT } from '../constants';

export const addEvent = (name, desc, venue, date, price, discount) => {
  const action = {
    type: ADD_EVENT,
    name: name,
    desc: desc,
    venue: venue,
    date: date,
    price: price,
    discount: discount
  };
  return action;
};

export const deleteEvent = id => {
  const action = {
    type: DELETE_EVENT,
    id
  };
  return action;
};

export const filterEvent = (price, discount, opt) => {
  const action = {
    type: FILTER_EVENT,
    price,
    discount,
    opt
  };
  return action;
};
