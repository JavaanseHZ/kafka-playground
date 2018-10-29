import { Component } from '@angular/core';

import { DefaultEditor } from 'ng2-smart-table';

@Component({
  template: `{{cell.getValue()}}`,
})
export class EmptyFieldEditorComponent extends DefaultEditor {

  constructor() {
    super();
  }
}
