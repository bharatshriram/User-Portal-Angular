import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Login } from '../models/login.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {

 

  private userUrl = 'http://localhost:8080/user-portal/users';
  //private userUrl = '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user) {
    return this.http.post<User>(this.userUrl, user);
  }

  public apiUrl:string="http://localhost:62517/API/";
     public DownloadUrl:string="http://localhost:62517/";
    //public apiUrl:string="http:/213.210.193.147/ACIGPanelAPI/API/";
    //public header:HttpHeaders();

   public  httpOptions ={headers:new HttpHeaders({'Content-Type': 'application/json'})};
     constructor(private http:HttpClient)
     {

     }
    

    public Login(Loginobj:Login)
    {
      // return this.http.post<StatusMdl>(this.apiUrl+"Login/Login",Loginobj,this.httpOptions).toPromise();
    }

}
