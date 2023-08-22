import './User.css'
function User({name , children}){
    return(
        <div className="container">
            <p>name: {name}</p>
            {children}
            
        </div>
    )
    }
export default User