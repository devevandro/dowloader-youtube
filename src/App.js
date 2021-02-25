import React from 'react';
import Logo from './assets/img/logo.png';
import InputField from './components/inputField';
import Footer from './components/footer';
import './App.scss';

const App = () => {

  return (<>
    <div className="container">
      <div className="container__logo">
        <img src={Logo} alt="logo do site" />
        <h1>Downloader</h1>
      </div>

      <div>
        <InputField />
      </div>
      
      <div className="container__footer">
        <Footer />
      </div>
    </div>
  </>);
}

export default App;
