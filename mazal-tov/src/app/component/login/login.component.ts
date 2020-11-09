import { Component, OnInit } from '@angular/core';
import { user } from 'src/Classes/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user:user=new user();
  constructor() { }

  ngOnInit(): void {
  }
   onSubmit() {
      alert('SUCCESS!! :-)');
      this.validlogin();

   }
  // $(document).ready(function(){
  //   $('.toggle').on('click', function() {
  //     $('.container').stop().addClass('active');
  //   });
    
  //   $('.close').on('click', function() {
  //     $('.container').stop().removeClass('active');
  //   });
    
  //   }
    validlogin(): void  {
      console.log("login");
      
    // this.TeacherService.login(user.la, user.password).subscribe(res => {
    //   if (res == null)
    //     alert("error");    
    //   else {
    //    localStorage.setItem("teacher", JSON.stringify(res));
    //     this.route.navigate(['course']);
    //   }
    // }, err => {
    //   alert("error")
    // }
    // )
    

//   }
  

  }


}
