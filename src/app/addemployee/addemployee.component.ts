import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  name=""
  email=""
  address=""
  bloodgroup=""
  company=""
  employeecode=""
  dateofjoining=""

readValues=()=>{
  let data={
    "name":this.name,
    "email":this.email,
    "address":this.address,
    "bloodgroup":this.bloodgroup,
    "company":this.company,
    "employeecode":this.employeecode,
    "dateofjoining":this.dateofjoining
  }
  console.log(data)
  this.myapi.addEmployee(data).subscribe(
    (resp)=>{
      alert("Added succesfully")
    }
  )
}

  ngOnInit(): void {
  }

}
