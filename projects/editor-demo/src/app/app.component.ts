import { Component } from '@angular/core';
import { DefaultActions, ISimpleMdeConfig } from 'projects/angular-simplemde/src/lib/editor/editor-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-simplemde demo';

  editorInput = 'test **text**';

  config: ISimpleMdeConfig = {
    actions: DefaultActions,
    previewRenderer(text, preview?) {

      // make some custom preview manipulation
      return text.toUpperCase();
    }
  };
}
