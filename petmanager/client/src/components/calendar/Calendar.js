import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import Modal from "react-responsive-modal";
import DatePicker from "react-datepicker";
import TimePicker from "react-time-picker";
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
          showCloseIcon={false}
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
        >
          <div>
            Date:&nbsp;
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleChange}
            />
          </div>
          <div>
            Time:&nbsp;
            <TimePicker onChange={this.onChange} value={this.state.time} />
          </div>
        </Modal>
      </div>
    );
  }
}

export default Calendar;
