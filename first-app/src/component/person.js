import React from 'react'

function Person({boy}){
    return (
        <div>
            <h2>
                {boy.name} studies in {boy.year} in the {boy.college}
            </h2>
        </div>
    )
}

export default Person