import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import Modal from "react-responsive-modal";
const localizer = BigCalendar.momentLocalizer(moment);

function handleEvent(event) {
  console.log("Event clicked");
  console.log(event);
}

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: {}
    };
  }
  onOpenModal = event => {
    console.log(event);
    this.setState({ open: true, data: event });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    return (
      <div style={{ height: 600, margin: "2.5%", marginTop: "5%" }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={this.onOpenModal}
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
            <b>Description: </b>{this.state.data.description}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Calendar;
