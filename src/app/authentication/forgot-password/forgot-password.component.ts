import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-forgot-password",
  templateUrl: "./forgot-password.component.html",
  styleUrls: ["./forgot-password.component.scss"],
})
export class ForgotPasswordComponent implements OnInit {
  authForm!: FormGroup;
  submitted = false;
  returnUrl: string = "";
  loading = false;
  subscribe: any;
  error = "";
  hide = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  notValid = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  get f() {
    return this.authForm!.controls;
  }

  onSubmit() {
    this.loading = true;
    this.submitted = true;

    if (this.authForm!.invalid) {
      console.log("email provided is not valid", this.authForm!.value);
    }

    console.log(this.authForm!.value);

    // Simulate form submission without backend functionality
    setTimeout(() => {
      console.log("Simulated form submission:", this.authForm!.value);
      this.loading = false;
      this.submitted = false;
    }, 2000);
  }
}
