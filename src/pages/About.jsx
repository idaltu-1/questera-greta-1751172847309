import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-6">Our Mission</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're dedicated to making quality education accessible to everyone, everywhere.
            Through innovative technology and expert-led instruction, we're transforming
            how people learn and grow.
          </p>
        </motion.div>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex gap-4"
              >
                <div className="text-3xl text-blue-600">{value.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

const team = [
  {
    name: 'Sarah Johnson',
    role: 'CEO & Founder',
    bio: 'Former educator with 15 years of experience in EdTech.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Education',
    bio: 'PhD in Education Technology from Stanford University.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Lead Developer',
    bio: 'Tech innovator with a passion for accessible education.',
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3'
  }
];

const values = [
  {
    icon: '🎯',
    title: 'Excellence',
    description: 'We strive for the highest quality in everything we do.'
  },
  {
    icon: '🤝',
    title: 'Inclusivity',
    description: 'Education should be accessible to everyone, everywhere.'
  },
  {
    icon: '💡',
    title: 'Innovation',
    description: 'Constantly improving and adapting to new technologies.'
  },
  {
    icon: '🌱',
    title: 'Growth',
    description: 'Fostering continuous learning and development.'
  }
];

export default About;