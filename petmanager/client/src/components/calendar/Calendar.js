import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import Modal from "react-responsive-modal";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
import DateTimePicker from "react-datetime-picker";
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: {},
      width: window.innerWidth,
      toDoOpen: false,
      startDate: new Date(),
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

  handleChange = date => this.setState({ startDate: date });
  onChange = time => this.setState({ time });
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
              value={this.state.startDate}
            />
          </div>
          <div className="row has-text-centered">
            <button class="button">Add</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Calendar;
