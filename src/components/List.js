import ListTitle from "./ListTitle"

const List = ({listData}) => {
    console.log(listData)
    return (
        <>
        <ListTitle listTitle = {listData.title} />
        <ol>
            <li>{listData.list[0]}</li>
            <li>{listData.list[1]}</li>
            <li>{listData.list[2]}</li>
        </ol>
        </>
    )
}
export default List