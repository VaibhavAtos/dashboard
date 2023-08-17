import React from 'react'
import '../Styles/Dashboard.css'

import Home from '../Assets/house-solid.svg'
import Arrow from '../Assets/chevron-right.svg'

import Home_Line from '../Assets/house.svg'
import Filter from '../Assets/list-line-align-right.svg'
import List from '../Assets/tasks.svg'
import Timer from '../Assets/clock-circle.svg'
import Notepad from '../Assets/clipboard-pen.svg'
import Bookmark from '../Assets/bookmark.svg'
import Cube from '../Assets/analysis.svg'
import Calender from '../Assets/calender.svg'
import Anlaysis from '../Assets/reports.svg'
import ThreeDot from '../Assets/ellipsis.svg'

import FilterDown from '../Assets/filter-bars.svg'

import leftarrow from '../Assets/arrow-left.svg'

const Dashboard = () => {
  return (
    <>
      <div className="containeghghr-fluid">
      <div className="row">
        <div className="col" id='section-align-with-sidebar'>


        <div className="Profile-name-section" >
        <div className="row">
          <div className="col-9">
          <h1 className='name'>Muamele Munderecati</h1>
          </div>
          <div className="col">
            <img src={leftarrow}/>
          </div>
          
        </div>


        <div class="row" id='count-section'>
          <div class="col">
            <h6 className='count-section-head'>12</h6>
            <p className='count-section-para'>Asama</p>
          </div>
          <div class="col">
          <h6 className='count-section-head'>23</h6>
            <p className='count-section-para'>Alt Klasor</p>
          </div>
          <div class="col">
          <h6 className='count-section-head'>1235</h6>
            <p className='count-section-para'>Dokuman</p>
          </div>
          <div class="col">
            <img src={FilterDown} className='filter-bars'/>
          </div>
        </div>

        

<hr></hr>

        <div className="row">
          <div className="col-9">
          <h1 className='placeholder-name'>Filter by Client/Matter name</h1>
          </div>
          <div className="col">
            <img src={FilterDown} className='filter-down-fade'/>
          </div>
          
        </div>
        <hr></hr>
      </div>


          
        </div>



        <div className="col">

          <div className="section-two-topbar">

          <div class="row" id="section-row">
              <div class="col-1">
                <center><img src={Home}/><img src={Arrow}/></center>
              </div>
              <div class="col-1">
              <center><p>CLIENT <img src={Arrow}/></p></center>
              </div>
              <div class="col-1">
              <center><p>MATTER <img src={Arrow}/></p></center>
              </div>
              <div class="col-2">
              <center><p>MUYAMELE DETAY SAYFASI <img src={Arrow}/></p></center>
              </div>
              <div class="col-2">
              <center><p>MUYAMELE MUNDARCATI</p></center>
              </div>
            </div>

            <br></br>





            <div class="row">
              <div class="col-11">
              <div class="container">
  <div class="row">
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
    <div class="col">
      Column
    </div>
  </div>
</div>
              </div>






              <div class="col" id='left-side-nav-div'>
                <div className='left-side-nav'>
                
                  <div>
                  <center>
                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Home_Line}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>

                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Filter}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>

                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={List}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Timer}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Notepad}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Bookmark}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Cube}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Calender}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>

                  <hr></hr>

                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={Anlaysis}/>
                        <p className='menu-block-para'>Muamele</p>
                    </div>


                    <div className='menu-block-side'>
                        <img  className='menu-block-img' src={ThreeDot}/>
                        
                    </div>

                    


                  </center>
                  </div>
                  
                </div>
              </div>
              
            </div>

          </div>


        


        </div>
        
      </div>
    </div>
    </>
  )
}

export default Dashboard