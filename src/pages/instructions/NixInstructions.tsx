import React from 'react';
import { Package, Download, Settings, Terminal, CheckCircle } from 'lucide-react';
import nixos from '../../../assets/nix-logo.png';
import PageLayout from '../../components/PageLayout';

const NixInstructions: React.FC = () => {

  const steps = [
    {
      title: 'Install Nix',
      description: 'Set up Nix package manager or NixOS',
      icon: Download,
      details: [
        'For multi-user install: sh <(curl -L https://nixos.org/nix/install) --daemon',
        'For single-user install: sh <(curl -L https://nixos.org/nix/install) --no-daemon',
        'Or use the Determinate Nix Installer for better experience',
        'Restart your shell or source the Nix profile'
      ]
    },
    {
      title: 'Enable Flakes',
      description: 'Configure Nix to use flakes (experimental feature)',
      icon: Settings,
      details: [
        'Add to ~/.config/nix/nix.conf: experimental-features = nix-command flakes',
        'Or set NIX_CONFIG environment variable',
        'For NixOS, add to configuration.nix: nix.settings.experimental-features = ["nix-command" "flakes"]',
        'Rebuild NixOS configuration if applicable'
      ]
    },
    {
      title: 'Clone Fedimint Repository',
      description: 'Get the Fedimint source with Nix configuration',
      icon: Package,
      details: [
        'Clone repository: git clone https://github.com/fedimint/fedimint.git',
        'Navigate to directory: cd fedimint',
        'Check available flake outputs: nix flake show',
        'Review the flake.nix file to understand build targets'
      ]
    },
    {
      title: 'Build and Run',
      description: 'Build Fedimint using Nix and start the guardian',
      icon: Terminal,
      details: [
        'Build Fedimint: nix build .#fedimintd',
        'Or run directly: nix run .#fedimintd',
        'For development shell: nix develop',
        'The binary will be available in result/bin/fedimintd'
      ]
    },
    {
      title: 'Configure Guardian',
      description: 'Set up your guardian configuration and join federation',
      icon: CheckCircle,
      details: [
        'Run fedimintd to start the guardian daemon',
        'Access web interface at http://localhost:8173',
        'Generate guardian configuration and backup seed',
        'Coordinate with other guardians for federation setup'
      ]
    }
  ];

  const flakeExample = `{
  description = "Fedimint Guardian";
  
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    fedimint.url = "github:fedimint/fedimint";
  };
  
  outputs = { self, nixpkgs, fedimint }:
    let
      system = "x86_64-linux";
      pkgs = nixpkgs.legacyPackages.\${system};
    in
    {
      packages.\${system}.default = fedimint.packages.\${system}.fedimintd;
      
      devShells.\${system}.default = pkgs.mkShell {
        buildInputs = with pkgs; [
          fedimint.packages.\${system}.fedimintd
          bitcoin
          # Add other development tools
        ];
      };
    };
}`;

  const nixosConfig = `# Add to your NixOS configuration.nix
{ config, pkgs, ... }:

{
  # Enable Nix flakes
  nix.settings.experimental-features = [ "nix-command" "flakes" ];
  
  # Fedimint guardian service (example)
  systemd.services.fedimint-guardian = {
    description = "Fedimint Guardian";
    wantedBy = [ "multi-user.target" ];
    after = [ "network.target" ];
    
    serviceConfig = {
      Type = "simple";
      User = "fedimint";
      ExecStart = "\${pkgs.fedimintd}/bin/fedimintd";
      Restart = "always";
      RestartSec = 10;
    };
  };
  
  # Create fedimint user
  users.users.fedimint = {
    isSystemUser = true;
    group = "fedimint";
    home = "/var/lib/fedimint";
    createHome = true;
  };
  
  users.groups.fedimint = {};
  
  # Open firewall for Fedimint
  networking.firewall.allowedTCPPorts = [ 8173 ];
}`;

  return (
    <PageLayout backPath="/self-hosted">
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
        {/* Main Content */}
        <main className="flex-1 px-6 py-8">
          <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-xl flex items-center justify-center flex-shrink-0">
              <img src={nixos} alt="NixOS" className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">NixOS / Nix Setup</h1>
              <p className="text-lg text-gray-600">Deploy Fedimint using Nix for reproducible builds</p>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="bg-purple-50 rounded-2xl p-6 mb-8 border border-purple-100">
            <h2 className="text-xl font-semibold text-purple-900 mb-3">Prerequisites</h2>
            <ul className="space-y-2 text-purple-800">
              <li>• Basic familiarity with Nix package manager concepts</li>
              <li>• Linux or macOS system (Windows via WSL2)</li>
              <li>• Sufficient disk space for Nix store (~2GB for initial setup)</li>
              <li>• Administrative access for Nix installation</li>
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
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-800 rounded-lg flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className="bg-purple-100 text-purple-800 text-sm font-medium px-3 py-1 rounded-full whitespace-nowrap">
                          Step {index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                      
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      
                      <ul className="space-y-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-gray-700">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* Configuration Examples */}
          <div className="mt-12 space-y-8">
            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">flake.nix (Custom Project)</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-green-400 text-sm">
                <code>{flakeExample}</code>
              </pre>
            </div>

            <div className="bg-gray-900 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">NixOS Configuration</h3>
              <pre className="bg-gray-800 rounded-lg p-4 overflow-x-auto text-green-400 text-sm">
                <code>{nixosConfig}</code>
              </pre>
            </div>
          </div>

          {/* Benefits of Nix */}
          <div className="mt-12 bg-purple-50 rounded-2xl p-8 border border-purple-100">
            <h2 className="text-xl font-semibold text-purple-900 mb-4">Benefits of Using Nix</h2>
            <ul className="grid md:grid-cols-2 gap-4 text-purple-800">
              <li>• Reproducible builds across systems</li>
              <li>• Atomic upgrades and rollbacks</li>
              <li>• No dependency conflicts</li>
              <li>• Declarative system configuration</li>
              <li>• Easy development environments</li>
              <li>• Binary caching for faster builds</li>
            </ul>
          </div>

          {/* Additional Resources */}
          <div className="mt-8 bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Resources</h2>
            <div className="space-y-4">
              <a 
                href="https://nixos.org/guides/nix-pills/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Nix Pills</h3>
                <p className="text-gray-600 text-sm">Learn Nix concepts step by step</p>
              </a>
              
              <a 
                href="https://zero-to-nix.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">Zero to Nix</h3>
                <p className="text-gray-600 text-sm">Practical guide to Nix for beginners</p>
              </a>
              
              <a 
                href="https://nixos.wiki/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <h3 className="font-semibold text-gray-900">NixOS Wiki</h3>
                <p className="text-gray-600 text-sm">Community-driven documentation and examples</p>
              </a>
            </div>
          </div>
          </div>
        </main>
      </div>
    </PageLayout>
  );
};

export default NixInstructions;