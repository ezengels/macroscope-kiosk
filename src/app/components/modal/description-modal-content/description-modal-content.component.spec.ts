import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
  MatDialogRef,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatIcon,
} from '@angular/material';
import { MockComponent } from 'ng-mocks';

import { DescriptionModalContentComponent } from './description-modal-content.component';

describe('DescriptionModalContentComponent', () => {
  let component: DescriptionModalContentComponent;
  let fixture: ComponentFixture<DescriptionModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        DescriptionModalContentComponent,
        MockComponent(MatIcon),
        MockComponent(MatExpansionPanel),
        MockComponent(MatExpansionPanelHeader)
      ],
      imports: [MatDialogModule],
      providers: [
        MatDialog,
        { provide : MatDialogRef, useValue : {} },
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});