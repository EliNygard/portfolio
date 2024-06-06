export function scrollToProjects() {
  const section = document.getElementById("projects-section");
  if (section) {
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  } else {
    window.scrollTo(0, 0);
  }
}
