import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { DropdownService } from './services/dropdown.service';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    CampoControlErroComponent,
    // ErrorMsgComponent,
    // InputFieldComponent,
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    // ErrorMsgComponent,
    // InputFieldComponent
  ],
  providers: [ DropdownService ]
})
export class SharedModule { }
