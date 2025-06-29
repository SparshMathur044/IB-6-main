import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import { motion } from 'framer-motion'

interface BriefStatsChartProps {
  data: {
    news: number
    jobs: number
    technologies: number
  }
}

export function BriefStatsChart({ data }: BriefStatsChartProps) {
  const chartData = [
    { name: 'News', value: data.news, color: '#10b981' },
    { name: 'Jobs', value: data.jobs, color: '#3b82f6' },
    { name: 'Tech', value: data.technologies, color: '#8b5cf6' }
  ]

  const barData = [
    { name: 'News', value: data.news, fill: '#10b981' },
    { name: 'Jobs', value: data.jobs, fill: '#3b82f6' },
    { name: 'Tech', value: data.technologies, fill: '#8b5cf6' }
  ]

  const total = data.news + data.jobs + data.technologies

  if (total === 0) {
    return (
      <div className="bg-gray-800/30 rounded-lg p-4 text-center">
        <div className="text-gray-500 text-sm">No data available</div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-gray-800/30 rounded-lg p-4"
    >
      <div className="grid grid-cols-2 gap-4">
        {/* Mini Pie Chart */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  innerRadius={15}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-gray-400 mt-1">Distribution</div>
        </div>

        {/* Mini Bar Chart */}
        <div className="flex flex-col items-center">
          <div className="w-20 h-20">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData}>
                <XAxis hide />
                <YAxis hide />
                <Bar dataKey="value" radius={[2, 2, 0, 0]} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#1f2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="text-xs text-gray-400 mt-1">Comparison</div>
        </div>
      </div>

      {/* Legend */}
      <div className="flex justify-center gap-4 mt-3">
        {chartData.map((item) => (
          <div key={item.name} className="flex items-center gap-1">
            <div 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-xs text-gray-400">{item.name}: {item.value}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}