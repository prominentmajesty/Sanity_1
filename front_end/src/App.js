import React from 'react';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work
} from './container';
import {Navbar} from './components';
import './app.scss';
/* 
Github URL for the css and scss of this course.
cOR
Url of this Portfolio project
https://github.com/adrianhajdin/project_professional_portfolio 
Ugoch
*/
function App() {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
