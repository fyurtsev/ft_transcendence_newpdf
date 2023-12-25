import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Profile Settings");
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
          <li><a href="/pong-game" data-link><i class="bi bi-play-circle-fill"></i>Pong Game</a></li>
          <li><a href="/rps-game" data-link><i class="bi bi-scissors"></i>RPS Game</a></li>
          <li><a href="/rankings" data-link><i class="bi bi-bar-chart-fill"></i>Rankings</a></li>
          <li><a href="/search" data-link><i class="bi bi-binoculars-fill"></i>Search</a></li>
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
      <div class="row">
      <!-- Left Sidebar -->
      <div class="col-md-3">
          <nav class="navbar navbar-expand-lg navbar-light bg-light rounded">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#profileNavbar"
                  aria-controls="profileNavbar" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="profileNavbar">
                  <ul class="navbar-nav flex-column">
                      <li class="nav-item">
                          <a class="nav-link" href="javascript:void(0);" onclick="displaySection('editProfile')"><i class="bi bi-pencil-fill"></i> Edit Profile</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="javascript:void(0);" onclick="displaySection('changePassword')"><i class="bi bi-lock-fill"></i> Change Password</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="javascript:void(0);" onclick="displaySection('addSocial')"><i class="bi bi-bookmark-fill"></i> Add Socials</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="javascript:void(0);" onclick="displaySection('google2FA')"><i class="bi bi-google"></i> Google 2FA</a>
                      </li>
                      <li class="nav-item">
                          <a class="nav-link" href="javascript:void(0);" onclick="displaySection('closeAccount')"><i class="bi bi-door-closed-fill"></i> Close Account</a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>

    <!-- Edit Profile Content -->

    <div class="col-xl-9">
        <!-- Change Photo Section -->

        <!-- Edit Profile Form -->
        <section id="editProfile">
            <form id="editProfileForm">
                  <div class="profile-pic-container">
                  <label for="fileInput" class="profile-pic-label">
                    <img src="../../assets/profile/profilephoto.jpeg" alt="Profile Picture" class="profile-pic">
                    <div class="change-image-overlay">
                      <span class="bi bi-image-fill"></span>
                      <span class="change-image-text">Change Image</span>
                    </div>
                  </label>
                  <input type="file" id="fileInput" class="file-input">
                </div>

                <!-- Username textbox -->
                <div class="mb-3">
                    <label class="small mb-1" for="inputUsername">Username (how your name will appear to other users on the site)</label>
                    <input class="form-control" id="inputUsername" type="text" value="eyagiz" placeholder="Enter your username">
                </div>

                <!-- Email textbox -->
                <div class="mb-3">
                    <label class="small mb-1" for="inputEmail">Email</label>
                    <input class="form-control" id="inputEmail" type="text" value="nsyagz@gmail.com" placeholder="Enter your Email address" type="email">
                </div>

                <!-- Firstname textbox -->
                <div class="row gx-3 mb-3">
                    <!-- Form Group (first name)-->
                    <div class="col-md-6">
                        <label class="small mb-1" for="inputFirstName">First name</label>
                        <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your Name" value="Fatih">
                    </div>
                    <!-- Form Group (last name)-->
                    <div class="col-md-6">
                        <label class="small mb-1" for="inputLastName">Last name</label>
                        <input class="form-control" id="inputLastName" type="text" placeholder="Enter your Last Name" value="Terim">
                    </div>
                </div>
                <!-- Email address textbox -->
                <div class="row gx-3 mb-3">
                    <!-- Form Group (phone number)-->
                    <div class="col-md-6">
                        <label class="small mb-1" for="inputPhone">Phone number</label>
                        <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your Phone number" value="(545) 411 9245">
                    </div>
                    <!-- Form Group (birthday)-->
                    <div class="col-md-6">
                        <label class="small mb-1" for="inputBirthday">Birthday</label>
                        <input class="form-control" id="inputBirthday" type="date" name="birthday" value="2002-07-27">
                    </div>
                </div>
                <!-- Submit button -->
                <button type="submit" class="btn btn-success">Save Changes</button>
            </form>
        </section>

        <section id="google2FA">
            <form id="google2FAForm">    
                <h3>Secure Your Account</h3>
                <div id="qrCodeContainer" style="background=" class="mb-3"></div>
                <p>Scan this QR code using a mobile app (for example, "Google Authenticator"). The application will show a six-digit number, which must be specified in the login.</p>
            </form>

            <button class="google2fa-active" onclick="active2FA()">Active 2FA</button>
            <button class="google2fa-disable" onclick="disable2FA()">Disable 2FA</button>
            <button class="google2fa-refresh" onclick="refreshQRCode()">Refresh QR Code</button>
        </section>

        <!-- Change Password Section -->
        <section id="changePassword">
            <!-- Your code for changing password goes here -->
            <form id="changePasswordForm">
                    
                    <div class="mb-3 position-relative">
                        <label class="small mb-1" for="currentPassword">Current Password</label>
                        <div class="input-group">
                            <input class="form-control" id="currentPassword" type="password" required>
                            <button class="btn btn-outline-secondary" type="button" onclick="togglePasswordVisibility('currentPassword')">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mb-3 position-relative">
                        <label class="small mb-1" for="newPassword">New Password</label>
                        <div class="input-group">
                            <input class="form-control" id="newPassword" type="password" required>
                            <button class="btn btn-outline-secondary" type="button" onclick="togglePasswordVisibility('newPassword')">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>
                    </div>

                    <div class="mb-3 position-relative">
                        <label class="small mb-1" for="confirmNewPassword">Confirm New Password</label>
                        <div class="input-group">
                            <input class="form-control" id="confirmNewPassword" type="password" required>
                            <button class="btn btn-outline-secondary" type="button" onclick="togglePasswordVisibility('confirmNewPassword')">
                                <i class="bi bi-eye"></i>
                            </button>
                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary"><i class="bi bi-lock-fill"></i> Change Password</button>
                </form>
        </section>

        <section id="addSocial">
            <form id="addSocialForm">
                <div class="mb-3 position-relative">
                    <label class="small mb-1" for="socialStackoverflow">
                        <i class="bi bi-stack-overflow fs-4"></i> Stackoverflow
                    </label>
                    <div class="input-group">
                        <input class="form-control" id="socialStackoverflow" type="text" placeholder="Enter your Stackoverflow username">
                    </div>
                </div>

                <div class="mb-3 position-relative">
                    <label class="small mb-1" for="socialTwitter">
                        <i class="bi bi-twitter-x fs-4"></i> Twitter
                    </label>
                    <div class="input-group">
                        <input class="form-control" id="socialTwitter" type="text" placeholder="Enter your Twitter username">
                    </div>
                </div>

                <div class="mb-3 position-relative">
                    <label class="small mb-1" for="socialInstagram">
                        <i class="bi bi-instagram fs-4"></i> Instagram
                    </label>
                    <div class="input-group">
                        <input class="form-control" id="socialInstagram" type="text" placeholder="Enter your Instagram username">
                    </div>
                </div>

                <div class="mb-3 position-relative">
                    <label class="small mb-1" for="socialGithub">
                        <i class="bi bi-github fs-4"></i> Github
                    </label>
                    <div class="input-group">
                        <input class="form-control" id="socialGithub" type="text" placeholder="Enter your Github username">
                    </div>
                </div>

                <div class="mb-3 position-relative">
                    <label class="small mb-1" for="socialLinkedin">
                        <i class="bi bi-linkedin fs-4"></i> Linkedin
                    </label>
                    <div class="input-group">
                        <input class="form-control" id="socialLinkedin" type="text" placeholder="Enter your Linkedin username">
                    </div>
                </div>


                <!-- Diğer sosyal medya platformları için benzer şekilde devam edebilirsiniz -->

                <button type="submit" class="btn btn-primary"><i class="bi bi-save-fill"></i> Save Changes</button>
            </form>
        </section>

        <section id="closeAccount">
            <form id="closeAccountForm">
                <div class="mb-3 position-relative">
                    <label class="small mb-1" for="passwordToDeleteAccount">
                        Enter your password to delete your account:
                    </label>
                    <div class="input-group">
                        <input class="form-control" id="passwordToDeleteAccount" type="password" required>
                        <button class="btn btn-outline-danger" type="button" onclick="togglePasswordVisibility('passwordToDeleteAccount')">
                            <i class="bi bi-eye"></i>
                        </button>
                    </div>
                    </div>
                <p>
                Hello, we're sorry to see you leave the IndianPong community, but we respect your decision. After clicking 
                the 'Delete Account' button, you will be separated from us, so please think carefully, as there will be no turning back. Anyway, see you around!
                </p>
                <button type="button" class="btn btn-danger" onclick="deleteAccount()">
                    <i class="bi bi-trash-fill"></i> Delete Account
                </button>
            </form>
        </section>
                </div>
            </div>
        </div>
        </div>
        `;
    }
}




