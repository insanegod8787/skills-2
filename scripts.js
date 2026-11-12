//!
//! Personal Portfolio - Interactivity
//! Following IMPPECCABLE design system
//!

(() => {
  'use strict';

  // Reduced motion check
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  // Dice state
  let lastRoll = 1;
  let isRolling = false;

  // Dice rolling functionality
  const initDice = () => {
    // Initial display
    updateDiceFace(lastRoll);

    // Click handler
    const diceEl = document.querySelector('.dice-floating');
    if (diceEl) {
      diceEl.addEventListener('click', handleDiceClick);
      // Keyboard accessibility
      diceEl.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleDiceClick();
        }
      });
    }
  };

  const handleDiceClick = () => {
    // Prevent double-roll
    if (isRolling) return;

    // If reduced motion, just instantly update without animation
    if (prefersReducedMotion.matches) {
      lastRoll = Math.floor(Math.random() * 6) + 1;
      updateDiceFace(lastRoll);
      return;
    }

    // Start rolling animation
    isRolling = true;

    // Add rolling class to trigger CSS animation
    const diceEl = document.querySelector('.dice-floating');
    if (diceEl) {
      diceEl.classList.add('rolling');
    }

    // Set timeout to remove rolling class and show final result after animation duration
    // 500ms animation duration + 100ms delay for final face to register
    setTimeout(() => {
      isRolling = false;

      // Remove rolling class after animation completes
      const diceEl = document.querySelector('.dice-floating');
      if (diceEl) {
        diceEl.classList.remove('rolling');
      }

      // Show final random result
      lastRoll = Math.floor(Math.random() * 6) + 1;
      updateDiceFace(lastRoll);
    }, 600); // Slightly longer than 500ms CSS transition
  };

  const updateDiceFace = (number) => {
    const numberEl = document.getElementById('diceNumber');
    if (numberEl) {
      numberEl.textContent = number;
    }
  };

  // Works filter functionality
  const initWorksFilter = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    if (!filterBtns.length || !workCards.length) return;

    // Set initial active state
    filterBtns.forEach(btn => btn.classList.toggle('active', btn.dataset.filter === 'all'));

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        // Update active states
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        workCards.forEach(card => {
          const categories = card.dataset.categories?.split(',').map(c => c.trim().toLowerCase()) || [];

          if (filter === 'all' || categories.includes(filter)) {
            card.style.display = '';
            // Trigger reflow for animation
            card.offsetHeight;
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  };

  // Scroll reveal with reduced motion awareness
  const initScrollReveal = () => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    if (prefersReducedMotion.matches) {
      // Instant reveal in reduced motion mode
      sections.forEach(section => {
        section.classList.add('visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      observer.observe(section);
    });
  };

  // Smooth anchor scrolling for internal links
  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  };

  // Initialize all components
  initDice();
  initWorksFilter();
  initScrollReveal();
  initSmoothScroll();

  // Console welcome message (optional)
  console.log('%c個人作品集載入完成', 'color: var(--accent); font-family: var(--font-display);');
})();