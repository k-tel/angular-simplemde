export interface MdeConfig {
  element: any;
  forceSync?: boolean;
  spellChecker?: boolean;
  toolbar?: any[];
  previewRender?(plainText, preview): string;
  // todo add all SimpleMDE config options here
}
