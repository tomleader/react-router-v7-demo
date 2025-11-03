interface DataItem {
  label: string
  value: string | number
  color: string
}

interface Feature {
  title: string
  description: string
}

interface DataDisplayProps {
  title: string
  description: string
  data: DataItem[]
  features: Feature[]
}

export const DataDisplay = ({ title, description, data, features }: DataDisplayProps) => {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-semibold text-white mb-4">{title}</h2>
      <p className="text-gray-300 mb-6">{description}</p>
      
      <div className="space-y-2 text-left mb-6">
        {data.map((item, index) => (
          <p key={index} className="text-gray-300">
            <span className="text-blue-400">{item.label}:</span>{" "}
            <span className={item.color}>{item.value}</span>
          </p>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-600/20 border border-blue-600 rounded-lg">
        <h3 className="text-blue-400 font-semibold mb-2">Features</h3>
        <div className="text-sm text-gray-300 space-y-1">
          {features.map((feature, index) => (
            <p key={index}>
              • <strong>{feature.title}:</strong> {feature.description}
            </p>
          ))}
        </div>
      </div>
    </div>
  )
}