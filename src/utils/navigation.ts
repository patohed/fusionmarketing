/**
 * Utility functions for navigation and scrolling
 */

export const scrollToSection = (sectionId: string) => {
  const target = document.querySelector(sectionId);
  if (target) {
    target.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  scrollToSection(href);
};
