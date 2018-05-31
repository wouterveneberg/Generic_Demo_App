import { Component } from '@angular/core';
import { CardComponent } from '../../Components/card/card.component';
import { Ng2ImgMaxService } from 'ng2-img-max';

@Component({
  selector: 'app-card-settings',
  templateUrl: './card-settings.component.html',
  styleUrls: ['./card-settings.component.css']
})
export class CardSettingsComponent {

  title: string;
  subtitle: string;
  content: string;
  avatar: string;

  selectedUploadOption: string;
  avatarName: string;

  cardComp: CardComponent;
  compObj: any;

  constructor(private ng2ImgMax: Ng2ImgMaxService) { }

  /**
   * Set attributes of card
   * @param comp    CardComponent
   * @param compObj BaseComponent
   */
  setAttributes(comp, compObj) {
    this.cardComp = comp;
    this.compObj = compObj;

    this.title = comp.title;
    this.subtitle = comp.subtitle;
    this.content = comp.content;
    this.avatar = comp.avatar ? (comp.avatar.startsWith("../../") ? "" : comp.avatar) : null;

    this.avatarName = comp.avatarName;
    this.selectedUploadOption = this.avatar ? (this.avatarName ? "imgUpload" : "imgUrl") : "imgUpload";
  }

  changeTitle(newTitle: string) {
    this.cardComp.title = newTitle;
    this.compObj.title = newTitle;
  }

  changeSubtitle(newSubtitle: string) {
    this.cardComp.subtitle = newSubtitle;
    this.compObj.subtitle = newSubtitle;
  }

  changeContent(newContent: string) {
    this.cardComp.content = newContent;
    this.compObj.content = newContent;
  }

  /**
   * Changes uploaded image to Base64 and adds it to component.
   * @param image File
   */
  uploadImage(image) {
    var file: File = image.target.files[0];
    this.cardComp.avatarName = file.name;
    this.compObj.avatarName = file.name;

    var myReader = new FileReader();

    //Resize image, so it uses less space in JSON.
    this.ng2ImgMax.resizeImage(file, 40, 40).subscribe(
      result => {
        let uploadedImage = new File([result], result.name);
        myReader.readAsDataURL(uploadedImage);
      }, error => {
        console.log('😢 Oh no!', error);
      }
    );

    myReader.onloadend = (e) => {
      this.cardComp.avatar = myReader.result;
      this.compObj.avatar = myReader.result;
    }

    this.avatarName = file.name;
  }

  /**
   * Adds imageUrl to component
   * @param url String
   */
  changeImageUrl(url) {
    this.avatar = url;

    this.cardComp.avatar = url;
    this.compObj.avatar = url;
  }

  /**
   * Changes upload option
   * @param uploadOption String
   */
  changeUploadOption(uploadOption) {
    this.selectedUploadOption = uploadOption;
  }

}
