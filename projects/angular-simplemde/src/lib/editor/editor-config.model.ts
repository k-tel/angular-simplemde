import { Observable } from 'rxjs';
import * as SimpleMDE from 'simplemde';

type SimpleMdeToolBarAction = ISimpleMdeToolBarCustomAction | '|';

export interface ISimpleMdeConfig {
  actions: SimpleMdeToolBarAction[];
  previewRenderer?(text, preview?);
}

export interface ISimpleMdeToolBarCustomAction {
  name: string;
  title: string;
  icon: string;
  action(selectedText): string | Observable<string>;
  simpleMdeAction?();
}

export const DefaultFontActions: SimpleMdeToolBarAction[] = [
  {
    name: 'bold',
    simpleMdeAction: SimpleMDE.toggleBold,
    icon: 'fa-bold', // Look for a suitable icon
    title: 'Bold',
    action: (s) => s
  },
  {
    name: 'italic',
    simpleMdeAction: SimpleMDE.toggleItalic,
    icon: 'fa-italic', // Look for a suitable icon
    title: 'Italic',
    action: s => s
  },
  {
    name: 'heading',
    simpleMdeAction: SimpleMDE.toggleHeadingSmaller,
    icon: 'fa-header', // Look for a suitable icon
    title: 'Heading',
    action: s => s
  },
];

export const DefaultNumerationActions: SimpleMdeToolBarAction[] = [
  {
    name: 'table',
    simpleMdeAction: SimpleMDE.drawTable,
    icon: 'fa-table', // Look for a suitable icon
    title: 'Insert Table',
    action: s => s
  },
  {
    name: 'unordered-list',
    simpleMdeAction: SimpleMDE.toggleUnorderedList,
    icon: 'fa-list-ul', // Look for a suitable icon
    title: 'Generic List',
    action: s => s
  },
  {
    name: 'ordered-list',
    simpleMdeAction: SimpleMDE.toggleOrderedList,
    icon: 'fa-list-ol', // Look for a suitable icon
    title: 'Numbered List',
    action: s => s
  },
];

export const DefaultTextPositionActions: SimpleMdeToolBarAction[] = [
  {
    name: 'text-left',
    action: selectedText => '<div class="text-left">' + (selectedText || '') + '</div>',
    icon: 'fa-align-left',
    title: 'Text Links'
  },
  {
    name: 'text-right',
    action: selectedText => '<div class="text-right">' + (selectedText || '') + '</div>',
    icon: 'fa-align-right',
    title: 'Text Rechts'
  },
  {
    name: 'text-center',
    action: selectedText => '<div class="text-center">' + (selectedText || '') + '</div>',
    icon: 'fa-align-center',
    title: 'Text Links'
  },
  {
    name: 'text-justify',
    action: selectedText => '<div class="text-justify">' + (selectedText || '') + '</div>',
    icon: 'fa-align-justify',
    title: 'Text Justify'
  },
];

export const DefaultHtmlActions: SimpleMdeToolBarAction[] = [

  {
    name: 'line-break',
    action: () => '<br>',
    icon: 'fa-level-down linebreak', // Look for a suitable icon
    title: 'Insert Line Break'
  },
  {
    name: 'horizontal-rule',
    simpleMdeAction: SimpleMDE.drawHorizontalRule,
    icon: 'fa-minus', // Look for a suitable icon
    title: 'Insert Horizontal Line',
    action: s => s
  },
  {
    name: 'quote',
    simpleMdeAction: SimpleMDE.toggleBlockquote,
    icon: 'fa-quote-left', // Look for a suitable icon
    title: 'Quote',
    action: s => s
  },
  {
    name: 'code',
    simpleMdeAction: SimpleMDE.toggleCodeBlock,
    icon: 'fa-code',
    title: 'Code',
    action: s => s
  },
];

export const DefaultSimpleMdeActions: SimpleMdeToolBarAction[] = [

  {
    name: 'side-by-side',
    simpleMdeAction: SimpleMDE.toggleSideBySide,
    icon: 'fa-columns no-disabled no-mobile', // Look for a suitable icon
    title: 'Toggle Side by Side',
    action: s => s
  },
  {
    name: 'fullscreen',
    simpleMdeAction: SimpleMDE.toggleFullScreen,
    icon: 'fa-arrows-alt no-disable no-mobile', // Look for a suitable icon
    title: 'Toggle Fullscreen',
    action: s => s
  },
  '|',
  {
    name: 'guide',
    simpleMdeAction: 'https://simplemde.com/markdown-guide',
    icon: 'fa-question-circle', // Look for a suitable icon
    title: 'Markdown Guide',
    action: s => s
  }
];

export const DefaultActions: SimpleMdeToolBarAction[] = [
  ...DefaultFontActions,
  '|',
  ...DefaultNumerationActions,
  '|',
  ...DefaultTextPositionActions,
  '|',
  ...DefaultHtmlActions,
  '|',
  ...DefaultSimpleMdeActions
];

export function EmbedCustomActionsInDefault(actions: SimpleMdeToolBarAction[]): SimpleMdeToolBarAction[] {
  return  [
    ...DefaultFontActions,
    '|',
    ...DefaultNumerationActions,
    '|',
    ...DefaultTextPositionActions,
    '|',
    ...actions,
    '|',
    ...DefaultHtmlActions,
    '|',
    ...DefaultSimpleMdeActions
  ];
}
