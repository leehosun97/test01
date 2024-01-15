import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch"

export default function CreateWord(){
    const days = useFetch("http://localhost:3001/days");
    const history = useNavigate();
    const [isLoaing, setIsLoading] = useState(false);

    function onSubmit(e){
        e.preventDefault();
        const dayLog = dayRef.current.value
        console.log(dayLog)
        if(!isLoaing){
            setIsLoading(true);
            fetch(`http://localhost:3001/words/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    day : dayRef.current.value,
                    eng : engRef.current.value,
                    kor : korRef.current.value,
                    isDone : false
                }),
            }).then(res => {
                if (res.ok) {
                    alert("생성이 완료 되었습니다");
                    history('/day/' + (dayLog));
                    setIsLoading(false);
                }
            });

        }
    }
    const engRef = useRef(null);
    const korRef = useRef(null);
    const dayRef = useRef(null);

    return <div>
        <form onSubmit={onSubmit}>
            <div className="input_area">
                <label>Eng</label>
                <input type="text" placeholder="computer" ref={engRef}/>
            </div>
            <div className="input_area">
                <label>kor</label>
                <input type="text" placeholder="컴퓨터" ref={korRef}/>
            </div>
            <div className="input_area">
                <select ref={dayRef}>
                    {days.map(day =>(
                        <option key={day.id} value={day.day}>{day.day}</option>
                    ))}
                </select>
            </div>
            <button>{isLoaing ? "Saving..." : "저장"}</button>
        </form>
    </div>
}