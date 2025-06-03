import { AudioSample, AppConfig } from '../types/audio';

export const config: AppConfig = {
  totalRows: 20,
  audioDirectory: 'audio/',
  imgDirectory: 'img/',
  fileExtension: '.wav'
};

export function generateSampleData(): AudioSample[] {
  const samples: AudioSample[] = [];
  
  for (let i = 0; i < config.totalRows; i++) {
    samples.push({
      id: i + 1,
      content: `Sample ${i}`,
      contentRef: `${config.audioDirectory}sample_${i}_content_ref${config.fileExtension}`,
      timbreRef: `${config.audioDirectory}sample_${i}_timbre_ref${config.fileExtension}`,
      conversion: `${config.audioDirectory}sample_${i}_recon${config.fileExtension}`,
      groundTruth: `${config.audioDirectory}sample_${i}_gt${config.fileExtension}`,
      midiPng: `${config.imgDirectory}sample_${i}.png`
    });
  }
  
  return samples;
}

export function updateSampleContent(samples: AudioSample[], rowId: number, newContent: string): AudioSample[] {
  return samples.map(sample => 
    sample.id === rowId 
      ? { ...sample, content: newContent }
      : sample
  );
}

export function addNewSample(samples: AudioSample[], content: string): AudioSample[] {
  const newId = samples.length;
  
  const newSample: AudioSample = {
    id: newId + 1,
    content: content,
    contentRef: `${config.audioDirectory}sample_${newId}_content_ref${config.fileExtension}`,
    timbreRef: `${config.audioDirectory}sample_${newId}_timbre_ref${config.fileExtension}`,
    conversion: `${config.audioDirectory}sample_${newId}_recon${config.fileExtension}`,
    groundTruth: `${config.audioDirectory}sample_${newId}_gt${config.fileExtension}`,
    midiPng: `${config.imgDirectory}sample_${newId}.png`
  };

  return [...samples, newSample];
} 