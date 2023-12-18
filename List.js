export default function List(){
    const animals=["dog","cat","lion","tiger"]
    const result=animals.map((ani,index)=><li key={index}>{index}={ani}</li>)
    animals.map((ani)=><li>{ani}</li>)
    return(
        <div>
            <ul type="none">
                {result}
            </ul>
        </div>
    )
}

// function DisplayNAme(props)
// {
//     return(
//         <div>
//         <h1>{props.name}</h1>
//         </div>
//     )
// }

// export default function List() {
//     const studentName=["Santhosh","Karthi","Dhanin","Haarish"]
//     const stName
// }