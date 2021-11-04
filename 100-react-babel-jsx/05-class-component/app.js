
let cards = data.map((result, index) => {
    return (
        <Card key={index} data={result} />
    )
})


ReactDOM.render(
    <div className="row">
        {cards}
    </div>, 
    document.getElementById('root')
)