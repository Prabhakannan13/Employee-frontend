import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.myapi.viewEmployee().subscribe(
      (data)=>{
        this.viewEmployee=data
      }
    )
   }

viewEmployee:any=[]
  ngOnInit(): void {
  }

}
