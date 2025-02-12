import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { RetroGrid } from "../components/magicui/retro-grid";

export default function Subsystem(){


  const teamMembers = [

    { name: "Govind E S", role: "Manager " , img:"/assets/govind.jpg" },
    { name: "Devan P Das", role: "Manager ", img:"https://ik.imagekit.io/r70knk9pu/devan.jpg?updatedAt=1739005570408" },
    { name: "Ashwin S", role: "Powertrain" , img:"https://ik.imagekit.io/r70knk9pu/ashwins.jpg?updatedAt=1739005570483"},
    { name: "Vivek H", role: "Steering", img:"https://ik.imagekit.io/r70knk9pu/vivek.jpg?updatedAt=1739005570491" },
    { name: "Saif Ali K N", role: "Rollcage", img:"https://ik.imagekit.io/r70knk9pu/saif.jpg?updatedAt=1739005570547" },
    { name: "Aswin A", role: "Suspension" , img:"/assets/devan"},
    { name: "Govind E S", role: "Brake" , img:"/assets/devan"},
    { name: "Lena Alingal", role: "Statics", img:"/assets/devan" },
    { name: "Vishnu M Krishnan", role: "Media", img:"https://ik.imagekit.io/r70knk9pu/vishnu.jpg?updatedAt=1739005570487" },
  ];

  const Profile = ({ teamMember }) => (
<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src={teamMember.img} alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">{teamMember.name}</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
    {teamMember.role}</h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>
  );


    return(
      <div className="">
        <Navbar></Navbar>
        
        <div className="min-h-screen w-full bg-gradient-to-b from-black to-red-700 pt-20 ">
          <div className="h-full  fixed inset-0 z-0   w-full">
        <RetroGrid />
        </div>

        <div className="z-20 h-72 w-full text-white font-zenDots text-5xl pt-16 md:pt-0 items-center justify-center md:flex p-3">Executive Committe <span className="text-red-700 ">[</span>24-25<span className="text-red-700">]</span></div>

        <div className="z-20 flex flex-row justify-center w-full space-x-2 md:space-x-14  mb-16">
            <div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48 " src="https://ik.imagekit.io/r70knk9pu/asif.jpg?updatedAt=1739005570560" alt="" loading="lazy"></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Asif Ahammad H</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
    Captain</h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/abhi.jpg?updatedAt=1739005570416" alt="" loading="lazy"></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Abhijith Mohan</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
    Vice Captain</h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>


</div>
        <div className="z-20 col-span-full grid grid-cols-2 md:grid-cols-3 gap-0 md:gap-8 mb-3">
              <div className="col-span-2 md:col-span-5 place-items-center">
                {/* Two-column grid for mobile, three-column for desktop */}
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-24 gap-y-12 place-items-center">
                  {teamMembers.map((teamMember) => (
                    <Profile key={teamMember.name} teamMember={teamMember} />
                  ))}
                </div>
              </div>
              </div>
              <div className="z-20 flex flex-col w-full h-full space-y-12 mt-12 ">
              <div className=" flex flex-row justify-center w-full space-x-0 md:space-x-16 mb-6">
            <div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" loading="lazy"></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Pavna Suresh
  </h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Sponsorship    </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg " loading="lazy" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwyfHxoZWFkc2hvdHxlbnwwfDB8fHwxNjk1ODE3MjEzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="" loading="lazy"></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Rohan Kalathil </h1>
  <div className=" flex flex-col md:flex-row  w-full justify-center items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Procurement    </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" loading="lazy" height="30"></img></a>
</div>
</header>
</div>
</div>

<div className=" flex flex-row justify-center w-full space-x-0 md:space-x-16">
            <div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/nandhu.jpg?updatedAt=1739005570566" alt="" loading="lazy"></img>
  <h1 class="text-xl  md:text-2xl text-gray-100 font-Fn mt-2">Nandu K Saju</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Manufacturing   </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" loading="lazy" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/ashwins.jpg?updatedAt=1739005570483" alt="" loading="lazy"></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Ashwin S</h1>
  <div className=" flex flex-col md:flex-row  w-full justify-center items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Treasurer   </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" alt='linkedin' width="30" loading="lazy" height="30"></img></a>
</div>
</header>
</div>
</div>
{/* advisor */}
<div className="w-full md:h-28 h-10 flex justify-center items-center font-zenDots text-2xl p-3 md:text-4xl text-white">Guiding us beyond the finish line.</div>
<div className=" flex flex-row justify-center w-full space-x-0 md:space-x-32">
            <div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/biju%20sir%206_42f57362.jpg?updatedAt=1739015920894" loading="lazy" alt=""></img>
  <h1 class="text-xl  md:text-2xl text-gray-100 font-Fn mt-2">Dr Biju N</h1>
  <div className=" flex flex-col md:flex-row justify-center w-full items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Faculty Advisor </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg" loading="lazy" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>

<div className="w-64 flex justify-center h-64">
            <header class=" absolute flex flex-col justify-center  items-center text-center">
  <img class="inline-flex object-cover border-2 border-white rounded-full shadow-[5px_5px_0_0_rgba(0,0,0,1)] shadow-green-600/100 bg-indigo-50 text-indigo-600 h-36 w-36 md:h-48 md:w-48" src="https://ik.imagekit.io/r70knk9pu/Priyadarshi-Dutt-2.png?updatedAt=1739015920763" loading="lazy" alt=""></img>
  <h1 class="text-xl md:text-2xl text-gray-100 font-Fn mt-2">Priyadarshi Dutt</h1>
  <div className=" flex flex-col md:flex-row  w-full justify-center items-center space-x-2">
  <h2 class="text-base md:text-lg text-gray-200 font-Orbitron">
  Faculty Advisor </h2>
    <a href="" target="_blank"
      class="text-indigo-900  font-bold border-b-0  hover:scale-110 transition-all">
<img src="https://www.svgrepo.com/show/349436/linkedin.svg"  loading="lazy" alt='linkedin' width="30" height="30"></img></a>
</div>
</header>
</div>
</div>


</div>

 
          

          



<div className="w-full flex justify-center h-52 mt-7 items-center">
<div className="h-24 flex -space-x-32 hover:scale-110 -space-y-5 w-48 justify-center items-center">
  
<a><div className="w-36 pb-2 h-16  items-center justify-center flex border-2 text-white font-Goldman font-thin">
    View All
  </div></a>
  <a><div className="w-36 h-16  bg-gray-100 bg-opacity-15 items-center justify-center flex border-2 text-white font-Goldman font-thin">
  </div></a>
</div>
</div>
</div>
<div className="absolute w-full">
<Footer className="z-50"></Footer>
</div>
</div>

    )
}