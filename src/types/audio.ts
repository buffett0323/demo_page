export interface AudioSample {
  id: number;
  content: string;
  contentRef: string;
  timbreRef: string;
  conversion: string;
  groundTruth: string;
  midiPng: string;
  metadata?: {
    stft_loss: number;
    mel_loss: number;
    l1_loss: number;
    content_loss: number;
    vq_commitment_loss?: number;
    vq_codebook_loss?: number;
  };
}

export interface AppConfig {
  totalRows: number;
  audioDirectory: string;
  imgDirectory: string;
  fileExtension: string;
}

export interface AudioPlayerProps {
  src: string;
  label: string;
  className?: string;
} 