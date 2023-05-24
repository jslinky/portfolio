import { ScrollbarEvents } from 'swiper/types';
import type { ISlidingElConfig } from '../types/scrollHeader';
 
export function applySlidingAnimations(config: ISlidingElConfig): void {
    if (!config.value) return;

  const { scrollEl } = config
  const scrollElRef = document.querySelector(scrollEl) as HTMLElement || window

  let lastScrollTop: number = 0;
  let scrollingDown: boolean = false;

  const elements = config.elements.map((selector, index) => {
    const element: HTMLElement | null = document.querySelector<HTMLElement>(selector);
    if (!element) return null;

    const animation: Animation = element.animate(config.keyframes[index], config.animationOptions);
    animation.pause();
    return { element, animation };
  }).filter(el => el !== null) as { element: HTMLElement; animation: Animation }[];

  scrollElRef.addEventListener("scroll", function (e: Event) {
    // let scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
    let scrollTop: number = window.pageYOffset || e.target.scrollTop;
    if (scrollTop > lastScrollTop && !scrollingDown) {
      // Scrolling down
      scrollingDown = true;
      elements.forEach(({ animation }) => {
        animation.playbackRate = 1;
        animation.play();
      });
    } else if (scrollTop <= lastScrollTop && scrollingDown) {
      // Scrolling up
      scrollingDown = false;
      elements.forEach(({ animation }) => {
        animation.playbackRate = -1;
        animation.play();
      });
    }
    lastScrollTop = scrollTop;
  });

  // Reset animation when it finishes playing in reverse
  elements.forEach(({ animation }) => {
    animation.onfinish = function () {
      if (animation.playbackRate === -1) {
        animation.pause();
      }
    };
  });
}