import styled from 'styled-components';

const StyledSelectorsWrapper = styled.div`
  // Wildcard selector
  // - matches all elements
  // - has lowest specificity
  * {
    font-family: sans-serif;
  }

  // Descendent selector 
  // - only cascades to children which are direct descendants
  > * {
    border: 1px solid red;
  }
  > p {
    font-size: 20px;
    font-weight: bold;
  }
  
  // Class selector
  // - higher specificity than other selectors, but less than ID
  // - should be used predomoninantly, as this keeps styles readable
  //   and specificity sensible to override.
  p.fancy {
    font-size: 1.2em;
  }
  p.fancy:first-letter {
    // This style block targets the :first-letter pseudo-class
    // Other examples of pseudo-classes are :checked :active :focus :disabled
    font-style: italic;
    font-weight: bold;
    font-size: 2em;
  }

  // Attribute selector
  // - versatile
  // - low-specificy
  // - can style based on any attribute on the element
  // - overuse risks making things difficult to reason about
  [title]::before {
    display: block;

    // This is a useful trick to know!
    // You can render the content of attributes directly
    // within the ::before and ::after pseudo-elements
    // using the following:
    content: attr(title); // title could be any attr, including data-attributes
  }

  // Shuffle the below blocks around if you want to see how source-order
  // meaningfully changes the way your styles get applied.
  [title] {
    color: gold;
  }

  [title^="HAMMER"] {
    // "Attribute starts with HAMMER"
    // Matches HAMMER and HAMMERTIME
    color: pink;
  }

  [title$="TIME"] {
    // "Attribute ends with TIME"
    // Matches TIME and HAMMERTIME
    color: purple;
  }

  [title*="MERT"] {
    // "Attribute contains MERT"
    // Matches HAMMERTIME
    color: blue;
  }


  // Sibling selector
  // - tip: useful if you want to target everything that isn't 
  //   the first or last child leaf node
  ul li + li {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 3px solid green;
  }

  // The above is equivalent to:
  ul li {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 3px solid green;
  }
  ul li:first-child {
    margin-top: unset;
    padding-top: unset;
    border-top: unset;
  }
  // Much more code to maintain, right?


  // Negation selector
  // - has 0 specificity
  // - can target any type of selector to exclude from a rule
  ul > *:not(li) {
    // Any direct descendant that isn't an li will get this rule.
    // Try removing the > and see how this breaks.
    background: red;
  }

  // Targets all paragraphs which are neither fancy, or boring, and
  // makes them exciting and Web 2.0
  p:not(.boring):not(.fancy) {
    font-family: "Comic Sans MS", "Comic Sans", cursive;
  }


  // IDs
  // - useful if you want to style something in a way that is almost
  //   impossible to override, without doing some nasty things
  #foobar {
    direction: rtl;
    transform: rotateY(180deg);
    font-size: 30px;
  }

  // How much specificity would it take to override this color?
  // Answer: At minimum p[id][id][id][id]
  p[id][id][id] {
    color: red;
  }

  // NOTE: Creates a selector chain consisting of [id] 5000 times.
  //        Notice how the color is overriden, but the other attributes
  //        are not?
  //        This is because IDs are impossible to beat without using
  //        another ID, or !important. So, avoid at all costs.
  p[id]${new Array(5000).fill('[id]', 0).toString().replace(/,/g, '')} {
    direction: unset;
    transform: unset;
    font-size: unset;
    color: green;
  }

  // This unsets the attributes, because specificity matches
  // the original rule, and source order wins.
  #foobar {
    direction: unset;
    transform: unset;
    font-size: unset;
  }

  // This unsets because of the !important exception.
  // This is also the only way to beat it without worrying about
  // source-order of the rules. However, from here on out
  // without using !important, you have no hope of changing it.
  p[id] {
    direction: unset !important;
    transform: unset !important;
    font-size: unset !important;
  }


  // Nesting selectors
  // - pros: less repetition, used carefully improves readability
  // - cons: overuse can explode selector complexity, and ruin readability
  ul {
    li {
      :focus-within {
        // Click inside the input, and see this rule get applied!
        background: green;
      }
      
      :empty {
        // You can also target empty elements. 
        ::before {
          display: block;
          content: 'EMPTY ELEMENT!';
          color: red;
        }
      }

      // Oh jeez, what's on the left hand side of this plus again?
      // Getting kinda tricky to reason about now, isn't it?
      + li {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 3px solid green;
      }
    }

    > *:not(li) {
      background: red;
    }
  }


  // Here we have an example of SUIT CSS, a flavour of BEM
  // which involves a lot of repetition in order to keep
  // specificity as flat as possible, and ensure class names
  // do not collide through the cascade.
  .MyAwesomeComponent {
    display: grid;
    grid-template-areas: 
      "header header header"
      "main main aside"
      "footer footer footer";
    grid-template-columns: 1fr;
  }
  .MyAwesomeComponent > * {
    border: 1px solid blue;
  }
  .MyAwesomeComponent-header {
    grid-area: header;
    padding: 20px;
    background: white;
    color: black;
  }
  .MyAwesomeComponent-header--big {
    font-size: 48px;
  }
  .MyAwesomeComponent-main {
    grid-area: main;
  }
  .MyAwesomeComponent-aside {
    grid-area: aside;
  }
  .MyAwesomeComponent-footer {
    grid-area: footer;
  }
  // Seems like a good candidate for nesting the selectors!
  .MyAwesomeComponent {
    display: grid;
    grid-template-areas: 
      "header header header"
      "main main aside"
      "footer footer footer";
    grid-template-columns: 1fr;
    
    > * {
      border: 1px solid blue;
    }

    // tip: & will concatenate the class name
    //      of the current scope.
    //      This becomes .MyAwesomeComponent-header
    &-header {
      grid-area: header;

      // and this becomes .MyAwesomeComponent-header--big
      &--big {
        font-size: 48px;
      }
    }
    &-main {
      grid-area: main;
    }
    &-aside {
      grid-area: aside;
    }
    &-footer {
      grid-area: footer;
    }
  }
  
  // CSS Custom Attributes
  .MyAwesomeComponent {
    // Here we define a custom attribute called --gap.
    // We're destructuring the prop, and assigning it, just like
    // any other example of this being done in styled-components.
    --gap: ${({gap}) => `${gap}px`};
    
    // And then we reuse it like this.
    grid-gap: var(--gap);
    
    > * {
      // Behold! It works with calc!
      padding: calc(var(--gap) * 2);
    }
  }

  .MyAwesomeComponent-main {
      > * + * {
        // And it is accessible to all nested children within the DOM!
        margin-top: var(--gap);
      }
  }
`;

export default StyledSelectorsWrapper;