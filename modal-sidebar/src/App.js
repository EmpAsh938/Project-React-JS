<<<<<<< HEAD
import { useState } from "react";
import { FaBars, FaTimes, FaHtml5 } from "react-icons/fa";
import { links, social } from './data'
 
function App() {
  const [modalOpen, setModalOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // console.log(social)
  return (
    // Hero
    <>
      <div className="App">
        <div className="App-menu">
          <button
          onClick={()=>setSidebarOpen(!sidebarOpen)} 
          className="btn btn-menu">
            <FaBars />
          </button>
        </div>

        <div className="App-modal">
          <button 
          onClick={()=>setModalOpen(!modalOpen)}
          className="btn btn-modal"
          >Show Modal Content</button>
        </div>
       {/* Modal */}
        <div className={modalOpen ? 'modal show-modal' : 'modal'}>
          <div className='modal-box'>
            <div className='btn-container'>
            <button 
            onClick={()=>setModalOpen(false)}
            className='btn btn-close'>
              <FaTimes />
            </button>
            </div>
            <h2 className='modal-header'>Modal Content</h2>
          </div>
        </div>
        </div>
      {/* Sidebar */}
      <div className={sidebarOpen ? "sidebar show-sidebar" : "sidebar"}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
          <FaHtml5 />
          </div>
          <button 
          onClick={()=>setSidebarOpen(false)}
          className='btn btn-close'>
          <FaTimes />
          </button>
        </div>
        <ul className="sidebar-links">
          {links.map(link => {
            const {id, url, text, icon} = link
            return (
            <li key={id} className='links-icon'><span>{icon}</span><a href={url}>{text}</a></li>
            )
          })}
        </ul>
        <ul className="sidebar-social">
          {social.map(item => {
            const {id, url, icon} = item
            return (
            <li key={id}><a href={url}>{icon}</a></li>
            )
          })}
        </ul>
      </div>
    </>
=======
import Title from "./Title";
import Hero from "./Hero";

function App() {
  return (
    <main>
      <section>
        <Title />
        <Hero />
      </section>
    </main>
>>>>>>> f364450 (updated projects)
  );
}

export default App;
