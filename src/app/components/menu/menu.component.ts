declare var $: any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ativaMenu(e) {
    $('nav').toggleClass('ativo');
    e.preventDefault();
  }

  desativaMenu(e) {
    $('nav').removeClass('ativo');
    e.preventDefault();
  }

}
