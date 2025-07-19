import React, { useState } from 'react';
import { Music, RefreshCw, CheckCircle, FileAudio } from 'lucide-react';
import AudioPlayer from './AudioPlayer';

interface Iter286000Sample {
  id: number;
  conv_adsr: {
    gt: string;
    orig: string;
    ref: string;
    recon: string;
  };
  conv_both: {
    gt: string;
    orig: string;
    ref: string;
    recon: string;
  };
  conv_timbre: {
    gt: string;
    orig: string;
    ref: string;
    recon: string;
  };
}

interface Iter286000TableProps {
  samples: Iter286000Sample[];
}

const Iter286000Table: React.FC<Iter286000TableProps> = ({ samples }) => {
  const [selectedCategory, setSelectedCategory] = useState<'conv_adsr' | 'conv_both' | 'conv_timbre'>('conv_adsr');

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'conv_adsr':
        return {
          title: 'Conv ADSR',
          description: 'ADSR Conversion Results',
          color: 'from-purple-500 to-indigo-600'
        };
      case 'conv_both':
        return {
          title: 'Conv Both',
          description: 'Both Conversion Results',
          color: 'from-blue-500 to-cyan-600'
        };
      case 'conv_timbre':
        return {
          title: 'Conv Timbre',
          description: 'Timbre Conversion Results',
          color: 'from-green-500 to-teal-600'
        };
      default:
        return {
          title: 'Unknown',
          description: 'Unknown Category',
          color: 'from-gray-500 to-gray-600'
        };
    }
  };

  const categoryInfo = getCategoryInfo(selectedCategory);

  return (
    <div className="space-y-6">
      {/* Category Selector */}
      <div className="flex justify-center mb-8">
        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl p-2 flex gap-2 border border-purple-400/30 backdrop-blur-sm">
          {(['conv_adsr', 'conv_both', 'conv_timbre'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-500 to-blue-600 text-white shadow-lg'
                  : 'text-white/90 hover:text-white hover:bg-white/20'
              }`}
            >
              {getCategoryInfo(category).title}
            </button>
          ))}
        </div>
      </div>

      {/* Category Header */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">
          {categoryInfo.title}
        </h3>
        <p className="text-white/80">
          {categoryInfo.description}
        </p>
      </div>

      {/* Audio Table */}
      <div className="w-full overflow-hidden rounded-2xl glass-effect shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-primary-500 to-primary-600 text-white">
                <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                  #
                </th>
                <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center justify-center gap-2">
                    <FileAudio className="w-4 h-4" />
                    Original
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center justify-center gap-2">
                    <Music className="w-4 h-4" />
                    Reference
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center justify-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Reconstruction
                  </div>
                </th>
                <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                  <div className="flex items-center justify-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Ground Truth
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {samples.map((sample) => (
                <tr 
                  key={sample.id}
                  className="hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover-scale transition-all duration-300 group"
                >
                  <td className="px-6 py-6 text-center">
                    <div className="w-8 h-8 mx-auto bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {sample.id}
                    </div>
                  </td>
                  <td className="px-6 py-6 text-center">
                    <AudioPlayer 
                      key={`${sample.id}-${selectedCategory}-orig`}
                      src={sample[selectedCategory].orig} 
                      label="Original"
                      className="transform transition-transform group-hover:scale-105"
                    />
                  </td>
                  <td className="px-6 py-6 text-center">
                    <AudioPlayer 
                      key={`${sample.id}-${selectedCategory}-ref`}
                      src={sample[selectedCategory].ref} 
                      label="Reference"
                      className="transform transition-transform group-hover:scale-105"
                    />
                  </td>
                  <td className="px-6 py-6 text-center">
                    <AudioPlayer 
                      key={`${sample.id}-${selectedCategory}-recon`}
                      src={sample[selectedCategory].recon} 
                      label="Reconstruction"
                      className="transform transition-transform group-hover:scale-105"
                    />
                  </td>
                  <td className="px-6 py-6 text-center">
                    <AudioPlayer 
                      key={`${sample.id}-${selectedCategory}-gt`}
                      src={sample[selectedCategory].gt} 
                      label="Ground Truth"
                      className="transform transition-transform group-hover:scale-105"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Iter286000Table; 