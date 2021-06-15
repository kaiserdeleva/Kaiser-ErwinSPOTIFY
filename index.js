
function Navigation() {  return (
    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark" id="">
        <a class="navbar-brand"><img src="icon.png" class="spotify"/></a>
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link mr-2" href="">🏠Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-2" href="#courses">📚Your Library</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-2" href="">➕Create Playlist</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="">✔Liked Songs</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link mr-2" href="index.html"><b><u>⬅Log out</u></b></a>
                </li>
               
            </ul>
        </div>
    </nav>
                                )
                                }
// --------------------------end of navigation----------------------

function SideBar() {  return (
<div class="sidebar left ">
  <ul class="list-sidebar bg-defoult">
    <li> <a href=""><i class="fa fa-pie-chart"></i> <span class="nav-label">Singer and Artist 👇👇👇</span> </a></li>
    <li> <a href="#Brunomars"><i class="fa fa-files-o"></i> <span class="nav-label">Bruno Mars</span></a> </li>
    <li> <a href="#edsheeran"><i class="fa fa-files-o"></i> <span class="nav-label">Ed Sheeran</span></a> </li>
    <li> <a href="#boyceavenue"><i class="fa fa-files-o"></i> <span class="nav-label">Boyce Avenue</span></a> </li>
    <li> <a href="#Mfive"><i class="fa fa-files-o"></i> <span class="nav-label">Maroon Five</span></a> </li>
    <li> <a href="#Mendes"><i class="fa fa-files-o"></i> <span class="nav-label">Shawn Mendes</span></a> </li>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
</ul>
</div>
 )
}

// -------------------------------end of side bar--------------------------

function SideBarRight() {  return (
    <div class="container-fluid1">
      <ul class="list-sidebar bg-defoult">
    <h3 class="activity"><b>Friends Activity</b></h3>

    <h6 class="connect">Connect with Facebook to see what your friends are playing.</h6>
    <div class="btn">
    <button type="button" class="btn btn-primary" href="https://www.facebook.com/">📱 Connect With Facebook.</button>
    </div>
            <p class="paragraph">We'll never post anything without your permission. Show and hide Friend Activity from Settings.</p>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
            <div class="strain"></div>
</ul>
    </div>
     )
    }
    // ------------------------end of side bar--------------------

    function Card(props){
        return(
            <div id="courses" class="plain-color">
            <div class="container-fluid2">
                
            <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">

        <h5 class="title">💿{props.title}</h5>
        <p class="artist">🎤By: {props.artist}</p>

        <a href={props.link} class="btn btn-dark">Play Music</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
      <h5 class="title1">💿{props.title1}</h5>
        <p class="artist1">🎤By: {props.artist1}</p>
        <a href={props.link} class="btn btn-dark">Play Music</a>
      </div>
    </div>
  </div>
</div>
 </div>
 </div>
           
        )
      }

    //-------------------------end of card---------------------

var destination = document.getElementById('app');
ReactDOM.render(
<div class="container-fluid">
  <Navigation/>
  <SideBar/>
  <SideBarRight/>
  <div id="Brunomars">
  <Card
  title="Leave the door open"
  artist="Bruno Mars🎩"
  link="bruno1.html"
  title1="Treasure"
  artist1="Bruno Mars🎩"
  link="bruno1.html"
  />
  <Card
  title="Just the way you are"
  artist="Bruno Mars🎩"
  link="bruno2.html"
  title1="That's What I Like"
  artist1="Bruno Mars🎩"
  link="bruno2.html"
  />
  </div>
 {/* ----------------------end Bruno Mars------------------ */}
  <div id="edsheeran">
  <Card
  title="Thinking Out Loud"
  artist="Ed Sheeran🎸"
  link="ed1.html"
  title1="Perfect"
  artist1="Ed Sheeran🎸"
  link="ed1.html"
  />
  <Card
  title="Shape Of You"
  artist="Ed Sheeran🎸"
  link="ed2.html"
  title1="Photograph"
  artist1="Ed Sheeran🎸"
  link="ed2.html"
  />
  </div>
  {/* ----------------------end ed sheeran------------------ */}
  <div id="boyceavenue">
  <Card
  title="The Middle"
  artist="Boyce Avenue cover🥁🎹"
  link="boyce1.html"
  title1="Tears in Heaven"
  artist1="Boyce Avenue cover🥁🎹"
  link="boyce1.html"
  />
  <Card
  title="A thousand miles"
  artist="Boyce Avenue cover🥁🎹"
  link="boyce2.html"
  title1="I'm not the only one"
  artist1="Boyce Avenue cover🥁🎹"
  link="boyce2.html"
  />
  </div>
  {/* ----------------------end boyce avenue------------------ */}
  <div id="Mfive">
  <Card
  title="Sugar"
  artist="Maroon5🔴"
  link="maroon1.html"
  title1="This Love"
  artist1="Maroon5🔴"
  link="maroon1.html"
  />
  <Card
  title="Memories"
  artist="Maroon5🔴"
  link="maroon2.html"
  title1="Girls like You"
  artist1="Maroon5🔴"
  link="maroon2.html"
  />
  </div>
  {/* ----------------------end Maroon5------------------ */}
  <div id="Mendes">
  <Card
  title="Treat you better"
  artist="Shawn Mendes👦"
  link="shawn1.html"
  title1="Stitches"
  artist1="Shawn Mendes👦"
  link="shawn1.html"
  />
  <Card
  title="SENORITA"
  artist="Shawn Mendes👦"
  link="shawn2.html"
  title1="There's Nothing Holdin' Me Back"
  artist1="Shawn Mendes👦"
  link="shawn2.html"
  />
  </div>
  {/* ----------------------end mendes------------------ */}

</div>,
  destination
);

$(document).ready(function(){
    $('button').click(function(){
        $('.sidebar').toggleClass('fliph');
    });   
 });