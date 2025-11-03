import { Button } from "~/components/ui/button";
import { Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          EdgeOne Pages React Router Starter
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
          Build high-performance, scalable web applications using React Router
          v7. Leverage complete full-stack rendering modes including SSR and
          Pre-render, while building dynamic APIs and complex backend features.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://reactrouter.com/start/framework/installation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg cursor-pointer"
            >
              <Zap className="w-5 h-5 mr-2" />
              Get Started
            </Button>
          </a>
          <a
            href="https://reactrouter.com/start/modes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg cursor-pointer border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              View Documentation
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
