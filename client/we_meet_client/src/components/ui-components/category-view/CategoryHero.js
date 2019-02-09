import React from 'react'
import hero from '../../../categories_hero.png'
import { Col, Row, FillButton } from 'tailwind-react-ui'

const CategoryHero = () => {
  return (
    <Row style={{border: "1px solid rgba(0,0,0,.12)"}}>
      {/* <Col w="1/2" text="center" p="4" height="20">
        <div style={{ textAlign: "left", paddingLeft: "10rem", marginTop: "7rem"}}>
          <h3 style={{fontSize: "1.5rem", color: "#4DC0B5", marginBottom: "1rem"}}>EXPLORE  |  CONNECT  |  CREATE</h3>
          <h1 style={{fontSize: "2.75rem", marginBottom: "1rem"}}>Discover and participate in fun events near you</h1>
          <h3 style={{fontWeight: "400", marginBottom: "1rem"}}>Meet people with similar interests and do more of what you love to do.</h3>
          <FillButton brand="primary">Sign up</FillButton>
        </div>
      </Col>       */}
      {/* <Col w="1/2" text="right" p="4" style={{height: '550px', paddingRight: '80px'}}> */}
        <img src={hero} alt="hero" style={{height: '540px'}} />
      {/* </Col> */}
    </Row>
  )
}

export default CategoryHero