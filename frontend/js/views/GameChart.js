import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Game Chart");
    }

    async getHtml() {
        return `
        <nav class="navbar">
        <div class="logo-container"><a href="/dashboard" data-link>
          <div class="logo">
            <img src="../../assets/logo.png" alt="IndianPong Logo" width="48" height="48">
            IndianPong
          </div></a>
      </div>
      <ul class="nav-links">
      <li><a href="/dashboard" data-link><i class="bi bi-house-door-fill"></i>Dashboard</a></li>
      <li><a href="/chat" data-link><i class="bi bi-chat-fill"></i>Chat</a></li>
      <li><a href="/pong-game" data-link><i class="bi bi-play-circle-fill"></i>Pong Game</a></li>
      <li><a href="/rps-game" data-link><i class="bi bi-scissors"></i>RPS Game</a></li>
      <li><a href="/rankings" data-link><i class="bi bi-bar-chart-fill"></i>Rankings</a></li>
      <li><a href="/search" data-link><i class="bi bi-binoculars-fill"></i>Search</a></li>
      <li class="notification-menu">
      <div class="notification-icon">
          <i class="bi bi-bell-fill"></i>
          
      </div>
      <div class="notification-submenu">
        <a href="/test" data-link>Arda followed you!</a>
        <a href="/test" data-link>Arda followed you!</a>
        <a href="/test" data-link>Arda followed you!</a>
      </div>
      </li>
      <li class="profile-menu">
        <div class="profile-image">
          <img src="../../assets/profile/profilephoto.jpeg" alt="Profile Image" width="48" height="48">
        </div>
        <div class="profile-submenu">
          <a href="/profile" data-link><i class="bi bi-person-fill"></i>Profile</a>
          <a href="/profile-settings" data-link><i class="bi bi-gear-fill"></i>Settings</a> 
          <a href="/logout" data-link><i class="bi bi-box-arrow-right"></i>Logout</a>
        </div>
      </li>
    </ul>
    <div class="burger-menu">&#9776;</div>
  </nav>

          <div class="container-top">
            <div class="card">
                
              
                <div class="game-chart-middle">
                    <h1>XXX Room Tournament Bracket</h1>
                    <h2>Ping Pong Game Olympics</h2> 
                </div>
                <div class="game-bracket-section">
                  <div class="bracket-area">
                    <div class="bracket disable-image">
                      <div class="column one">
                        <div class="match winner-bottom">
                          <div class="match-top team">
                            <span class="image"></span>
                            <span class="seed">1</span>
                            <span class="name">Fatih Terim</span>
                            <span class="score">1</span>
                          </div>
                          <div class="match-bottom team">
                            <span class="image"></span>
                            <span class="seed">2</span>
                            <span class="name">Enemy</span>
                            <span class="score">2</span>
                          </div>
                          <div class="match-lines">
                            <div class="line one"></div>
                            <div class="line two"></div>
                          </div>
                          <div class="match-lines alt">
                            <div class="line one"></div>
                          </div>
                        </div>
                        <div class="match winner-bottom">
                          <div class="match-top team">
                            <span class="image"></span>
                            <span class="seed">3</span>
                            <span class="name">Enemy</span>
                            <span class="score">1</span>
                          </div>
                          <div class="match-bottom team">
                            <span class="image"></span>
                            <span class="seed">4</span>
                            <span class="name">Enemy</span>
                            <span class="score">2</span>
                          </div>
                          <div class="match-lines">
                            <div class="line one"></div>
                            <div class="line two"></div>
                          </div>
                          <div class="match-lines alt">
                            <div class="line one"></div>
                          </div>
                        </div>
                      </div>
                      <div class="column three">
                        <div class="match winner-top">
                          <div class="match-top team">
                            <span class="image"></span>
                            <span class="seed">5</span>
                            <span class="name">West Virginia Runners</span>
                            <span class="score">3</span>
                          </div>
                          <div class="match-bottom team">
                            <span class="image"></span>
                            <span class="seed">3</span>
                            <span class="name">San Francisco Porters</span>
                            <span class="score">2</span>
                          </div>
                          <div class="match-lines">
                            <div class="line one"></div>
                            <div class="line two"></div>
                          </div>
                          <div class="match-lines alt">
                            <div class="line one"></div>
                          </div>
                        </div>        
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        `
    }
}