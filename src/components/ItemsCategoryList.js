const ItemCategoryList = (props)=>{
    const {itemCards} = props
    console.log(itemCards)
    return (
        <div>
            {itemCards.map(each=>(
                <div key={each.card.info.id} className="border-b-2 border-gray-400 p-2 text-left">
                    <h1 className="font-bold">{each.card.info.name}</h1>
                    <h3 className="font-bold">{(each.card.info.price?each.card.info.price:each.card.info.defaultPrice)/100+" RS"}</h3>
                    <h3>{each.card.info.description}</h3>
                </div>
            ))}
        </div>
    )
}

export default ItemCategoryList
