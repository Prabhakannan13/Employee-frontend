import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
  }
  fetchData=()=>{
    
    this.myapi.viewEmployee().subscribe(
      (data)=>{
        this.viewEmployee=data
      }
    )
  }
   
deleteEmployee=(id:any)=>{
  let data={
    "id":id
  }
  this.myapi.deleteemployee(data).subscribe(
    (resp)=>{
      alert("Deleted Successfully")
    }
  )
  this.fetchData()
}

viewEmployee:any=[]
  ngOnInit(): void {
  }

}
