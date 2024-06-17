'use client'
import Image from 'next/image'
import Link from "next/link"
import { headers } from '../../next.config'
import Spline from '@splinetool/react-spline';
import { useRef, useEffect } from'react';

export default function Banner(props) {
  const splineRef = useRef(null);

  const onLoad = (spline) => {
    splineRef.current = spline;
    window.temp = spline;
  };

  const stopAnimation = () => {
    if (splineRef.current) {
      splineRef.current.stop(); // Adjust according to the actual API method
    }
  };

  return (
    <>
    <div className={` bg-cover justify-center relative w-full flex items-center xl:pt-[80px] ${props.class} overflow-hidden`}>
      <Spline scene="/videos/1.spline" onLoad={onLoad}
      // <Spline url="https://prod.spline.design/OM1pqrY7nYNVq365/scene.splinecode" events-target="global"
        style={{height:"calc(100% + 200px)"}}
        class={`justify-center absolute w-full flex items-center xl:pt-[80px] ${props.class} overflow-hidden`} />

        <div className="container pt-[120px] xl:pt-[50px] pb-[40px] lg:pb-[80px] flex items-center z-40">

          <div className='flex items-end flex-col lg:gap-0 gap-5 lg:flex-row w-full z-20'>
            <div className='w-full lg:w-[55%]'>
              <h2 className={`t-heading-1-md md:!text-[60px] lg:!text-[55px] xl:!text-[70px] text-white mb-[30px] max-w-[${props.titleWidth}]`}>{props.title}</h2>
              <Link href="#schedule-form" className="btn btn-green-solid hover:bg-[#12130f]">Schedule a Demo</Link>
            </div>
            <div className='w-full lg:w-[45%]'>
              <Image
                src={props.image}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}