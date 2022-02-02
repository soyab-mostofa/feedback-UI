import React from "react";
import Card from "../components/shared/Card";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
const AboutPage = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      <Card>
        <div className="about">
          <h1>About This Project</h1>
          <p>This is a React app to leave feedback for a product or service</p>
          <p>Version: 1.0.0</p>

          <p>
            <Link to="/">Back To Home</Link>
          </p>
        </div>
      </Card>
    </motion.div>
  );
};

export default AboutPage;
