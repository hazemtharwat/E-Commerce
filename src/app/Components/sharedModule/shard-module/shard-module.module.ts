import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AutoFocusModule } from 'primeng/autofocus';
import { MessageService } from 'primeng/api';



@NgModule({
  declarations: [],
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
       AutoFocusModule,
  ],
  exports:[
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
       AutoFocusModule,  
  ],
  providers:[MessageService]
})
export class ShardModuleModule { }
