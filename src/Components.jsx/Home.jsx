import React from 'react'
import '../Styles/home.css'
import image1 from '../assets/Component 1.png'
import {Link} from 'react-router-dom'


const Home = () => {
    return (
        <>
         <main className = 'container space '>
             <div className = 'd-block d-lg-flex justify-content-between parent '>
                 <div className = 'mt-3 task'>
                     <h1 className = 'text'>Manage your Tasks on </h1>
                     <h1 className = 'text'>TaskDuty</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non tellus, sapien, morbi ante nunc euismod ac felis ac. Massa et, at platea duis non eget. Hendrerit tortor fermentum bidendum mi nisi semper porttitor. Nec accumsan.</p>
                     <Link to = '/alltask' className = 'text-decoration-none h4'><h4>Go to My Tasks</h4></Link>
                 </div>
                 <div className = 'image'>
                     <img src= {image1} alt="image-logo"className = 'img'/>
                 </div>
             </div>
         </main>
        </>
    )
}

export default Home
