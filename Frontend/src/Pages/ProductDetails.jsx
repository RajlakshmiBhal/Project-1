import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 5 });
  const [editIndex, setEditIndex] = useState(null);

  // ✅ Load product and reviews
  useEffect(() => {
    const allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
    const found = allProducts.find(p => p.id === Number(id));
    setProduct(found);
    setReviews(found?.reviews || []);
  }, [id]);

  // ✅ Handle Buy Now
  const handleBuy = (product) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  };

  // ✅ Handle Review Submit
  const handleReviewSubmit = () => {
    if (!newReview.user || !newReview.comment) return alert('Please fill all fields');

    const updatedReviews = [...reviews];
    if (editIndex !== null) {
      updatedReviews[editIndex] = newReview;
      setEditIndex(null);
    } else {
      updatedReviews.push(newReview);
    }

    setReviews(updatedReviews);
    setNewReview({ user: '', comment: '', rating: 5 });

    const allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
    const updatedProducts = allProducts.map(p =>
      p.id === Number(id) ? { ...p, reviews: updatedReviews } : p
    );
    localStorage.setItem('allProducts', JSON.stringify(updatedProducts));
  };

  // ✅ Handle Delete Review
  const handleDeleteReview = (index) => {
    const updatedReviews = reviews.filter((_, i) => i !== index);
    setReviews(updatedReviews);

    const allProducts = JSON.parse(localStorage.getItem('allProducts')) || [];
    const updatedProducts = allProducts.map(p =>
      p.id === Number(id) ? { ...p, reviews: updatedReviews } : p
    );
    localStorage.setItem('allProducts', JSON.stringify(updatedProducts));
  };

  // ✅ Handle Edit Review
  const handleEditReview = (index) => {
    setNewReview(reviews[index]);
    setEditIndex(index);
  };

  // ✅ Handle missing product
  if (!product) {
    return (
      <Container className="py-5 text-center">
        <h2 className="text-danger">Product not found</h2>
        <Link to="/buy" className="btn btn-outline-success mt-3">Back to Buy Page</Link>
      </Container>
    );
  }

  return (
    <div style={{ backgroundColor: '#FFF8E1' }}>
      <Container className="py-5">
        <Row className="align-items-center">
          {/* Image */}
          <Col md={6}>
            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid rounded shadow-sm"
                style={{ maxHeight: '450px', objectFit: 'cover' }}
              />
            ) : (
              <div className="text-muted">Image not available</div>
            )}
          </Col>

          {/* Info */}
          <Col md={6}>
            <h2 className="text-success fw-bold mb-3">{product.name}</h2>
            <h4 className="mb-2">₹{product.price} / kg</h4>
            <p className="text-muted">{product.description || 'No description available.'}</p>
            <p><strong>Quantity:</strong> {product.quantity} kg</p>
            <p><strong>Location:</strong> {product.location}</p>

            <div className="mt-4">
              <Button variant="success" className="me-3" onClick={() => handleBuy(product)}>Buy Now</Button>
              <Link to="/cart" className="btn btn-outline-success me-2">Go to Cart</Link>
              <Link to="/buy" className="btn btn-outline-secondary">Back to Buy Page</Link>
            </div>
          </Col>
        </Row>

        {/* Add/Edit Review Form */}
        <Row className="mt-5">
          <Col md={8}>
            <h4 className="text-success mb-3">{editIndex !== null ? 'Edit Review' : 'Add a Review'}</h4>
            <Card className="p-3 shadow-sm">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Your Name"
                value={newReview.user}
                onChange={(e) => setNewReview({ ...newReview, user: e.target.value })}
              />
              <textarea
                className="form-control mb-2"
                placeholder="Your Comment"
                rows={3}
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
              />
              <select
                className="form-select mb-3"
                value={newReview.rating}
                onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
              >
                {[5, 4, 3, 2, 1].map(r => (
                  <option key={r} value={r}>{r} Star{r > 1 ? 's' : ''}</option>
                ))}
              </select>
              <Button variant="success" onClick={handleReviewSubmit}>
                {editIndex !== null ? 'Update Review' : 'Submit Review'}
              </Button>
            </Card>
          </Col>
        </Row>

        {/* Review List */}
        {reviews.length > 0 && (
          <Row className="mt-5">
            <Col>
              <h4 className="text-success mb-3">Customer Reviews</h4>
              {reviews.map((review, idx) => (
                <Card key={idx} className="mb-3 shadow-sm">
                  <Card.Body>
                    <Card.Title>{review.user}</Card.Title>
                    <Card.Text>{review.comment}</Card.Text>
                    <div>
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <span key={i} style={{ color: '#FFD700' }}>★</span>
                      ))}
                      {Array.from({ length: 5 - review.rating }).map((_, i) => (
                        <span key={i} style={{ color: '#ccc' }}>★</span>
                      ))}
                    </div>
                    <div className="mt-3">
                      <Button variant="outline-primary" size="sm" onClick={() => handleEditReview(idx)}>Edit</Button>{' '}
                      <Button variant="outline-danger" size="sm" onClick={() => handleDeleteReview(idx)}>Delete</Button>
                    </div>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};

export default ProductDetails;