import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Page } from './Objects/PageObject';
import { MatButtonModule, MatDialogModule, MatToolbarModule, MatTabsModule, MatInputModule, MatTooltipModule, MatSelectModule, MatSidenavModule, MatListModule, MatIconModule, MatGridListModule, MatFormFieldModule } from '@angular/material';
import { Configuration } from './configuration';
import { ServerconnectionService } from './serverconnection.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseComponentComponent } from './base-component/base-component.component';
import { NewPageComponent } from './new-page/new-page.component';
import { PageComponent } from './page/page.component';
import { TextboxComponent } from './Components/textbox/textbox.component';
import { NewApplicationComponent } from './new-application/new-application.component';
import { MenuSettingsComponent } from './SettingComponents/menu-settings/menu-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ApplicationComponent } from './application/application.component';
import { BrowserModule } from '@angular/platform-browser';
describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  @NgModule({
    declarations: [AppComponent,
      BaseComponentComponent,
      NewPageComponent,
      ApplicationComponent,
      PageComponent,
      TextboxComponent,
      NewApplicationComponent,
      MenuSettingsComponent
    ],
    entryComponents: [
      AppComponent,
      BaseComponentComponent, NewPageComponent, PageComponent, TextboxComponent, NewApplicationComponent, MenuSettingsComponent
    ], 
    providers: [Configuration, ServerconnectionService],
    imports: [
      BrowserModule,
      MatDialogModule,
      MatTabsModule,
      MatInputModule,
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule,
      MatTooltipModule,
      MatSelectModule,
      MatIconModule,
      MatListModule,
      MatGridListModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      BrowserAnimationsModule,
      HttpClientModule
    ]
  })
  class AppModule {}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppModule
      ],
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(AppComponent);
      app = fixture.componentInstance;
    });
  }));
  
  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    expect(app.title).toEqual('app');
  }));
});
