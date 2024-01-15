import {Link} from "react-router-dom";
import useFetch from "../hooks/useFetch";
import "../css/DayLink.css";

function DayList() {    
    
   const days = useFetch("http://localhost:3001/days");
    if(days.length === 0){
        return <span>로딩중...</span>
    }

    return <div>
        <ul className="list_day">
            {days.map(day => (
                <li key={day.id} className="day_link">
                    <button className="del_btn">X</button>
                    <Link to={"/day/" + day.day}>Day {day.day}</Link>
                </li>
            ))}
        </ul>
    </div>
}

export default DayList;
