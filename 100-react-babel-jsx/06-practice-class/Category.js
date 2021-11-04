class Category extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <li className="cat-link left valign-wrapper">
        <i className="material-icons">{this.props.data.icon}</i>
        {this.props.data.title}
      </li>
    );
  }
}
