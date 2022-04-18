import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser:any
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
      console.log(database);
      
      return true
    }

  }
  login(acno:any,pswd:any){
    
    // user entered acno and pswd
      let database=this.database
      if(acno in database){
        if(pswd == database[acno]["password"]){
          this.currentUser =database[acno]["uname"]
          // already existing indb
          return true
        }
        else
        {
          return false
        }
      }
        
  
    
      else{
        alert("user does not exist!")
        return false
      }
    }

    // deposit
    deposit(acno:any,pswd:any,amt:any){
      let database=this.database
      var amount =parseInt(amt)

      if(acno in database){
        if(pswd == database[acno]["password"]){

          database[acno]["balance"]+=amount
          return database[acno]["balance"]
        }
        else{
          alert("incorrect password!")
          return false
        }

      }
      else{
        alert("user does not exist!")
        return false
      }

    }

    // withdraw
    withdraw(acno:any,pswd:any,amt:any){
      let database=this.database
      var amount =parseInt(amt)

      if(acno in database){
        if(pswd == database[acno]["password"]){
          if(database[acno]["balance"]>amount){
            database[acno]["balance"]-=amount
            return database[acno]["balance"]

          }
          else{
            alert("insuffitient balance!")
            return false
          } 
        }
        else{
          alert("incorrect password!")
          return false
        }

      }
      else{
        alert("user does not exist!")
        return false
      }

    }
}
