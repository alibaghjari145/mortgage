  
export const THEME_TYPE = {
    DARK: "DARK",
    LIGHT: "LIGHT",
  };
const Theme = {
  [THEME_TYPE.LIGHT]: {
    background: "#fafafa",
    text: "#rgba(0, 0, 0, 0.87)",
    lines: "#428bca",
    header:'#428bca'
  },
  [THEME_TYPE.DARK]: {
    background: "#303030",
    text: "#fff",
    lines: "yellow",
    header:'##303030'
  },
};

const Styles = (theme) => `
body {
    background-color: ${Theme[theme].background};
    color: ${Theme[theme].text};
}
input{
    color:black
}
.navbar{
    background-color: ${Theme[theme].background};
}
.navbar-brand {
    color: ${Theme[theme].text}
}
.line{
    stroke: ${Theme[theme].lines}
}
tbody,
tfoot tr:first-child {
  border-top:  ${Theme[theme].lines} solid 1px;
}
.money{
    color: ${Theme[theme].lines}
}
`;

export default Styles;