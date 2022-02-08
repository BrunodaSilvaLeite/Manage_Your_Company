
export function ItemAssetTable(items:any) {
    return (
        <tbody>
          
        <tr>
        <td id={items.status}>{items.status}</td>
            <td>{items.name}</td>
            <td>{items.owner}</td>
        </tr>
    </tbody>
    )
}