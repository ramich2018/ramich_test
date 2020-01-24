import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  array = ['/assets/images/1.jpg', '/assets/images/2.jpg', '/assets/images/3.jpg', '/assets/images/4.jpg'];
  effect = 'scrollx';

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.effect = 'fade';
    }, 100000);
  }

  apropos() {
    this.router.navigate(['/apropos']);
  }

  blank() {
    this.router.navigate(['/blank']);
  }

  login() {
    this.router.navigate(['/connexion']);
  }

  market() {


    this.router.navigate(['/market-all']);
  }


  connexion() {
    console.log('La vie est belle in god we trust');
    this.router.navigate(['/connexion']);
  }

}
