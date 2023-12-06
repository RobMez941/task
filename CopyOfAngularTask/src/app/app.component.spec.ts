import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { WorldBankApiService } from './world-bank-api.service';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent, WorldMapComponent],
      providers: [WorldBankApiService],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  describe('Initialization', () => {
    it('should create the app', () => {
      expect(app).toBeTruthy();
    });

    it(`should have the 'angularTask' title`, () => {
      expect(app.title).toEqual('angularTask');
    });
  });

  describe('DOM Rendering', () => {
    it('should render title', () => {
      fixture.detectChanges();
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('h1')?.textContent).toContain('Hello, angularTask');
    });
  });
});
