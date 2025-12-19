function Student({name, id, topic}){
    return(
        <div>
            <p>
                Student Name: {name}
            </p>
            <p>
                Student Id: {id}
            </p>
            <p>
                Topic: {topic}
            </p>
        </div>
    )
}

export default Student;