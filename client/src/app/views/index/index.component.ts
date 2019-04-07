import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  public isSidebarActive:boolean;
  public isScrollToTopFadeIn:boolean;
  constructor(@Inject(Document) private document:Document) { }

  ngOnInit() {
    this.document.onscroll = this.onDocumentScroll;
  }

  onDocumentScroll(){
    var scrollDistance = this.document.body.scrollTop;
    this.isScrollToTopFadeIn = scrollDistance > 100;
    // if (scrollDistance > 100) {
    //   $('.scroll-to-top').fadeIn();
    // } else {
    //   $('.scroll-to-top').fadeOut();
    // }
  }

  toggleMenu(event:any) {
    event.preventDefault();
    this.isSidebarActive = !this.isSidebarActive;
    //TODO;
    // $(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
  }

  onSidebarClick(event:any) {
    if(event.target.nodeName === 'a'){
      this.isSidebarActive = false;
      //TODO;
      //$(".menu-toggle > .fa-bars, .menu-toggle > .fa-times").toggleClass("fa-bars fa-times");
    }
  }

    // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([routerLink=""])').click(function() {
  //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //       var target = $(this.hash);
  //       target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //       if (target.length) {
  //         $('html, body').animate({
  //           scrollTop: target.offset().top
  //         }, 1000, "easeInOutExpo");
  //         return false;
  //       }
  //     }
  // });
}
