import { useState, useEffect } from 'react';
import { Headphones, Music, ArrowLeft, Sparkles } from 'lucide-react';
import AudioTable from './components/AudioTable';
import Iter286000Table from './components/Iter286000Table';
import { generateSampleData, generateTestData, generateIter286000Data, Iter286000Sample } from './utils/audioUtils';
import { AudioSample } from './types/audio';

function App() {
  const [samples, setSamples] = useState<AudioSample[]>([]);
  const [testSamples, setTestSamples] = useState<AudioSample[]>([]);
  const [iter286000Samples, setIter286000Samples] = useState<Iter286000Sample[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'main' | 'old' | 'new'>('main');

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setSamples(generateSampleData());
      setTestSamples(generateTestData());
      setIter286000Samples(generateIter286000Data());
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white text-lg font-medium">Loading Audio Evaluation Table...</p>
        </div>
      </div>
    );
  }

  // Main landing page
  if (currentPage === 'main') {
    return (
      <div className="min-h-screen gradient-bg">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <Music className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
                Zero-shot Style Transfer
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Welcome to Buffett's Demo-Page. This is a demo-page for the zero-shot style transfer. Choose a version below.
            </p>
          </div>

          {/* Page Selection Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Old Page Card */}
            <div 
              className="bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-400/50 backdrop-blur-sm"
              onClick={() => setCurrentPage('old')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">0618 w/o ADSR</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Access the original audio evaluation interface with comprehensive validation results and testing data.
                </p>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg p-4 border border-blue-400/30">
                  <p className="text-white text-sm font-medium">
                    <strong className="text-white">Features:</strong><br/>
                    • Audio comparison tables<br/>
                    • Loss metrics visualization<br/>
                    • MIDI visualization<br/>
                    • Ground truth comparison
                  </p>
                </div>
              </div>
            </div>

            {/* New Page Card */}
            <div 
              className="bg-gradient-to-br from-green-500/30 to-teal-600/30 rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-400/50 backdrop-blur-sm"
              onClick={() => setCurrentPage('new')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">0719 w/ ADSR</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Trained 2.1 days for 286000 iterations in sinica NVIDIA RTX 6000. 
                  The results involve three conversion methods: ADSR, Timbre, and Both(ADSR+Timbre) conversions.
                </p>
                <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-lg p-4 border border-green-400/30">
                  <p className="text-white text-sm font-medium">
                    <strong className="text-white">Features:</strong><br/>
                    • Three conversion methods<br/>
                    • Audio comparison tables<br/>
                    • Interactive category switching<br/>
                    • Ground truth comparison
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Headphones className="w-5 h-5" />
              <span className="text-lg font-medium">
                Audio Synthesizer Style Transfer • Use headphones for the best experience
              </span>
            </div>
            <div className="mt-4 text-white/60">
              <p className="text-sm">
                Built by Buffett Liu
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Old page (original functionality)
  if (currentPage === 'old') {
    return (
      <div className="min-h-screen gradient-bg">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => setCurrentPage('main')}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg font-medium">Back to Main Menu</span>
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Music className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                0618 w/o ADSR
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Compare audio samples with reference, conversion results, and ground truth recordings.
              Further details and code can be found in the <a href="https://github.com/buffett0323/query_ss.git" className="text-black hover:underline">Buffett's GitHub repository</a>
            </p>
          </div>

          {/* Main Table Container */}
          <div className="space-y-16">
            {/* Original Results Table */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Validation Results
              </h2>
              <AudioTable samples={samples} />
            </div>

            {/* Testing Results Table */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Testing Results
              </h2>
              <AudioTable samples={testSamples} />
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Headphones className="w-5 h-5" />
              <span className="text-lg font-medium">
                Audio Synthesizer Style Transfer • Use headphones for the best experience
              </span>
            </div>
            <div className="mt-4 text-white/60">
              <p className="text-sm">
                Built by Buffett Liu
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // New page (0719_work) - showing iter_286000 data
  if (currentPage === 'new') {
    return (
      <div className="min-h-screen gradient-bg">
        <div className="container mx-auto px-4 py-8 max-w-7xl">
          {/* Back Button */}
          <div className="mb-6">
            <button
              onClick={() => setCurrentPage('main')}
              className="flex items-center gap-2 text-white/90 hover:text-white transition-colors duration-200 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-lg font-medium">Back to Main Menu</span>
            </button>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                0719 w/ ADSR, onset detection re-align
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Please choose a conversion method: ADSR, Timbre, and conversion.
              Each sample includes original, reference, reconstruction, and ground truth audio files.
              The model disentangles timbre, content, and the ADSR of the audio. For example, 
              in conv_adsr, the reconstruction audio takes orig_audio's timbre and content, and takes ref_audio's ADSR.
            </p>
          </div>

          {/* Main Table Container */}
          <div className="space-y-16">
            <Iter286000Table samples={iter286000Samples} />
          </div>

          {/* Footer */}
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 text-white/80">
              <Headphones className="w-5 h-5" />
              <span className="text-lg font-medium">
                Audio Synthesizer Style Transfer • Use headphones for the best experience
              </span>
            </div>
            <div className="mt-4 text-white/60">
              <p className="text-sm">
                Built by Buffett Liu
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

export default App;