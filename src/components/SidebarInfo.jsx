import React from 'react';
import Hero from "../components/Hero";
import img1 from "../Assestes/images/Profile.jpg";
import icon1 from "../Assestes/images/Vector (5).png";
import icon2 from "../Assestes/images/Vector (6).png";
import icon3 from "../Assestes/images/Vector (7).png";
import icon4 from "../Assestes/images/Vector (8).png";
import icon5 from "../Assestes/images/Vector (9).png";
import icon6 from "../Assestes/images/Vector (10).png";
import icon7 from "../Assestes/images/Extra Skills.png";
import icon8 from "../Assestes/images/v.png";
const SidebarInfo = () => {
  return (
   <>
   <div className='back b flex'>
    <div className="in ">

<div className='flex justify-center items-center  '>
    <img className='mt-8 ' src={img1} alt="img-developer" />
    <p className='rounded-full '></p>
    </div>
    <p className='flex justify-center mt-3 font '>Rayan Adlardard</p>
    <p className='flex justify-center mt-2  c'>Front-end Developer</p>
    
    <div className='flex  justify-center mt-5    '>
   
        <img className='rounded-full icon1 mx-2 p-2 w-6 h-6' src={icon1} alt="fb"   />
        <img className='rounded-full icon1 mx-2 p-2 w-6 h-6' src={icon2} alt="instagram"   />
        <img className='rounded-full icon1 mx-2 p-2 w-6 h-6' src={icon3} alt="twitter"   />
        <img className='rounded-full icon1 mx-2 p-2 w-6 h-6' src={icon4} alt="linkedin"   />
        <img className='rounded-full icon1 mx-2 p-2 w-6 h-6' src={icon5} alt="youtube"   />
        <img className='rounded-full icon1 mx-2 p-2 w-6 h-6' src={icon6} alt="internet"   />
       
        </div>
        <p className='text-gray-200 text-center'>_________________________________</p>
<div className='font  flex ml-11 mt-4 font-medium'>
<p className=' icon1 sp w-11 h-6'>Age:</p><span className=' sp ml-40'>24</span>
</div>

<div className='font  flex ml-11 mt-4 font-medium'>
<p className=' icon1 sp w-20 h-6'>Residence:</p><span className=' sp px-28'>BD</span>
</div>

<div className='font  flex ml-11 mt-4 font-medium'>
<p className=' icon1 sp w-28 h-6'>Freelance:</p><span className=' sp px-20 g'>Available</span>
</div>

<div className='font  flex ml-11 mt-4 font-medium'>
<p className=' icon1 sp w-28 h-6'>Address:</p><span className=' sp ml-3 '>Dhaka,Bangladesh</span>
</div>

<p className='text-gray-200  text-center'>_________________________________</p>

<div className='head_color '>
  <h1 className='ml-11 text-xl mt-5'>Languages</h1>
  </div>

  <div className='flex mt-3 '>
  <p className='info_color pl-11 '>Bangla</p><span className='info_color absolute left-56'>100%</span>
  </div>

  <div className='flex '>
  <p className='info_color pl-11 mt-4 '>English</p><span className='info_color absolute left-56 mt-4'>80%</span>
  </div>

  <div className='flex '>
  <p className='info_color pl-11 mt-4 '>Spanish</p><span className='info_color absolute left-56 mt-4'>60%</span>
  </div>
  <p className='text-gray-200  text-center'>_________________________________</p>

  <div className='head_color '>
  <h1 className='ml-11 text-xl mt-5'>Skills</h1>
  </div>

  <div className='flex mt-3  '>
  <p className='info_color pl-11 '>Html</p><span className='info_color  absolute left-56'>90%</span>
  </div>

  <div className='flex   '>
  <p className='info_color pl-11 mt-4 '>CSS</p><span className='info_color absolute left-56 mt-4'>85%</span>
  </div>

  <div className='flex '>
  <p className='info_color pl-11 mt-4 '>Js</p><span className='info_color absolute left-56 mt-4'>80%</span>
  </div>

  <div className='flex '>
  <p className='info_color pl-11 mt-4 '>PHP</p><span className='info_color absolute left-56 mt-4'>75%</span>
  </div>

  <div className='flex '>
  <p className='info_color pl-11 mt-4 '>WordPress</p><span className='info_color absolute left-56 mt-4'>85%</span>
  </div>
  <p className='text-gray-200  text-center'>_________________________________</p>



<div className='mt-5'>
<img className='ml-11' src={icon7} alt="i"  />
</div>
  <p className='text-gray-200  text-center'>_________________________________</p>

<div className='text-center mt-5 flex justify-center  '>
<button className='icon1 px-16 p-3 head_color '>Download CV</button>
<img className=' text center absolute right-20 bottom-28' src={icon8} alt="download" />

</div> 






</div>
<Hero/>


</div>

  

   
   </>
  )
}

export default SidebarInfo;