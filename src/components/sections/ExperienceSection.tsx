import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Award, Star, Medal } from 'lucide-react';
import { linkedinData } from '@/data/linkedinData';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const iconMap = [Trophy, Star, Award, Medal];
  const achievements = linkedinData.achievements.map((achievement, index) => ({
    ...achievement,
    icon: iconMap[index % iconMap.length],
  }));

  return (
    <section id="experience" className="py-24 relative">
      <div className="container px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mt-2 gradient-text">
            Recognition & Awards
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {/* Timeline line */}
              {index < achievements.length - 1 && (
                <div className="absolute left-6 top-14 w-px h-full bg-gradient-to-b from-primary/50 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative z-10 w-12 h-12 glass-card flex items-center justify-center shrink-0 glow-primary">
                <achievement.icon className="w-5 h-5 text-primary" />
              </div>

              {/* Content */}
              <div className="glass-card p-5 flex-1 hover:glow-primary transition-all duration-300 group">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mt-1">
                      {achievement.description}
                    </p>
                  </div>
                  <span className="text-xs text-primary font-medium px-2 py-1 bg-primary/10 rounded-full">
                    {achievement.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
