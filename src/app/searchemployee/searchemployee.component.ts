import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchemployee',
  templateUrl: './searchemployee.component.html',
  styleUrls: ['./searchemployee.component.css']
})
export class SearchemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }
  name=""
  email=""
  address=""
  bloodgroup=""
  company=""
  employeecode=""
  dateofjoining=""

  searchEmployee=()=>{
    let data={
      "name":this.name,
      "email":this.email,
      "address":this.address,
      "bloodgroup":this.bloodgroup,
      "company":this.company,
      "employeecode":this.employeecode,
      "dateofjoining":this.employeecode
    }
    console.log(data)
    this.myapi.searchEmployee(data).subscribe(
      (res)=>{
        this.data=res
      }
    )
  }


  data:any=[]
  ngOnInit(): void {
  }

}
