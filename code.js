let code = [
    {
        cardToken: 1,
        html: `
        <nav>
        <div class="logo">
           LOGO
        </div>
        <div class="menu">
           <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Contact</a></li>
           </ul>
        </div>
    </nav>`,
        css: `
    *{
      box-sizing: border-box;
  }
  body{
    margin: 0;
    font-family: 'Comfortaa', cursive;
  }
  .logo {
      line-height: 60px;
      position: fixed;
      float: left;
      padding: 1rem;
      color: #fff;
      font-weight: bold;
      font-size: 1rem;
      letter-spacing: 2px;
  }
  
  nav {
      position: fixed;
      width: 100%;
      transition: 1s;
      z-index: 2;
  }
  
  .activeNavBar{
      background: rgba(0, 0, 0, 0.884);
      transition: 1s;
  }
  
  nav ul {
      line-height: 10vh;
      list-style: none;
      overflow: hidden;
      color: #fff;
      padding: 0;
      text-align: right;
      margin: 0;
      background: rgba(0, 0, 0, 0);
      transition: 1s;
  }
  
  nav.black ul {
      background: #000;
  }
  
  nav ul li {
      display: inline-block;
      padding: 1rem 1.5rem;
  }
  nav ul li:hover{
      background: rgba(0, 0, 0, 0.322);
      cursor: pointer;
  }
  
  nav ul li a {
      text-decoration: none;
      color: #fff;
      font-size: 16px;
  }
  .image_box{
      height: 120vh;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 2.8px 17.5px rgb(0, 0, 0);
  }
  img{
      filter: brightness(60%);
      min-width: 100%;
      max-height: 100%
  }`,
        js: `
        
let navBar = document.querySelector("nav");

window.addEventListener('scroll', function() {
    if(window.pageYOffset > 0 ){
        navBar.setAttribute("class", "activeNavBar")
    }
    else if((window.pageYOffset == 0 )){
        navBar.classList.remove("activeNavBar")
    }
    
    });`
    },
    {
        cardToken: 2,
        html: `
    <nav class="navbar">
        <a class="active" href="#home">Home</a>
        <a href="#home">About</a>
        <div class="logo">
            <i class="fas fa-igloo"></i>
            Logo
        </div>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>

    </nav>`,
        css: `
    .navbar {
        width: 100%;
        padding: 6rem 2rem;
        overflow: hidden;
        position: fixed;
        top: 0;
        display: flex;
        justify-content: space-evenly;
        z-index: 99;
        color: rgb(238, 234, 234);
        background: url("../images/img5.jpg");
        transition: 0.4s;
    }
      
    .navbar a {
        float: left;
        color: rgb(235, 229, 229);
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px; 
        line-height: 25px;
        border-radius: 4px;
    }
      
    .navbar .logo {
        font-size: 35px;
        font-weight: bold;
        transition: 0.4s;
    }
      
    .navbar a:hover {
        background-color: rgba(194, 197, 197, 0.418);
    }
      
    .navbar a.active {
        background-color: rgba(100, 105, 104, 0.616);
        color: white;
    }`,
        js: `
    let navBar = document.querySelector("nav");
    let logo = document.querySelector(".logo");
    window.addEventListener('scroll', scrollFunction)
    
    function scrollFunction() {
      if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        navBar.style.padding = "30px 10px";
        logo.style.fontSize = "25px";
      } else {
        navBar.style.padding = "80px 10px";
        logo.style.fontSize = "35px";
      }
    }`
    },
    {
        cardToken: 3,
        html: `
      <nav class="nav">
        <input type="checkbox">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <div class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </div>
    </nav>`,
        css: `
      body {
        margin: 0;
        padding: 0;
        min-height: 100vh;
        background-color: #ffadc1c7;
        padding: 2rem;
    }
    
    body, .nav, .menu {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .nav {
        padding: 1.5rem;
        position: relative;
        background-color: #fff;
        border-radius: 2rem;
        overflow: hidden;
        transition: 0.5s;
        box-shadow: 0 3px 9px rgba(65, 64, 64, 0.2),
        0 8px 15px rgba(0,0,0,.2);
    }
    
    .menu {
        margin: 0;
        padding: 0;
        width: 0;
        overflow: hidden;
        transition: 0.5s;
    }
    
    .nav input:checked ~ .menu {
        width: 430px;
    }
    
    .menu li {
        list-style: none;
        margin: 0 0.7rem;
    }
    
    .menu li a {
        text-decoration: none;
        color: #666;
        font-weight: 600;
        font-size: 1.4rem;
        transition: 1s;
    }
    
    .menu li a:hover {
        color: #f974a1;
    }
    
    input {
        width: 40px;
        height: 40px;
        cursor: pointer;
        opacity: 0;
    }
    
    .line {
        position: absolute;
        left: 28px;
        width: 40px;
        height: 5px;
        border-radius: 50px;
        background-color: #666;
        pointer-events: none;
        transition: 1s;
    }
    
    .nav input:checked ~ .line {
        background-color: #f974a1;
    }
    
    .nav .line:nth-child(2) {
        transform: translateY(-10px);
    }
    
    .nav .line:nth-child(3) {
        transform: translateY(10px);
    }`,
    },
    {
        cardToken: 4,
        html:`
        <aside>
        <nav>
            <div class="logo">
                <h3>
                    LOGO 
                </h3>
                <i class="fas fa-igloo"></i>
            </div>
            <!-- add below link to the head -->
            <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> -->
            <div class="menu">
                <ul>
                    <li><a href="#">
                            <div class="box">
                                <h3>
                                    Home
                                </h3>
                                <i class="fas fa-home"></i>
                            </div>
                        </a></li>
                    <li><a href="#">
                            <div class="box">
                                <h3>
                                    Gallery
                                </h3>
                                <i class="far fa-image"></i>
                            </div>
                        </a></li>
                    <li><a href="#">
                        <div class="box">
                            <h3>
                                About
                            </h3>
                            <i class="far fa-question-circle"></i>
                        </div>
                        </a></li>
                    <li><a href="#">
                        <div class="box">
                            <h3>
                                Setting
                            </h3>
                            <i class="fas fa-cog"></i>
                        </div>
                        </a></li>
                    <li><a href="#">
                        <div class="box">
                            <h3>
                                Contact
                            </h3>
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        </a></li>
                </ul>
            </div>
        </nav>
    </aside>`,
        css:`
        html {
            scroll-behavior: smooth;
          }
        aside{
            height: 100vh;
            width: 20vw;
            position: absolute;
            left: -16vw;
            top: 0;
            padding: 1rem;
            background-color: rgb(169, 194, 179);
            transition: 0.5s ease;
            z-index: 5;
        }
        aside:hover{
            left: 0;
        }
        .logo{
            height: 4rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            color: rgba(43, 47, 59, 0.836);
            border-bottom: 1px solid rgba(147, 147, 150, 0.582);
        }
        .logo h3{
            margin: 0;
            font-size: 1.8rem;
            letter-spacing: 5px;
        }
        .logo .fas{
            font-size: 1.8rem;
        }
        nav{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }
        ul{
            list-style: none;
            overflow: hidden;
            color: rgb(209, 206, 206);
            padding: 0;
            margin: 0;
        
        }
        li{
            width: 100%;
            padding: 1.1rem 0;
        }
        li:hover{
            background-color: rgba(120, 150, 132, 0.767);
            border-radius: 0.5rem;
            cursor: pointer;
        }
        a{
            text-decoration: none;
        }
        h3{
            margin: 0;
        }
        .box{
            color: rgba(43, 47, 59, 0.836);
            display: flex;
            justify-content: space-between;
        
        }
        .box i{
            font-size: 1.8rem;
        }
        
        @media screen and (max-width: 1000px) {
            aside{
                width: 30vw;
                left:-23vw;
            }
            .logo h3{
                letter-spacing: 1px;
            }
            li{
                width: 100%;
                padding: 0.8rem 0;
            }
        }`,
        js:`
        let navBar = document.querySelector("aside");

        window.addEventListener('scroll', function(){
            console.log(window.pageYOffset);
            navBar.style.top = window.pageYOffset + "px";
        
        })`
    },
    {
        cardToken:5,
        html:`
        <nav>
        <div class="menu">
           <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Gallery</a></li>
              <li><a href="#">Contact</a></li>
           </ul>
        </div>
    </nav>`,
        css:`
        nav {
            width: 100%;
            position: sticky;
            top: 0;
            transition: 1s;
        }
        nav ul {
            list-style: none;
            overflow: hidden;
            padding: 0.5rem;
            text-align: center;
            margin: 0;
            background: rgba(255, 169, 99, 0.959);
            transition: 1s;
        }
        
        nav ul li {
            width: 10rem;
            display: inline-block;
            border-radius: 1rem;
            padding: 1rem 1.5rem;
        }
        nav ul li:hover{
            background: rgba(247, 202, 160, 0.637);
            cursor: pointer;
        }
        
        nav ul li a {
            text-decoration: none;
            color: rgb(77, 74, 74);
            font-size: 20px;
            font-weight: 600;
        }`
    },
    {
        cardToken:6,
        html:`
        <div class="nav">
        <input type="checkbox">
        <span class="line"></span>
        <span class="line"></span>
        <div class="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </div>
    </div>`,
        css:`
        *{
            box-sizing: border-box;
        }
        body {
            margin: 0;
            font-family: 'Comfortaa', cursive;
            background: gray;
        }
        .menu{
            margin: 0;
            padding: 0;
            width: 0;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            transition: 0.5s;
            background-color: #3e3e41a2;
        }
        .nav input:checked ~ .menu {
            width: 28vw;
        }
        .menu li {
            padding: 2rem;
            list-style: none;
        }
        .menu li a {
            text-decoration: none;
            color: rgb(166, 245, 39);
            font-weight: 600;
            font-size: 1.8rem;
            transition: 1s;
        }
        .menu li:hover {
            color: #a3d49c;
        }
        input {
            width: 3rem;
            height: 40px;
            margin-left: 0.5rem;
            cursor: pointer;
            opacity: 0;
            position: absolute;
        }
        
        .line {
            position: absolute;
            margin-left: 0.5rem;
            top: 20px;
            left: 0;
            width: 40px;
            height: 5px;
            border-radius: 50px;
            background-color: rgb(166, 245, 39);
            pointer-events: none;
            transition: 1s;
        }
        
        .nav input:checked ~ .line {
            background-color: rgb(166, 245, 39);
        }
        
        .nav .line:nth-child(3) {
            transform: translateY(10px);
        }
        
        input:checked ~ .line:nth-child(2) {
            transform:   rotate(45deg);
          }
        
        input:checked ~ .line:nth-child(3) {
            transform:  rotate(-45deg);
        }
        
        /* 398 */
        @media screen and (max-height: 400px) {
            .menu{
                height: 398px;
            }
            .menu li {
                padding: 1rem;
            }
            .menu li a{
                font-size: 1rem;
            }
        }`
    }
]