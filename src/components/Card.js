const Card = ({skillSet}) => {
    console.log(skillSet)
    return(
        <div className="card-container">
            <h2>{skillSet.skill}</h2>
            <p>{skillSet.description}</p>
        </div>
    )
}

export default Card