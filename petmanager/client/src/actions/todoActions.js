import * as Actions from "./actionTypes";
let id=15;//current using a hack for id; later use database id

export const addToDo = (title, description, date) => dispatch => {
  let event = {
    id:id++,
    title: title,
    description: description,
    start: date,
    end:date
  };
  console.log(event);
  dispatch({
    type: Actions.ADD_TODO,
    payload: event
  });
};
