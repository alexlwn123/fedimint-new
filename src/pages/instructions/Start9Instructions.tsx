import React from "react";
import start9 from '../../../assets/start9-logo.png';
import PageLayout from '../../components/PageLayout';
import { Box, Download, Settings, Users, CheckCircle } from "lucide-react";

const Start9Instructions: React.FC = () => {

  const steps = [
    {
      title: "Access Start9 Marketplace",
      description:
        "Open your Start9 server interface and navigate to the Marketplace",
      icon: Box,
      details: [
        "Open your web browser and go to your Start9 server address",
        "Log in to your Start9 admin interface",
        'Click on "Marketplace" in the sidebar',
      ],
    },
    {
      title: "Install Fedimint",
      description: "Search for and install the Fedimint service",
      icon: Download,
      details: [
        'Search for "Fedimint" in the marketplace',
        "Click on the Fedimint Guardian service",
        'Click "Install" and wait for the installation to complete',
        'The service will appear in your "Installed" services list',
      ],
    },
    {
      title: "Configure Fedimint",
      description: "Set up your Fedimint guardian configuration",
      icon: Settings,
      details: [
        "Click on the Fedimint service from your installed services",
        'Click "Configure" to open the configuration interface',
        "Set your guardian name and other basic settings",
        "Note down the guardian API endpoint for sharing with other guardians",
      ],
    },
    {
      title: "Coordinate with Guardians",
      description: "Share connection details with other federation members",
      icon: Users,
      details: [
        "Share your guardian API endpoint with other federation members",
        "Collect API endpoints from all other guardians",
        "Ensure all guardians are online and reachable",
        "Coordinate a time for the federation setup ceremony",
      ],
    },
    {
      title: "Complete Setup",
      description: "Run the federation setup ceremony",
      icon: CheckCircle,
      details: [
        "Access the Fedimint web interface through Start9",
        "Follow the setup wizard to create or join a federation",
        "Generate and securely backup your guardian keys",
        "Verify the federation is operational with a small test transaction",
      ],
    },
  ];

  return (
    <PageLayout backPath="/self-hosted">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
        {/* Main Content */}
        <main className="flex-1 px-6 py-8">
          <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src={start9} alt="Start9" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Start9 Setup</h1>
              <p className="text-lg text-gray-600">
                Deploy Fedimint on your Start9 personal server
              </p>
            </div>
          </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-cyan-50 rounded-2xl p-6 mb-8 border border-cyan-100">
            <h2 className="text-xl font-semibold text-cyan-900 mb-3">
              Prerequisites
            </h2>
            <ul className="space-y-2 text-cyan-800">
              <li>
                • Purchase a Start9 server from the{" "}
                <a
                  href="https://store.start9.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  official Start9 store
                </a>
                {' '}(~$600 - $1000)
              </li>
              <li>• Running Start9OS 0.3.4 or later</li>
              <li>• Admin access to your Start9 server</li>
              <li>• Stable internet connection</li>
              <li>• Contact information for other federation guardians</li>
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
                >
                  <div className="flex items-start md:space-x-6">
                    <div className="flex-shrink-0 hidden md:block">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-cyan-100 text-cyan-800 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-gray-600 mb-4">{step.description}</p>

                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-gray-700"
                          >
                            <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* Additional Resources */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Additional Resources
            </h2>
            <div className="space-y-4">
              <a
                href="https://store.start9.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  Start9 Marketplace
                </h3>
                <p className="text-gray-600 text-sm">
                  Browse and install services from the Start9 Marketplace
                </p>
              </a>

              <a
                href="https://docs.start9.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  Start9 Documentation
                </h3>
                <p className="text-gray-600 text-sm">
                  Official Start9 documentation and guides
                </p>
              </a>

              <a
                href="https://fedimint.org/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">
                  Fedimint Documentation
                </h3>
                <p className="text-gray-600 text-sm">
                  Learn more about Fedimint federation concepts
                </p>
              </a>
            </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default Start9Instructions;
