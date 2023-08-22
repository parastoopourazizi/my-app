import './User.css'
function User(props){
    return(
        <div className="container">
            <p>name: {props.name}</p>
            <p>age: {props.age}</p>
            <p>height: {props.height}</p>
        </div>
    )
    }
export default User