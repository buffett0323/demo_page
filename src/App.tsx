import { useState, useEffect } from 'react';
import { Headphones, ArrowLeft, Zap, Music, Sparkles, TestTube } from 'lucide-react';
import Iter140000Table from './components/Iter140000Table';
import Exp0725Table from './components/Exp0725Table';
import { generateIter140000Data, generateExp0725Data, Iter140000Sample, Exp0725Sample } from './utils/audioUtils';

function App() {
  const [iter140000Samples, setIter140000Samples] = useState<Iter140000Sample[]>([]);
  const [exp0725Samples, setExp0725Samples] = useState<Exp0725Sample[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState<'main' | 'iter140000' | 'iter176000' | 'iter182000' | 'exp0725'>('main');

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIter140000Samples(generateIter140000Data());
      setExp0725Samples(generateExp0725Data());
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
                <Zap className="w-10 h-10 text-white" />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
            {/* Iter 140000 Page Card */}
            {/* <div 
              className="bg-gradient-to-br from-orange-500/30 to-red-600/30 rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-orange-400/50 backdrop-blur-sm"
              onClick={() => setCurrentPage('iter140000')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">0720 Ablation Study</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  This is an ablation study for directly adding the ADSR to the content without any onset matching.
                </p>
                <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg p-4 border border-orange-400/30">
                  <p className="text-white text-sm font-medium">
                    <strong className="text-white">Features:</strong><br/>
                    • Audio comparison tables<br/>
                    • Interactive category switching<br/>
                    • Ground truth comparison<br/>
                    • Audio Waveform Visualization
                  </p>
                </div>
              </div>
            </div> */}

            {/* Iter 176000 Page Card */}
            {/* <div 
              className="bg-gradient-to-br from-blue-500/30 to-purple-600/30 rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-blue-400/50 backdrop-blur-sm"
              onClick={() => setCurrentPage('iter176000')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Music className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">0723 Iter 176000 Add</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Results from iteration 176000 with additive approach for ADSR integration.
                </p>
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg p-4 border border-blue-400/30">
                  <p className="text-white text-sm font-medium">
                    <strong className="text-white">Features:</strong><br/>
                    • Audio comparison tables<br/>
                    • Interactive category switching<br/>
                    • Ground truth comparison<br/>
                    • Additive ADSR method
                  </p>
                </div>
              </div>
            </div> */}

            {/* Iter 182000 Page Card */}
            {/* <div 
              className="bg-gradient-to-br from-green-500/30 to-teal-600/30 rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-green-400/50 backdrop-blur-sm"
              onClick={() => setCurrentPage('iter182000')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">0723 Iter 182000 Direct</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Results from iteration 182000 with direct approach for ADSR integration.
                </p>
                <div className="bg-gradient-to-br from-green-500/20 to-teal-600/20 rounded-lg p-4 border border-green-400/30">
                  <p className="text-white text-sm font-medium">
                    <strong className="text-white">Features:</strong><br/>
                    • Audio comparison tables<br/>
                    • Interactive category switching<br/>
                    • Ground truth comparison<br/>
                    • Direct ADSR method
                  </p>
                </div>
              </div>
            </div> */}

            {/* Exp 0725 Page Card */}
            <div 
              className="bg-gradient-to-br from-cyan-500/30 to-indigo-600/30 rounded-2xl p-8 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-cyan-400/50 backdrop-blur-sm"
              onClick={() => setCurrentPage('exp0725')}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TestTube className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">0725 Experiment</h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Latest experiment with short2long and long2short conversion methods.
                </p>
                <div className="bg-gradient-to-br from-cyan-500/20 to-indigo-600/20 rounded-lg p-4 border border-cyan-400/30">
                  <p className="text-white text-sm font-medium">
                    <strong className="text-white">Features:</strong><br/>
                    • Short2Long conversion<br/>
                    • Long2Short conversion<br/>
                    • Multiple audio formats<br/>
                    • Interactive comparison
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



  // Iter 140000 page
  if (currentPage === 'iter140000') {
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
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                Iteration 140000 Results
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Compare audio samples across different conversion methods: ADSR, Both, and Timbre conversions.
              Each sample includes original, reference, reconstruction, and ground truth audio files.
            </p>
          </div>

          {/* Main Table Container */}
          <div className="space-y-16">
            <Iter140000Table samples={iter140000Samples} />
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

  // Iter 176000 page
  if (currentPage === 'iter176000') {
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
                Iteration 176000 Results (Additive)
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Results from iteration 176000 using additive approach for ADSR integration.
              Compare audio samples across different conversion methods.
            </p>
          </div>

          {/* Main Table Container */}
          <div className="space-y-16">
            <Iter140000Table samples={iter140000Samples} />
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

  // Iter 182000 page
  if (currentPage === 'iter182000') {
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
                Iteration 182000 Results (Direct)
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Results from iteration 182000 using direct approach for ADSR integration.
              Compare audio samples across different conversion methods.
            </p>
          </div>

          {/* Main Table Container */}
          <div className="space-y-16">
            <Iter140000Table samples={iter140000Samples} />
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

  // Exp 0725 page
  if (currentPage === 'exp0725') {
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
                <TestTube className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">
                0725 Experiment Results
              </h1>
            </div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              There are two conversion methods: short2long and long2short.
              These are two models, which are enc_v1 and enc_v1 + onset only, and they are trained for 2.5 days respectively.
              The results are shown in the table below.
            </p>
          </div>

          {/* Main Table Container */}
          <div className="space-y-16">
            <Exp0725Table samples={exp0725Samples} />
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