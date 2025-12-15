import React from "react";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const experiences = [
  {
    period: "2022 - Present",
    role: "Web Developer",
    company: "Enterprise Solutions",
    responsibilities: [
      "Led frontend development for large-scale B2B enterprise systems, including the Samsung B2B Dealer System",
      "Contributed to the development of Service Quick B2B System and Glenn KW System, delivering production-ready features for enterprise clients",
      "Designed and developed RESTful APIs using NestJS and MongoDB, handling backend development",
      "Maintained and optimized existing systems, enhancing performance, stability, and overall user experience",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="experience-subtitle">
          My professional journey in web development
        </p>

        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="experience-item">
              {/* Timeline line */}
              <div className="timeline-line" />

              {/* Timeline dot */}
              <div className="timeline-dot-top" />
              <div className="timeline-dot" />

              <div className="experience-card">
                <div className="experience-header">
                  <div className="experience-title-group">
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                  </div>
                  <span className="experience-period">{exp.period}</span>
                </div>

                <ul className="experience-responsibilities">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="responsibility-item">
                      <CheckCircle2 className="check-icon" />
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
