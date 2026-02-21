import  {useRef } from 'react'
import {useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
function overview() {
 
    const imageDivRef = useRef(null)
    const imageRef = useRef(null)

    const imageArray = [
      '../../public/images/CAMILLE_480X640_2.jpg',
      '../../public/images/ChantalG_480x640.jpg',

    ]
    
    useGSAP(function() {
         gsap.to(imageDivRef.current, {
            scrollTrigger: {
                 trigger: imageDivRef.current,
                 start: 'top 28%',
                 end: 'top -100%',
                 scrub: true,
                 pin: true,
                 onUpdate: function(elam){
                   console.log(elam.progress);
                   
                 }
            }
         })
    }) 

  return (
    <div>
    <div className='section1'>
    <div ref={imageDivRef} className='absolute  h-[20vw] rounded-3xl w-[15vw] top-28 left-[30vw] '>
        <img ref={imageRef} className='h-full object-cover w-full' src='../../public/images/MEL_480X640.jpg'/>
    </div>
    
    <div className='font-[font2]'>
      <div className=' mt-[55vh]'>
        <h1 className='text-[20vw] relative uppercase leading-[15vw]'>Soixan7e <br />
Douze</h1>
      </div>
        <div className='pl-[40%] mt-20'>
            <p className='text-6xl w-1/2'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
    </div>
    </div>

    <div className='section2 h-screen'>

    </div>
    </div>
    
  )
}

export default overview

