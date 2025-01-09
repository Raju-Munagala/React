import ItemCategoryList from "./ItemsCategoryList";

const ItemCategories = (props)=>{
    const {each, showItems, setShowIndex} = props
    const changeShowItemsStatus = ()=>{
        setShowIndex()
    }
    return (
        <div className="flex justify-center">
            <div className="border bg-gray-100 rounded-sm p-1 mb-2 w-6/12">
                <div className="flex w-full justify-between cursor-pointer" onClick={changeShowItemsStatus}>
                    <div>
                        <span>{each.card.card.title}</span>
                        <span>{" ("+each.card.card.itemCards.length+")"}</span>
                    </div>
                    {showItems?<div>△</div>:<div>▽</div>}
                </div>
                <div>
                    {showItems && <ItemCategoryList itemCards={each.card.card.itemCards}/>}
                </div>
            </div>
        </div>
)
}
export default ItemCategories