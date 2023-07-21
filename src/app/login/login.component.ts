import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
data="happy banking with us"
pdata="Enter your Account Number"
varia1:any


  constructor(private route:Router,private ds:DataService){}
  ngOnInit(): void {
   this.varia1=this.ds.sdata
console.log(this.varia1);
this.ds.smethod()
  }





login(a:any){
  console.log(a.value);
  alert("event clicked")
  this.route.navigateByUrl("home")
  
}
accno(event:any){
  console.log(event.target.value);
  
}
}
