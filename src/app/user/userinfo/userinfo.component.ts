import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit {
 public data:any;
 body:any

  constructor(private _userservice:UserService,
    public authservice: AuthService) { }

  ngOnInit() {
    this._userservice.getApi().subscribe((res)=>{
      localStorage.setItem('Email',this.authservice.currentUserName);
      localStorage.setItem('Password',this.authservice.currentUserId)
      this.data=res;
      console.log(this.data);
    });

    // console.log(this.data);
    
  }
  Search(){
    this.data =this.data.filter(res=>{
      return res.body.toLocaleLowerCase().match(this.body.toLocaleLowerCase());
    })
    this.ngOnInit()
  }
  
}
