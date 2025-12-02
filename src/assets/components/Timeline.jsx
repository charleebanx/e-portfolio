import React from "react";
import { BiBriefcase as WorkIcon } from "react-icons/bi";
import { PiStudent as SchoolIcon } from "react-icons/pi";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import timelineElements from "./timelineElements";

const Timeline = () => {
  return (
    <div style={{ backgroundColor: "#f8fafc" }}> {/* background */}
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const isSchoolIcon = element.icon === "school";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              icon={
                isWorkIcon ? <WorkIcon style={{ color: "#ffffff" }} /> :
                isSchoolIcon ? <SchoolIcon style={{ color: "#ffffff" }} /> : null
              }
              iconStyle={{
                background: "#d9466c", // primary muted rose
                color: "#ffffff",
                border: "none",        // remove any border if present
              }}
            >
              <h3 style={{ color: "#1e293b", fontSize: "1.25rem", fontWeight: 600 }}>
                {element.title}
              </h3>
              <h4 style={{ color: "#d9466c", fontSize: "1.125rem", fontWeight: 500 }}>
                {element.position}
              </h4>
              <h5 style={{ color: "#475569", fontSize: "0.875rem" }}>
                {element.location}
              </h5>
              <p style={{ color: "#475569", marginTop: "0.5rem" }}>
                {element.description}
              </p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
