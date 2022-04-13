import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accNum="account number please!"
  acno=""
  pswd=""
  // database
  database:any = {
     1000 : {acno : 1000,uname:"arjun",password:1000,balance:5000},
     1001 : {acno : 1001,uname:"arjun",password:1000,balance:6000},
     1002 : {acno : 1002,uname:"arjun",password:1000,balance:7000}
  }
  constructor() { }

  ngOnInit(): void {
  }
  // login(){
  //   var acno = this.acno
  //   var pswd = this.pswd
  //   let database=this.database
  //   if(acno in database){
  //     if(pswd == database[acno]["password"]){
  //       alert("login successfull!")
  //     }
  //     else
  //     {
  //       alert("incorrect password")
  //     }
  //   }
      

  
  //   else{
  //     alert("user does not exist!")
  //   }
  // }

  // login using template referencing variable
  login(a:any,p:any){
    
    var acno = a.value
      var pswd = p.value
      let database=this.database
      if(acno in database){
        if(pswd == database[acno]["password"]){
          alert("login successfull!")
        }
        else
        {
          alert("incorrect password")
        }
      }
        
  
    
      else{
        alert("user does not exist!")
      }
    }
  
  acnoChange(event:any){
    this.acno=event.target.value
  }
  pswdChange(event:any){
    this.pswd=event.target.value
  }

}
