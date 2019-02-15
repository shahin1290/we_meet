import React, {Component} from "react";
import moment from "moment";
import { FillButton } from 'tailwind-react-ui';
import axios from "axios";



class GroupHeader extends Component {

  async joinGroup() {
    const credentials = { 'access-token': localStorage.getItem('access-token'), 'token-type': localStorage.getItem('token-type'), 'client': localStorage.getItem('client'), 'expiry': localStorage.getItem('expiry'), 'uid': localStorage.getItem('uid'), }

    const response = await axios.post(`http://localhost:3000/groups/${this.props.group.id}/memberships`, {}, { headers: credentials }) 
    console.log(response)
  }
  render() {
    let group = this.props.group;

    return (
      <>
        <div style={{ height:"400px", borderTop: "2px solid rgba(0,0,0,.12)", borderBottom: "1px solid rgba(0,0,0,.12)"}}>
            <h1 style={{ fontSize: "2.75rem", position:"absolute", right:"15rem", marginTop:"1.5rem" }}>{group.name}</h1>
            <div>
              <img
                src={group.image_url}
                style={{
                  height: "300px",
                  border: "1px solid rgba(0,0,0,.12)",
                  borderRadius: "30px",
                  position: "absolute",
                  marginTop: "1.5rem",
                  marginLeft: "7rem"
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                right: "25.5rem",
                marginTop: "5rem",
                fontWeight: "400",
                lineHeight: "1.5",
                marginBottom: "1rem",
                marginLeft: "3.2rem"
              }}
            >
              <p>
                Organized by{" "}
                <span style={{ fontWeight: "bold", color: "teal" }}>
                  {group.organizer.name}
                </span>
              </p>
              <p>
                Group in{" "}
                <span style={{ fontWeight: "bold", color: "teal" }}>
                  {group.location}
                </span>
              </p>
            </div>
            <div>
              <FillButton
                  onClick={this.joinGroup.bind(this)}
                  brand='primary'
                  large
                  style={{ position:"absolute", right:"16.5rem", width:"300px", marginTop:"10rem", fontSize:"24px"}}
                >
                  Join group
              </FillButton>
              <FillButton
                  brand='secondary'
                  large
                  style={{ position:"absolute", right:"16.5rem", width:"300px", marginTop:"15rem", fontSize:"24px"}}
                >
                  Create event
              </FillButton>
            </div>
          {/* </div> */}
        </div>
      </>
    );
  }
  
};

export default GroupHeader;
