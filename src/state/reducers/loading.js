const loadingReducer = ({ type }) => {
  switch (type) {
    case 'RB_ACTION_START':
      return true;

    case 'RB_ACTION_END':
    default:
      return false;
  };
};

export default loadingReducer;