import {
  Component,
  OnInit
} from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';

@Component({
  selector: 'app-item-mask',
  templateUrl: './item-mask.component.html',
  styleUrls: ['./item-mask.component.css']
})
export class ItemMaskComponent implements OnInit {

  constructor(private editorService: EditorStoreService) {}

  ngOnInit() {}

}
