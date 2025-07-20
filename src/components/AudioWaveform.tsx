import React, { useEffect, useRef, useState } from 'react';

interface AudioWaveformProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

const AudioWaveform: React.FC<AudioWaveformProps> = ({ 
  src, 
  width = 120, 
  height = 60, 
  className = "" 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Create audio context and load audio
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    // const audio = new Audio(src);

    const loadAudio = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Load audio data
        const arrayBuffer = await fetch(src).then(res => res.arrayBuffer());
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        
        // Get audio data
        const channelData = audioBuffer.getChannelData(0); // Use first channel
        const samples = channelData.length;
        
        // Calculate samples per pixel
        const samplesPerPixel = Math.ceil(samples / width);
        
        // Calculate RMS values for each pixel
        const rmsValues: number[] = [];
        for (let i = 0; i < width; i++) {
          const start = i * samplesPerPixel;
          const end = Math.min(start + samplesPerPixel, samples);
          let sum = 0;
          for (let j = start; j < end; j++) {
            sum += channelData[j] * channelData[j];
          }
          const rms = Math.sqrt(sum / (end - start));
          rmsValues.push(rms);
        }

        // Find max RMS for normalization
        const maxRms = Math.max(...rmsValues);
        
        // Draw waveform
        ctx.fillStyle = '#3b82f6'; // Blue color
        ctx.strokeStyle = '#1d4ed8'; // Darker blue for stroke
        ctx.lineWidth = 1;

        // Draw bars
        const barWidth = Math.max(1, width / rmsValues.length);
        const centerY = height / 2;

        rmsValues.forEach((rms, index) => {
          const normalizedHeight = maxRms > 0 ? (rms / maxRms) * (height * 0.8) : 0;
          const x = index * barWidth;
          const y = centerY - normalizedHeight / 2;
          
          // Draw bar
          ctx.fillStyle = '#3b82f6';
          ctx.fillRect(x, y, barWidth - 1, normalizedHeight);
          
          // Add subtle stroke
          ctx.strokeStyle = '#1d4ed8';
          ctx.strokeRect(x, y, barWidth - 1, normalizedHeight);
        });

        setIsLoading(false);
      } catch (err) {
        console.error('Error loading audio for waveform:', err);
        setError('Failed to load audio');
        setIsLoading(false);
        
        // Draw error state
        ctx.fillStyle = '#ef4444';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Error', width / 2, height / 2);
      }
    };

    loadAudio();

    // Cleanup
    return () => {
      audioContext.close();
    };
  }, [src, width, height]);

  if (error) {
    return (
      <div className={`flex items-center justify-center bg-red-100 rounded ${className}`} style={{ width, height }}>
        <span className="text-red-600 text-xs">Error</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        className="rounded border border-gray-200 bg-gray-50"
        style={{ width, height }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 rounded">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
        </div>
      )}
    </div>
  );
};

export default AudioWaveform; 