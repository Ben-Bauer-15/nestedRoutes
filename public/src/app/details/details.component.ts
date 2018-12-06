import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  detailID

  constructor(private _route : ActivatedRoute) { }

  ngOnInit() {
    var self = this
    this._route.params.subscribe((params : Params) => {
      self.detailID = params['id']
    })
  }

}
