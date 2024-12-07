import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return ( 
    <div className="sidebar  " >
    <h2>users</h2>
    <ul>
        <li><a href="#">admins</a></li>
        <li><a href="#">editor</a></li>
        <li><a href="#">instructors</a></li>
        <li><a href="#">student</a></li>
    </ul>

    <h2>articles</h2>
    <ul>
        <li><a href="#">published articles</a></li>
        <li><a href="#">scheduled articles</a></li>
        <li><a href="#">saved drafts</a></li>
    </ul>

    <h2>jobs</h2>
    <ul>
        <li><a href="#">published jobs</a></li>
        <li><a href="#">saved drafts</a></li>
    </ul>

    <h2>courses</h2>
    <ul>
        <li><a href="#">published courses</a></li>
        <li><a href="#">scheduled courses</a></li>
        <li><a href="#">saved drafts</a></li>
    </ul>
</div>
  )
}

export default Sidebar
