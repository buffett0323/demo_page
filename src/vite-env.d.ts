/// <reference types="vite/client" />

declare module "*.json" {
  const content: Record<string, any>;
  export default content;
} 