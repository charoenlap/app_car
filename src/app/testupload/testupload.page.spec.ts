import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TestuploadPage } from './testupload.page';

describe('TestuploadPage', () => {
  let component: TestuploadPage;
  let fixture: ComponentFixture<TestuploadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestuploadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TestuploadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
