import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Briefcase, Code2, Award } from 'lucide-react';
import TiltCard from '../TiltCard';
import { linkedinData } from '@/data/linkedinData';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { personal, about, education, certifications } = linkedinData;

  const timeline = [
    {
      year: education[0].duration,
      title: education[0].degree,
      description: `${education[0].field} | CGPA: ${education[0].grade}`,
      icon: GraduationCap,
    },
    ...certifications.map((cert) => ({
      year: cert.date.replace('Issued ', ''),
      title: `${cert.name} Certified`,
      description: `${cert.issuer} - Credential ID: ${cert.credentialId}`,
      icon: Award,
    })),
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 gradient-text">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="perspective-1000"
          >
            <TiltCard>
              <div className="glass-card p-8 gradient-border">
                <div className="flex flex-col items-center text-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text">{personal.initials}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{personal.name}</h3>
                  <p className="text-primary mb-4">{personal.headline}</p>
                  <p className="text-muted-foreground leading-relaxed">
                    {about}
                  </p>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 glass-card flex items-center justify-center glow-primary">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-full bg-gradient-to-b from-primary/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="glass-card p-4 flex-1 hover:glow-primary transition-all duration-300">
                  <span className="text-xs text-primary font-medium">{item.year}</span>
                  <h4 className="font-semibold mt-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
