import {useState} from 'react';

export default function NumberBox(props){
    const [number, setNumber] = useState(props.initialValue);
    return (
        <div style={{border:"1px solid black", height:"50px", width:"50px", margin:"5px"}}>
            {number}
        </div>
    )
}