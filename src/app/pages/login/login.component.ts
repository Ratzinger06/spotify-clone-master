import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(){}
  public usernameFormControl = new FormControl(null, [Validators.required, Validators.email]);
  public passwordFormControl = new FormControl(null, [Validators.minLength(8)]);
  public userForm!: FormGroup;
  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: this.usernameFormControl,
      password: this.passwordFormControl,
    })
  }
  submit(){
    console.log(this.userForm.value)
  }
}
