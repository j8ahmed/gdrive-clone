import { Button } from "@/Interface/";

export default function Button( { title, btnClass, onClick } : Button ) {
    return (
        <button className={`btn ${btnClass}`} onClick={onClick}>{ title }</button>
    );
}

