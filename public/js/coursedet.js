// * Course
const courseDet = [
  {
    src: "h7Hloe6tQkw",
    title: "Pure Vanilla JavaScript projects",
    text: "In this series, we will create real-world projects using pure vanilla javascript.",
    link: "#",
    featured: true,
  },
];

courseDet.forEach((el) => {
  if (el.featured !== true) {
    el.featured = false;
  }
});

export { courseDet };
