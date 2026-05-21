import './design3.css'
import playButton from '../../assets/play-button.png';

function Design3() {

  return (
    <>
      <div className="container">
      <div className="navbar">
        <div className="nav-left">LOGO</div>
        <div className="nav-right">HOME PAGE</div>
      </div>
      <div className="first-box">
        <div className="first-left"><h3>Ad Space</h3></div>
        <div className="first-right"><h3>Rotator</h3></div>
      </div>
      <div className="second-box">
        <div className="second-left">
          <img src={playButton} alt="Play Button"/>
        </div>
        <div className="second-right"><h3>Video + Text</h3></div>
      </div>
      <div className="fourth-box">
        <div className="boxs">
          <div className="box1"></div>
        <div className="box2"></div>
        <div className="box3"></div>
        <div className="box4"></div>
        <div className="box5"></div>
        </div>
        <h3>Pics + Mini Bios of Children</h3>
      </div>
    </div>
    </>
  )
}

export default Design3