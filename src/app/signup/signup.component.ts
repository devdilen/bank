import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
accno:any
usname:any
passw:any
copass:any


register(){
  var accno1=this.accno
console.log(accno1);
console.log(this.usname);
console.log(this.passw);
console.log(this.copass);

}


}
