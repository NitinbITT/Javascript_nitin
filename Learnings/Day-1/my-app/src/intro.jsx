import "./style.css"
function HelloWorld(){
    return(
        <>
            <h1>Hello world</h1>
        </>
    );
}

function Greet(){
    const name="Alex"
    return(<>
    { localStorage.getItem("name") && <div>Welcome home, {localStorage.getItem("name")}</div>}
    </>);
}

function ListItems(){
    const list=["abc","bcd","cde"]
    return(
        <>
        <div>List Items</div>
            {console.log(list)}
        <ul>
            {list.map(item=>
                <li>{item}</li>
            )}
        </ul>
        </>
    );
}
export default HelloWorld
export {Greet,ListItems}