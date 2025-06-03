import React from 'react';
import { AudioPlayerProps } from '../types/audio';

const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, label, className = '' }) => {
  return (
    <div className={`flex flex-col items-center gap-3 ${className}`}>
      <div className="text-sm font-medium text-gray-600 text-center">
        {label}
      </div>
      <audio 
        controls 
        className="audio-player"
        preload="none"
      >
        <source src={src} type="audio/wav" />
        <source src={src.replace('.wav', '.mp3')} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer; 