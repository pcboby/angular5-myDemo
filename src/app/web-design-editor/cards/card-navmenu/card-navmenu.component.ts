import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';

@Component({
  selector: 'app-card-navmenu',
  templateUrl: './card-navmenu.component.html',
  styleUrls: ['./card-navmenu.component.scss']
})
export class CardNavmenuComponent implements OnInit {

  @Input() model: any;

  constructor(public editorService: EditorStoreService) {}

  ngOnInit() {}

  handle(e) {
    console.log(e);
  }

}
