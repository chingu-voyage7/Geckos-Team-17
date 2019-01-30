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

export const getToDo=()=>async dispatch=>{
  try{
    const response=await axios.get("http://localhost:5000/api/v1/todos/");
    console.log(response);
    let data=response.data;
    
    dispatch({
      type:Actions.GET_TODO,
      payload:data
    });
  }catch(err){
    console.log(err);
  }
}

export const deleteToDo=(id)=>async dispatch=>{
  try{
    console.log(id);
    const response=await axios.delete("http://localhost:5000/api/v1/todos/"+id);
    console.log(response);
  }catch(err){
    console.log(err);
  }
};

export const updateToDo=(id,data)=>async dispatch=>{
  try{
    const response=await axios.post("http://localhost:5000/api/v1/todos/"+id,data);
    console.log(response);
    return response;
  }catch(err){
    console.log(err);
  }
}