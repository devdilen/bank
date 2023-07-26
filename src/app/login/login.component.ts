import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data = "happy banking with us";
  pdata = "Enter your Account Number";
  varia1: any;
  accno: any;
  psw: any;

  constructor(private route: Router, private ds: DataService) {}

  ngOnInit(): void {
    // Initialization code here
  }

  login(){
    var accno = this.accno;
    var psw = this.psw;
    this.ds.login(accno, psw).subscribe(
      (result: any) => {
        alert(result.message);
        this.route.navigateByUrl('home');
      },
      (result) => {
        alert(result.error.message);
        this.route.navigateByUrl('register');
      }
    );
  }
}
