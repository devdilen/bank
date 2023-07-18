import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
data="happy banking with us"
pdata="Enter your Account Number"
login(a:any){
  console.log(a.value);
  alert("event clicked")
  
  
}
accno(event:any){
  console.log(event.target.value);
  
}
}
