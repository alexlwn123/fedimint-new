import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Server, Cloud, ChevronRight } from 'lucide-react';

const SetupType: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Setup Type
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select how you'd like to deploy your Fedimint federation. Both options provide 
              the same security and functionality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Self-Hosted Option */}
            <button
              onClick={() => navigate('/self-hosted')}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-cyan-300 transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Server className="w-8 h-8 text-white" />
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Self-Hosted</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Deploy on your own infrastructure with complete control and 
                maximum sovereignty over your federation.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span>Full control</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span>Cost effective</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                  <span>Multiple platforms</span>
                </div>
              </div>
            </button>

            {/* Cloud-Hosted Option */}
            <button
              onClick={() => navigate('/cloud-hosted')}
              className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 hover:-translate-y-1 text-left"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-300" />
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Cloud-Hosted</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Use managed cloud services for quick deployment with minimal 
                setup and automatic scaling.
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Quick deployment</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Managed infrastructure</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <span>Automatic scaling</span>
                </div>
              </div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SetupType;