const loadingReducer = ({ type }) => {
  switch (type) {
    case 'RENTBUTTER_ACTION_START':
      return true;

    case 'RENTBUTTER_ACTION_END':
    default:
      return false;
  };
};

export default loadingReducer;