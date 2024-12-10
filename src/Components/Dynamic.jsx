import react_logo from "../images/react.webp"
function Dynamic(){
    let user="Shalini";
    let a=10,b=20;
    let logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s";
    let hei="300px",wid="300px"
    return(
        <div className="bg-secondary text-light">
            <address >
                Hai welcome, {user}
            </address>

            <h1>
                {a/b},{Math.random()*2000}
            </h1>

            <img src={logo} alt=""  height={hei} width={wid}/>

            <img src={react_logo} alt="" />
        </div>
    )
}

export default Dynamic;