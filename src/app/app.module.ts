import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule, MatFormFieldModule, MatSliderModule, MatTooltipModule, MatSelectModule, MatInputModule, MatButtonModule, MatListModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatTabsModule, MatGridListModule, MatSnackBarModule, MatButtonToggleModule, MatCardModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule, AbstractControl, AbstractControlDirective } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MccColorPickerModule } from 'material-community-components'

import { AppComponent } from './app.component';
import { BaseComponentComponent } from './base-component/base-component.component';
import { Configuration } from './configuration';
import { NewPageComponent } from './new-page/new-page.component';
import { ApplicationComponent } from './application/application.component';
import { PageComponent } from './page/page.component';
import { TextboxComponent } from './Components/textbox/textbox.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { ServerconnectionService } from './serverconnection.service';
import { HttpClientModule } from '@angular/common/http';
import { BottomBarModule } from 'bottombar-component';
import { MenuSettingsComponent } from './SettingComponents/menu-settings/menu-settings.component';
import { UniqueNameValidator } from './Validators/UniqueNameValidator';
import { ComponentSettingsComponent } from './SettingComponents/component-settings/component-settings.component';
import { ButtonComponent } from './Components/button/button.component';
import { PageSettingsComponent } from './SettingComponents/page-settings/page-settings.component';
import { SliderComponent } from './Components/slider/slider.component';
import { SliderSettingsComponent } from './SettingComponents/slider-settings/slider-settings.component';
import { ImageComponent } from './Components/image/image.component';
import { ImageSettingsComponent } from './SettingComponents/image-settings/image-settings.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeaderSettingsComponent } from './SettingComponents/header-settings/header-settings.component';
import { DropdownComponent } from './Components/dropdown/dropdown.component';
import { DropdownSettingsComponent } from './SettingComponents/dropdown-settings/dropdown-settings.component';
import { CardComponent } from './Components/card/card.component';
import { CardSettingsComponent } from './SettingComponents/card-settings/card-settings.component';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { RemoveComponent } from './remove/remove.component';

export const appRoutes: Routes = [
  { path: 'test1', component: AppComponent },
  { path: 'test2', component: PageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    BaseComponentComponent,
    NewPageComponent,
    ApplicationComponent,
    PageComponent,
    TextboxComponent,
    NewApplicationComponent,
    MenuSettingsComponent,
    ComponentSettingsComponent,
    UniqueNameValidator,
    ComponentSettingsComponent,
    PageSettingsComponent,
    SliderSettingsComponent,
    ImageComponent,
    ImageSettingsComponent,
    ButtonComponent,
    SliderComponent,
    PageSettingsComponent,
    SliderComponent,
    SliderSettingsComponent,
    ImageComponent,
    ImageSettingsComponent,
    HeaderComponent,
    HeaderSettingsComponent,
    DropdownComponent,
    DropdownSettingsComponent,
    CardComponent,
    CardSettingsComponent,
    RemoveComponent
  ],
  imports: [
    BrowserModule,
    Ng2ImgMaxModule,
    MatDialogModule,
    MatTabsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSliderModule,
    MatSidenavModule,
    MatTooltipModule,
    MatCardModule,
    MatSnackBarModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MccColorPickerModule.forRoot({
      empty_color: '#000'
    }),
    HttpClientModule,
    BottomBarModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [Configuration, ServerconnectionService],
  bootstrap: [AppComponent],
  entryComponents:[BaseComponentComponent, ComponentSettingsComponent, SliderSettingsComponent, PageSettingsComponent, NewPageComponent, PageComponent, TextboxComponent, ImageComponent, ImageSettingsComponent, ButtonComponent, SliderComponent, NewApplicationComponent, HeaderComponent, HeaderSettingsComponent, MenuSettingsComponent, DropdownComponent, DropdownSettingsComponent, CardComponent, CardSettingsComponent]
})
export class AppModule { }
