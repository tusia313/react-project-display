import ListTitle from "./ListTitle"

const List = ({listTitle}) => {
    return (
        <>
        <ListTitle listTitle = {listTitle} />
        <ol>
            <li></li>
            <li></li>
            <li></li>
        </ol>
        </>
    )
}
export default List