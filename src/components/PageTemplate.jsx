import React from 'react';

const PageTemplate = (props) => {
  return (
    <>
      <header>Header</header>
      {props.children}
      <footer>Footer</footer>
    </>
  );
};

export default PageTemplate;
