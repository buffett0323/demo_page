import { AudioSample, AppConfig } from '../types/audio';
// @ts-ignore
import metadataJson from '../metadata.json';
// @ts-ignore
import testMetadataJson from '../metadata_test.json';

const metadata = metadataJson as Record<string, any>;
const testMetadata = testMetadataJson as Record<string, any>;

export const config: AppConfig = {
  totalRows: 10,
  audioDirectory: 'audio/',
  imgDirectory: 'img/',
  fileExtension: '.wav'
};

export const testConfig: AppConfig = {
  totalRows: 10,
  audioDirectory: 'test_audio/',
  imgDirectory: 'test_img/',
  fileExtension: '.wav'
};

export function generateSampleData(): AudioSample[] {
  const samples: AudioSample[] = [];
  
  for (let i = 0; i < config.totalRows; i++) {
    const sampleKey = `sample_${i}`;
    const sampleMetadata = metadata[sampleKey as keyof typeof metadata];
    
    samples.push({
      id: i + 1,
      content: `Sample ${i}`,
      contentRef: `${config.audioDirectory}sample_${i}_content_ref${config.fileExtension}`,
      timbreRef: `${config.audioDirectory}sample_${i}_timbre_ref${config.fileExtension}`,
      conversion: `${config.audioDirectory}sample_${i}_recon${config.fileExtension}`,
      groundTruth: `${config.audioDirectory}sample_${i}_gt${config.fileExtension}`,
      midiPng: `${config.imgDirectory}sample_${i}.png`,
      metadata: sampleMetadata ? {
        stft_loss: sampleMetadata.stft_loss,
        mel_loss: sampleMetadata.mel_loss,
        l1_loss: sampleMetadata.l1_loss,
        content_loss: sampleMetadata.content_loss,
        vq_commitment_loss: sampleMetadata.vq_commitment_loss,
        vq_codebook_loss: sampleMetadata.vq_codebook_loss,
      } : undefined
    });
  }
  
  return samples;
}

export function generateTestData(): AudioSample[] {
  const samples: AudioSample[] = [];
  
  for (let i = 0; i < testConfig.totalRows; i++) {
    const sampleKey = `sample_${i}`;
    const sampleMetadata = testMetadata[sampleKey as keyof typeof testMetadata];
    
    samples.push({
      id: i + 1,
      content: `Test ${i}`,
      contentRef: `${testConfig.audioDirectory}sample_${i}_content_ref${testConfig.fileExtension}`,
      timbreRef: `${testConfig.audioDirectory}sample_${i}_timbre_ref${testConfig.fileExtension}`,
      conversion: `${testConfig.audioDirectory}sample_${i}_recon${testConfig.fileExtension}`,
      groundTruth: `${testConfig.audioDirectory}sample_${i}_gt${testConfig.fileExtension}`,
      midiPng: `${testConfig.imgDirectory}sample_${i}.png`,
      metadata: sampleMetadata ? {
        stft_loss: sampleMetadata.stft_loss,
        mel_loss: sampleMetadata.mel_loss,
        l1_loss: sampleMetadata.l1_loss,
        content_loss: sampleMetadata.content_loss,
        vq_commitment_loss: sampleMetadata.vq_commitment_loss,
        vq_codebook_loss: sampleMetadata.vq_codebook_loss,
      } : undefined
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
  const sampleKey = `sample_${newId}`;
  const sampleMetadata = metadata[sampleKey as keyof typeof metadata];
  
  const newSample: AudioSample = {
    id: newId + 1,
    content: content,
    contentRef: `${config.audioDirectory}sample_${newId}_content_ref${config.fileExtension}`,
    timbreRef: `${config.audioDirectory}sample_${newId}_timbre_ref${config.fileExtension}`,
    conversion: `${config.audioDirectory}sample_${newId}_recon${config.fileExtension}`,
    groundTruth: `${config.audioDirectory}sample_${newId}_gt${config.fileExtension}`,
    midiPng: `${config.imgDirectory}sample_${newId}.png`,
    metadata: sampleMetadata ? {
      stft_loss: sampleMetadata.stft_loss,
      mel_loss: sampleMetadata.mel_loss,
      l1_loss: sampleMetadata.l1_loss,
      content_loss: sampleMetadata.content_loss,
      vq_commitment_loss: sampleMetadata.vq_commitment_loss,
      vq_codebook_loss: sampleMetadata.vq_codebook_loss,
    } : undefined
  };

  return [...samples, newSample];
} 