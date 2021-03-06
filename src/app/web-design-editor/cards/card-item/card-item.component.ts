import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit {

  /**
   * 卡片参数
   */

  @Input() model: any; // 卡片数据（必加）

  constructor() { }

  ngOnInit() {
  }

}
