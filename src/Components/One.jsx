import { Link, NavLink, useNavigate } from "react-router-dom";

function First(){
    let page=useNavigate()
    return(
        <div>
            <h1>
                Welcome to parent file,upload in git
            </h1>
            <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="" className="img"/>
            <button onClick={()=>page("/hooks")}>
                Go to Usestate
            </button>

            <Link to="/refhook">
                <h1>
                    Use ref Hook
                </h1>
            </Link>

            <NavLink to="memohook">
                <button>
                    Memo Hook page
                </button>
            </NavLink>

        </div>
    )
}

export default First;