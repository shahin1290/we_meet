import React from 'react'
import hero from '../../hero.png'
import { Col, Row, FillButton } from 'tailwind-react-ui'

const Hero = () => {
  return (
    <Row style={{border: "1px solid rgba(0,0,0,.12)"}}>
      <Col w="1/2" text="center" p="4" height="20">
        <div style={{ textAlign: "left", paddingLeft: "10rem", marginTop: "8rem"}}>
          <h3 style={{fontSize: "1.5rem", color: "#4DC0B5", marginBottom: "1rem"}}>DISCOVER  |  CONNECT  |  CREATE</h3>
          <h1 style={{fontSize: "3rem", marginBottom: "1rem"}}>Do more of what you always wanted</h1>
          <h3 style={{fontWeight: "400", marginBottom: "1rem"}}>Meet people who share your passions and do more of what you love to do.</h3>
          <FillButton brand="primary">Sign up</FillButton>
        </div>
      </Col>      
      <Col w="1/2" text="right" p="4" style={{height: '550px', paddingRight: '80px'}}>
        <img src={hero} alt="hero" style={{height: '540px'}} />
      </Col>
    </Row>
  )
}

export default Hero