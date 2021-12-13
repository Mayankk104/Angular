// import { HttpClientModule } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { Observable, of, Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { localUser } from '../../model/user.model'

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
    let component: NavbarComponent;
    let fixture: ComponentFixture<NavbarComponent>;

    @Injectable()
    class AuthServiceMock {
        user$: Observable<localUser> = new Observable();
    }

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NavbarComponent],
            providers: [
                {
                    provide: AuthService,
                    useClass: AuthServiceMock
                }
            ]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(NavbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('shold subcribe for user', fakeAsync(() => {
        const auth = TestBed.inject(AuthService);
        const spy = spyOn(auth.user$, 'subscribe').and.callThrough();

        component.ngOnInit();

        expect(spy).toHaveBeenCalled();
        expect(component.isLoggedIn).toBe(true);
    }));
});
