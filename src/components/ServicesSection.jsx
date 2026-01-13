import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceVisualCard = ({ service, index }) => {
  const [activeTab, setActiveTab] = useState(0);

  // Tab configurations for each service
  const tabConfigs = {
    'Branding': [
      { label: 'LOGO', key: 'logo' },
      { label: 'DESIGN', key: 'design' }
    ],
    'Development': [
      { label: 'CODE', key: 'code' },
      { label: 'DEV', key: 'dev' }
    ],
    'UI/UX Design': [
      { label: 'UI', key: 'ui' },
      { label: 'UX', key: 'ux' }
    ],
    'Graphic Design': [
      { label: 'ART', key: 'art' },
      { label: 'DESIGN', key: 'design' }
    ],
    'SEO': [
      { label: 'SEO', key: 'seo' },
      { label: 'RANK', key: 'rank' }
    ],
  };

  const tabs = tabConfigs[service.title] || tabConfigs['UI/UX Design'];

  // Content for each tab
  const getTabContent = (serviceTitle, tabKey) => {
    const contentMap = {
      'Branding': {
        logo: {
          title: 'Logo Design',
          description: 'Professional logo creation that represents your brand identity',
          items: ['Vector Graphics', 'Multiple Formats', 'Brand Guidelines'],
          code: null
        },
        design: {
          title: 'Brand Design',
          description: 'Complete brand identity system and visual guidelines',
          items: ['Color Palette', 'Typography', 'Visual Assets'],
          code: null
        }
      },
      'Development': {
        code: {
          title: 'Code Quality',
          description: 'Clean, maintainable code following best practices',
          items: ['Clean Architecture', 'Best Practices', 'Documentation'],
          code: `function createApp() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetchData().then(setData);
  }, []);
  
  return (
    <div className="app">
      <Header />
      <MainContent data={data} />
    </div>
  );
}`
        },
        dev: {
          title: 'Development',
          description: 'Modern development stack and deployment',
          items: ['React/Next.js', 'Node.js Backend', 'CI/CD Pipeline'],
          code: null
        }
      },
      'UI/UX Design': {
        ui: {
          title: 'User Interface',
          description: 'Beautiful and intuitive interface design',
          items: ['Visual Design', 'Component Library', 'Design System'],
          code: null
        },
        ux: {
          title: 'User Experience',
          description: 'Optimized user flows and interactions',
          items: ['User Research', 'Wireframing', 'Prototyping'],
          code: null
        }
      },
      'Graphic Design': {
        art: {
          title: 'Art Direction',
          description: 'Creative direction and visual storytelling',
          items: ['Concept Development', 'Style Guide', 'Creative Vision'],
          code: null
        },
        design: {
          title: 'Graphic Design',
          description: 'Stunning visuals and graphics',
          items: ['Print Design', 'Digital Graphics', 'Brand Assets'],
          code: null
        }
      },
      'SEO': {
        seo: {
          title: 'SEO Optimization',
          description: 'Search engine optimization strategies',
          items: ['Keyword Research', 'On-Page SEO', 'Content Strategy'],
          code: null
        },
        rank: {
          title: 'Ranking',
          description: 'Improve search engine rankings',
          items: ['Link Building', 'Technical SEO', 'Performance'],
          code: null
        }
      }
    };

    return contentMap[serviceTitle]?.[tabKey] || contentMap['UI/UX Design']['ui'];
  };

  const currentContent = getTabContent(service.title, tabs[activeTab].key);

  const visualComponents = {
    'Branding': (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </motion.div>
          <div>
            <div className="text-xs text-gray-600 font-medium">BRAND</div>
            <div className="text-xs text-gray-600 font-medium">IDENTITY</div>
          </div>
        </div>
        
        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 h-32 flex flex-col justify-center"
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-bold text-gray-800 mb-1"
            >
              {currentContent.title}
            </motion.h4>
            <p className="text-xs text-gray-600 mb-2">{currentContent.description}</p>
            <div className="flex flex-wrap gap-1">
              {currentContent.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="text-[10px] bg-white/80 text-gray-700 px-2 py-0.5 rounded"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab, idx) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded px-3 py-1 text-xs font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    ),
    'Development': (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </motion.div>
        </div>
        
        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: activeTab === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: activeTab === 0 ? -20 : 20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg p-4 h-40 overflow-auto"
          >
            {currentContent.code ? (
              <motion.pre
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-[10px] text-green-400 font-mono leading-relaxed"
              >
                <motion.code
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {currentContent.code}
                </motion.code>
              </motion.pre>
            ) : (
              <div>
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-sm font-bold text-white mb-1"
                >
                  {currentContent.title}
                </motion.h4>
                <p className="text-xs text-gray-400 mb-2">{currentContent.description}</p>
                <div className="space-y-1">
                  {currentContent.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                      className="text-[10px] text-blue-400 font-mono"
                    >
                      • {item}
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex gap-2 items-center">
          {tabs.map((tab, idx) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded px-3 py-1 text-xs font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: activeTab === 0 ? [1, 0.7, 1] : [0.5, 0.5, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 ml-auto"
          ></motion.div>
        </div>
      </motion.div>
    ),
    'UI/UX Design': (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(139, 92, 246, 0.5)",
                "0 0 30px rgba(139, 92, 246, 0.7)",
                "0 0 20px rgba(139, 92, 246, 0.5)"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </motion.div>
        </div>
        
        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl p-6 space-y-4 shadow-lg"
          >
            {/* Title with purple background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <h4 className="inline-block text-sm font-bold text-black px-3 py-1 bg-purple-100 rounded-md mb-2">
                {currentContent.title}
              </h4>
              <p className="text-xs text-gray-600 mt-2">{currentContent.description}</p>
            </motion.div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {currentContent.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="text-[10px] bg-gray-100 text-gray-700 px-2.5 py-1 rounded-md font-medium"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex gap-2 items-center relative">
          {tabs.map((tab, idx) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded-lg px-4 py-2 text-xs font-medium transition-all duration-300 ${
                activeTab === idx
                  ? idx === 0 
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-900 text-white shadow-md'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.7, 1, 0.7]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2.5 h-2.5 rounded-full bg-purple-600 absolute -bottom-1 -right-1"
          ></motion.div>
        </div>
      </motion.div>
    ),
    'Graphic Design': (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </motion.div>
        </div>
        
        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, rotateY: -90 }}
            animate={{ opacity: 1, rotateY: 0 }}
            exit={{ opacity: 0, rotateY: 90 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 h-32 flex flex-col justify-center"
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-bold text-gray-800 mb-1"
            >
              {currentContent.title}
            </motion.h4>
            <p className="text-xs text-gray-600 mb-2">{currentContent.description}</p>
            <div className="flex flex-wrap gap-1">
              {currentContent.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="text-[10px] bg-white/80 text-gray-700 px-2 py-0.5 rounded"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab, idx) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded px-3 py-1 text-xs font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    ),
    'SEO': (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, -10, 0]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </motion.div>
        </div>
        
        {/* Tab Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 h-32 flex flex-col justify-center"
          >
            <motion.h4
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-sm font-bold text-gray-800 mb-1"
            >
              {currentContent.title}
            </motion.h4>
            <p className="text-xs text-gray-600 mb-2">{currentContent.description}</p>
            <div className="flex flex-wrap gap-1">
              {currentContent.items.map((item, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + idx * 0.05 }}
                  className="text-[10px] bg-white/80 text-gray-700 px-2 py-0.5 rounded"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Tabs */}
        <div className="flex gap-2">
          {tabs.map((tab, idx) => (
            <motion.button
              key={tab.key}
              onClick={() => setActiveTab(idx)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`rounded px-3 py-1 text-xs font-medium transition-all duration-300 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>
      </motion.div>
    ),
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateY: -15 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      exit={{ opacity: 0, y: 50, rotateY: 15 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100"
    >
      <AnimatePresence mode="wait">
        {visualComponents[service.title] || visualComponents['UI/UX Design']}
      </AnimatePresence>
    </motion.div>
  );
};

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(2); // Default to UI/UX Design (index 2)

  const services = [
    {
      title: 'Branding',
      description: 'Creating memorable brand identities that resonate with your audience and build lasting connections.',
    },
    {
      title: 'Development',
      description: 'Building robust, scalable web applications with cutting-edge technologies and best practices.',
    },
    {
      title: 'UI/UX Design',
      description: 'UI/UX design is designing interfaces for a great user experience.',
    },
    {
      title: 'Graphic Design',
      description: 'Visual storytelling through stunning graphics that capture attention and communicate your message effectively.',
    },
    {
      title: 'SEO',
      description: 'Optimizing your online presence to rank higher and attract more organic traffic to your website.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#0a0b1a] via-[#0f1a2e] to-[#0a1a1e] text-white overflow-hidden">
      {/* Animated gradient glow effect from left */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            "radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-0 top-0 w-1/3 h-full blur-3xl"
      ></motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Side - Services List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            {/* Heading */}
            <motion.div variants={itemVariants} className="space-y-2">
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm uppercase tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold"
              >
                OUR SERVICE
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-white">What Services</span>
                <br />
                <span className="text-white">
                  We're{' '}
                  <motion.span
                    animate={{
                      backgroundImage: [
                        "linear-gradient(90deg, #60a5fa, #a78bfa)",
                        "linear-gradient(90deg, #a78bfa, #60a5fa)",
                        "linear-gradient(90deg, #60a5fa, #a78bfa)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block bg-clip-text text-transparent font-bold"
                    style={{
                      backgroundImage: "linear-gradient(90deg, #60a5fa, #a78bfa)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Offering
                  </motion.span>
                </span>
              </h2>
            </motion.div>

            {/* Services List */}
            <motion.div variants={itemVariants} className="space-y-0 border-t border-white/10">
              {services.map((service, index) => {
                const isActive = selectedService === index;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.button
                      onClick={() => setSelectedService(index)}
                      className="w-full text-left py-6 px-0 group relative"
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ type: "spring", stiffness: 500 }}
                                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                              ></motion.div>
                            )}
                          </AnimatePresence>
                          <motion.span
                            animate={{
                              color: isActive ? '#ffffff' : '#9ca3af',
                            }}
                            transition={{ duration: 0.3 }}
                            className="text-lg md:text-xl font-medium"
                          >
                            {service.title}
                            {index === 2 && '.'}
                          </motion.span>
                        </div>
                        {/* Navigation arrows (visible on hover) */}
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          whileHover={{ opacity: 1, x: 0 }}
                          className="transition-opacity"
                        >
                          <svg
                            className="w-5 h-5 text-white/50"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </motion.div>
                      </div>
                    </motion.button>
                    <div className="border-b border-white/10"></div>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Description Text */}
            <AnimatePresence mode="wait">
              <motion.p
                key={selectedService}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-base md:text-lg leading-relaxed mt-4"
              >
                {services[selectedService].description}
              </motion.p>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative lg:sticky lg:top-24"
          >
            <div className="relative">
              <AnimatePresence mode="wait">
                <ServiceVisualCard
                  key={selectedService}
                  service={services[selectedService]}
                  index={selectedService}
                />
              </AnimatePresence>

              {/* Animated shadow effect */}
              <motion.div
                animate={{
                  opacity: [0.2, 0.3, 0.2],
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4/5 h-8 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-2xl rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
