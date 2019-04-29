import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
  ) {
    this.loginForm = this._fb.group({
      email: ['', Validators.min(1)],
      password: ['', Validators.min(1)],
    });
  }

  ngOnInit() {
  }

  public login() {
    localStorage.setItem('role', this.loginForm.controls['email'].value);

    const role = localStorage.getItem('role');
    if (role === 'SUPER_ADMIN') {
      this._router.navigate(['/super-admin']);
    } else if (role === 'ADMIN') {
      this._router.navigate(['/admin']);
    } else if (role === 'CLIENT') {
      this._router.navigate(['/client']);
    } else if (role === 'MANAGER') {
      this._router.navigate(['/manager']);
    } else if (role === 'DEVELOPER') {
      this._router.navigate(['/developer']);
    }
  }

}
