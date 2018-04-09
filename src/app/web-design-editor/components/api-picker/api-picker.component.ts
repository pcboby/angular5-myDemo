import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  EditorStoreService
} from '../../services/editor-store.service';

@Component({
  selector: 'app-api-picker',
  templateUrl: './api-picker.component.html',
  styleUrls: ['./api-picker.component.scss']
})
export class ApiPickerComponent implements OnInit {
  changeServiceType = '0'; // '0':系统API，'1':自定义API地址

  @Input() model = [];

  get serviceApi(){
    return this.editorService.serviceApi;
  }

  constructor(public editorService: EditorStoreService) {}

  ngOnInit() {}

}
