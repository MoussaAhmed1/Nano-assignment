import { NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from "@angular/forms"
import { ToastrService } from 'ngx-toastr';
import { User } from '../../models/user';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm: FormGroup
  showPassword = false
  constructor(private fb: FormBuilder,private toastr: ToastrService,private _authService: AuthService) {
    this.signupForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      password: ["", [Validators.required,Validators.minLength(6)]],
      confirmPassword: ["", Validators.required],
    }
  ,{ validators: this.matchPasswords() })
  }
  matchPasswords() {
    return (group: FormGroup) => {
      const password = group.controls['password']
      const confirmPassword = group.controls['confirmPassword']
      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ notSame: true })
      } else {
        confirmPassword.setErrors(null)
  }
}
}
  isErrorVisible(fieldName: "firstName" | "lastName" | "email" |"password"|'confirmPassword'): boolean {
    return (this.signupForm.get(fieldName)?.invalid && this.signupForm.get(fieldName)?.touched) || false
  }

  triggerPasswordVisibility(): void {
    this.showPassword = !this.showPassword
  }
  onSubmit(): void {
    const body:User = {
      firstName: this.signupForm.value.firstName,
      lastName: this.signupForm.value.lastName,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password
    }
    console.log(this.signupForm.value);
    this._authService.signup(body).subscribe( {
      next: () => {
        this.toastr.success('User Registered Successfully');
      },
      error: (err) => {
        this.toastr.error(err?.message);
      }
    })
  }
}
