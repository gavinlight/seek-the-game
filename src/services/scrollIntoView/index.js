export default (selector) => {
  const scrollElem = document.querySelector(selector);
  if (scrollElem) {
    scrollElem.scrollIntoView({ behavior: 'smooth' });
  }
};
