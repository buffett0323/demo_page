import { AudioSample, AppConfig } from '../types/audio';

export const config: AppConfig = {
  totalRows: 15,
  sampleDirectory: 'sample/',
  fileExtension: '.wav'
};

export function generateSampleData(): AudioSample[] {
  const samples: AudioSample[] = [];
  
  for (let i = 1; i <= config.totalRows; i++) {
    const paddedNumber = i.toString().padStart(2, '0');
    
    samples.push({
      id: i,
      content: `Sample Content ${i}`,
      timbreRef: `${config.sampleDirectory}timbre_ref_${paddedNumber}${config.fileExtension}`,
      conversion: `${config.sampleDirectory}conversion_${paddedNumber}${config.fileExtension}`,
      groundTruth: `${config.sampleDirectory}ground_truth_${paddedNumber}${config.fileExtension}`
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
  const newId = samples.length + 1;
  const paddedNumber = newId.toString().padStart(2, '0');
  
  const newSample: AudioSample = {
    id: newId,
    content: content,
    timbreRef: `${config.sampleDirectory}timbre_ref_${paddedNumber}${config.fileExtension}`,
    conversion: `${config.sampleDirectory}conversion_${paddedNumber}${config.fileExtension}`,
    groundTruth: `${config.sampleDirectory}ground_truth_${paddedNumber}${config.fileExtension}`
  };

  return [...samples, newSample];
} 