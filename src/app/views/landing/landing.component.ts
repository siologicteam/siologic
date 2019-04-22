import { Component, OnInit } from '@angular/core';

declare let jQuery: any;
declare let Hammer: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  public preloader = true;

  constructor() { }

  ngOnInit() {

    // setTimeout(() => {
    //   jQuery('.side-nav li, .outer-nav li').click(function() {
    //
    //     if (!(jQuery(this).hasClass('is-active'))) {
    //
    //       const $this = jQuery(this);
    //       const curActive = $this.parent().find('.is-active');
    //       const curPos = $this.parent().children().index(curActive);
    //       const nextPos = $this.parent().children().index($this);
    //       const lastItem = jQuery(this).parent().children().length - 1;
    //
    //       updateNavs(nextPos);
    //       updateContent(curPos, nextPos, lastItem);
    //
    //     }
    //
    //   });
    //
    //   jQuery('.cta').click(function() {
    //
    //     const curActive = jQuery('.side-nav').find('.is-active');
    //     const curPos = jQuery('.side-nav').children().index(curActive);
    //     const lastItem = jQuery('.side-nav').children().length - 1;
    //     const nextPos = lastItem;
    //
    //     updateNavs(lastItem);
    //     updateContent(curPos, nextPos, lastItem);
    //
    //   });
    //
    //   // swipe support for touch devices
    //   const targetElement = document.getElementById('viewport');
    //   const mc = new Hammer(targetElement);
    //   mc.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
    //   mc.on('swipeup swipedown', function(e) {
    //
    //     updateHelper(e);
    //
    //   });
    //
    //   jQuery(document).keyup(function(e) {
    //
    //     if (!(jQuery('.outer-nav').hasClass('is-vis'))) {
    //       e.preventDefault();
    //       updateHelper(e);
    //     }
    //
    //   });
    //
    //   // determine scroll, swipe, and arrow key direction
    //   function updateHelper(param) {
    //
    //     const curActive = jQuery('.side-nav').find('.is-active');
    //     const curPos = jQuery('.side-nav').children().index(curActive);
    //     const lastItem = jQuery('.side-nav').children().length - 1;
    //     let nextPos = 0;
    //
    //     if (param.type === 'swipeup' || param.keyCode === 40 || param > 0) {
    //       if (curPos !== lastItem) {
    //         nextPos = curPos + 1;
    //         updateNavs(nextPos);
    //         updateContent(curPos, nextPos, lastItem);
    //       } else {
    //         updateNavs(nextPos);
    //         updateContent(curPos, nextPos, lastItem);
    //       }
    //     } else if (param.type === 'swipedown' || param.keyCode === 38 || param < 0) {
    //       if (curPos !== 0) {
    //         nextPos = curPos - 1;
    //         updateNavs(nextPos);
    //         updateContent(curPos, nextPos, lastItem);
    //       } else {
    //         nextPos = lastItem;
    //         updateNavs(nextPos);
    //         updateContent(curPos, nextPos, lastItem);
    //       }
    //     }
    //
    //   }
    //
    //   // sync side and outer navigations
    //   function updateNavs(nextPos) {
    //
    //     jQuery('.side-nav, .outer-nav').children().removeClass('is-active');
    //     jQuery('.side-nav').children().eq(nextPos).addClass('is-active');
    //     jQuery('.outer-nav').children().eq(nextPos).addClass('is-active');
    //
    //   }
    //
    //   // update main content area
    //   function updateContent(curPos, nextPos, lastItem) {
    //
    //     jQuery('.main-content').children().removeClass('section--is-active');
    //     jQuery('.main-content').children().eq(nextPos).addClass('section--is-active');
    //     jQuery('.main-content .section').children().removeClass('section--next section--prev');
    //
    //     if (curPos === lastItem && nextPos === 0 || curPos === 0 && nextPos === lastItem) {
    //       jQuery('.main-content .section').children().removeClass('section--next section--prev');
    //     } else if (curPos < nextPos) {
    //       jQuery('.main-content').children().eq(curPos).children().addClass('section--next');
    //     } else {
    //       jQuery('.main-content').children().eq(curPos).children().addClass('section--prev');
    //     }
    //
    //     if (nextPos !== 0 && nextPos !== lastItem) {
    //       jQuery('.header--cta').addClass('is-active');
    //     } else {
    //       jQuery('.header--cta').removeClass('is-active');
    //     }
    //
    //   }
    //
    //   this.outerNav();
    //   this.workSlider();
    //   this.transitionLabels();
    // }, 500);
    //
    // setTimeout(() => {
    //   this.preloader = false;
    // }, 3000);
  }

  public outerNav() {

    jQuery('.header--nav-toggle').click(function() {

      jQuery('.perspective').addClass('perspective--modalview');
      setTimeout(function() {
        jQuery('.perspective').addClass('effect-rotate-left--animate');
      }, 100);
      jQuery('.outer-nav, .outer-nav li, .outer-nav--return').addClass('is-vis');

    });

    jQuery('.outer-nav--return, .outer-nav li').click(function() {

      jQuery('.perspective').removeClass('effect-rotate-left--animate');
      setTimeout(function() {
        jQuery('.perspective').removeClass('perspective--modalview');
      }, 400);
      jQuery('.outer-nav, .outer-nav li, .outer-nav--return').removeClass('is-vis');

    });

  }

  public transitionLabels() {

    jQuery('.work-request--information input').focusout(function() {

      const textVal = jQuery(this).val();

      if (textVal === '') {
        jQuery(this).removeClass('has-value');
      } else {
        jQuery(this).addClass('has-value');
      }

      // correct mobile device window position
      window.scrollTo(0, 0);

    });
  }

  public workSlider() {

    jQuery('.slider--prev, .slider--next').click(function() {

      const $this = jQuery(this);
      const curLeft = jQuery('.slider').find('.slider--item-left');
      const curLeftPos = jQuery('.slider').children().index(curLeft);
      const curCenter = jQuery('.slider').find('.slider--item-center');
      const curCenterPos = jQuery('.slider').children().index(curCenter);
      const curRight = jQuery('.slider').find('.slider--item-right');
      const curRightPos = jQuery('.slider').children().index(curRight);
      const totalWorks = jQuery('.slider').children().length;
      const $left = jQuery('.slider--item-left');
      const $center = jQuery('.slider--item-center');
      const $right = jQuery('.slider--item-right');
      const $item = jQuery('.slider--item');

      jQuery('.slider').animate({ opacity : 0 }, 400);

      setTimeout(function() {

        if ($this.hasClass('slider--next')) {
          if (curLeftPos < totalWorks - 1 && curCenterPos < totalWorks - 1 && curRightPos < totalWorks - 1) {
            $left.removeClass('slider--item-left').next().addClass('slider--item-left');
            $center.removeClass('slider--item-center').next().addClass('slider--item-center');
            $right.removeClass('slider--item-right').next().addClass('slider--item-right');
          } else {
            if (curLeftPos === totalWorks - 1) {
              $item.removeClass('slider--item-left').first().addClass('slider--item-left');
              $center.removeClass('slider--item-center').next().addClass('slider--item-center');
              $right.removeClass('slider--item-right').next().addClass('slider--item-right');
            } else if (curCenterPos === totalWorks - 1) {
              $left.removeClass('slider--item-left').next().addClass('slider--item-left');
              $item.removeClass('slider--item-center').first().addClass('slider--item-center');
              $right.removeClass('slider--item-right').next().addClass('slider--item-right');
            } else {
              $left.removeClass('slider--item-left').next().addClass('slider--item-left');
              $center.removeClass('slider--item-center').next().addClass('slider--item-center');
              $item.removeClass('slider--item-right').first().addClass('slider--item-right');
            }
          }
        } else {
          if (curLeftPos !== 0 && curCenterPos !== 0 && curRightPos !== 0) {
            $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
            $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
            $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
          } else {
            if (curLeftPos === 0) {
              $item.removeClass('slider--item-left').last().addClass('slider--item-left');
              $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
              $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
            } else if (curCenterPos === 0) {
              $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
              $item.removeClass('slider--item-center').last().addClass('slider--item-center');
              $right.removeClass('slider--item-right').prev().addClass('slider--item-right');
            } else {
              $left.removeClass('slider--item-left').prev().addClass('slider--item-left');
              $center.removeClass('slider--item-center').prev().addClass('slider--item-center');
              $item.removeClass('slider--item-right').last().addClass('slider--item-right');
            }
          }
        }

      }, 400);

      jQuery('.slider').animate({ opacity : 1 }, 400);

    });

  }

}
