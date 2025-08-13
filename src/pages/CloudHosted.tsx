import React from 'react';
 
import { ExternalLink, Star, Cloud, Zap, Shield } from 'lucide-react';
import PageLayout from '../components/PageLayout';
import nodana from '../../assets/nodana-logo.png';
import clovyr from '../../assets/clovyr-logo.png'

const CloudHosted: React.FC = () => {

  const recommendedServices = [
    {
      name: 'Nodana',
      description: 'Specialized Fedimint hosting with one-click deployment',
      url: 'https://nodana.io/templates/fedimintd',
      features: ['One-click setup', 'Managed infrastructure', 'Bitcoin-focused'],
      color: 'from-cyan-500 to-blue-600',
      featured: true,
      image: nodana
    },
    {
      name: 'Clovyr',
      description: 'Cloud application platform with Fedimint guardian support',
      url: 'https://clovyr.app/apps/fedimint-guardian',
      features: ['Easy deployment', 'Web-based interface', 'Collaborative setup'],
      color: 'from-blue-500 to-indigo-600',
      featured: true,
      image: clovyr
    }
  ];

  const genericProviders = [
    {
      name: 'Digital Ocean',
      description: 'Simple cloud computing with droplets and app platform',
      url: 'https://digitalocean.com',
      features: ['$5/month droplets', 'Global data centers', 'Easy scaling']
    },
    {
      name: 'AWS',
      description: 'Amazon Web Services with comprehensive cloud solutions',
      url: 'https://aws.amazon.com',
      features: ['EC2 instances', 'Global infrastructure', 'Pay-as-you-go']
    },
    {
      name: 'Google Cloud',
      description: 'Google Cloud Platform with reliable compute services',
      url: 'https://cloud.google.com',
      features: ['Compute Engine', 'Free tier available', 'High performance']
    }
  ];

  return (
    <PageLayout backPath="/setup-type">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Cloud Hosting Options
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Deploy your Fedimint federation using cloud services. Choose from specialized 
              Bitcoin hosting providers or general cloud platforms.
            </p>
          </div>

          {/* Recommended Services */}
          <section className="mb-16">
            <div className="flex items-center space-x-2 mb-8">
              <Star className="w-6 h-6 text-yellow-500" />
              <h2 className="text-2xl font-bold text-gray-900">Recommended Services</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {recommendedServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center`}>
                      {service.image ? <img src={service.image} alt={service.name} className="w-8 h-8" /> : <Cloud className="w-8 h-8 text-white" />}
                    </div>
                    <div className="flex items-center space-x-1 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                      <Star className="w-4 h-4" />
                      <span>Featured</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{service.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors"
                  >
                    <span>Get Started</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Generic Providers */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">General Cloud Platforms</h2>
            <p className="text-gray-600 mb-8 max-w-3xl">
              These platforms require manual setup but offer more flexibility and often lower costs. 
              You'll need to configure Fedimint yourself using Docker or from source.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {genericProviders.map((provider, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{provider.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{provider.description}</p>
                  
                  <div className="space-y-1 mb-4">
                    {provider.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-xs text-gray-500">
                        <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={provider.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-medium text-sm"
                  >
                    <span>Learn More</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Setup Tips */}
          <div className="mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-100">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cloud Setup Tips</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Ensure your cloud instance has a static IP address</li>
                  <li>• Open the necessary ports (typically 8173 for Fedimint)</li>
                  <li>• Consider using a domain name for easier guardian coordination</li>
                  <li>• Set up SSL certificates for secure communications</li>
                  <li>• Regular backups are essential for guardian keys and configuration</li>
                </ul>
              </div>
            </div>
          </div>
    </PageLayout>
  );
};

export default CloudHosted;