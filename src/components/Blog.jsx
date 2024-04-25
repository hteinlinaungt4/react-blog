import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Blog({blog}) {
  return (
      <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>
                   {blog.description}
                </Card.Text>
                <Link to={`/${blog.id}`} variant="primary">View</Link>
            </Card.Body>
        </Card>
  )
}

export default Blog
