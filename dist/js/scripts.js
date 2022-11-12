const options = {
  root: null,
  rootMargin: '0px',
  threshold: 1
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, options);

observer.observe(document.querySelector('#project-1 picture'));
observer.observe(document.querySelector('#project-2 picture'));
observer.observe(document.querySelector('#project-3 picture'));
observer.observe(document.querySelector('#project-4 picture'));
observer.observe(document.querySelector('#project-5 picture'));
observer.observe(document.querySelector('#project-6 picture'));
