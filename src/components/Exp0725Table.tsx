import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import AudioWaveform from './AudioWaveform';

interface Exp0725Sample {
  id: string;
  title: string;
  short2long: {
    orig: string;
    ref: string;
    conv_both_enc_v1: string;
    conv_both_onset_only: string;
    gt_both: string;
  };
  long2short: {
    orig: string;
    ref: string;
    conv_both_enc_v1: string;
    conv_both_onset_only: string;
    gt_both: string;
  };
}

interface Exp0725TableProps {
  samples: Exp0725Sample[];
}

const Exp0725Table: React.FC<Exp0725TableProps> = ({ samples }) => {
  const [selectedSample, setSelectedSample] = useState<Exp0725Sample | null>(samples[0] || null);

  if (!selectedSample) {
    return <div className="text-white text-center">No samples available</div>;
  }

  const audioColumns = [
    { key: 'orig', label: 'Original', color: 'from-blue-500 to-blue-600' },
    { key: 'ref', label: 'Reference', color: 'from-green-500 to-green-600' },
    { key: 'gt_both', label: 'Ground Truth', color: 'from-red-500 to-red-600' },
    { key: 'conv_both_enc_v1', label: 'Conv Enc V1', color: 'from-purple-500 to-purple-600' },
    { key: 'conv_both_onset_only', label: 'Conv Onset Only', color: 'from-orange-500 to-orange-600' },    
  ];

  return (
    <div className="space-y-8">
      {/* Sample Selection */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-4">Sample Selection</h2>
        <div className="flex flex-wrap gap-3">
          {samples.map((sample) => (
            <button
              key={sample.id}
              onClick={() => setSelectedSample(sample)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                selectedSample.id === sample.id
                  ? 'bg-white/30 text-white shadow-lg'
                  : 'bg-white/10 text-white/80 hover:bg-white/20 hover:text-white'
              }`}
            >
              {sample.title}
            </button>
          ))}
        </div>
      </div>

      {/* Audio Comparison Table */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          {selectedSample.title} - Audio Comparison
        </h2>

        <div className="space-y-12">
          {/* Short2Long Row */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Short2Long Conversion
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioColumns.map((column) => (
                <div
                  key={`short2long-${column.key}`}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="text-center mb-3">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${column.color} text-white`}>
                      {column.label}
                    </div>
                  </div>
                  <AudioPlayer
                    src={`/0725_exp/short2long_${column.key}.wav`}
                    label={`Short2Long ${column.label}`}
                  />
                  <div className="mt-3">
                    <AudioWaveform
                      src={`/0725_exp/short2long_${column.key}.wav`}
                      height={60}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Long2Short Row */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4 text-center bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              Long2Short Conversion
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioColumns.map((column) => (
                <div
                  key={`long2short-${column.key}`}
                  className="bg-white/5 rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-200"
                >
                  <div className="text-center mb-3">
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${column.color} text-white`}>
                      {column.label}
                    </div>
                  </div>
                  <AudioPlayer
                    src={`/0725_exp/long2short_${column.key}.wav`}
                    label={`Long2Short ${column.label}`}
                  />
                  <div className="mt-3">
                    <AudioWaveform
                      src={`/0725_exp/long2short_${column.key}.wav`}
                      height={60}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exp0725Table; 