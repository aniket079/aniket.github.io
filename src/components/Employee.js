import React from 'react'
import mop from './moptro logo.png'
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom';
import head from './Group 46.png'
import foot1 from './icons8-home-24.png'
import foot2 from './user.png'
import mag from './search.png'
import './emp.css'
function Employee() {
    const article=[
        {name:"Aniket" ,id:"1",dob:"12-10-2000",role:"Software Enginner"},
        {name:"Aman" ,id:"2",dob:"10-05-2001",role:"Web Developer"}
    ]
    const navigate = useNavigate();
    const search=()=>{
       var text= document.getElementById('box').value;
       console.log(text);
       navigate('/Searched', { state: { data: text } });
    }

    const handle = () => {
      navigate('/Dashboard');
    };
    const main=()=>{
        navigate('/');
      }
  return (
    <div>
       <img src={head} alt="" id="head1" onClick={main}/>
       <img src={mop} alt="" id="head2" />
         <div className="search">
            <input type="text" placeholder='Search with name' id="box" />
            <img src={mag} alt="" onClick={search}  id="mag"/>
         </div>
         <div className="card">
            <p className="data">
                ID: {article[0].id}
            </p>
            <p className="data">
                Employee Name: {article[0].name}
            </p>
            <p className="data">
               DOB: {article[0].dob}
            </p>
            <p className="data">
              ROLE: {article[0].role}
            </p>
         </div>
         <div className="card" id="card2">
            <p className="data">
                ID: {article[1].id}
            </p>
            <p className="data">
                Employee Name: {article[1].name}
            </p>
            <p className="data">
               DOB: {article[1].dob}
            </p>
            <p className="data">
              ROLE: {article[1].role}
            </p>
         </div>





       <img src={foot1} alt="" id="foot1" onClick={handle} />
      <img src={foot2} alt="" id="foot2" />
    </div>
  )
}

export default Employee
