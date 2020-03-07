import { createAction, createReducer } from '@reduxjs/toolkit';

import api from '../../../services/api';

// Estado Inicial
const INITIAL_STATE = [];

// Types
export const addDevs = createAction('ADD_DEVS');
export const addDev = createAction('ADD_DEV');

// Creators
export default createReducer(INITIAL_STATE, {
  // Fica claro que está carregando um array
  [addDevs.type]: (state, action) => [...action.payload],
  // Cópia os dados e adiciona mais um no final do array
  [addDev.type]: (state, action) => [...state, action.payload],
});

// Actions?
export const getDevs = () => async dispatch => {
  const { data } = await api.get('/devs');

  dispatch(addDevs(data));
};

export const storeDev = (dev, reset) => async dispatch => {
  const { data } = await api.post('/devs', dev);

  dispatch(addDev(data));
  reset();
};
