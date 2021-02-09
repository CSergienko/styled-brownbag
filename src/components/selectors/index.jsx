import React from 'react';
import StyledSelectorsWrapper from './styles';

export const Selectors = () => {
  
  return (
    <StyledSelectorsWrapper gap={10}>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      <div className="box">
        <p className="fancy">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
        <p
          className="boring"
          title="HAMMERTIME"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p
          title="TIME"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p
          title="HAMMER"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p
          title="This is a title attribute, which can be added to any element, and which screen readers rely on"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing.
        </p>
        <p id="foobar" className="fizz-buzz-fizzbuzz">Lorem ipsum dolor sit amet, consectetur adipiscing.</p>
      </div>
      <ul>
        <li>
          One
        </li>
        <li>
          Two 
        </li>
        <li>
          Three
        </li>
        <p>This paragraph is nested poorly.</p>
        <li>
          <input />
        </li>
        <li></li>
        <li>
          <p>This paragraph is wrapped in a list item.</p>
        </li>
      </ul>

      <section className="MyAwesomeComponent" style={{marginTop: 100}}>
        <header className="MyAwesomeComponent-header MyAwesomeComponent-header--big">
          <h1>This is the header part of the component.</h1>
        </header>
        <main className="MyAwesomeComponent-main">
          <p>This is the main part of the component.</p>
          <p>This is the main part of the component.</p>
          <p>This is the main part of the component.</p>
          <p>This is the main part of the component.</p>
        </main>
        <aside className="MyAwesomeComponent-aside">
          <p>This is the aside part of the component.</p>
        </aside>
        <footer className="MyAwesomeComponent-footer">
          <p>This is the footer part of the component.</p>
        </footer>
      </section>
    </StyledSelectorsWrapper>
  )
  
}

export default Selectors;