import React from "react";
import { features } from "./features";
import { useFeatureCarousel } from "./useFeatureCarousel";
import "./SpecialFeatures.css";

export default function SpecialFeatures() {
  const { sectionRef, stageRef, setItemRef, scheduleRender } =
    useFeatureCarousel(features.length);

  return (
    <section className="edutech-section" id="edutechSection" ref={sectionRef}>
      <div className="header-box">
        <h1>
          Nationwide Data Engineering Integrated <span>GenAi Program Highlights</span>
        </h1>
      </div>

      <div className="carousel-container">
        <div className="center-hub">
          <div className="hub-content">
            Edutech <br />
            Features
          </div>
        </div>

        <div id="feature-stage" className="feature-stage" ref={stageRef}>
          {features.map((feat, i) => (
            <div
              key={feat.title}
              ref={setItemRef(i)}
              className="feature-item"
            >
              <div className="icon-box">
                <img
                  src={feat.icon}
                  className="feature-icon"
                  alt={feat.title}
                  onLoad={scheduleRender}
                />
              </div>
              <div className="text-content">
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
