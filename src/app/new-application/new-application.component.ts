import { Component, OnInit, Inject, AfterContentInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl, NgModel } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef, MatSnackBar } from "@angular/material";
import { ServerconnectionService } from '../serverconnection.service';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../configuration';
import { Menu } from '../Objects/MenuObject';
import { Page } from '../Objects/PageObject';
import { BaseComponent } from '../Objects/BaseComponent';

@Component({
  selector: 'app-new-application',
  templateUrl: './new-application.component.html',
  styleUrls: ['./new-application.component.css']
})
export class NewApplicationComponent implements OnInit {

  form: FormGroup;
  appName: string;
  selectedIndex: number;
  errorMessage = false;

  applicationNames: any[];
  selectedName: string;
  selected = new FormControl('valid', [Validators.required]);

  public typesOfMenu = {
    1 : 'blank',
    2 : 'bottomNav',
    3 : 'sideNav',
    4 : 'bottom_side'
  }
  
  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<NewApplicationComponent>, @Inject(MAT_DIALOG_DATA) data, private service: ServerconnectionService, private conf: Configuration, private snackBar: MatSnackBar) {
    this.appName = data.name;
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.appName,
      selectedMenu: this.typesOfMenu[this.selectedIndex]
    });
    this.form.controls["name"].setValidators([Validators.required, Validators.minLength(3)]);

    this.service.getApplicationNames().then(data => {
      this.applicationNames = data;
      this.applicationNames.sort(function(a,b) {return (a.appName > b.appName) ? 1 : ((b.appName > a.appName) ? -1 : 0);} );
    });
  }

  /**
   * Saves the data and pushes the data back to Application
   */
  save() {
    if(this.form.valid && this.selectedIndex != null) {
      this.errorMessage = false;
      this.form.value.selectedMenu = this.typesOfMenu[this.selectedIndex];
      this.dialogRef.close(this.form.value);
    } else if(this.selectedIndex == null) {
      this.errorMessage = true;
    }
  }

  /**
   * Closes the dialog
   */
  close() {
    this.dialogRef.close();
  }

  /**
   * Sets selectedIndex of menu-type
   * @param index Number
   */
  click(index: number) {
    this.errorMessage = false;
    this.selectedIndex = index;
  }

  /**
   * Get errormessage based on form data
   */
  getErrorMessage() {
    return this.form.controls["name"].hasError('required') ? 'Vul een naam in' : this.form.controls["name"].hasError('minlength') ? 'Naam moet minimaal 3 tekens bevatten': this.form.controls['name'].hasError('nameValidator') ?  'Naam bestaat al' : '';
  }

  /**
   * Opens a configuration from DB
   */
  open() {
    if(this.selectedName) {
      this.snackBar.open("Applicatie wordt geladen");
      //Get selected configuration
      this.service.getApplicationByName(this.selectedName).subscribe(result => {
        //Read data and fill class structure
        this.conf.addApplication(result.appName);
        this.conf.setMenu(new Menu(result.menu.menuType));

        result.menu.menuItems.forEach(menuItem => {
          this.conf.addMenuItem(menuItem.name, menuItem.id, menuItem.linkId);
        });

        result.pages.forEach(page => {
          let pageObj = new Page(page.pageName, page.id)
          
          page.components.forEach(comp => {
            let compObj = new BaseComponent(comp.component);
            
            //Add every attribute to component
            var keys = Object.keys(comp);
            keys.forEach(key => {
              compObj[key] = comp[key];
            });

            pageObj.addComponent(compObj);
          });
          
          this.conf.addPage(pageObj);
        });
        this.snackBar.dismiss();
        this.dialogRef.close();
      });
    }
  }
}
