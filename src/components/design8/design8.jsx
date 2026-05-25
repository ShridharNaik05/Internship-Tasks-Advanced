import './design8.css'
import bulbButton from '../../assets/bulb.png';
import handshakeButton from '../../assets/handshake.png';
import microphoneButton from '../../assets/microphone.png';

function Design8() {

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

                <div className="middle-item">
                    <img src={bulbButton} className="icon" />
                    <div className="text">Fundraiser Idea + Text</div>
                </div>

                <div className="middle-item">
                    <img src={handshakeButton} className="icon" />
                    <div className="text">Fundraiser Idea + Text</div>
                </div>

                <div className="middle-item">
                    <img src={microphoneButton} className="icon" />
                    <div className="text">Fundraiser Idea + Text</div>
                </div>

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

export default Design8