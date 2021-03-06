class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `#Heading
=======

##Sub-heading
-----------


View the [source of this content](http://github.github.com/github-flavored-markdown/sample_content.html).

### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~ .

'Shopping list:'

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears
  
  > Block Quotes!
  
<pre><code>
This is code block.
</code></pre> 

\`\`\`
code
block
\`\`\`
  ![React Logo w/ Text](https://goo.gl/Umyytc)` };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(event) {
    this.setState({ input: event.target.value });
  }


  render() {
    const text = this.state.input;

    marked.setOptions({
      breaks: true });


    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("h1", null, "React Markdown Previewer"), /*#__PURE__*/
      React.createElement("form", null, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", rows: "30", value: this.state.input, onChange: this.handleChange }), "          "), /*#__PURE__*/

      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.input) } })));


  }}
;

ReactDOM.render( /*#__PURE__*/
React.createElement(Main, null),
document.getElementById("root"));