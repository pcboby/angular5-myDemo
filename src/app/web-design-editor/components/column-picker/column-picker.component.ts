import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';

@Component({
  selector: 'app-column-picker',
  templateUrl: './column-picker.component.html',
  styleUrls: ['./column-picker.component.scss']
})
export class ColumnPickerComponent implements OnInit {

  @Input() model = [];
  @Input() options: any;

  @Input() max = 24;
  @Input() min = 1;
  @Input() step = 1;
  @Input() size = 'mini';

  get lens(): number {
    return this.model.length;
  }
  set lens(val: number) {
    this.setRows(val);
  }

  constructor(public editorService: EditorStoreService) {}

  ngOnInit() {}

  doChange(v, i) {
    this.model[i] = v;
  }
  setRows(v: number) {
    const m = this.model; // this.editorService.clone(this.model);
    const n = m.length;
    if (n < v) {
      for (let i = 0; i < v - n; i++) {
        m.push({value: 24});
      }
    } else {
      for (let i = n; i > v; i--) {
        m.splice(i - 1, 1);
      }
    }

    this.model = m;
    console.log('@@@@@@@!!!', v, this.model);

  }

}
