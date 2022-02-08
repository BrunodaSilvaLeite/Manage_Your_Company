
export function ItemUnit(item: any) {
 
    return (
        <div className="overview-unit">
            <h4>{item.name}</h4>
            <div>
                <p>{item.asset.length}<br/>Assets</p>
            </div>
        </div>
    )

}