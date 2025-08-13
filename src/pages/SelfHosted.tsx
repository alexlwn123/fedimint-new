import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Box, Umbrella, Container, Package } from 'lucide-react';

const SelfHosted: React.FC = () => {
  const navigate = useNavigate();

  const platforms = [
    {
      id: 'start9',
      name: 'Start9',
      description: 'Personal server OS designed for self-sovereignty',
      icon: Box,
      color: 'from-cyan-500 to-blue-600',
      path: '/instructions/start9'
    },
    {
      id: 'umbrel',
      name: 'Umbrel',
      description: 'Beautiful home server OS and app store',
      icon: Umbrella,
      color: 'from-blue-500 to-indigo-600',
      path: '/instructions/umbrel'
    },
    {
      id: 'docker',
      name: 'Docker',
      description: 'Containerized deployment for any system',
      icon: Container,
      color: 'from-indigo-500 to-purple-600',
      path: '/instructions/docker'
    },
    {
      id: 'nix',
      name: 'NixOS',
      description: 'Declarative and reproducible system configuration',
      icon: Package,
      color: 'from-purple-500 to-pink-600',
      path: '/instructions/nix'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center">
          <button
            onClick={() => navigate('/setup-type')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Self-Hosted Platforms
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose your preferred platform to deploy Fedimint. Each option provides 
              detailed setup instructions tailored to that environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {platforms.map((platform) => {
              const IconComponent = platform.icon;
              return (
                <button
                  key={platform.id}
                  onClick={() => navigate(platform.path)}
                  className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1 text-left"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${platform.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {platform.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-end">
                    <span className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      View instructions →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Before You Begin</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">System Requirements</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Minimum 2GB RAM</li>
                  <li>• 20GB available storage</li>
                  <li>• Stable internet connection</li>
                  <li>• Port forwarding capabilities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">What You'll Need</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Other guardian contact information</li>
                  <li>• Bitcoin Core node (recommended)</li>
                  <li>• Lightning Network node (optional)</li>
                  <li>• Basic understanding of terminal commands</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SelfHosted;