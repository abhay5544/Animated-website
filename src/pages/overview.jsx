// import  {useRef } from 'react'
// import {useGSAP } from '@gsap/react'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/all'
// function overview() {
 
//     const imageDivRef = useRef(null)
//     const imageRef = useRef(null)

//     const imageArray = [
//       '../../public/images/CAMILLE_480X640_2.jpg',
//       '../../public/images//joel_480X640_3.jpg',
//     ]
    
//     useGSAP(function() {
//          gsap.to(imageDivRef.current, {
//             scrollTrigger: {
//                  trigger: imageDivRef.current,
//                  start: 'top 28%',
//                  end: 'top -70%',
//                  scrub: true,
//                  pin: true,
//                  pinSpacing: true,
//                  pinReparent: true,
//                  pinType: 'transform',
//                  Scrub: 1, //smooth scrubbing with 1s easing
//                  anticipatePin: 1,
//                  invalidateOnRefresh: true,

//                  onUpdate: function(elam){
//                   let imageIndex;
//                   if(elam.progress < 1){
//                       imageIndex = Math.floor(elam.progress * imageArray.length)
//                   } else {
//                     imageIndex = imageArray.length - 1
//                   }
//                   imageRef.current.src = imageArray[imageIndex]
//                  }
//             }
//          })
//     }) 

//   return (
//     <div>
//     <div className='section1 relative py-1'>
//     <div ref={imageDivRef} className='absolute  h-[20vw] rounded-3xl w-[15vw] top-28 left-[30vw] '>
//         <img ref={imageRef} className='h-full object-cover w-full' src='../../public/images/MEL_480X640.jpg'/>
//     </div>
    
//     <div className='font-[font2]'>
//       <div className=' mt-[55vh]'>
//         <h1 className='text-[20vw] relative uppercase leading-[15vw]'>Soixan7e <br />
// Douze</h1>
//       </div>
//         <div className='pl-[40%] mt-20'>
//             <p className='text-6xl w-1/2'> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
//         </div>
//     </div>
//     </div>

//     <div className='section2 h-screen'>
//          <div>
//           <p></p> 
//          </div>
//     </div>
//     </div>
    
//   )
// }

// export default overview
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger)

function Overview() {

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    '/images/CAMILLE_480X640_2.jpg',
    '/images/joel_480X640_3.jpg',
  ]

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      y: -200, // animation property added
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 28%',
        end: 'top -75%',
        scrub: 1,
        pin: true,
         pinSpacing: true,
         pinReparent: true,
         pinType: 'transform',
         Scrub: 1, //smooth scrubbing with 1s easing
         anticipatePin: 1,
         invalidateOnRefresh: true,

        onUpdate: (self) => {
          let imageIndex

          if (self.progress < 1) {
            imageIndex = Math.floor(self.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }

          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      }
    })
  }, [])

  return (
    <div>
      <div className='section1 relative py-1'>

        <div
          ref={imageDivRef}
          className='absolute overflow-hidden h-[20vw] rounded-3xl w-[15vw] top-96 left-[30vw]'
        >
          <img
            ref={imageRef}
            className='h-full object-cover w-full'
            src='/images/MEL_480X640.jpg'
            alt="preview"
          />
        </div>

        <div className='font-[font2]'>
          <div className='mt-[55vh]'>
            <h1 className='text-[20vw] text-center relative uppercase leading-[18vw]'>
              Soixan7e <br />
              Douze
            </h1>
          </div>

          <div className='pl-[40%] mt-20'>
            <p className='text-6xl w-1/2'>
              Notre curiosité nourrit notre créativité...
            </p>
          </div>
        </div>
      </div>

      <div className='section2 h-screen'></div>
    </div>
  )
}

export default Overview