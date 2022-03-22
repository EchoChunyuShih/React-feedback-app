import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Card>
      <h3>About This Project</h3>
      <p>This is a React app to leave feedback for a product or a service</p>
      <p>version: 1.0.0</p>
      <Link to="/">Back To Home</Link>
    </Card>
  );
};

export default AboutPage;
