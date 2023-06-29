import React from 'react';
import {easeInOut, motion} from 'framer-motion';
import { AppWrap } from '../../wrapper';

import { images } from '../../constant';
import './Header.scss';

const scaleVariants = {
  whileInView : {
    scale : [0, 1],
    opacity : [0, 1],
    transition : {
      duration : 1,
      ease : easeInOut
    }
  }
}

function Header() {
  return (
    <div className='app__header app__flex'>
      <motion.div
        whileInView={{x : [-100, 0], opacity : [0, 1]}}
        transition={{duration : 0.5}}
        className='app__header-info'
      >
        <div className='app__header-badge'>
          <div className='badge-cmp app__flex'>
            <span>👋</span>
            <div style={{marginLeft : 20}}>
              <p className='p-text'>Helo!! We are</p>
              <h2 className='head-text'>DORADO<h6 style={{lineHeight : '0.6'}}>NIG..</h6></h2>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className='p-text'>Expert in Property Management,</p>
            <p className='p-text'>Real Estate, Architectural designs & building</p>
          </div>
        </div>
      </motion.div> 

      <motion.div
        whileInView={{opacity : [0, 1]}}
        transition={{duration : 0.5, delayChildren : 0.5}}
        className='app__header-img'
      >
        <img src={images.property6} alt='profile_bg'style={{borderRadius : '10rem'}} />
        <motion.img
          whileInView={{scale : [0, 1]}}
          transition={{duration : 1, ease : easeInOut}}
          src={images.circle}
          alt='profile_circle'
          className='overlay_circle'
        />
      </motion.div>    

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className='app__header-circles'
      >
       {[images.property1, images.property19, images.property20].map((circle, index)=> (
        <div className='circle-cmp app__flex' key={`circle-${index}`}>
          <img src={circle} alt='circle'/>
        </div>
       ))} 
      </motion.div> 
    </div>
  )
}

export default AppWrap(Header,'home');
