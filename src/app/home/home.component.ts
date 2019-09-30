import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   Details;
  constructor(public router: Router, public http: HttpClient) { }


  ngOnInit() {
    this.Details = new FormGroup({
      BookName: new FormControl(),
      AuthorName: new FormControl(),
      Edition: new FormControl(),
      Description: new FormControl(),
    });
  }
  addData() {
    this.http.post(`http://5d47b117992ea9001444c9af.mockapi.io/Library`, this.Details.value)
    .toPromise()
      .then((response) => {
        this.Details = response;
        this.router.navigate(['viewblog']);
      }, (error) => {
        console.log(error);
      });
  }

}
