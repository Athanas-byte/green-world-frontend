import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.scss']
})
export class LoginInComponent implements OnInit, OnDestroy {
  authForm!: FormGroup;
  hide = true;
  error: string | null = null;
  otpBox: boolean = false;
  loading: boolean = false;
  private destroy$ = new Subject<boolean>();

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.authForm = this.fb.group({
      email: ["",[Validators.email, Validators.required]],
      password: ["", Validators.required],
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit() {
    if (this.authForm.valid) {
      this.router.navigate(['./admin/dashboard/home']);
      console.log('Form Submitted:', this.authForm.value);
      // You can add logic to handle form submission later
    } else {
      this.error = 'Please fill in all required fields.';
    }
  }
}
