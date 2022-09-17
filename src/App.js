import React, { useState } from "react";

const App = () => {
    let Time = new Date().toLocaleTimeString();
    const [currentTime , UpdatedTime] = useState(Time);
    const Update = () => {
        Time = new Date().toLocaleTimeString();
        return(
            UpdatedTime(Time)
        )
    }
    setInterval(Update,1000);
    return(
        <>
        <div className="main">
        <h1>{currentTime}</h1>
        </div>
        </>
    )
}

export default App;