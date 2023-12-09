import React from 'react'
import { useNavigate } from 'react-router-dom';
import mop from './moptro logo.png'
import head from './Group 46.png'
import foot1 from './icons8-home-24.png'
import foot2 from './user.png'
import './dash.css'
function Dashboard() {
  const navigate = useNavigate();

  const handle = () => {
    navigate('/Employee');
  };
  const main=()=>{
    navigate('/');
  }
  return (
    <div>
      <img src={head} alt="" id="head1" onClick={main}/>
      <img src={mop} alt="" id="head2" />
      <div id="product">
        <div className="name">
          <h5>Employee Productivity Dashboard</h5>
        </div>
        <div className="content">
          <p className="days">Monday</p>
          <p className="days">5%</p>
          <div className="bar" style={{ width: "5px" }}></div>
          <p className="days">Tuesday</p>
          <p className="days">25%</p>
          <div className="bar" style={{ width: "25px" }}></div>
          <p className="days">Thrusday</p>
          <p className="days">60%</p>
          <div className="bar" style={{ width: "60px" }}></div>
          <p className="days">Friday</p>
          <p className="days">85%</p>
          <div className="bar" style={{ width: "85px" }}></div>
          <p className="days">Saturday</p>
          <p className="days">15%</p>
          <div className="bar" style={{ width: "15px" }}></div>
        </div>
      </div>
      <img src={foot1} alt="" id="foot1" />
      <img src={foot2} alt="" id="foot2"  onClick={handle} />

    </div>
  )
}

export default Dashboard
