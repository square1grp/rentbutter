import loadingReducer from './loading';

// eslint-disable-next-line
const mainReducer = ({ }, action) => ({
  isLoading: loadingReducer(action),
});

export default mainReducer;