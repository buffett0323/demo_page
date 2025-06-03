import React from 'react';
import { Music, RefreshCw, CheckCircle, FileImage, BarChart3, Activity, Target, Brain } from 'lucide-react';
import { AudioSample } from '../types/audio';
import AudioPlayer from './AudioPlayer';

interface AudioTableProps {
  samples: AudioSample[];
}

const AudioTable: React.FC<AudioTableProps> = ({ samples }) => {
  const formatLoss = (value: number | undefined): string => {
    if (value === undefined) return 'N/A';
    return value.toFixed(4);
  };

  const getLossColor = (value: number | undefined, maxValue: number): string => {
    if (value === undefined) return 'text-gray-400';
    const normalized = value / maxValue;
    if (normalized <= 0.3) return 'text-green-600';
    if (normalized <= 0.7) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
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
                  <Music className="w-4 h-4" />
                  Content
                </div>
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <Music className="w-4 h-4" />
                  Content Reference
                </div>
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <Music className="w-4 h-4" />
                  Timbre Reference
                </div>
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <RefreshCw className="w-4 h-4" />
                  Conversion Result
                </div>
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  Ground Truth
                </div>
              </th>
              <th className="px-4 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  STFT Loss
                </div>
              </th>
              <th className="px-4 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <Activity className="w-4 h-4" />
                  Mel Loss
                </div>
              </th>
              <th className="px-4 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <Target className="w-4 h-4" />
                  L1 Loss
                </div>
              </th>
              <th className="px-4 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <Brain className="w-4 h-4" />
                  Content Loss
                </div>
              </th>
              <th className="px-6 py-4 text-center font-semibold text-sm uppercase tracking-wider">
                <div className="flex items-center justify-center gap-2">
                  <FileImage className="w-4 h-4" />
                  MIDI
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
                    {sample.id - 1}
                  </div>
                </td>
                <td className="px-6 py-6 text-center">
                  <div className="bg-gradient-to-r from-orange-50 to-pink-50 px-4 py-3 rounded-lg font-semibold text-gray-800 border border-orange-200">
                    {sample.content}
                  </div>
                </td>
                <td className="px-6 py-6 text-center">
                  <AudioPlayer 
                    src={sample.contentRef} 
                    label="Content Reference"
                    className="transform transition-transform group-hover:scale-105"
                  />
                </td>
                <td className="px-6 py-6 text-center">
                  <AudioPlayer 
                    src={sample.timbreRef} 
                    label="Timbre Reference"
                    className="transform transition-transform group-hover:scale-105"
                  />
                </td>
                <td className="px-6 py-6 text-center">
                  <AudioPlayer 
                    src={sample.conversion} 
                    label="Converted Audio"
                    className="transform transition-transform group-hover:scale-105"
                  />
                </td>
                <td className="px-6 py-6 text-center">
                  <AudioPlayer 
                    src={sample.groundTruth} 
                    label="Ground Truth"
                    className="transform transition-transform group-hover:scale-105"
                  />
                </td>
                <td className="px-4 py-6 text-center">
                  <div className={`px-3 py-2 rounded-lg font-mono text-sm font-semibold bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 ${getLossColor(sample.metadata?.stft_loss, 5)}`}>
                    {formatLoss(sample.metadata?.stft_loss)}
                  </div>
                </td>
                <td className="px-4 py-6 text-center">
                  <div className={`px-3 py-2 rounded-lg font-mono text-sm font-semibold bg-gradient-to-r from-green-50 to-green-100 border border-green-200 ${getLossColor(sample.metadata?.mel_loss, 5)}`}>
                    {formatLoss(sample.metadata?.mel_loss)}
                  </div>
                </td>
                <td className="px-4 py-6 text-center">
                  <div className={`px-3 py-2 rounded-lg font-mono text-sm font-semibold bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 ${getLossColor(sample.metadata?.l1_loss, 1)}`}>
                    {formatLoss(sample.metadata?.l1_loss)}
                  </div>
                </td>
                <td className="px-4 py-6 text-center">
                  <div className={`px-3 py-2 rounded-lg font-mono text-sm font-semibold bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 ${getLossColor(sample.metadata?.content_loss, 100)}`}>
                    {formatLoss(sample.metadata?.content_loss)}
                  </div>
                </td>
                <td className="px-6 py-6 text-center">
                  <div className="flex justify-center">
                    <img 
                      src={sample.midiPng} 
                      alt={`MIDI visualization for ${sample.content}`}
                      className="max-w-[120px] max-h-[80px] rounded-lg shadow-md border border-gray-200 transform transition-transform group-hover:scale-110 hover:shadow-lg"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AudioTable; 