import { NASA_HEADER, NASA_TOKEN } from '../secrets';
import axios from 'axios';

export const GOT_ASTRONOMIES = 'GOT_ASTRONOMY';

export const gotAstronomies = (astronomies) => {
  return {
    type: GOT_ASTRONOMIES,
    astronomies,
  };
};

export const getAstronomies = () => {
  return async (dispatch) => {
    const { data: astronomies } = await axios.get(
      `${NASA_HEADER}${NASA_TOKEN}&count=5`
    );
    dispatch(gotAstronomies(astronomies));
  };
};

export function astronomiesReducer(state = [], action) {
  switch (action.type) {
    case GOT_ASTRONOMIES:
      return action.astronomies;

    default:
      return state;
  }
}
