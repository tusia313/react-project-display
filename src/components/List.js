import ListTitle from "./ListTitle"

const List = ({listData}) => {
    console.log(listData)
    return (
        <>
        <ListTitle listTitle = {listData.title} />
        <ol>
            {listData.list.map((list, index) => <li key = {index}>{list}</li>)}
        </ol>
        </>
    )
}
export default List