import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';
import fedimintLogo from '../../assets/fedimint-logo.png';
// import icon from '../../assets/fedimint-icon.png';

interface PageLayoutProps {
  children: React.ReactNode;
  backPath?: string;
  headerMaxWidthClassName?: string;
  contentMaxWidthClassName?: string;
  mainClassName?: string;
  contentClassName?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  backPath,
  headerMaxWidthClassName = 'max-w-6xl',
  contentMaxWidthClassName = 'max-w-6xl',
  mainClassName = 'flex-1 px-6 py-8',
  contentClassName = ''
}) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-white">
      <header className="px-6 py-3 border-b bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className={`${headerMaxWidthClassName} mx-auto flex items-center justify-between`}>
          {backPath && (
          <div className="flex items-center space-x-3">
            <button
              onClick={() => navigate(backPath)}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="hidden md:flex">Back</span>
            </button>
          </div>
          )}
          <a href="/" className="flex items-center space-x-2">
            <img src={fedimintLogo} alt="Fedimint" className="h-6 w-auto" />
          </a>
          <nav className="flex items-center space-x-4 text-sm">
            <a href="https://fedimint.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 hidden md:flex">fedimint.org</a>
            <a href="https://github.com/fedimint" target="_blank" rel="noopener noreferrer" aria-label="Fedimint on GitHub" className="text-gray-600 hover:text-gray-900">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      <main className={mainClassName}>
        <div className={`${contentMaxWidthClassName} mx-auto ${contentClassName}`}>
          {children}
        </div>
      </main>

      <footer className="mt-auto px-6 py-8 border-t bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className={`${contentMaxWidthClassName} mx-auto flex flex-col md:flex-row items-center justify-between gap-4`}>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <img src={fedimintLogo} alt="Fedimint" className="h-5 w-auto" />
          </div>
          <div className="flex items-center flex-wrap gap-4 text-sm">
            <a href="https://fedimint.org" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Website</a>
            <a href="https://github.com/fedimint" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">GitHub</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Nostr</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">X</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Discord</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PageLayout;


