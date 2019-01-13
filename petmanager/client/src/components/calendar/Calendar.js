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
      time: "10:00"
    };
  }
  onOpenModal = event => {
    console.log(event);
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
  render() {
    let views = ["month", "week", "agenda", "day"];
    if (this.state.width < 800) {
      views = ["month"];
    }
    return (
      <div style={{ height: 600, margin: "2.5%", marginTop: "5%" }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={this.onOpenModal}
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
            {this.state.data.title}
          </div>
          <div>
            <b>Description: </b>
            {this.state.data.description}
          </div>
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

const mapActionsToProps=dispatch=>{
  return{
    todos:bindActionCreators(todoActions,dispatch)
  };
}

export default connect(null,mapActionsToProps)(Calendar);
