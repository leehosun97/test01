import Word from "./Word";
import { useParams ,useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import DayListCss from "../css/DayList.module.css"


function Day() {
    const day = useParams().day;
    const words = useFetch('http://localhost:3001/words?day=' + day);
    const nexthistory = useNavigate();
    const Daysdata = useFetch('http://localhost:3001/days');


    function NextBtn(){
        const DayLength = Daysdata.length +1;
        let nextDay = Number(day) + 1;
        console.log(DayLength);
        if(nextDay < DayLength){
            
            nexthistory("/day/" + (nextDay));
        }else{
            alert("다음 Day가 없습니다")
        }
    }
    function PrevBtn(){
        const DayLength = Daysdata.length +1;
        let PrevDay = Number(day) - 1;
        console.log(DayLength);
        if(PrevDay > 0){
            
            nexthistory("/day/" + (PrevDay));
        }else{
            alert("이전 Day가 없습니다")
        }
    }
    return (
        <div>
            <h2>Day {day}</h2>
            {words.length === 0 && (<span>로딩중...</span>)}
            <table>
                <tbody>
                    {words.map(word => (
                        <Word word={word} key={word.id} />
                    ))}
                </tbody>
            </table>
            <div className={DayListCss.next_prev_wrap}>
                <button className={DayListCss.Prev_btn} onClick={PrevBtn}>Prev</button>
                <button className={DayListCss.Next_btn} onClick={NextBtn}>Next</button>
            </div>
        </div>
    );
}

export default Day;