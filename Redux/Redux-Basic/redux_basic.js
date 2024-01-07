const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - 1,
      };
  }
};

const store = redux.createStore(counterReducer); //configureStore

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

const unsubscribeStore = store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });

unsubscribeStore();
