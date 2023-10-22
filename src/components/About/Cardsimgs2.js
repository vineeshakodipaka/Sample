import React from 'react';
import cimg1 from '../../Images/Return Purchase.png';
import cimg2 from '../../Images/Natural Food.png';
import cimg3 from '../../Images/Phone Time.png';
import cimg4 from '../../Images/Card Security.png';
import { Card, Col, Row } from 'react-bootstrap';
import './Cardsimgs-2.css'

const cimgs = [
  { img: cimg1, caption1: 'Return Policy',caption2:"Simply dummy text of the printintypesetting industry." },
  { img: cimg2, caption1: '100% Fresh',caption2:"Simply dummy text of the printintypesetting industry." },
  { img: cimg3, caption1: 'Support 24/7',caption2:"Simply dummy text of the printintypesetting industry." },
  { img: cimg4, caption1: 'Secured Payment',caption2:"Simply dummy text of the printintypesetting industry." }
];

const Cardsimgs2 = () => {
  return (
    <div className='cardimgscls-2 '>
  
    <div className='cardimgscls-div px-xl-5 pt-5 pt-lg-0 pb-5 mt-5 mt-lg-0' style={{ background: "#D1D1D1" }}>
        <Row className='d-none d-lg-block pb-5  mb-5'>
        <Col className=' mb-5 pb-5'></Col>
        </Row>
      <Row xs={1} md={2} lg={4} className="g-4 cardsrow pb-lg-5 py-lg-3 mb-lg-5  pt-5 justify-content-center px-xl-5 mx-lg-5  mx-4">
        {cimgs.map((item, i) => (
          <Col key={i} className="justify-content-center px-xl-3">
            <Card className='rounded-5 p-lg-2 py-lg-5  pt-5 pb-5' style={{ background: "#FFF" }}>
              <center>
                <Card.Img
                  className="rounded-3 p-4"
                  src={item.img}
                  alt={`Image ${i + 1}`}
                  width="80px"
                  style={{ width: "80px", backgroundColor: "#EAE6DC" }}
                />
              </center>
              <Card.Body>
                <Card.Text className="text-center text-1">{item.caption1}</Card.Text>
                <Card.Text className="text-center px-xl-2 text-2">{item.caption2}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
   
    </div>
  );
};

export default Cardsimgs2;
