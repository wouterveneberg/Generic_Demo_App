import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-image-settings',
  templateUrl: './image-settings.component.html',
  styleUrls: ['./image-settings.component.css']
})
export class ImageSettingsComponent implements OnInit  {

  componentInstance: any;
  componentObject: any;
  selectedUploadOption: string;

  image: any;
  imageName: string;
  width: string;

  widthControl: any;

  constructor(private ng2ImgMax: Ng2ImgMaxService) { }

  ngOnInit() {
    this.widthControl = new FormControl("widthControl", [Validators.max(100), Validators.min(1), Validators.required])
  }

  /**
   * Set attributes of image settings
   * @param comp    ImageComponent
   * @param compObj BaseComponent
   */
  setAttributes(comp, compObj) {
    this.componentInstance = comp;
    this.componentObject = compObj;

    this.image = comp.image ? (comp.image.startsWith("../../") ? "" : comp.image) : null;
    this.imageName = comp.imageName;
    
    this.width = comp.styles['width'] ? comp.styles['width'] : "100";
    this.width = this.width.replace('%', '');

    this.selectedUploadOption = this.image ? (this.imageName ? "imgUpload" : "imgUrl") : "imgUpload"; 
  }

  /**
   * Changes uploaded image to Base64 and adds it to component.
   * @param image File
   */
  uploadImage(image) {
    var file: File = image.target.files[0];
    this.componentInstance.imageName = file.name;
    this.componentObject.imageName = file.name;

    var myReader = new FileReader();

    //Resize image, so it uses less space in JSON.
    this.ng2ImgMax.resizeImage(file, 10000, 300).subscribe(
      result => {
        let uploadedImage = new File([result], result.name);
        myReader.readAsDataURL(uploadedImage);
      }, error => {
        console.log('😢 Oh no!', error);
      }
    );

    myReader.onloadend = (e) => {
      this.componentInstance.image = myReader.result;
      this.componentObject.image = myReader.result;
    }

    this.imageName = file.name;
  }

  /**
   * Adds imageUrl to component
   * @param url String
   */
  changeImageUrl(url) {
    this.image = url;

    this.componentInstance.image = url;
    this.componentObject.image = url;
  }

  /**
   * Changes upload option
   * @param uploadOption String
   */
  changeUploadOption(uploadOption) {
    this.selectedUploadOption = uploadOption;
  }

  /**
   * Adds styling to image
   * @param key   key of styling    //width
   * @param value value of styling  //100%
   */
  addStyling(key, value) {
    if(this.widthControl.valid) {
      this.componentInstance.styles[key] = value + "%";
      this.componentObject.styles[key] = value + "%";
    }
  }

  /**
   * Shows error message based if control is invalid
   */
  getErrorMessage() {
    return this.widthControl.hasError('min') ? 'Getal mag niet lager dan 1 zijn!' : this.widthControl.hasError('max') ? 'Getal mag niet meer dan 100 zijn!' : this.widthControl.hasError('required') ?  'Geen getal ingevuld!' : '';
  }
}
