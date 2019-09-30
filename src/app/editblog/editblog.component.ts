import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-editblog',
  templateUrl: './editblog.component.html',
  styleUrls: ['./editblog.component.css']
})
export class EditblogComponent implements OnInit {
Details;
  constructor(public  activatedRoute: ActivatedRoute, public http: HttpClient, public router: Router ) {
    this.Details = new FormGroup(
      {
         BookName  : new FormControl(),
         AuthorName  : new FormControl(),
         Edition  : new FormControl(),
         Description : new FormControl(),
      }
    );
   }

  ngOnInit() {
    this.http.get(`http://5d47b117992ea9001444c9af.mockapi.io/Library/${this.activatedRoute.snapshot.paramMap.get('id')}`)
    .toPromise()
    .then((response: any) => {
      this.Details.setValue(
        {
          BookName : response.BookName,
          AuthorName : response.AuthorName,
          Edition : response.Edition,
          Description : response.Description,
        }
      );
    }, (error) => {
      console.log(error);
    }
    );
 }

 updateData() {
   this.http.put(`http://5d47b117992ea9001444c9af.mockapi.io/Library/${this.activatedRoute.snapshot.paramMap.get('id')}`, this.Details.value)
   .toPromise()
   .then((response) => {
     this.router.navigate(['viewblog']);
   }, (error) => {
     console.log(error);
   });
 }

}
