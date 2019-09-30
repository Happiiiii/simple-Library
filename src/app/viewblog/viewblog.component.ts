import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-viewblog',
  templateUrl: './viewblog.component.html',
  styleUrls: ['./viewblog.component.css']
})
export class ViewblogComponent implements OnInit {
  Details;

  constructor( public activateRoute: ActivatedRoute, public http: HttpClient, public router: Router) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get('http://5d47b117992ea9001444c9af.mockapi.io/Library')
    .toPromise()
      .then((response) => {
        this.Details = response;
      }, (error) => {
        console.log(error);
      }
    );
  }

  deleteData(id) {
    let result = confirm('Sure you want to DELETE?')
    if (result == true) {
      this.http.delete(`http://5d47b117992ea9001444c9af.mockapi.io/Library/${id}`)
      .toPromise()
      .then((response) => {
        this.Details = response;
        this.loadData();
      }, (error) => {
        console.log(error);
      });
    }
  }

}
