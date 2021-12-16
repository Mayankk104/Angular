import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  user: any = null;
  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
    this._auth.user$.subscribe((user) => {
      this.isLoggedIn = !!user;
      this.user = user?.user;
    })
  }

  logout() {
    this._auth.logout();
  }

}
