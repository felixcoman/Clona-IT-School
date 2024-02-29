class MyHeader extends HTMLElement{
    connectedCallback(){
        this.innerHTML= ˋ
    <nav>
     <div class="nav-bar">
        <a href="HOME.HTML">
        <img
            src="https://itschool-clone.netlify.app/img/itschool-logo.png"
            alt="home logo"
        />
        </a>
        <div class="navbar-group">
        <a href="cursuri.html">CURSURI ONLINE</a>

        <div class="dropdown-fullscreen">
            <button class="dropbtn-fullscreen">
            <a href="#">
                DESPRE NOI
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
                >
                <path
                    d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"
                />
                </svg>
            </a>
            </button>
            <ul popover class="dropdown-content-fullscreen">
        
            <li><a href="HOME.HTML">IT SCHOOL</a></li>
            <li><a href="#">DESPRE NOI</a></li>
            </ul>
        </div>
    
        <a href="#">CONTACT</a>
        </div>

        <div class="dropdown">
        <button
            class="menu-btn"
            popovertarget="dropdown-menu-items"
            popovertargetaction="toggle"
        >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-list"
            viewBox="0 0 16 16"
            >
            <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
            </svg>
        </button>
        
        <ul popover class="dropdown-menu-items" id="dropdown-menu-items">
            <li><a class="dropdown-item" href="cursuri.CSS">CURSURI ONLINE</a></li>
            <li><a class="dropdown-item" href="#">DESPRE NOI</a></li>
            <li><a class="dropdown-item" href="#">CONTACT</a></li>
        </ul>
        </div>
    </div>
</nav>
ˋ
    }
}
customElements.define('my-header', MyHeader)
class MyFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML= ˋ
<footer>
  <p>IT School România © 2021. Toate drepturile rezervate.</p>
</footer>
ˋ
    }
}
customElements.define('my-footer', MyFooter)