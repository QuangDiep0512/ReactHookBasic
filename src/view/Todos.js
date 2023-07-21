const Todos = ({ newStates, handleDelete }) => {

    return (
        <div>
            {
                newStates.map((item, index) => {
                    return (
                        <ul key={index}>
                            <li>{index + 1}-{item.title} <span onClick={() => handleDelete(item.id)}>X</span></li>
                        </ul>
                    )
                })
            }
            <hr />
        </div>
    )
}

export default Todos;