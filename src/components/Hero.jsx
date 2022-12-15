import React from 'react'
import v from "../Assestes/images/Vector.png";
import iconr1 from "../Assestes/images/1.png";
import icon2 from "../Assestes/images/r2.png";
import icon3 from "../Assestes/images/r3.png";
import icon4 from "../Assestes/images/r4.png";
import icon5 from "../Assestes/images/r5.png";
import icon6 from "../Assestes/images/r6.png";
import icon7 from "../Assestes/images/r7.png";


const Hero = () => {
  return (
 <>

    <div className='h  '>
<p className='font-bold ml-10 mt-20 para1  text-5xl'>I’m Rayan Adlrdard <br/>
<span className='front'>Front-end</span> Developer</p>
<p className=' text-base ml-10 mt-7 text-gray-500 '>Lorem ipsum dolor sit amet, consectetur adipiscing<br/> elit. Et, volutpat feugiat placerat lobortis. Natoque<br/> rutrum semper sed suspendisse nunc lectus.</p>

<div className='flex '>
<button className=' text-center   rounded icon1 px-9 py-4 ml-10  mt-8 icon'>HIRE ME</button>
<img className='absolute ml-36 mt-14 icon1 ' src={v} alt="" />
</div>
</div>


   
<section  className='imgdeveloper'></section>


<section className=' r_side'></section>


<div className='absolute right-1 top-8'>

<img src={iconr1} alt="" />
</div>



<div className='absolute right-0 top-72 rounded-full bg-amber-500  p-2 w-8 h-8'>
<img src={icon2} alt="" />
</div>

<div className='absolute right-0 bg-gray-200 bottom-52 rounded-full bg-amber-500  p-2 w-8 h-8'>
<img src={icon3} alt="" />
</div>

<div className='absolute right-0 bg-gray-200 bottom-36 rounded-full bg-amber-500  p-2 w-8 h-8'>
<img src={icon4} alt="" />
</div>

<div className='absolute right-0 bg-gray-200 bottom-20 rounded-full bg-amber-500  p-2 w-8 h-8'>
<img src={icon5} alt="" />
</div>


<div className=' absolute right-0 bottom-6   bg-gray-200  rounded-full bg-amber-500  p-2 w-8 h-8'>
<img src={icon6} alt="" />
</div>




<div className=' absolute top-full right-0   bg-gray-200  rounded-full bg-amber-500  p-2 w-8 h-8'>
<img src={icon7} alt="" />
</div>




















 </>
  )
}

export default Hero;