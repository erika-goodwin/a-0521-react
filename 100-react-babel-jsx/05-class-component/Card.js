class Card extends React.Component{
  constructor(){
    super()
  }

  render(){
    return (
      <div className='row'>
        <div className='col s2'>
          <div className='card hoverable small'>
            <div className='card-image'>
              <img src={this.props.data.image} />
            </div>
  
            <div className='card-content'>
              <p>{this.props.data.subject}</p>
              <p>{this.props.data.instructor}</p>
            </div>
  
            <div className='card-action'>
              <a href='#'>$50</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}