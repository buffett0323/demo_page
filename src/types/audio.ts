export interface AudioSample {
  id: number;
  content: string;
  contentRef: string;
  timbreRef: string;
  conversion: string;
  groundTruth: string;
  midiPng: string;
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