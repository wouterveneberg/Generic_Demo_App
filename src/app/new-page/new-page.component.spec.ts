import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPageComponent } from './new-page.component';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule, MatInputModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatTooltipModule, MatIconModule, MatSelectModule, MatListModule, MatFormFieldModule, MatDialog } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('NewPageComponent', () => {
  let component: NewPageComponent;
  let fixture: ComponentFixture<NewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPageComponent ],
      imports: [
        BrowserModule,
        MatDialogModule,
        MatInputModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTooltipModule,
        MatSelectModule,
        MatIconModule,
        MatListModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        BrowserAnimationsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
