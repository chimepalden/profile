import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideRouter } from '@angular/router';
// providerRouter([]) supplies the router for this shell test, but it does not test your actual route definitions.

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])]
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the main navigation links', () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const navigationLinks = Array.from(
      compiled.querySelectorAll('.navbar-nav .nav-link'),
    ).map((link) => link.textContent?.trim());
    expect(navigationLinks).toEqual([
      'HOME',
      'RESUME',
      'PROJECTS',
      'ABOUT',
      'CONTACT',
    ]);
  });
});
