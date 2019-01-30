import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import Modal from "react-responsive-modal";
import DateTimePicker from "react-datetime-picker";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from "../../actions/todoActions";
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: {},
      width: window.innerWidth,
      toDoOpen: false,
      date: new Date(),
      time: "10:00",
      instance:{
        id:"",
        title:"",
        description:"",
        start:"",
        end:"",
        approxmeetduration:""
      },
      events:[]
    };
  }
  componentDidMount(){
      this.props.todos.getToDo();
  }
  onOpenModal = event => {
    console.log("Here");
    this.setState({ open: true, data: event });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  handleOpenClickTodo = event => {
    this.setState({ toDoOpen: true });
  };

  onCloseTodo = () => {
    this.setState({ toDoOpen: false });
  };

  handleChange = date => this.setState({ date: date });
  onChange = time => this.setState({ time });

  onSubmit=()=>{
      this.props.todos.addToDo("title","description",this.state.date);
  }
  deleteToDo=async ()=>{
    let response=await this.props.todos.deleteToDo(this.state.data.id);
    this.props.todos.getToDo();
    this.onCloseModal();
  }
  changeInputs=(e)=>{
    console.log(e.target.value);
    let data={...this.state.data};
    this.setState({
      data:{
        ...data,
        [e.target.name]:e.target.value
      }
    });
  };
  updateToDo=async ()=>{
    let data=this.state.data;
    let id=data.id;
    data.itemname=data.title;
    delete data.title;
    console.log(data);
    let response=await this.props.todos.updateToDo(id,data);
    console.log(response);
  };
  componentWillReceiveProps(newProps){
    let todos=newProps.todo.events;
    console.log(todos);
    let events=[];
    for(let i=0;i<todos.length;i++){
      let instance={
        id:todos[i]._id,
        title:todos[i].itemname,
        description:todos[i].description,
        start:new Date(todos[i].meettime),
        end:moment(new Date(todos[i].meettime)).add(todos[i].approxmeetduration,'m').toDate(),
        approxmeetduration:todos[i].approxmeetduration
      }
      events.push(instance);
    }
    console.log("todos");
    console.log(events);
    this.setState({events});
  }
  render() {
    let views = ["month", "week", "agenda", "day"];
    if (this.state.width < 800) {
      views = ["month"];
    }
    console.log("Here");
    let events=this.state.events;
    return (
      <div style={{ height: 600, margin: "2.5%", marginTop: "5%" }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={(e)=>this.onOpenModal(e)}
          onSelectSlot={this.onOpenModal}
          views={views}
        />
        <Modal
          open={this.state.open}
          onClose={this.onCloseModal}
          className="calendar-modal"
          center
        >
          Details for the event:-
          <div>
            <b>Title: </b>
            <input type="text" name="title" value={this.state.data.title} onChange={this.changeInputs}/>
          </div>
          <div>
            <b>Description: </b>
            <input type="text" name="description" value={this.state.data.description} onChange={this.changeInputs}/>
          </div>
          <div>
            <b>Meet time: </b>
            {/* {new Date(this.state.data.start).toDateString()} */}
            <input type="text" name="meettime" value={moment(this.state.data.start, moment.ISO_8601).format('MM/DD/YYYY HH:mm')} onChange={this.changeInputs}/>
          </div>
          <div>
            <b>Approx meet length: </b>
            <input type="text" name="approxmeetduration" value={this.state.data.approxmeetduration+"minutes"} onChange={this.changeInputs}/>
          </div>
          <button onClick={this.deleteToDo}>Delete this?</button>
          <button onClick={this.updateToDo}>Update this?</button>
        </Modal>
        <p className="link-text text-center" onClick={this.handleOpenClickTodo}>
          Add a to-do
        </p>
        <Modal
          open={this.state.toDoOpen}
          onClose={this.onCloseTodo}
          className="calendar-modal"
          center
          showCloseIcon={false}
          blockScroll={false}
        >
          <div className="row title">Add a to-do</div>
          <div className="row">
            <p>Title</p>
            <input type="text" />
          </div>
          <div className="row">
            <p>Description</p>
            <textarea rows="6" />
          </div>
          <div className="row">
            <p>Time:&nbsp;</p>
            <DateTimePicker
              onChange={this.onChange}
              value={this.state.date}
            />
          </div>
          <div className="row has-text-centered">
            <button class="button" onClick={this.onSubmit}>Add</button>
          </div>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps=state=>({
   todo:state.todo
});

const mapActionsToProps=dispatch=>{
  return{
    todos:bindActionCreators(todoActions,dispatch)
  };
}

export default connect(mapStateToProps,mapActionsToProps)(Calendar);
