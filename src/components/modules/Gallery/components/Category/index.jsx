import React from 'react';
import PT from 'prop-types';

import { CategoryButton } from './styled';

const Category = ({ category, active, setCategory, children }) => (
  <CategoryButton
    onClick={() => setCategory(category)}
    active={category === active}
  >
    {children}
  </CategoryButton>
);

Category.propTypes = {
  category: PT.oneOf(['image', 'video', 'audio', '*']).isRequired,
  active: PT.oneOf(['image', 'video', 'audio', '*']).isRequired,
  setCategory: PT.func.isRequired,
  children: PT.oneOfType([
    PT.arrayOf(PT.node),
    PT.node,
  ]),
};

export default Category;
