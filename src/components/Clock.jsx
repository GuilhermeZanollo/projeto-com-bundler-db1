import { useEffect, useState } from 'react';

const Clock = (props) => {
    const [currentDate, setCurrentDate] = useState(props.startDate); //importo usestate

    // useEffect sem dependencias é executado apenas no mount e unmount
    useEffect(() => {
        // mount
        const interval = setInterval(() => {
          setCurrentDate((previous) => {
                return new Date(previous.getTime() + 1000)
          });
        }, 1000);
        return () => {
            // unmount
            clearInterval(interval);
        }
    }, [/* sem dependências*/]); //dependencia currentDate

    return (
        <div>
            Hora atual: {currentDate.toLocaleString()}
        </div> 
    )
};

export default Clock; 

