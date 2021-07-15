import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import { useHistory } from 'react-router';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './theme.js';

function Homepage(props) {

    const history = useHistory();
    const [theme, setTheme] = useState('light');
    const [foc, setFoc] = useState('black');

    const styledApp = styled.div`
     
    color: ${(props) => props.theme.fontColor};
   
    `;
    const themeToggle = () => {
        theme === 'light' ? setTheme("dark") : setTheme("light");
        if (theme === 'light') {
            setFoc('white')
        }
        else setFoc('black');


    };

    console.log(foc);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duedate, setDuedate] = useState('');
    const [status, setStatus] = useState('');
    const addTodo = (event) => {
        event.preventDefault();
        props.help(title, description, duedate, status);
        history.push('/preity')

    }


    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <styledApp>
                <div>
                    <div id="heading" style={{ color: foc }}><h1>Todo App</h1></div>
                    <button onClick={() => themeToggle()}> ChangeTheme</button>
                    <div className="form">
                        <form style={{ color: foc }} >


                            <label className="required">Title  </label><br></br><input className="design" value={title} onChange={event => setTitle(event.target.value)} required />
                            <br></br>
                            <label className="required"> Description  </label> <br></br> <input className="design" value={description} onChange={event => setDescription(event.target.value)} required />

                            <br></br>
                            <label>Due Date  </label><br></br> <input className="design" type="date" value={duedate} onChange={event => setDuedate(event.target.value)} />
                            <br></br>
                            <label>Status  </label><br></br> <input className="design" list="list" value={status} onChange={event => setStatus(event.target.value)} />
                            <datalist id="list"  >
                                <option value="Todo"></option>
                                <option value="Ongoing"></option>
                                <option value="Stalled"></option>
                                <option value="Done"></option>
                            </datalist>
                            <br></br>
                            <br></br>
                            <Button type="submit" onClick={addTodo} variant="contained" color="primary" style={{}}>
                                Save
                            </Button>


                        </form>

                    </div>
                </div>
            </styledApp>
        </ThemeProvider>
    )
}

export default Homepage
