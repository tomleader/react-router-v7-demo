import { Button } from "~/components/ui/button";

interface DemoLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  codeExample: string;
  renderMode: string;
  dataDisplay: React.ReactNode;
}

export const DemoLayout = ({
  title,
  subtitle,
  description,
  codeExample,
  renderMode,
  dataDisplay,
}: DemoLayoutProps) => {
  return (
    <>
      {/* Main title area */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          EdgeOne Pages React Router Starter - {title}
        </h1>
        <p className="text-xl text-gray-300 mb-4">{subtitle}</p>
        <p className="text-lg text-gray-400 mb-8">{description}</p>
        <a
          href="https://reactrouter.com/start/modes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            variant="outline"
            className="hover:bg-gray-700 text-white px-8 py-3 text-lg cursor-pointer border-gray-600"
          >
            View Documentation
          </Button>
        </a>
      </div>

      {/* Dynamic data display area */}
      <div className="container mx-auto px-4 mb-8">{dataDisplay}</div>

      {/* Code example area */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <div className="bg-gray-900 rounded p-6 text-left">
            <pre className="text-sm overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};
