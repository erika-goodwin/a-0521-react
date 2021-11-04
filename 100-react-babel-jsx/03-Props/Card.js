function Card(props) {
  console.log('props ======> ', props)
  const title = 'My First React'
  const value = 50
  function saleOn() {
    return true
  }

  return (
    <div className='row'>
      <div className='col s2'>
        <div className='card hoverable small'>
          <div className='card-image'>
            <img src={props.whatever} />
          </div>

          <div className='card-content'>
            <p>{props.title}</p>
            <p>{props.name}</p>
          </div>

          <div className='card-action'>
            <a href='#'>$ {value}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
