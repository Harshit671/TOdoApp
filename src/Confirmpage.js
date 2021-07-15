import React from 'react'
import './confirm.css';

function Confirmpage(props) {
    return (
        <div id="confirm_div" className="confirm_div">
          <h2>Title:</h2> <span className="data">{props.title}</span> <br></br>
          <h2>Description : </h2>  <span className="data">{props.des}</span><br></br>
          <h2>Duedate : </h2>  <span className="data">{props.due}</span><br></br>
          <h2>Status : </h2>  <span className="data" id="status">{props.status}</span> <br></br>
          
        </div>
    )
}

export default Confirmpage
