import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loginUser } from '../Redux/Action';
import { Link, Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
        }
    }
    input_change = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    input_submit = (e) => {
        //e.preventDefault()
        // console.log(this.state);
        let payload = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(payload)

    }
    render() {
        console.log(this.props.isAuth);
        const { isAuth } = this.props

        return isAuth ?
            (
                <Redirect to='/Products' />
            ) :

            (
                <React.Fragment>
                    <div class="card mt-5 container">
                        <div class="card-header font-weight-bold">
                            Login
                    </div>
                        <div class="card-body">
                            <form onSubmit={this.input_submit}>
                                <div class="row">
                                    <div class="col">
                                        User Name :<input type="text" class="form-control" placeholder="User Name" name="username" value={this.state.username} onChange={this.input_change} />
                                    </div>
                                    <div class="col">
                                        Password :<input type="password" class="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.input_change} />
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-danger mt-3">Login</button>
                            </form>
                        </div>
                        <div class="card-footer text-muted">
                        <button type="button" class="btn btn-outline-secondary" data-toggle="modal" data-target="#exampleModal">Click for UserName and Password</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title text-muted" id="exampleModalLabel">UserName and Password</h6>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p class="font-weight-bold">UserName : saket</p>
        <p class="font-weight-bold">Password : saket123</p>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
                        </div>
                    </div>
                </React.Fragment>
            )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginUser(payload))
})
export default connect(mapStateToProps, mapDispatchToProps)(Login)