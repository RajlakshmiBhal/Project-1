// import React from 'react';
// import { Card, Button } from 'react-bootstrap';

// const ModuleCard = ({ title, desc, source, image, actions, onDelete, onEdit }) => (
//   <Card className="mb-4 shadow-sm">
//     {image && <Card.Img variant="top" src={image} alt={title} />}
//     <Card.Body>
//       <Card.Title>{title}</Card.Title>
//       <Card.Text>{desc}</Card.Text>
//       {source && <Card.Subtitle className="mb-2 text-muted">Source: {source}</Card.Subtitle>}
//       <div className="d-flex justify-content-between flex-wrap">
//         {actions?.map((action, idx) => (
//           <Button key={idx} variant={action.variant || 'primary'} onClick={action.onClick}>
//             {action.label}
//           </Button>
//         ))}
//         {onEdit && <Button variant="warning" onClick={onEdit}>Edit</Button>}
//         {onDelete && <Button variant="danger" onClick={onDelete}>Delete</Button>}
//       </div>
//     </Card.Body>
//   </Card>
// );

// export default ModuleCard;


import React from "react";
import { Card, Button } from "react-bootstrap";
import bgImage from "/images/Card-BG.jpg"; // 👈 place your bg image inside src/assets or src/images

const ModuleCard = ({ title, description, extraDescription, source, onDelete, onEdit }) => {
  return (
    <Card
      className="mb-4 shadow-lg module-card"
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        border: "none",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "280px",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      {/* Dark overlay */}
      <div
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.4))",
          height: "100%",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Content */}
        <div>
          <Card.Title
            className="fw-bold"
            style={{
              fontSize: "1.4rem",
              textShadow: "2px 2px 6px rgba(0,0,0,0.9)",
              color: "#fefefe",
            }}
          >
            {title}
          </Card.Title>

          {/* Main description */}
          <Card.Text
            style={{
              fontSize: "1rem",
              marginBottom: "8px",
              color: "#f1f1f1",
              textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            {description}
          </Card.Text>

          {/* Extra description */}
          {extraDescription && (
            <Card.Text
              style={{
                fontSize: "0.85rem",
                fontStyle: "italic",
                marginBottom: "12px",
                color: "#ddd",
                textShadow: "1px 1px 2px rgba(0,0,0,0.6)",
              }}
            >
              {extraDescription}
            </Card.Text>
          )}

          {/* Source */}
          <Card.Text
            style={{
              fontSize: "0.9rem",
              color: "#111",
              background: "rgba(255,255,255,0.9)",
              padding: "5px 10px",
              borderRadius: "8px",
              display: "inline-block",
              fontWeight: "500",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            Source: {source}
          </Card.Text>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-between align-items-center mt-3">
          {/* Left - Read More */}
          <Button
            variant="success"
            size="sm"
            style={{
              fontWeight: "600",
              textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
            }}
          >
            Read More
          </Button>

          {/* Right - Save, Edit, Delete */}
          <div className="d-flex gap-2">
            <Button
              variant="light"
              size="sm"
              style={{
                fontWeight: "600",
                color: "#333",
                textShadow: "1px 1px 2px rgba(0,0,0,0.4)",
              }}
              disabled
            >
              Save
            </Button>

            <Button
              variant="warning"
              size="sm"
              onClick={onEdit}
              style={{
                fontWeight: "600",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
              }}
            >
              Edit
            </Button>

            <Button
              variant="danger"
              size="sm"
              onClick={onDelete}
              style={{
                fontWeight: "600",
                textShadow: "1px 1px 3px rgba(0,0,0,0.7)",
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ModuleCard;
