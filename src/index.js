import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import FirstComp from './FirstComp';
import ParentComp from './Example/ParentComp';
import { Routes } from 'react-router-dom';

import{BrowserRouter,Routes,Route,} from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    < BrowserRouter>
       <Routes>
          <Route path= "Parent" element={<ParentComp/> } />
          <Route path= "/" element={<FirstComp/> } />

            </Routes>
    
    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
