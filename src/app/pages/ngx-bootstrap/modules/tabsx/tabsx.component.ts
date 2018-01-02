import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tabsx',
  templateUrl: './tabsx.component.html',
  styleUrls: ['./tabsx.component.css']
})
export class TabsxComponent implements OnInit {
  @ViewChild('staticTabs') staticTabs: TabsetComponent;

  tabs: any[] = [
    { title: 'Dynamic Title 1', content: 'Dynamic content 1' },
    { title: 'Dynamic Title 2', content: 'Dynamic content 2', disabled: true },
    { title: 'Dynamic Title 3', content: 'Dynamic content 3', removable: true }
  ];
  stylingTabs: any[] = [
    {
      title: 'Dynamic Title 1',
      content: 'Dynamic content 1',
      customClass: 'customClass'
    },
    {
      title: 'Dynamic Title 2',
      content: 'Dynamic content 2',
      customClass: 'customClass'
    }
  ];

  constructor() { }

  alertMe(): void {
    setTimeout(function(): void {
      alert('You\'ve selected the alert tab!');
    });
  }


  selectTab(tab_id: number) {
    this.staticTabs.tabs[tab_id].active = true;
  }

  disableEnable() {
    this.staticTabs.tabs[2].disabled = !this.staticTabs.tabs[2].disabled;
  }



  addNewTab(): void {
    const newTabIndex = this.tabs.length + 1;
    this.tabs.push({
      title: `Dynamic Title ${newTabIndex}`,
      content: `Dynamic content ${newTabIndex}`,
      disabled: false,
      removable: true
    });
  }

  removeTabHandler(tab: any): void {
    this.tabs.splice(this.tabs.indexOf(tab), 1);
    console.log('Remove Tab handler');
  }

  ngOnInit() {
  }

}
