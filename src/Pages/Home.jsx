import React, { Component } from 'react'
import '../App.css';

class Home extends Component {
  render () {
    return ( 
    
    <div className='home'>
       <div className='home-header'><img src='img/moves_logo_large.png' className='cover'/></div>
       <div className='home-item'>


          <ul>
              <li  className='center'>
                <div>
                  <div className='circle center'><div className='icon icon1'></div></div>
                  <div className='Link'></div>
                </div>
              </li>
          </ul>

       </div>
    </div>
    
    );
  }
}

export default Home;