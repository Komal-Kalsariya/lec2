import React, { useEffect, useState } from 'react'

const Stopwatch = () => {

    let [min, setmin] = useState(0)
    let [sec, setsec] = useState(0)
    let [hour, sethour] = useState(0)
    let [start, setstart] = useState(false)

    useEffect(() => {
        let timer = setInterval(() => {

            if (start) {
                setsec(sec + 1)
                if (sec == 59) {
                    setsec(0)
                    setmin(min + 1)
                }
                if (min == 59) {
                    setmin(0)
                    sethour(hour + 1)
                }

            }
        }, 10);
            return () => {
                clearInterval(timer)
            }
       
    }, [start, sec])

    return (
        <div>
            <h1>{hour} : {min} : {sec} </h1>
            <button onClick={()=>setstart(true)}>start</button>
            <button onClick={()=>setstart(false)}>stop</button>
            <button onClick={()=>{
                sethour(0)
                setmin(0)
                setsec(0)
                setstart(false)
            }}>reset</button>
        </div>
    )
}

export default Stopwatch