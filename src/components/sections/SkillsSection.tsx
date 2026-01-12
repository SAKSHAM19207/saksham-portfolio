import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TiltCard from '../TiltCard';
import { linkedinData } from '@/data/linkedinData';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { skills } = linkedinData;

  const skillCategories = [
    {
      title: 'Languages',
      skills: skills.languages,
      color: 'primary',
    },
    {
      title: 'Core Skills',
      skills: skills.frameworks,
      color: 'accent',
    },
    {
      title: 'Tools & Tech',
      skills: skills.tools,
      color: 'primary',
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 gradient-text">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 perspective-1000">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <TiltCard className="h-full">
                <div className={`glass-card p-6 h-full ${category.color === 'primary' ? 'hover:glow-primary' : 'hover:glow-accent'} transition-all duration-300`}>
                  <h3 className={`text-lg font-semibold mb-6 ${category.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium
                          ${category.color === 'primary' 
                            ? 'bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20' 
                            : 'bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20'}
                          transition-colors cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
