import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import HelpSeiya from './components/HelpSeiya';
import { getCosmo } from './redux/actions';
import SeiyaVideo from './components/SeiyaVideo';
import styles from './styles/buttonStyles.module.css';

class App extends React.Component {
  render() {
    const { dispatch, cosmo } = this.props;
    const showProgress = `${cosmo} %` || '0 %';
    const fullPower = 10;

    if (cosmo === fullPower) {
      return (
        <div className="seiya-background">
          <SeiyaVideo />
        </div>
      );
    }
    return (
      <div className="seiya-background">
        <HelpSeiya />
        <p className="important">
          My playlist music...
        </p>
        <div>
          <span>{showProgress}</span>
          <button
            className={styles.buttonStyle}
            type="button"
            onClick={() => dispatch(getCosmo())}>
            Vamos lá!
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cosmo: state.cosmo,
});

export default connect(mapStateToProps)(App);
