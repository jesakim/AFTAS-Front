import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from 'src/app/models/login.dto';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private tokenService: TokenService,
    ){}

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
      });
    }

    onSubmit() {
      if (this.loginForm.valid) {
        const dto: LoginDto = {
          email: this.loginForm.get('email')?.value,
          password: this.loginForm.get('password')?.value
        };
        this.authService.login(dto).subscribe(response => {
          this.tokenService.saveToken(response.result.token);
          // Redirect to /me
          this.router.navigate(['']);
        },
        error => {
          console.log(error.error);
        }
        
        );
        
      } else {
        this.loginForm.markAllAsTouched();
      }
    }

}
