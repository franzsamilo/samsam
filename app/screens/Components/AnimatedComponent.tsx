"use client";

import React from "react";
import { motion } from "framer-motion";

function AnimatedComponent() {
  return (
    <div>
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, loop: Infinity }}
        style={{ width: 100, height: 100, backgroundColor: "red" }}
      />
    </div>
  );
}

export default AnimatedComponent;
