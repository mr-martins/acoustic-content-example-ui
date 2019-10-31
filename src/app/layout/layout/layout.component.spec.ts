import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutComponent } from './layout.component';
import { MockComponents } from 'ng-mocks';
import { MatToolbar } from '@angular/material';
import { RouterOutlet } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('LayoutComponent', () => {
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        LayoutComponent,
        MockComponents(
          RouterOutlet,
          MatToolbar
        ),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
  });

  it('should display app name', () => {
    // when
    fixture.detectChanges();

    // then
    expect(fixture.debugElement.query(By.css('h1')).nativeElement.innerText).toEqual('The Acoustic Content');
  });
});