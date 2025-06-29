import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Brain, TrendingUp, Target, Zap, ArrowRight, Sparkles, Building2, Users, Newspaper, Code } from 'lucide-react'
import { Navigation } from '../components/Navigation'
import AOS from 'aos'
import 'aos/dist/aos.css'

export function Landing() {
  useEffect(() => {
    // Initialize AOS only on the landing page
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 100
    })

    // Cleanup AOS when component unmounts
    return () => {
      AOS.refresh()
    }
  }, [])

  const features = [
    {
      icon: TrendingUp,
      title: 'Real-Time Intelligence',
      description: 'Live news feeds, hiring signals, and market intelligence to stay ahead of the competition.',
      color: 'green',
      stats: { value: '50K+', label: 'Data Points' }
    },
    {
      icon: Target,
      title: 'Personalized Strategies',
      description: 'AI-crafted pitch angles and subject lines tailored to each company\'s unique context.',
      color: 'violet',
      stats: { value: '95%', label: 'Accuracy' }
    },
    {
      icon: Building2,
      title: 'Tech Stack Analysis',
      description: 'Deep technology profiling to understand exactly what tools and platforms they use.',
      color: 'orange',
      stats: { value: '1000+', label: 'Technologies' }
    }
  ]

  const stats = [
    { icon: Users, value: '10K+', label: 'Companies Analyzed', color: 'blue' },
    { icon: Newspaper, value: '500K+', label: 'News Articles', color: 'green' },
    { icon: Code, value: '2K+', label: 'Tech Stacks', color: 'purple' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate', color: 'orange' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <main className="pt-24 container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-violet-400 bg-clip-text text-transparent">
              AI-Powered B2B Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Generate personalized strategic briefs with real-time company intelligence. 
              Transform your outreach with AI-driven insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-16"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              to="/app"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-600 to-violet-600 hover:from-primary-500 hover:to-violet-500 rounded-xl font-semibold text-lg transition-all duration-200 shadow-xl hover:shadow-primary-500/25 hover:scale-105"
            >
              <Sparkles className="w-5 h-5" />
              Create Your First Brief
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Stats Section */}
          <div 
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:border-gray-600 transition-all duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={600 + index * 100}
                >
                  <div className={`w-12 h-12 bg-${stat.color}-500/20 rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className={`w-6 h-6 text-${stat.color}-400`} />
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.2 }}
                  className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 hover:border-gray-600 transition-all duration-300 group"
                  data-aos="fade-up"
                  data-aos-delay={800 + index * 200}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 bg-${feature.color}-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 text-${feature.color}-400`} />
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{feature.stats.value}</div>
                      <div className="text-xs text-gray-400">{feature.stats.label}</div>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 group-hover:text-primary-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>

          {/* Parallax Section */}
          <div 
            className="relative py-20 mb-16 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-violet-500/10 rounded-3xl"></div>
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Trusted by Forward-Thinking Teams
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join thousands of sales professionals who use IntelliBrief to close more deals with AI-powered intelligence.
                </p>
                
                {/* Animated Logo Grid */}
                <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center opacity-60">
                  {['Company A', 'Company B', 'Company C', 'Company D', 'Company E', 'Company F'].map((company, index) => (
                    <motion.div
                      key={company}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 0.6, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-700/30 rounded-lg p-4 text-center"
                      data-aos="fade-up"
                      data-aos-delay={1600 + index * 100}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-primary-500 to-violet-500 rounded mx-auto mb-2"></div>
                      <div className="text-xs text-gray-400">{company}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-500/10 to-violet-500/10 border border-primary-500/20 rounded-2xl p-8"
            data-aos="zoom-in"
            data-aos-delay="1800"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your B2B Outreach?</h2>
            <p className="text-gray-300 mb-6 text-lg">
              Join forward-thinking sales teams using AI intelligence to close more deals.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-600 to-violet-600 hover:from-primary-500 hover:to-violet-500 rounded-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Zap className="w-5 h-5" />
              Get Started Now
            </Link>
          </motion.div>
        </div>
      </main>
    </div>
  )
}