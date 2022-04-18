import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  acno=""
  pswd=""
  amount=""

  acno1=""
  pswd1=""
  amount1=""
  user:any
  // depositionform model
   depositForm = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*') ]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*') ]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*') ]]
  })

  // withdrawform model
  withdrawForm = this.fb.group({
    amount:['',[Validators.required,Validators.pattern('[0-9]*') ]],
    acno:['',[Validators.required,Validators.pattern('[0-9]*') ]],
    pswd:['',[Validators.required,Validators.pattern('[a-zA-Z0-9]*') ]]
  })
  constructor(private ds: DataService,private fb:FormBuilder) { 
    this.user=this.ds.currentUser
  }

  ngOnInit(): void {
  }

  deposit(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount
    // calling deposit in dataserver

    const result =this.ds.deposit(acno,pswd,amount)
    if(result){
      alert(amount + "succesfully deposited and new balance is:"+result)
    }
  }

  withdraw(){
    var acno=this.acno1
    var pswd=this.pswd1
    var amount=this.amount1
    // calling withdraw in dataserver

    const result =this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(amount + "succesfully withdraw and new balance is:"+result)
    }
    
  }

}
