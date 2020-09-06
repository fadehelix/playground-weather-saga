// Snippet taken from
// https://stackoverflow.com/questions/55509875/how-to-query-by-text-string-which-contains-html-tags-using-react-testing-library/56859650#56859650

const withMarkup = (query) => (text) =>
  query((content, node) => {
    const hasText = (element) => element.textContent === text;
    const childrenDontHaveText = Array.from(node.children).every(
      (child) => !hasText(child)
    );
    return hasText(node) && childrenDontHaveText;
  });

export default withMarkup;
