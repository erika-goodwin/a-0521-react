function Card() {
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
            <img src='http://lorempixel.com/400/200/city' />
          </div>

          <div className='card-content'>
            <p>{title}</p>
            <p>Hello~</p>
          </div>

          <div className='card-action'>
            <a href='#'>$ {value}</a>
          </div>
        </div>
      </div>
    </div>
  )
}
