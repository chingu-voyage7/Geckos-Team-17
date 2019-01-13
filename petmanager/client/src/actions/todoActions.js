import * as Actions from "./actionTypes";

export const addToDo = (title, description, date) => dispatch => {
  let event = {
    title: title,
    description: description,
    date: date
  };
  console.log(event);
  dispatch({
    type: Actions.ADD_TODO,
    payload: event
  });
};
