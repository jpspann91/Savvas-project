import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

    person: any

  constructor(private route: ActivatedRoute,) {
    this.person = "SOMETHING FOR NOW"
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.person = this.route.snapshot.paramMap.get('person')
    })
  }

}
