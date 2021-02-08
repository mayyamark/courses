import './App.css';
import styled, { css, keyframes, ThemeProvider } from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #0000cc;
  color: #0000cc;
  margin: 0 1em;
  padding: 0.25em 1em;

  ${props =>
    props.primary &&
    css`
      background: #0000cc;
      color: white;
    `};
`;

const LightBlueButton = styled(Button)`
  color: #33ccff;
  border-color: #33ccff;
`;

const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()} />

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || "#6600cc"};
  background:  #ccf1ff;
  border: none;
  border-radius: 3px;
`;

const Input2 = styled.input.attrs(props => ({
  // we can define static props
  type: "text",

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: palevioletred;
  font-size: 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;

  /* here we use the dynamically computed prop */
  margin: ${props => props.size};
  padding: ${props => props.size};
`;

const PasswordInput = styled(Input2).attrs({
  type: "password",
})`
  // similarly, border will override Input's border
  border: 2px solid aqua;
`;

const Thing = styled.div.attrs((/* props */) => ({ tabIndex: 0 }))`
  color: blue;

  &:hover {
    color: red; // <Thing> when hovered
  }

  & ~ & {
    background: tomato; // <Thing> as a sibling of <Thing>, but maybe not directly next to it
  }

  & + & {
    background: lime; // <Thing> next to <Thing>
  }

  &.something {
    background: orange; // <Thing> tagged with an additional CSS class ".something"
  }

  .something-else & {
    border: 1px solid; // <Thing> inside another element labeled ".something-else"
  }
`;

// const GlobalStyle = createGlobalStyle`
//   div${Thing} {
//     color: red;
//   }
// `


// Create the keyframes
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

// Define our button, but with the use of props.theme this time
const Button2 = styled.button`
  color: ${props => props.theme.fg};
  border: 2px solid ${props => props.theme.fg};
  background: ${props => props.theme.bg};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
`;

// Define our `fg` and `bg` on the theme
const theme = {
  fg: "pink",
  bg: "purple"
};

// This theme swaps `fg` and `bg`
const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

const App = () => {
  return (
    <>
    <div>
      <h1>Buttons and Links</h1>
      <Button>Hello</Button>
      <Button primary>Hello</Button>
      <LightBlueButton>Hello</LightBlueButton>
      <Button as="a" href="/">Link with Button styles</Button>
      <ReversedButton>Reversed Button</ReversedButton>
      <hr />
    </div>
    <div>
      <h1>Inputs</h1>
      <Input defaultValue="@probablyup" type="text" />
      <Input defaultValue="@geelen" type="text" inputColor="#00394d" />
      <Input2 placeholder="A small text input" />
      <Input2 placeholder="A bigger text input" size="2em" />
      <PasswordInput placeholder="A bigger password input" size="2em" />
      <hr />
    </div>
    <div>
      <h1>Pseudoelements, pseudoselectors, and nesting</h1>
      <Thing>Hello world!</Thing>
      <Thing>How ya doing?</Thing>
      <Thing className="something">The sun is shining...</Thing>
      <div>Pretty nice day today.</div>
      <Thing>Don't you think?</Thing>
      <div className="something-else">
        <Thing>Splendid.</Thing>
      </div>
      <hr />
    </div>
    <div>
      <h1>Animations</h1>
      <Rotate>&lt; 💅🏾 &gt;</Rotate>
      <hr />
    </div>
    <div>
      <ThemeProvider theme={theme}>
        <div>
          <Button2>Default Theme</Button2>

          <ThemeProvider theme={invertTheme}>
            <Button2>Inverted Theme</Button2>
          </ThemeProvider>
        </div>
      </ThemeProvider>
      <hr />
    </div>
    </>
  );
}

export default App;
