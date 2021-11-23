import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./modules/reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./modules/rootSaga";

const create = () => {
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleWare))
  );
  sagaMiddleWare.run(rootSaga);
  return store;
};

export default create;
