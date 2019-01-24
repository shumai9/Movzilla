import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/Nav.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }
  srollToView = e => {
    e.preventDefault();
    let content = document.querySelector('.main');
    content.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  handleScroll = () => {
    this.setState({ scroll: window.scrollY });
  };

  componentDidMount() {
    const bar = document.querySelector('nav');
    if(bar) {
      this.setState({
        top: bar.offsetTop,
        height: bar.offsetHeight
      });
    }

    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.Top = `${this.state.height}px`)
      : (document.body.style.Top = 0);
  }
  componentWillUnmount() {
    console.log('Nav unmounted');
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <nav
        className={`nav-bar ${
          this.state.scroll > this.state.top ? 'sticky' : ''
        }`}
      >
        <div className="list" onClick={this.srollToView}>
          <NavLink exact to={"/home"}>
            HOME
          </NavLink>
          <NavLink exact to={"/movies"}>
            MOVIES
          </NavLink>
          <NavLink exact to={"/about"}>
            ABOUT
          </NavLink>
          <NavLink exact to={"/new_releases"}>
            NEW RELEASES
          </NavLink>
          <NavLink exact to={"/contact"}>
            CONTACT
          </NavLink >
        </div>
      </nav>
    );
  }
}

export default Nav;