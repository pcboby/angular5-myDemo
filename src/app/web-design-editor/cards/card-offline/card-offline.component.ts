import {
  Component,
  OnInit,
  Input
} from '@angular/core';
import {
  HttpClient
} from '@angular/common/http';

@Component({
  selector: 'app-card-offline',
  templateUrl: './card-offline.component.html',
  styleUrls: ['./card-offline.component.css']
})
export class CardOfflineComponent implements OnInit {

  public contents = '';

  @Input() model: any;



  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http.get(this.model.urls, {
      responseType: 'text'
    }).subscribe((data) => {
      console.log(data);
      this.contents = data;
    });
  }

}
