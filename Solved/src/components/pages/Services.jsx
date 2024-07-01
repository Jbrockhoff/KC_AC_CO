import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Services({ handlePageChange }) {
  const handleHeatingClick = () => {
    handlePageChange('Heating');
  };

  const handleCoolingClick = () => {
    handlePageChange('Cooling');
  };

  const handleMaintenanceClick = () => {
    handlePageChange('Maintenance')
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/burners.jpg" style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Heating</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleHeatingClick}>Go to Heating</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/ac.jpg" style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Cooling</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleCoolingClick}>Go to Cooling</Button>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="assets/maintenance.jpg" style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>Preventative Maintenance</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary" onClick={handleMaintenanceClick}>Go to Maintenance</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Services;