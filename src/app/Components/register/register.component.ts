import { Component, ElementRef, Inject, inject, OnInit, ViewChild } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { MessagesModule } from 'primeng/messages';
import { Message, MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../core/Services/auth-service.service';
import { Iregister } from '../../core/Interfaces/iauth';
import { take } from 'rxjs';
import { AutoFocusModule } from 'primeng/autofocus';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    RadioButtonModule,
    MultiSelectModule,
    CommonModule,
    ToastModule,
    DropdownModule,
    MessagesModule,
    NgxSpinnerModule,
    AutoFocusModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers: [MessageService],
})
export class RegisterComponent implements OnInit {
  isSubmitted=false;
  @ViewChild ('submitbtn') el!:ElementRef
  constructor(private fb: FormBuilder) {}
  private _messageService = inject(MessageService);
  private _RegisterService = inject(AuthServiceService);
  private _NgxSpinnerService=inject(NgxSpinnerService)
  private _router=inject(Router)
  messages!: Message[];
  RegisterForm!: FormGroup;
  gender: string[] = ['male', 'female'];
  countries = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Saudi Arabia' },
    { id: 3, name: 'United Arab Emirates' },
    { id: 4, name: 'Qatar' },
    { id: 5, name: 'Kuwait' },
    { id: 6, name: 'Jordan' },
    { id: 7, name: 'Morocco' },
    { id: 8, name: 'Tunisia' },
    { id: 9, name: 'Algeria' },
    { id: 10, name: 'Turkey' },
    { id: 11, name: 'France' },
    { id: 12, name: 'Germany' },
    { id: 13, name: 'Italy' },
    { id: 14, name: 'Spain' },
  ];

  ngOnInit(): void {
    this.RegisterForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15),
        ],
      ],
      Email: ['', [Validators.required, Validators.email]],
      Password: ['', [Validators.required]],
      rePassword:['',[Validators.required]],
      gender:[''],
      countries:[null]
    },{validators:this.matchpassword.bind(this)})
    this.messages = [];
  }
  matchpassword(group:AbstractControl){
   let pass=group.get('Password')?.value;
   let repass=group.get('rePassword')?.value;

   if(pass!==repass){
   return {passwordNotMatch:true}
   }

   return null
  }

  getControlError(controlName: string): string {
    const control = this.RegisterForm.get(controlName);
    if (!control?.errors) return '';
    if (control.getError('required')) return 'هذا الحقل مطلوب';
    if (control.getError('minlength')) return 'اقل طول هو 3 احرف';
    if (control.getError('maxlength')) return 'الطول لا يتجاوز ال15 حرف';
    if (control.getError('email')) return 'ادخل بريداً إلكترونياً صحيحاً';
    return '';
  }

  get controls() {
    return Object.keys(this.RegisterForm.controls).filter(data=>
      data!=='gender' && data!== 'countries'
    )
  }
  Register() {
    if(this.RegisterForm.invalid){
      this.RegisterForm.markAllAsTouched();
    }if(this.RegisterForm.valid){
      this.isSubmitted=true
      this.signUp(this.RegisterForm.value);
      this.RegisterForm.markAsPristine()
    }
  }
  signUp(data: Iregister): void {
    this._NgxSpinnerService.show()
    this._RegisterService.Register(data).pipe(take(1)).subscribe({
      next: (res) => {
        this.success('success','success', 'success');
        this._NgxSpinnerService.hide()
        const userid=res.id
        this._router.navigate(['login'],{queryParams:{id:userid}})
      },
      error: (err) => {
        this.success('error','error', err.error.error);
        this._NgxSpinnerService.hide()
      },
    });
  }
  success(severity: string, detail: string,summary:string): void {
    this._messageService.add({ severity: severity,summary:summary, detail: detail });
  }
}
