import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import { Login } from '../models/login.model';

import { Session } from 'protractor';
import { Router } from '@angular/router';

@Component({
  selector: 'alert',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:UserService,private router: Router) { }
  Loginobj:Login=new Login();
  public showLoading:boolean=false;


  ngOnInit() {
  }


//   ValidateLogin()
//   {
//     debugger;
//     this.showLoading=true;    
//     this.api.Login(this.Loginobj).then((res)=>{
//       this.st=res;
//       if(this.st.StatusCode=="S")
//       {
//         sessionStorage.setItem("UserName",this.st.Remarks);
//         this.router.navigate(['/Home/Translations']);    
//       }
//       else
//       {

//           alert(this.st.StatusDesc);
//       }
//       this.showLoading=false;
//     },
//   (err)=>{
//       alert("Please Try Again");
//       this.showLoading=false;
//   });
 
//   }
}
