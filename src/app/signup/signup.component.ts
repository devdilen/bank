import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent {
accno:any
uname:any
psw:any
copass:any

constructor(private ds:DataService,private router:Router){}

ngOnInit():void{}


register(){
var accno=this.accno
var uname=this.uname
var psw=this.psw
var copass=this.copass

if(psw==copass){
  this.ds.register(accno,uname,psw).subscribe((result:any)=>{
    alert(result.message) 
    this.router.navigateByUrl('')
  },
    result=>{alert(result.error.message)}) 
    this.router.navigateByUrl('')
   
  }
  else{
    alert("password doesn't match")
  }

}

}
