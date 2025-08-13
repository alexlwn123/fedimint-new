import { ArrowRight, Shield, Users, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-background via-muted to-accent-light/20">
        <div className="container mx-auto px-4 py-24 lg:py-32">
          <img src="/icon.png" alt="Fedimint Logo" className="w-64 h-64 mx-auto mb-12" />
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-heading font-bold mb-6 text-foreground">
              Launch Your <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent leading-snug">
                Fedimint Federation
              </span>
            </h1>
            <p className="text-xl lg:text-2xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Deploy a secure, decentralized federation with ease. Choose between self-hosted or cloud solutions and get started in minutes.
            </p>

            <button
              onClick={() => navigate('/setup-type')}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            {/* <Button 
              variant="modern" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto font-semibold"
              onClick={() => navigate("/setup")}
            >
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button> */}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">
                Why Choose Fedimint?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Build a robust, decentralized federation with built-in security and scalability
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-soft transition-all duration-300 text-center group border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">Secure by Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Multi-signature security with threshold cryptography ensures your federation remains secure and resilient.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-soft transition-all duration-300 text-center group border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">Decentralized Governance</h3>
                <p className="text-muted-foreground leading-relaxed">
                  No single point of failure. Your federation is governed by multiple guardians working together.
                </p>
              </div>

              <div className="bg-card rounded-xl p-8 shadow-card hover:shadow-soft transition-all duration-300 text-center group border border-border/50">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">Easy Setup</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Get your federation running quickly with our guided setup process for any platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-br from-muted to-accent-light/30 relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-12 shadow-elegant border border-border/50">
            <h2 className="text-4xl font-heading font-bold mb-6 text-foreground">
              Ready to Start Your Federation?
            </h2>
            <p className="text-xl mb-10 text-muted-foreground">
              Join the decentralized future with a secure, self-sovereign federation.
            </p>
            {/* <button 
              variant="modern" 
              size="lg" 
              className="text-lg px-10 py-6 h-auto font-semibold"
              onClick={() => navigate("/setup")}
            >
              Begin Setup Process
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button> */}
            <button
              onClick={() => navigate('/setup-type')}
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-lg px-10 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      <footer className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500">
            Powered by the Fedimint protocol • 
            <a href="https://fedimint.org" target="_blank" rel="noopener noreferrer" className="ml-1 text-cyan-600 hover:text-cyan-700 font-medium">
              Learn more about Fedimint
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;