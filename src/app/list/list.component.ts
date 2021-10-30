import { Component, OnInit } from '@angular/core';
import { RestServiceService } from '../rest-service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // collection = {} as any
  // collection = {}
  collection = <any>[];
  constructor(private rest: RestServiceService) { }

  ngOnInit(): void {
    this.rest.getListOfData().subscribe((i) => {
      console.warn(i)
      this.collection = i;
    })
  }
  deleteRestApi(item: any) {
    console.warn(this.collection)
    this.collection.splice(item - 1, 1)
    this.rest.deleteData(item).subscribe((i) => {
      console.warn(i)
    })
  }

}