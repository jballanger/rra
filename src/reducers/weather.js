const initialState = {
  weather: null,
};

export default function weather(state = initialState, action) {
  switch (action.type) {
    case 'WEATHER_SUCCESS':
      return Object.assign({}, state, {
        weather: action.weather,
        loading: false,
        error: null,
      });
    case 'WEATHER_FAIL':
      return Object.assign({}, state, {
        error: action.error,
        loading: false,
        weather: null,
      });
    case 'WEATHER_REQUEST':
      return Object.assign({}, state, {
        loading: true,
      });
    default:
      return state;
  }
}
