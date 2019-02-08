import React from "react";
import moment from "moment";

const EventBody = props => {
  let event = props.event;
  return (
    <div style={{backgroundColor:"#f6f7f8"}}>
      <div className="flex">
        <div className="w-3/5">
          <img src="../../assets/images/hackathon.jpg" style={{width:"600px", marginLeft:"9rem", marginTop:"3rem", borderRadius:"5px"}}/>
          <h2 style={{ fontSize: "2rem", marginLeft:"9rem", marginTop:"2rem"  }}>Details</h2>
          <p style={{ fontSize: "1rem", marginLeft:"9rem", marginTop:"2rem"  }}>{event.description}</p>
          <h2 style={{ fontSize: "2rem", marginLeft:"9rem", marginTop:"2rem", marginBottom:"10rem"  }}>Attendees</h2>
        </div>
        <div className="w-2/5">
          <div className="sidebar" style={{backgroundColor:"white", width:"300px", marginLeft:"3rem", marginTop:"3rem", borderRadius:"5px", border: "1px solid rgba(0,0,0,.12)"}}>
            <div>{moment(event.date).format("dddd, MMMM DD, YYYY")}</div>
            <div>{event.location}</div>
            <img src="../../assets/images/map.png"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventBody;