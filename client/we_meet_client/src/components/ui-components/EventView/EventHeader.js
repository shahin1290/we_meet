import React from "react";
import moment from "moment";

{/* <Events rsvpHandler={this.rsvp} responseMessage={this.state.containerMessage} /> */}

const EventHeader = props => {
  let event = props.event;
  return (
    <>
      <div style={{ borderTop: "2px solid rgba(0,0,0,.12)", borderBottom: "1px solid rgba(0,0,0,.12)"}}>
        <div
          style={{
            position: "absolute",
            marginTop: "1.4rem",
            marginLeft: "5rem",
            borderRadius: "4px",
            backgroundColor: "#f6f7f8",
            width: "50px",
            height: "55px",
            padding: "5px",
            border: "0.5px solid rgba(46,62,72,.6)"
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "700",
              lineHeight: "1.1",
              color: "red"
            }}
          >
            {moment(event.date).format("DD")}
          </div>
          <div
            style={{
              textAlign: "center",
              fontWeight: "700",
              color: "rgba(46,62,72,.6)",
              fontSize: "14px"
            }}
          >
            {moment(event.date).format("MMM")}
          </div>
        </div>
        <div style={{ margin: "1.5rem", marginLeft: "9rem" }}>
          <div style={{
              fontWeight: "400",
              lineHeight: "0.8",
              marginLeft:"0.1rem"
            }}>
                {moment(event.date).format("dddd, MMMM DD, ")}
                {event.time}
          </div>
          <h1 style={{ fontSize: "2.75rem" }}>{event.title}</h1>
          <div>
            <img
              src="../../assets/images/person.jpg"
              style={{
                height: "40px",
                borderRadius: "80px",
                position: "absolute",
                marginTop: "0.4rem"
              }}
            />
          </div>
          <div
            style={{
              fontWeight: "400",
              lineHeight: "1.5",
              marginBottom: "1rem",
              marginLeft: "3.2rem"
            }}
          >
            <p>
              Hosted by{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                [Organizer's name required]
              </span>
            </p>
            <p>
              From{" "}
              <span style={{ fontWeight: "bold", color: "teal" }}>
                {event.group.name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventHeader;
