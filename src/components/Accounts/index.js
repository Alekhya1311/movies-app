import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const Accounts = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <>
      <div className="account-container">
        <h1 className="account-header">Account</h1>
        <hr />
        <div className="membership">
          <p>Membership</p>
          <p>Plan details</p>
        </div>
        <button
          type="button"
          className="logout-desktop-btn"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default withRouter(Accounts)
