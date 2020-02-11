# Angular Simplemde 

This is a angular wrapper for [SimpleMDE](https://github.com/sparksuite/simplemde-markdown-editor).

## Install

``` bash
npm install simplemde angular-simplemde
```

Then import `AngularSimplemdeModule` in your central module.

Finally, your project should import `node_modules/simplemde/dist/simepmde.min.css`. If you are using Angular CLI, this can 
be done in `angular.json` like this:

```
// ...
    "styles": [
      // other styles...
      "node_modules/simplemde/dist/simplemde.min.css"
    ],
// ...
```

## How to use

For the simplest use-case, just use the component like this

```html
<angular-simplemde [(input)]="yourInputVariable"></angular-simplemde>
```

If you want to customize the configuration, initialize a `ISimpleMdeConfig` in your component:

```typescript
import { Component } from '@angular/core';
import { DefaultActions, ISimpleMdeConfig } from 'projects/angular-simplemde/src/lib/editor/editor-config.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'editor-demo';

  editorInput = 'test **text**';

  config: ISimpleMdeConfig = {
    actions: DefaultActions,
  };
}
```

and link it in the template:

```html
<angular-simplemde [(input)]="editorInput" [config]="config"></angular-simplemde>
```

In case you want to react explicitly on change events on the input, use the `(inputChange)` directive:

```html
<angular-simplemde [input]="editorInput" (inputChange)="doSomething($event)" [config]="config"></angular-simplemde>
```

### Toolbar options

This library defines several default toolbar actions, such as `DefaultActions`, which consist of more categorized
toolbar actions for text formatting, tables and more.

Additionally, in case you want to embed some special actions inside the default, you can use the `EmbedCustomActionsInDefault()`
function helper.

```typescript

  config: ISimpleMdeConfig = {
    actions: EmbedCustomActionsInDefault([
    {
        name: 'upper-case',
        title: 'Convert to Upper Case',
        icon: 'fa-text-height',
        action: text => text.toUpperCase()
    }   
    ]),
  };
```

Hint: use lambdas instead of full function definitions, if you want to keep the `this` scope to your component.

If your action works with asynchronous functions, you can return an `Observable<string>` instead of a string.
