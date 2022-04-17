import "./Login.scss";

var signin = document.querySelector('#signin')
var register = document.querySelector('#register')
setTimeout(function(){ register.checked = true}, 1000)
setTimeout(function(){ signin.checked = true}, 2000)

const Login = () => {
    return (
        <div class="container_login">
        <input type="radio" name="tab" id="signin" checked="checked"/>
        <input type="radio" name="tab" id="register"/>
        <div class="pages">
          <div class="page">
            <div class="input">
              <div class="title">USERNAME</div>
                <input class="text" type="text" placeholder=""/>
              </div>
              <div class="input">
              <div class="title">PASSWORD</div>
              <input class="text" type="password" placeholder=""/>
              </div>
              <div class="input">
                <input type="submit" value="ENTER"/>
              </div>
            </div>
            <div class="page signup">
                <div class="input">
                  <div class="title">NAME</div>
                  <input class="text" type="text" placeholder=""/>
                </div>
                <div class="input">
                  <div class="title">EMAIL</div>
                  <input class="text" type="password" placeholder=""/>
                </div>
                <div class="input">
                  <input type="submit" value="SIGN ME UP!"/>
                </div>
            </div>
            </div>
            <div class="tabs">
              <label class="tab" for="signin">
                <div class="text">Sign In</div>
              </label>
              <label class="tab" for="register">
                <div class="text">Register</div>
              </label>
            </div>
        </div>
    )

}

export default Login;