export interface AudioSample {
  id: number;
  content: string;
  timbreRef: string;
  conversion: string;
  groundTruth: string;
}

export interface AppConfig {
  totalRows: number;
  sampleDirectory: string;
  fileExtension: string;
}

export interface AudioPlayerProps {
  src: string;
  label: string;
  className?: string;
} 