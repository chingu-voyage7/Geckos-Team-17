import * as Actions from "./actionTypes";
import axios from "axios";
let id = 15; //current using a hack for id; later use database id

function addMinutes(date, minutes) {
  return new Date(date.getTime() + minutes * 60000);
}

export const addToDo = (title, description, date) => async dispatch => {
  let event = {
    itemname: title,
    description: description,
    meettime: date,
    approxmeetduration: 30
  };
  console.log(event);
  try {
    const res = await axios.post(
      "http://localhost:5000/api/v1/todos/create",
      event
    );
    console.log("Posted");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
  // dispatch({
  //   type: Actions.ADD_TODO,
  //   payload: event
  // });
};
