import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-web-design-editor',
  templateUrl: './web-design-editor.component.html',
  styleUrls: ['./web-design-editor.component.scss']
})
export class WebDesignEditorComponent implements OnInit {

  @Input()
  $sourceBuilder;

  @Input()
  $targetBuilder;

  constructor() { }

  ngOnInit() {
  }

}
