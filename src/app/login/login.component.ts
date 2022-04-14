import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  accNum="account number please!"
  acno=""
  pswd=""
  
  constructor(private router: Router,private ds:DataService) { }

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
  // login using two way binding
  login(){
    
    // var acno = a.value
    
    
    //   var pswd = p.value
    var acno = this.acno
    var pswd = this.pswd
      let database=this.ds.database
      if(acno in database){
        if(pswd == database[acno]["password"]){
          alert("login successfull!")
          this.router.navigateByUrl("dashboard")
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
