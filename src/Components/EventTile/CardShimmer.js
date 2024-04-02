import React from 'react';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';

function CardShimmer() {
  return (
    <div className="d-flex justify-content-around">
      <Card style={{ width: '288px' }}>
        <Card.Img height="150px" width="286px" variant="top"  />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> {' '}
            {/* <Placeholder xs={6} /> <Placeholder xs={8} /> */}
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
            {/* <Placeholder xs={6} /> <Placeholder xs={8} /> */}
          </Placeholder>
          <Placeholder.Button variant="outline-secondary" xs={6} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default CardShimmer;