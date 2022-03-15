import * as APIUtil from '../util/pins_api_util';
export const RECEIVE_PINS = "RECEIVE_PINS";

export const receivePins = pins => ({
    type: RECEIVE_PINS,
    pins
  });


  export const fetchPins = () => dispatch => (
    APIUtil.receivePins()
      .then(pins => dispatch(receivePins(pins)))
      .catch(err => console.log(err))
  );