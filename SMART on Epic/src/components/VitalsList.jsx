import React from "react";


// Render the vitals list
function VitalsList({details}){
    if (!details) return <p>Loading patient vitals...</p>;

    return(
        <div>
            <p>{details}</p>
        </div>
    )
}

export default VitalsList