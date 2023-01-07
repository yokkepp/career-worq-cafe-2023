const fadeTargets = document.querySelectorAll(".fadeIn");

const fadeOption = {
  root: null,
  rootMargin: "-20% 0px",
  threshold: [0],
};

// const slideOption = {
//   root: null,
//   rootMargin: "-20% 0px",
//   threshold: [0],
// };

const targets = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(targets, fadeOption);

// const slideObserver = new IntersectionObserver(targets, slideOption);

fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});
