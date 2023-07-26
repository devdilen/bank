import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http:HttpClient) { }
register(accno:any,uname:any,psw:any){
const bodyData={
  accno,uname,psw
}
return this.http.post('http://localhost:3000/register',bodyData)
}
//api for sending request from frontend to server
login(accno:any,psw:any){
const body={
accno,
psw
}
return this.http.post('http://localhost:3000/login',body)
}

}