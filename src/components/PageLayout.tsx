import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PageLayoutProps {
  children: React.ReactNode;
  backPath: string;
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
      <header className="px-6 py-4">
        <div className={`${headerMaxWidthClassName} mx-auto flex items-center`}>
          <button
            onClick={() => navigate(backPath)}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </div>
      </header>

      <main className={mainClassName}>
        <div className={`${contentMaxWidthClassName} mx-auto ${contentClassName}`}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default PageLayout;


