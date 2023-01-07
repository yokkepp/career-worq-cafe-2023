const fadeTargets = document.querySelectorAll(".fadeIn");

const fadeOption = {
  root: null,
  rootMargin: "-20% 0px",
  threshold: [0],
};

const targets = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target);
    }
  });
};

const fadeObserver = new IntersectionObserver(targets, fadeOption);

fadeTargets.forEach((target) => {
  fadeObserver.observe(target);
});
