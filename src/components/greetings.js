import React from 'react'

function Greetings(props) {
  return (
    <div>
      {props.greetings.map((greeting) => {
        return (
          <div key={greeting.id}>
            <p>{greeting.message}</p>
          </div>
        );
      })}
    </div>
  )
}

export default Greetings