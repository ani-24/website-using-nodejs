// * Course
const courseDet = [
  {
    src: "h7Hloe6tQkw",
    title: "Pure Vanilla JavaScript projects",
    text: "In this series, we will create real-world projects using pure vanilla javascript.",
    link: "#",
    featured: true,
  },
  {
    src: "4gdPA0l00J0",
    title: "CSS hover effects",
    text: "In this series, we will create cool and awesome css hover effects.",
    link: "#",
    featured: true,
  },
  {
    src: "h7Hloe6tQkw",
    title: "Pure Vanilla JavaScript projects",
    text: "In this series, we will create real-world projects using pure vanilla javascript.",
    link: "#",
  },
  {
    src: "4gdPA0l00J0",
    title: "CSS hover effects",
    text: "In this series, we will create cool and awesome css hover effects.",
    link: "#",
  },
  {
    src: "60yWj96m_oc",
    title: "CSS hover effects",
    text: "In this series, we will create cool and awesome css hover effects.",
    link: "#",
  },
];

courseDet.forEach((el) => {
  if (el.featured !== true) {
    el.featured = false;
  }
});

export { courseDet };
