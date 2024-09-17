import React from 'react'
import less from '../assets/Vector.svg'
import Dropdown from 'react-bootstrap/Dropdown';
import '../Styles/newtask.css'
import drop from '../assets/Vector (2).svg'
import {Link} from 'react-router-dom'



const NewTask = () => {
    return (
        <>
            <header className = 'container'>
                <div>
                    <Link to = '/alltask' className = 'd-flex gap-2 new text-decoration-none'>
                    <img src= {less} alt="less-than"/>
                    <h2>New Task</h2>
                    </Link>
                </div>
                <form className = 'mt-5 position-relative'>
                    <label htmlFor = "name" className = 'position-absolute'>Task Title</label>
                    <input type="text" name="" id="" placeholder = "E.g Project Defence, Assignment ..."/>
                </form>

                <form className = 'Space position-relative'>
                        <label className = "position-absolute des">Description</label>
                        <textarea type="text" className = 'input' placeholder =  "Briefly describe your task..."></textarea>
                </form>

                <form className = 'mt-5 position-relative'>
                    <label htmlFor = "name" className = 'position-absolute labels'>Tags</label>
                    <Dropdown className = "bord">
                         <Dropdown.Toggle variant="none" id="dropdown-basic" className = "d-flex justify-content-between align-items-center w-100 big">
                                <div className = "d-flex gap-3 drop">
                                    <p>Urgent</p>
                                    <p>Important</p>
                                </div>
                                <div>
                                </div>
                                {/* <img src= {drop} alt="drop-down"/> */}
                         </Dropdown.Toggle>

                         <Dropdown.Menu className = "list">
                           <Dropdown.Item href="#/action-1" className = 'text'>Urgent</Dropdown.Item>
                           <Dropdown.Item href="#/action-2" className = 'text'>Important</Dropdown.Item>
                         </Dropdown.Menu>
                    </Dropdown>
                </form>

                <div className = 'Top'>
                  <button>Done</button>
                  <h6><Link to = "/alltask" className = "text-decoration-none text-none top">Back to Top</Link></h6>
                </div>
            </header>
        </>
    )
}

export default NewTask
