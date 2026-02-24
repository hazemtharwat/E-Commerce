import { Component, Inject, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { AuthServiceService } from '../../core/Services/auth-service.service';
import { ILogin } from '../../core/Interfaces/iauth';
import { take } from 'rxjs';
import { MessageService } from 'primeng/api';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { AutoFocusModule } from 'primeng/autofocus';
import { UserDataService } from '../../core/Services/user-data.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
 FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    ToastModule,
    MessagesModule,
    NgxSpinnerModule,
    AutoFocusModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [MessageService],
})
export class LoginComponent {
  userinfo:string=""
  loginData:ILogin[]=[]
  private _loginservice = inject(AuthServiceService);
  private _Loding = inject(NgxSpinnerService);
  private router = inject(Router);
  private _messageService=inject(MessageService)
  private _userData=inject(UserDataService)
  loginForm!: FormGroup;


  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }
  get loginDataControls() {
    return Object.keys(this.loginForm.controls);
  }
  submitLogin() {
    if (this.loginForm.valid) {
      this.login(this.loginForm.value);
      this.userinfo=this.loginForm.value.username
      this._loginservice.setLogedInfo(this.userinfo)
      
      localStorage.setItem('username',this.userinfo)
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  login(data: ILogin) {
    this._Loding.show();
    this._loginservice.login(data).pipe(take(1)).subscribe({
        next: (res) => {
          this._Loding.hide();
          this._userData.userName.next(res.username)
          const token = localStorage.setItem('usertoken', res.token);
          this.router.navigate(['/home']);
          this.success("success","success","success")
        },
        error: (err) => {
        this.success('error','error', err.error.error);
        this._Loding.hide();
        },
      });
  }
   success(severity: string, detail: string,summary:string): void {
    this._messageService.add({ severity: severity,summary:summary, detail: detail });
  }
}
