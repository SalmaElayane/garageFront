import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

  export class LoginComponent implements OnInit {
    constructor(
      private formBuilder: FormBuilder,
      private loginService: LoginService,
      private router: Router,
      private titleService: Title,

    ) {
      if (this.loginService.isLogged()) {
        this.router.navigate(['/garages']);
      }
      this.titleService.setTitle("Authentification");
    }

    public loginForm: FormGroup = new FormGroup({});
    ngOnInit(): void {
      this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', Validators.required],
      });
    }


    public onSubmit() {
      if (!this.loginForm.valid) {

        console.log("Merci de saisir votre login et mot de passe");

      }
      if (this.loginForm.valid) {
        let userPassword=this.loginForm.value
        this.loginService.login(userPassword).subscribe((reponse) => {
          console.log(reponse);
          let jwtAccessToken = reponse.body['jwt-access-token'];
          let jwtRefreshToken = reponse.body['jwt-refresh-token'];
          console.log(jwtAccessToken);
          this.loginService.saveAccessToken(jwtAccessToken);
          this.loginService.saveRefreshToken(jwtRefreshToken);
          this.router.navigate(['/garages']).then(() => { });
        },
          error => {
            console.log("errrrrr");

           // this.snackbarService.openSnackBarError("Login ou mot de passe incorrect  !!", "Fermer");
          });
      }
    }

  }


