class Category extends React.Component {
    render() {
        // console.log(this.props)

        const navLinks = this.props.data.map((link, index) => {
            return(
                <li key={index} className="cat-link left valign-wrapper">
				    <i className="material-icons">{link.icon}</i>
                    {link.title}
			    </li>
            )
        })
        
        return (
            <div className="row">
                <ul className="cat-nav center-align">
                    {navLinks}
                </ul>
            </div>
        );
    }
}