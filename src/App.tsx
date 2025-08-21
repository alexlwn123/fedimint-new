import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SetupType from './pages/SetupType';
import SelfHosted from './pages/SelfHosted';
import CloudHosted from './pages/CloudHosted';
import Start9Instructions from './pages/instructions/Start9Instructions';
import UmbrelInstructions from './pages/instructions/UmbrelInstructions';
import DockerInstructions from './pages/instructions/DockerInstructions';
import NixInstructions from './pages/instructions/NixInstructions';
import Landing from './pages/Landing';
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    // document.querySelector('body > div:last-child').remove();
    const body = document.querySelector('body');
    console.warn(body)
  }, [])
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/setup-type" element={<SetupType />} />
          <Route path="/self-hosted" element={<SelfHosted />} />
          <Route path="/cloud-hosted" element={<CloudHosted />} />
          <Route path="/instructions/start9" element={<Start9Instructions />} />
          <Route path="/instructions/umbrel" element={<UmbrelInstructions />} />
          <Route path="/instructions/docker" element={<DockerInstructions />} />
          <Route path="/instructions/nix" element={<NixInstructions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;