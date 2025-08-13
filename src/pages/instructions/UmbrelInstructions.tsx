import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Umbrella, Download, Settings, Users, CheckCircle } from 'lucide-react';

const UmbrelInstructions: React.FC = () => {
  const navigate = useNavigate();

  const steps = [
    {
      title: 'Access Umbrel App Store',
      description: 'Open your Umbrel dashboard and navigate to the App Store',
      icon: Umbrella,
      details: [
        'Open your web browser and go to your Umbrel server (usually umbrel.local)',
        'Log in to your Umbrel dashboard',
        'Click on "App Store" in the navigation menu'
      ]
    },
    {
      title: 'Install Fedimint Guardian',
      description: 'Find and install the Fedimint Guardian app',
      icon: Download,
      details: [
        'Search for "Fedimint" in the app store search bar',
        'Click on the Fedimint Guardian app tile',
        'Review the app details and click "Install"',
        'Wait for the installation to complete (this may take several minutes)'
      ]
    },
    {
      title: 'Initial Configuration',
      description: 'Configure your guardian settings',
      icon: Settings,
      details: [
        'Once installed, click "Open" to access the Fedimint interface',
        'Set your guardian display name and description',
        'Configure your API endpoints and networking settings',
        'Generate your guardian configuration and backup the seed phrase'
      ]
    },
    {
      title: 'Federation Coordination',
      description: 'Connect with other guardians to form the federation',
      icon: Users,
      details: [
        'Share your guardian connection URL with other federation members',
        'Collect connection URLs from all participating guardians',
        'Verify all guardians are online and accessible',
        'Schedule the federation setup ceremony with all members'
      ]
    },
    {
      title: 'Federation Setup Ceremony',
      description: 'Complete the distributed key generation process',
      icon: CheckCircle,
      details: [
        'Start the federation setup process from the Fedimint interface',
        'Follow the ceremony steps to generate distributed keys',
        'Verify the federation configuration with all guardians',
        'Test the federation with a small transaction to ensure everything works'
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      {/* Header */}
      <header className="px-6 py-4">
        <div className="max-w-4xl mx-auto flex items-center">
          <button
            onClick={() => navigate('/self-hosted')}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Self-Hosted</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
              <Umbrella className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Umbrel Setup</h1>
              <p className="text-lg text-gray-600">Deploy Fedimint on your Umbrel home server</p>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-100">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">Prerequisites</h2>
            <ul className="space-y-2 text-blue-800">
              <li>• Umbrel server running Umbrel OS 1.0 or later</li>
              <li>• Sufficient storage space (at least 1GB free)</li>
              <li>• Reliable internet connection</li>
              <li>• Bitcoin Core node (recommended, can be installed via Umbrel)</li>
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Important Notes */}
          <div className="mt-12 bg-yellow-50 rounded-2xl p-8 border border-yellow-200">
            <h2 className="text-xl font-semibold text-yellow-900 mb-4">Important Notes</h2>
            <ul className="space-y-2 text-yellow-800">
              <li>• Keep your guardian seed phrase secure - it cannot be recovered if lost</li>
              <li>• Ensure your Umbrel has a static IP or use dynamic DNS for external access</li>
              <li>• Consider setting up Tor for enhanced privacy (available in Umbrel settings)</li>
              <li>• Regular backups of your Umbrel system are recommended</li>
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <div className="space-y-4">
              <a 
                href="https://umbrel.com/docs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Umbrel Documentation</h3>
                <p className="text-gray-600 text-sm">Official Umbrel setup and troubleshooting guides</p>
              </a>
              
              <a 
                href="https://community.umbrel.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Umbrel Community</h3>
                <p className="text-gray-600 text-sm">Get help and support from the Umbrel community</p>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UmbrelInstructions;