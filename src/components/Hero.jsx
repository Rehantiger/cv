import React from 'react'
import v from "../Assestes/images/Vector.png";
const Hero = () => {
  return (
 <>
<div>
    <div className='h '>
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
</div>



 </>
  )
}

export default Hero;