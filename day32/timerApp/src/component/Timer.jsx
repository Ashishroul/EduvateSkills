import React, { useContext, useRef } from 'react'
import { TimerContext } from '../ContextProvider'

const Timer = () => {

    const { time, setTiming } = useContext(TimerContext);
    
    let timer=useRef(null);

    function handleTime() {

        timer.current= setInterval(() => {
            setTiming((prev) => {

                if (prev.seconds === 59) {

                    if (prev.minutes === 59) {
                        return { hours: prev.hours + 1, minutes: 0, seconds: 0 }
                    }

                    return { ...prev, minutes: prev.minutes + 1, seconds: 0 }
                }

                return { ...prev, seconds: prev.seconds + 1 }
            });

        }, 1000)
    }    

    function handleStop() {
        console.log(timer.current);
        
       clearInterval(timer.current);
    }

    return (
        <div>
            <div className='flex gap-4'>
                <h1>Hour:{time.hours ? time.hours : "00"}</h1>
                <h1>Minute:{time.minutes ? time.minutes : "00"}</h1>
                <h1>Second:{time.seconds ? time.seconds : "00"}</h1>
            </div>
            <div className='flex justify-center gap-2'>
                <button onClick={handleTime}>Start</button>
                <button onClick={handleStop}>End</button>
            </div>
        </div>
    )
}

export default Timer