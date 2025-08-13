import React from 'react';
import { Container, Download, Terminal, Settings, CheckCircle } from 'lucide-react';
import docker from '../../../assets/docker-logo.png';
import PageLayout from '../../components/PageLayout';

const DockerInstructions: React.FC = () => {

  const steps = [
    {
      title: 'Install Docker',
      description: 'Set up Docker on your system if not already installed',
      icon: Download,
      details: [
        'Visit https://docs.docker.com/get-docker/ for installation instructions',
        'Install Docker Desktop (Windows/Mac) or Docker Engine (Linux)',
        'Verify installation with: docker --version',
        'Ensure Docker Compose is installed (usually included with Docker Desktop)'
      ]
    },
    {
      title: 'Download Fedimint',
      description: 'Get the Fedimint Docker configuration',
      icon: Container,
      details: [
        'Clone the Fedimint repository: git clone https://github.com/fedimint/fedimint.git',
        'Navigate to the Docker directory: cd fedimint/docker',
        'Alternatively, download the docker-compose.yml file directly',
        'Review the configuration file and adjust settings as needed'
      ]
    },
    {
      title: 'Configure Environment',
      description: 'Set up environment variables and configuration',
      icon: Settings,
      details: [
        'Create a .env file with your configuration',
        'Set FEDIMINT_PORT (default: 8173)',
        'Configure FEDIMINT_DATA_DIR for persistent storage',
        'Set any additional environment variables as needed'
      ]
    },
    {
      title: 'Start Fedimint',
      description: 'Launch the Fedimint guardian container',
      icon: Terminal,
      details: [
        'Run: docker-compose up -d to start in detached mode',
        'Check status with: docker-compose ps',
        'View logs with: docker-compose logs -f fedimint',
        'The guardian API will be available on the configured port'
      ]
    },
    {
      title: 'Setup Federation',
      description: 'Complete the federation setup process',
      icon: CheckCircle,
      details: [
        'Access the web interface at http://localhost:8173',
        'Generate your guardian configuration',
        'Share connection details with other guardians',
        'Complete the distributed key generation ceremony'
      ]
    }
  ];

  const dockerCompose = `version: '3.8'
services:
  fedimint:
    image: fedimint/fedimintd:latest
    container_name: fedimint-guardian
    ports:
      - "\${FEDIMINT_PORT:-8173}:8173"
    volumes:
      - "\${FEDIMINT_DATA_DIR:-./data}:/data"
    environment:
      - RUST_LOG=info
    restart: unless-stopped
    networks:
      - fedimint-network

networks:
  fedimint-network:
    driver: bridge`;

  const envFile = `# Fedimint Configuration
FEDIMINT_PORT=8173
FEDIMINT_DATA_DIR=./fedimint-data

# Optional: Bitcoin Core connection
BITCOIN_RPC_URL=http://localhost:8332
BITCOIN_RPC_USER=bitcoinuser
BITCOIN_RPC_PASS=bitcoinpass`;

  return (
    <PageLayout backPath="/self-hosted">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
        {/* Main Content */}
        <main className="flex-1 px-6 py-8">
          <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
              <img src={docker} alt="Docker" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Docker Setup</h1>
              <p className="text-lg text-gray-600">Deploy Fedimint using Docker containers</p>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-indigo-50 rounded-2xl p-6 mb-8 border border-indigo-100">
            <h2 className="text-xl font-semibold text-indigo-900 mb-3">Prerequisites</h2>
            <ul className="space-y-2 text-indigo-800">
              <li>• Docker 20.10+ and Docker Compose installed</li>
              <li>• 4GB+ RAM and 20GB+ storage available</li>
              <li>• Basic familiarity with command line tools</li>
              <li>• Network access for downloading Docker images</li>
            </ul>
          </div>

          {/* Steps */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                  <div className="flex items-start md:space-x-6">
                    <div className="flex-shrink-0 hidden md:block">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-indigo-100 text-indigo-800 md:text-sm text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* Configuration Files */}
          <div className="mt-12 space-y-8">
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">docker-compose.yml</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-green-400 text-sm">
                <code>{dockerCompose}</code>
              </pre>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">.env</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-green-400 text-sm">
                <code>{envFile}</code>
              </pre>
            </div>
          </div>

          {/* Useful Commands */}
          <div className="mt-12 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Useful Commands</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Container Management</h3>
                <div className="space-y-2 text-sm">
                  <code className="block bg-gray-200 p-2 rounded">docker-compose up -d</code>
                  <code className="block bg-gray-200 p-2 rounded">docker-compose down</code>
                  <code className="block bg-gray-200 p-2 rounded">docker-compose restart</code>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Monitoring</h3>
                <div className="space-y-2 text-sm">
                  <code className="block bg-gray-200 p-2 rounded">docker-compose logs -f</code>
                  <code className="block bg-gray-200 p-2 rounded">docker-compose ps</code>
                  <code className="block bg-gray-200 p-2 rounded">docker stats fedimint-guardian</code>
                </div>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default DockerInstructions;