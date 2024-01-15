
export default function Hello(){
    function showName(){
        alert("aa")
    }
    function showAge(age){
        alert(age)
    }
    /*function showText(e){
        
    }*/
    return (
        <div>
            <h1>Hello</h1>
            <button onClick={showName}>버튼</button>
            <button onClick={ () => {
                showAge(40)
            }}>버튼2</button>
            <input type="text" onChange={e => {
                alert(e.target.value)
            }}
            />
        </div>
    );
}