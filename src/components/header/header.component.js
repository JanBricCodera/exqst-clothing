import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/exqst.svg";
import { auth } from "../../firebase/firebase.util";
import { connect } from "react-redux";
import CartIcon from "../cartIcon/cartIcon.component";
import CartWindowMini from "../cartWindowMini/cartWindowMini.component";
import BackDrop from "../backDrop/backDrop.component";

// const header = ({ currentUser }) => {
//   // alert(JSON.stringify({ currentUser }));
//   return (
//     <div className="header">
//       <Link className="logo-container" to="/">
//         <Logo className="logo" />
//       </Link>
//       <div className="options">
//         <Link className="option" to="/shop">
//           SHOP
//         </Link>
//         <Link className="option" to="/contact">
//           CONTACT
//         </Link>

//         {currentUser ? (
//           <div className="option" onClick={() => auth.signOut()}>
//             SIGNOUT
//           </div>
//         ) : (
//           <Link className="option" to="/signin">
//             SIGNIN
//           </Link>
//         )}
//         <CartIcon className="option" clicked = {}/>
//       </div>
//       <CartWindowMini />
//     </div>
//   );
// };

class Header extends React.Component {
  componentDidMount() {}

  state = {
    showCartWindowMini: false
  };

  backDropClickedHandler = () => {
    this.setState({ showCartWindowMini: false });
  };

  cartWindowMiniToggleHandler = () => {
    this.setState(prevstate => {
      return { showCartWindowMini: !prevstate.showCartWindowMini };
    });
  };

  render() {
    const { currentUser } = this.props;
    return (
      <div className="header">
        <Link className="logo-container" to="/">
          <Logo className="logo" />
        </Link>
        <div className="options">
          <Link className="option" to="/shop">
            SHOP
          </Link>
          <Link className="option" to="/contact">
            CONTACT
          </Link>

          {currentUser ? (
            <div className="option" onClick={() => auth.signOut()}>
              SIGNOUT
            </div>
          ) : (
            <Link className="option" to="/signin">
              SIGNIN
            </Link>
          )}
          <CartIcon
            className="option"
            clicked={this.cartWindowMiniToggleHandler}
          />
        </div>
        <CartWindowMini show={this.state.showCartWindowMini} />
        <BackDrop
          show={this.state.showCartWindowMini}
          clicked={this.backDropClickedHandler}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);
