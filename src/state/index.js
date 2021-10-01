import React, { createContext, useContext, useReducer } from 'react';
import mainReducers from './reducers';
import mainActions from './actions';

const getInitialState = () => ({
  isLoading: false,
});

export const StateContext = createContext([getInitialState(), () => null]);

export const StateProvider = ({ children, _state }) => {
  const inititalState = _state ?? getInitialState();
  const [state, dispatch] = useReducer(mainReducers, inititalState);

  const actions = {};

  Object.keys(mainActions)
    .forEach(actionName => actions[actionName] = mainActions[actionName](dispatch));

  return (
    <StateContext.Provider value={{ state: state, ...actions }}>
      {children}
    </StateContext.Provider >
  );
}

export const useStateValue = () => useContext(StateContext);