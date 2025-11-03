import type { Route } from "./+types/node-functions";
import { PageLayout } from "~/components/layout";
import { Button } from "~/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Node Functions - EdgeOne Pages React Router Starter" },
    {
      name: "description",
      content: "Node.js server functions demonstration with React Router v7 on EdgeOne Pages",
    },
  ];
}

// This page demonstrates Node Functions
export default function NodeFunctionsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/hello-node");
      const text = await res.text();
      setData(text);
    } catch (error) {
      setData("Error: Could not fetch data from Node function");
    }
    setIsLoading(false);
  };

  return (
    <PageLayout>
      {/* Main title area */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          EdgeOne Pages React Router Starter - Node Functions
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          Run server-side code with full Node.js runtime, no server management
          required.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Suitable for complex backend logic and database operations, the
          advantage is full Node.js ecosystem access and powerful server-side
          processing capabilities, suitable for APIs, data processing, and
          integrations.
        </p>
        <a
          href="https://reactrouter.com/start/framework/routing"
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

      {/* Code example area */}
      <div className="container mx-auto px-4 mb-8">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8">
          <div className="bg-gray-900 rounded p-6 text-left">
            <pre className="text-sm overflow-x-auto">
              <code>{`export default function onRequest(context) {
  return new Response('Hello Node!')
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Dynamic data display area */}
      <div className="container mx-auto px-4 mb-20">
        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-center">
          <Button
            onClick={handleClick}
            disabled={isLoading}
            className="bg-[#1c66e5] hover:bg-[#1c66e5]/90 text-white cursor-pointer"
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
            ) : (
              <Play className="w-4 h-4 mr-2" />
            )}
            Execute Node Function
          </Button>

          {data && (
            <div className="space-y-2 text-left overflow-hidden mt-4">
              <p className="text-gray-300">
                <span className="text-blue-400">Function Return:</span> {data}
              </p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  );
}
