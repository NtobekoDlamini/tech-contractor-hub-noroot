
import React, { useState } from 'react'

export default function App(){

const [role,setRole]=useState(null)
const [jobPosted,setJobPosted]=useState(false)
const [jobAccepted,setJobAccepted]=useState(false)

return(
<div>

<header>TOBEON IT Solutions – Tech Contractor Hub</header>

{!role && (
<div className="hero">

<h1>Instant Tech Support — On Demand</h1>

<p>
Tech Contractor Hub connects South African businesses with trusted IT technicians instantly.
Post a problem and find nearby professionals ready to help.
</p>

<div className="card">
<h3>I Need IT Support</h3>
<button className="black" onClick={()=>setRole("client")}>Continue</button>
</div>

<div className="card">
<h3>I'm a Technician</h3>
<button className="teal" onClick={()=>setRole("contractor")}>Continue</button>
</div>

<div className="card">
<h3>Admin Dashboard</h3>
<button className="black" onClick={()=>setRole("admin")}>Open</button>
</div>

</div>
)}

{role==="client" && !jobPosted && (
<div className="hero">
<h2>Request IT Support</h2>
<input placeholder="Describe your issue"/><br/>
<input placeholder="City (Johannesburg, Cape Town)"/><br/>
<button className="teal" onClick={()=>setJobPosted(true)}>Find Technician</button>
</div>
)}

{role==="client" && jobPosted && !jobAccepted && (
<div className="hero">
<h2>Technicians Near You</h2>
<div className="map">Live Map Simulation (South Africa)</div>
<button className="black" onClick={()=>setJobAccepted(true)}>Simulate Match</button>
</div>
)}

{role==="client" && jobAccepted && (
<div className="hero">
<h2>Technician On The Way</h2>
<p>Name: Sipho M</p>
<p>Rating: 4.9 ⭐</p>
<p>ETA: 25 minutes</p>
</div>
)}

{role==="contractor" && (
<div className="hero">
<h2>Available Jobs</h2>
<div className="card">
<p>Office Network Down</p>
<p>Sandton</p>
<p>Budget: R1500</p>
<button className="teal">Accept Job</button>
</div>
</div>
)}

{role==="admin" && (
<div className="hero">
<h2>Admin Dashboard</h2>
<div className="card">Active Jobs: 24</div>
<div className="card">Technicians Online: 56</div>
<div className="card">Completed Jobs: 1248</div>
</div>
)}

<footer>
<p>TOBEON IT Solutions</p>
<p>info@tobeonit.com</p>
<p>079 445 4982</p>
<p>Built for South Africa's On-Demand IT Workforce</p>
</footer>

</div>
)
}
