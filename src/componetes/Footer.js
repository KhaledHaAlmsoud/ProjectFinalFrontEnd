import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
export default function Footer() {
    return (
        <div>
            

<Card className="text-center">
  <Card.Header>Featured</Card.Header>
  <Card.Body>
    <Card.Title> to Contact Us </Card.Title>
    <Card.Text>
    E-mail : StoreShop@store.sa  -  Phone : +6995443694 </Card.Text>
   <Link to="/Product" > <Button variant="primary"> Back to top </Button> </Link> 
  </Card.Body> 
  <Card.Footer className="text-muted"> repeat it again 🖤 </Card.Footer>
</Card>

        </div>
    )
}
