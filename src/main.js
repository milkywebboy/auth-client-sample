import React from 'react';
import { useReactOidc } from '@axa-fr/react-oidc-context';
import AppHeader from './AppHeader';
import AppContents from './AppContents';
import './App.css';
 
function App() {
  // react-oidcが提供するHooksプロパティ
  const { 
    isEnabled, // used in provider to enable/disabled.
    oidcUser,  // user information (null if not authenticated)
    login,     // login function
    logout,    // logout function
    signinSilent,
    events
  } = useReactOidc();
 
  // Auth0で正常に認証できた場合 (→ログイン後の画面を表示する)
  if (oidcUser){
    // 画面表示処理
    return (
      <div className="App">
        <div className="AppHeader">
          <AppHeader logoutFunc={logout}/>
        </div>
        <div className="AppContents">
          <AppContents user={oidcUser}/>
        </div>
      </div>
    );
  // 認証前の画面表示 (→ログインボタンを表示する)
  } else {
    return (
      <div className="App">
        <div className="AppHeader">
          <AppHeader logoutFunc="" />
        </div>
        <div className="AppContents">
          <button onClick={login}>ログイン</button>
        </div>
      </div>
    );
  }
}
export default App;