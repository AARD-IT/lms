import React from "react";
import { features } from "./features";
import FeatureOrbitDiagram from "./FeatureOrbitDiagram";
import "./SpecialFeatures.css";

export default function SpecialFeatures() {
  return (
    <section className="edutech-section" id="edutechSection">
      <div className="header-box">
        <h1>
          Nationwide Data Engineering Integrated <span>GenAi Program Highlights</span>
        </h1>
      </div>

      <FeatureOrbitDiagram features={features} />
    </section>
  );
}
