// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';


// const EditModuleForm = ({ initialData, onSave, onCancel }) => {
//   const [formData, setFormData] = useState(initialData);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(formData);
//   };
//   return (
//     <div>
//       <h1>This is EditModuleForm Components</h1>
//        <Form onSubmit={handleSubmit} className="mb-3">
//       <Form.Control name="title" value={formData.title} onChange={handleChange} className="mb-2" />
//       <Form.Control name="desc" value={formData.desc} onChange={handleChange} className="mb-2" />
//       <Form.Control name="source" value={formData.source} onChange={handleChange} className="mb-2" />
//       <Form.Control name="image" value={formData.image} onChange={handleChange} className="mb-2" />
//       <Button type="submit" variant="success" className="me-2">Save</Button>
//       <Button variant="secondary" onClick={onCancel}>Cancel</Button>
//     </Form>
      
//     </div>
//   );
// };

// export default EditModuleForm;








import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import bgImage from "/images/EditCard.jpg"; // 👈 keep image in /src/images

const EditModuleForm = ({ initialData, onSave, onCancel }) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Card
      className="shadow-lg border-0 edit-form-card"
      style={{
        borderRadius: "18px",
        overflow: "hidden",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          padding: "30px",
          height: "100%",
        }}
      >
        <h3
          className="text-center mb-4"
          style={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "2px 2px 6px rgba(0,0,0,0.9)",
          }}
        >
          Edit Module
        </h3>

        <Form onSubmit={handleSubmit}>
          {/* Title */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#f1f1f1", fontWeight: "600" }}>
              Title
            </Form.Label>
            <Form.Control
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="form-field"
              required
            />
          </Form.Group>

          {/* Description */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#f1f1f1", fontWeight: "600" }}>
              Description
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="description"
              value={formData.description || ""}
              onChange={handleChange}
              className="form-field"
              required
            />
          </Form.Group>

          {/* Extra Description */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#f1f1f1", fontWeight: "600" }}>
              Extra Description
            </Form.Label>
            <Form.Control
              name="extraDescription"
              value={formData.extraDescription || ""}
              onChange={handleChange}
              className="form-field"
            />
          </Form.Group>

          {/* Source */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#f1f1f1", fontWeight: "600" }}>
              Source
            </Form.Label>
            <Form.Control
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="form-field"
            />
          </Form.Group>

          {/* Image */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: "#f1f1f1", fontWeight: "600" }}>
              Image Link
            </Form.Label>
            <Form.Control
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="form-field"
            />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button
              type="submit"
              variant="success"
              className="animated-btn"
              style={{ fontWeight: "600", minWidth: "100px" }}
            >
              Save
            </Button>
            <Button
              variant="secondary"
              onClick={onCancel}
              className="animated-btn"
              style={{ fontWeight: "600", minWidth: "100px" }}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </Card>
  );
};

export default EditModuleForm;
