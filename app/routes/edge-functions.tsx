import type { Route } from "./+types/edge-functions";
import { PageLayout } from "~/components/layout";
import { Button } from "~/components/ui/button";
import { Play } from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Edge Functions - EdgeOne Pages React Router Starter" },
    {
      name: "description",
      content: "Edge runtime functions demonstration with React Router v7 on EdgeOne Pages",
    },
  ];
}

// This page demonstrates Edge Functions
export default function EdgeFunctionsPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState("");

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/hello-edge");
      const text = await res.text();
      setData(text);
    } catch (error) {
      setData("Error: Could not fetch data from Edge function");
    }
    setIsLoading(false);
  };

  return (
    <PageLayout>
      {/* Main title area */}
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold text-white mb-6">
          EdgeOne Pages React Router Starter - Edge Functions
        </h1>
        <p className="text-xl text-gray-300 mb-4">
          Run code at the edge, no server management required, providing the
          lowest latency global deployment.
        </p>
        <p className="text-lg text-gray-400 mb-8">
          Suitable for real-time data processing and geolocation services, the
          advantage is global edge deployment and ultra-low latency response,
          suitable for lightweight API, real-time notifications, and content
          personalization.
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
  const {geo} = context;

  return new Response(JSON.stringify({
    message: 'Hello Edge!',
    geo: geo,
  }), {
    headers: {
      'Content-Type': 'application/json',
    },
  })
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
            Execute Edge Function
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
