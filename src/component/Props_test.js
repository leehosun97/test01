import {useState} from "react";
import UserName from "./UserName";


export default function Props_test({age}){
    const [name, setName] = useState("마이크");
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다."

    return (
        <div>
            <div>
                <p id="name">{name}({age}) : {msg}</p>
                <UserName name={name}/>
                <button onClick={() => {
                    setName(name === "마이크" ? "미셸" : "마이크");
                }}>눌러봐요</button>
            </div>
        </div>
    );
}