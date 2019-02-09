import React from "react";
import moment from "moment";

const EventBody = props => {
  let event, attendeeList
  event = props.event;

  attendeeList = event.attendees.map(attendee => {
    return (
      <p key={attendee.id}>{attendee.name}</p>
    )
  })
  return (
    <div style={{ backgroundColor: "#f6f7f8" }}>
      <div className="flex">
        <div className="w-3/5">
          <img src={event.image_url} style={{ width: "600px", marginLeft: "9rem", marginTop: "3rem", borderRadius: "5px" }} />
          <h2 style={{ fontSize: "2rem", marginLeft: "9rem", marginTop: "2rem" }}>Details</h2>
          <p style={{ fontSize: "1rem", marginLeft: "9rem", marginTop: "2rem" }}>{event.description}</p>
          <div style={{ marginLeft: "9rem", marginTop: "2rem", marginBottom: "10rem" }}>
            <h2 style={{ fontSize: "2rem" }}>Attendees ({event.attendees.length} rsvp's)</h2>
            {attendeeList}
          </div>

        </div>
        <div className="w-2/5">
          <div className="sidebar" style={{ padding:"0.5rem", backgroundColor: "white", width: "300px", marginLeft: "3rem", marginTop: "2.5rem", borderRadius: "5px", border: "1px solid rgba(0,0,0,.12)" }}>
            <div style={{lineHeight:"1.5", paddingBottom:"1rem"}}><span style={{fontWeight:"bold"}}>Date:</span><br></br>{moment(event.date).format("dddd, MMMM DD, YYYY")}</div>
            <div style={{lineHeight:"1.5", paddingBottom:"1rem"}}><span style={{fontWeight:"bold"}}>Location:</span><br></br>{event.location}</div>
            <img src="../../assets/images/map.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBody;