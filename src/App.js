import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import './App.css';
import Confirmpage from './Confirmpage';
import Homepage from './Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duedate, setDuedate] = useState('');
  const [status, setStatus] = useState('');

  const help = (a, b, c, d) => {
    setTitle(a);
    setDescription(b);
    setDuedate(c);
    setStatus(d);
    console.log(a, b, c, d);

  }

  return (
    <div className="App">


      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Homepage preity={help} />
          </Route>
          <Route exact path="/preity">
            <Confirmpage title={title} des={description} due={duedate} status={status} />
          </Route>
        </Switch>

      </BrowserRouter>



    </div>
  );
}

export default App;
