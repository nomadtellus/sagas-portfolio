import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App.js";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
// Provider allows us to use redux within our react app
import { Provider } from "react-redux";
import logger from "redux-logger";
// Import saga middleware
import createSagaMiddleware from "redux-saga";

// Create the rootSaga generator function
function* rootSaga() {
  yield takeEvery("SHOW_PROJECTS", showProjects);
  yield takeEvery("ADD_PROJECT", addProject);
  yield takeEvery("GET_TAGS", getTags);
  yield takeEvery("DELETE_PROJECT", deleteProject);
}

//This Saga will get the projects from db and send them to the reducer
function* showProjects(action) {
  try {
    const getResponse = yield axios.get("/project");

    const action = { type: "SET_PROJECTS", payload: getResponse.data };
    yield put(action);
  } catch (error) {
    console.log(`Couldn't get projects`, error);
    alert(`Sorry, couldn't get the projects. Try again later`);
  }
}

// POST new project to db
function* addProject(action) {
  try {
    console.log(action.payload);

    yield axios.post("/project", action.payload);
    alert("Project successfully added");
    yield put({ type: "SHOW_PROJECTS" });
  } catch (error) {
    console.log(`Couldn't add the project`, error);
    alert(`Sorry, couldn't add the project. Try again later`);
  }
}

//This will get the tags from the Tags table in the database and add them to the reducer
function* getTags(action) {
  try {
    console.log("GET tags for projects", action);
    const getResponse = yield axios.get("/project/tags");
    const action = { type: "SET_TAGS", payload: getResponse.data };
    yield put(action);
  } catch (error) {
    console.log(`Couldn't get the tags`);
    alert(`Sorry couldn't get the tags. Try again later.`);
  }
}

//Delete from the database
function* deleteProject(action) {
  try {
    yield axios.delete(`/project/${action.payload}`);
    yield put({ type: "SHOW_PROJECTS" });
  } catch (error) {
    console.log(`Couldn't delete the project`, error);
    alert(`Sorry, couldn't delete the project. Try again later`);
  }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
  switch (action.type) {
    case "SET_PROJECTS":
      return action.payload;
    default:
      return state;
  }
};

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
  switch (action.type) {
    case "SET_TAGS":
      return action.payload;
    default:
      return state;
  }
};

// Create one store that all components can use
const storeInstance = createStore(
  combineReducers({
    projects,
    tags
  }),
  // Add sagaMiddleware to our store
  applyMiddleware(sagaMiddleware, logger)
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
