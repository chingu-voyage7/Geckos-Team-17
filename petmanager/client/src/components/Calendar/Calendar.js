import React, { Component } from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import events from "./events";
import Modal from "react-responsive-modal";
const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      data: {},
      width:window.innerWidth
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
    let views=['month','week','agenda','day'];
    if(this.state.width>=800){
      views=['month','week','agenda','day'];
    }
    else{
      views=['month'];
    }
    return (
      <div style={{ height: 600, margin: "2.5%", marginTop: "5%" }}>
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          onSelectEvent={this.onOpenModal}
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
            <b>Description: </b>{this.state.data.description}
          </div>
        </Modal>
      </div>
    );
  }
}

export default Calendar;
