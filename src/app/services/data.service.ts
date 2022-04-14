import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
   // database
   database:any = {
    1000 : {acno : 1000,uname:"arjun",password:1000,balance:5000},
    1001 : {acno : 1001,uname:"arjun",password:1000,balance:6000},
    1002 : {acno : 1002,uname:"arjun",password:1000,balance:7000}
 }

  constructor() { }
  register(uname:any,acno:any,password:any){
    let database=this.database
    if(acno in database){
      return false

    }
    else{
      // add details to database
      database[acno]={
        acno,
        uname,
        password,
        balance:0

      }
      return true
    }

  }
}
