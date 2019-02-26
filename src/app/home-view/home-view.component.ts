import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  name: string;
  fileContent: string;

  ngOnInit() {
    this.route.params.subscribe((param) => {
        this.name = param['name'];
    });
    this.http.get<String>('/src/app/files/file.txt', { responseType: 'text' as 'json'}).subscribe(data => {
      this.fileContent = data.toString();
    });
  }
}
