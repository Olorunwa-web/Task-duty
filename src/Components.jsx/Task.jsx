import React from 'react'
import '../Styles/task.css'
import plus from '../assets/fluent_add-24-filled.png'
import note from '../assets/clarity_note-edit-line.svg'
import result from '../assets/fluent_delete-24-regular.svg'
import {Link} from 'react-router-dom'
const Task = () => {
    return (
        <>
          <section className = 'container my-4'>
              <div className = 'd-flex justify-content-between align-items-center pick'>
                  <h3>My Tasks </h3>
                  <div className = 'd-flex  gap-2 justify-content-between align-items-center tasks'>
                      {" "}<Link to = '/newtask'className = 'd-flex gap-2 justify-content-between  align-items-center tasks text-decoration-none'>
                     <img src= {plus} alt="plus-sign" className = 'plus' />
                      <h4>Add New Task</h4>
                      </Link>{" "}
                  </div>
              </div>


              {/* urgent */}
              <div className = 'urgent my-5'>
                  <div className = 'd-flex justify-content-between align-items-center tip'>
                      <p>Urgent</p>
                      <div className = 'd-flex gap-3 tech'>
                          <p className = 'edit'><Link to = '/edittask' className = 'text-decoration-none Edit'>Edit</Link></p>
                          <p className = 'result'>Delete</p>
                      </div>
                  </div>
                  <hr/>
                  <div className = "fin">
                   <h4 >FinTech Website Update</h4>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus supendisse et viverra.</p>
                  </div>
              </div>


              {/* important */}
              <div className = 'urgent my-5'>
                  <div className = 'd-flex justify-content-between align-items-center tips'>
                      <p>Important</p>
                      <div className = 'd-flex gap-3 tech'>
                          <p className = 'edit'><Link to = '/edittask' className = 'text-decoration-none Edit'>Edit</Link></p>
                          <p className = 'result'>Delete</p>
                      </div>
                  </div>
                  <hr/>
                  <div className = "fin">
                   <h4 >Agro Website Update</h4>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus supendisse et viverra.</p>
                  </div>
              </div>

              {/* urgent */}
              <div className = 'urgent my-5'>
                  <div className = 'd-flex justify-content-between align-items-center tip'>
                      <p>Urgent</p>
                      <div className = 'd-flex gap-3 tech'>
                          <p className = 'edit'><Link to = '/edittask' className = 'text-decoration-none Edit'>Edit</Link></p>
                          <p className = 'result'>Delete</p>
                      </div>
                  </div>
                  <hr/>
                  <div className = "fin">
                   <h4 >FinTech Website Update</h4>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus supendisse et viverra.</p>
                  </div>
              </div>

              {/* Important */}
              <div className = 'urgent my-5'>
                  <div className = 'd-flex justify-content-between align-items-center tips'>
                      <p>Important</p>
                      <div className = 'd-flex gap-3 tech'>
                          <p className = 'edit'><Link to = '/edittask' className = 'text-decoration-none Edit'>Edit</Link></p>
                          <p className = 'result'>Delete</p>
                      </div>
                  </div>
                  <hr/>
                  <div className = "fin">
                   <h4 >Agro Website Update</h4>
                   <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet quis nibh posuere non tempor. Erat mattis gravida pulvinar nibh aliquam faucibus et magna. Interdum eu tempus ultricies cras neque mi. Eget tellus supendisse et viverra.</p>
                  </div>
              </div>

              <h6 className = 'text-center'>Back To Top</h6>
          </section>  
        </>
    )
}

export default Task
