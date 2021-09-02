import './App.css';
import JACGLOBELESS from './images/JACGLOBELESS.png'
import justtheglobe from './images/justtheglobe.png'
import butane from './images/butane.jpg'
import circleLogo from './images/JACCIRCLE.png'
import AFTERIMAGES from './images/AFTERIMAGES.png'
import ticket from './images/ezgif-2-e4e367b8a3d8.gif'
import ticket2 from './images/LOGO2.png'
import snowglobe from './images/snowglobe11.gif'
import crover from './images/elderjackshadow2.png'
import hearth from './images/hearth.png'
import BC from './images/bc-white.jpg'
import whiteFolder from './images/steelfolders/shinywhite.ico'
import yellowFolder from './images/steelfolders/shinyyellow.ico'
import greenFolder from './images/steelfolders/shinygreen.ico'
import blueFolder from './images/steelfolders/shinyblue.ico'
import redFolder from './images/steelfolders/shinyred.ico'
import white from './images/white.png'
import windshape from './images/windshape.jpg'
import me1 from './images/ME/fuku.png'
import me2 from './images/ME/IMG_2727.PNG'
import zac from './images/zac.jpg'
import ambient from './images/ambient.jpg'
import mother2 from './images/MOTHERSM.png'

import about from './images/gifs/about.gif'
import backflowers from './images/gifs/back_clr.gif'
import answersaboutgod from './images/gifs/answers-about-god.gif'
import shape3d from './images/gifs/Shape3d.gif'
import rising from './images/gifs/risingkundalini.gif'
import sphereyellowani from './images/gifs/sphereyellowani.gif'
import werewolf from './images/gifs/werewolfname.gif'
import chakra1 from './images/gifs/chakra.gif'
import chakra2 from './images/gifs/quachakra.gif'
import chakra3 from './images/gifs/chakra_yoga_purification_an.gif'
import rainbowball from './images/gifs/RainbowBallT.gif'
import followus from './images/gifs/INSTAGRAM-FOLLOW-GIF.gif'

import albumart from './images/albumart.gif'
import just from './images/artbyjames/just.png'
import rama from './images/artbyjames/rama.jpg'
import slowriot from './images/artbyjames/slowriot.jpg'
import shungu from './images/artbyjames/shungu.jpg'
import scenario from './images/artbyjames/scenario.png'

import React from "react";
import ReactPlayer from 'react-player'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/elderjack">
          <ElderJack />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

function Home() {
  return <div className="App">

    <header className="App-header">
      {/* <div id="folders" style={{ marginLeft: 50, display: 'flex', position: 'absolute', left: 40, top: 40, marginBottom: 50}}>

        <div id="motherFolder" className="folderContainer" style={{ marginBottom: 25 }}>
          <p className="folderCaption" style={{ marginBottom: -5, marginRight: 3 }}>MOTHER</p>
          <a
            href="https://unknowngarden.bandcamp.com"
          >
            <img src={whiteFolder} className="folder0" width="100" height="100" />
          </a>
        </div>
        <div id="JACtriofolder" className="folderContainer" style={{ marginTop: 5 }}>
          <a
            href="https://unknowngarden.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={yellowFolder} className="folder1" width="100" height="100" />
          </a>
          <p className="folderCaption" style={{ marginTop: 5 }}>JAMES ARTHUR COOK TRIO</p>
        </div>
        <div id="ElderJackFolder" className="folderContainer" style={{ marginBottom: 25 }}>
          <p className="folderCaption" style={{ marginBottom: -10 }}>ELDER JACK</p>
          <a
            href="https://unknowngarden.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={greenFolder} className="folder0" width="100" height="100" />
          </a>
        </div>
        <div id="miscfolder" className="folderContainer" style={{ marginTop: 5 }}>
          <a
            href="https://unknowngarden.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blueFolder} className="folder1" width="100" height="100" />
          </a>
          <p className="folderCaption" style={{ marginTop: 10 }}>MISC.</p><br />
        </div>
        <div id="aboutfolder" className="folderContainer" style={{ marginBottom: 25 }}>
          <p className="folderCaption" style={{ marginBottom: -5, marginLeft: 15 }}>CONTACT</p>
          <a
            href="https://unknowngarden.bandcamp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={redFolder} className="folder0" width="100" height="100" />
          </a>
        </div>
      </div> */}
      <div style={{ height: 50 }}></div>
      <table>
        <tr>
          {/* <td>
            <p className="title" style={{ marginTop: 240 }}>
             " C O M P O S E R " , " I M P R O V I S E R "
            </p>
          </td> */}
          <td>
            <img src={circleLogo} className="App-logo" alt="logo" height="350" />
          </td>
        </tr>
        <tr>
          <img src={chakra2}  style={{ marginLeft: 200}} />
        </tr>
      </table>


        <img src={ticket2} className="ticket" height="240" />
        <div class="row" style={{marginLeft: -150}}>
          <img src={crover} height='900' />
          <ReactPlayer url='https://www.youtube.com/watch?v=45CrnbpOg-I' />
       <div style={{flexDirection: "column", alignItems: 'center'}}>
       {/* <a
              href="https://www.youtube.com/watch?v=GE7CAm4SNAY"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={butane} width="500" style={{marginLeft: 400}}/>
            </a> */}

            <img src={mother2} height='400' style={{marginLeft: -200}}/>
            <ReactPlayer url='https://www.youtube.com/watch?v=GE7CAm4SNAY' />
      
       </div>
        </div>
<div class="row">
<a
            href="https://carlbaugher.bandcamp.com/album/wind-shape"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={windshape} className="floatimg" width="400" style={{marginTop: -50, marginLeft: 1200}}/>
          </a>

</div>
<div>

<a
                href="https://instagram.com/jamesarthurcook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={followus} width="200"/>
              </a>

              <a
                href="https://unknowngarden.bandcamp.com/album/ambient-works-one"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={ambient} className="macScreenshot" width="600" style={{ marginLeft: -1200, marginTop: -250 }} />
              </a>
  
</div>
<div>
<a
            href="https://unknowngarden.bandcamp.com/album/afterimages"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={AFTERIMAGES} className="macScreenshot" width="500" style={{ marginLeft: 400 }} />
          </a>
              <a
                href="https://unknowngarden.bandcamp.com/album/zac-nunnery-james-cook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={zac} className="macScreenshot" width="400" style={{ marginLeft: 250 }} />
              </a>
</div>
      <img src={answersaboutgod} height="50" style={{ marginLeft: -700, marginBottom: 20 }} />

   <div>
   <img src={snowglobe} style={{ marginLeft: 300, zIndex: 0 }} />
            <div>
              <img className="movie-image" src={JACGLOBELESS} height="200" />
              <img className="movie-image" src={justtheglobe} height="200" />
            </div>
   </div>
      <div style={{ height: 150 }}></div>
      <div style={{ height: 200 }}><img src={albumart} style={{ marginTop: 0 }} /><br></br></div>
      <table>
        <tr>
          <td>
            <img src={shungu} height="500" /><br />
            <p className="description">SHUNGU - ALL I DO (2014)<br />
            Portrait by Beth Wasser</p>
          </td>
          <td>
            <img src={just} height="560" style={{ marginBottom: 51, marginLeft: 50 }} /><br />
            <p className="description" style={{ marginTop: -60 }}>JUST - IN A BLUR/FADED GROUND (2015)</p>
          </td>
        </tr>
        <br /><br />
      </table>
      <table>
        <tr>
          <td>
            <img src={slowriot} height="500" /><br />
            <p className="description">BARN CAT - printf&lt;"cold butane running down my back/​n"&gt;; (PHYSICAL ONLY, 2017)</p>
          </td>
          <td>
            <img src={rama} height="500" style={{ marginLeft: 50, marginRight: 50 }} /><br />
            <p className="description">BARN CAT - RAMA (unreleased)</p>
          </td>
          <td>
            <img src={scenario} height="500" /><br />
            <p className="description">SCENARIO No.1 (2018)</p>
          </td>
        </tr>
      </table>
      
      <div style={{ height: 50 }}></div>
      <p style={{color: "black"}}>
      pretentious jazz bio:

composer, guitarist/alto saxophonist, contemporary artist; presently based in NYC; leader of ensembles performing original music, founding member of drone duo Mother and screamo band Elder Jack (LPs of both due out 2021/22), performer in ensembles led by William Parker, David Liebman, Dennis Warren, Steve Cohn, Chuck Fertal, and others
          
      </p>
      <div class="column">

        <div class="row">
          <table>
            <tr>
              <td>
                <img src={hearth} className="hearth" />
              </td>
              <td>
                <img src={chakra3} style={{ marginBottom: 500 }} />
                <img src={shape3d} />
              </td>
            </tr>
          </table>

        </div>
        <p style={{ color: "black" }}>
   
          thanks for visiting my wwweb world, google Murray Bookchin

        </p>
      </div>
      <img src={werewolf} height="100" /><br />
      <img src={sphereyellowani} />
      <div style={{ height: 200 }}></div>
    </header>
  </div>;
}

function About() {
  return <div>
    <table>
      <tr>
        <td>
          <img src={hearth} />
          <img src={me1} width="800" />
        </td>
        <td>
          <Link to="/">
            <img src={backflowers} height="50" />
          </Link>
        </td>
      </tr>
    </table>
  </div>;
}

function ElderJack() {
  return <h2>Users</h2>;
}
