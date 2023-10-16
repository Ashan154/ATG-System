import { ElementRef, Renderer2 } from '@angular/core';

export function scrollToSection(sectionId: string, headerHeight: number = 60) {
  const sectionElement = document.getElementById(sectionId);
  if (sectionElement) {
    const yOffset = sectionElement.getBoundingClientRect().top;
    const offset = yOffset - headerHeight;
    if (offset > 0) {
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }
}