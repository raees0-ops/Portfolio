import React, { useState } from 'react';
import './Skills.css';
import { SKILLS } from '../../utils/data';
import Skillcard from './Skillcard/Skillcard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {

    const [selectedSkill, setSelectedSkill] = useState(SKILLS[0]);

  // Handle skill selection
  const handleSelectSkill = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section className="skills-container">
      <h5>Technical Proficiency</h5>
      <div className="skills-content">
        <div className="skills">
          {SKILLS.map((item) => {
            // Return the Skillcard component inside the map function
            return (
              <Skillcard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title} // Check if the current item is selected
                onClick={() => handleSelectSkill(item)} // Handle skill selection
              />
            );
          })}
        </div>
        <div className="skills-info">
         <SkillsInfoCard 
         heading={selectedSkill.title}
         skills={selectedSkill.skills}
         />
        </div>
      </div>
    </section>
  );
};

export default Skills;
