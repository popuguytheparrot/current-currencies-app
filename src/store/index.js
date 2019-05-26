import { createStore, createApi } from "effector";

const currencies = createStore({});

const { setCurrencies } = createApi(currencies, {
  setCurrencies: (state, { result }) => result
});

currencies.watch(newState => console.log("newState", newState));

export { setCurrencies };
