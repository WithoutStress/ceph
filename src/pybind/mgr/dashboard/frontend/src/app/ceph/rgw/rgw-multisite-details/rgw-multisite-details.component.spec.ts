import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TreeModule } from '@circlon/angular-tree-component';
import { SharedModule } from '~/app/shared/shared.module';

import { RgwMultisiteDetailsComponent } from './rgw-multisite-details.component';

describe('RgwMultisiteDetailsComponent', () => {
  let component: RgwMultisiteDetailsComponent;
  let fixture: ComponentFixture<RgwMultisiteDetailsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RgwMultisiteDetailsComponent],
      imports: [HttpClientTestingModule, TreeModule, SharedModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RgwMultisiteDetailsComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display right title', () => {
    const span = debugElement.nativeElement.querySelector('.card-header');
    expect(span.textContent).toBe('Multi-site Topology viewer');
  });
});
