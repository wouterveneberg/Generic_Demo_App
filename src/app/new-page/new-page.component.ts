import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styleUrls: ['./new-page.component.css']
})
export class NewPageComponent implements OnInit {

  form: FormGroup;
  pageName : string;
  title: string;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NewPageComponent>, @Inject(MAT_DIALOG_DATA) data) { 
    this.pageName = data.name;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.pageName
    })
    this.form.controls['name'].setValidators([Validators.required, Validators.minLength(1)]);
  }

  save() {
    if(this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }

  close() {
    this.dialogRef.close();
  }

  getErrorMessage() {
    return this.form.controls["name"].hasError('required') ? 'Vul een naam in' : this.form.controls["name"].hasError('minlength') ? 'Naam moet minimaal 1 teken bevatten': '';
  }
}
