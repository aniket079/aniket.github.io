import React from 'react'
import mop from './moptro logo.png'
import { BrowserRouter as Router, Route, Switch, useNavigate } from 'react-router-dom';
import head from './Group 46.png'
import foot1 from './icons8-home-24.png'
import foot2 from './user.png'
import mag from './search.png'
function Searched({ location = {} }) {
    const { state = {} } = location;
  const { data } = state;
  console.log({data});
    const navigate = useNavigate();
    const article=[
        {name:"Aniket" ,id:"1",dob:"12-10-2000",role:"Software Enginner"},
        {name:"Aman" ,id:"2",dob:"10-05-2001",role:"Web Developer"}
    ]
    const handle = () => {
        navigate('/Employee');
      };
    const handleu = () => {
        navigate('/Dashboard');
      };
  return (
    <div>
       <img src={head} alt="" id="head1" />
       <img src={mop} alt="" id="head2" />
         <div className="search">
            <input type="text" placeholder='Search with name' id="box" />
            <img src={mag} alt=""   id="mag"/>
         </div>
         <div className="card">
            <p className="data">
                ID:{data}
            </p>
            <p className="data">
                Employee Name:
            </p>
            <p className="data">
               DOB:
            </p>
            <p className="data">
              ROLE: 
            </p>
         </div>
         <img src={foot1} alt="" id="foot1" onClick={handleu} />
      <img src={foot2} alt="" id="foot2" onClick={handle} />
    </div>
  )
}

export default Searched
