import React from 'react';
import ReactDOM from 'react-dom';
import { AuthenticationProvider, oidcLog, InMemoryWebStorage } from '@axa-fr/react-oidc-context';
import './index.css';
import App from './main';
import reportWebVitals from './reportWebVitals';
 
// 認証サーバ(Auth0)に接続するためのパラメータ
const configuration = {
  authority: 'http://localhost:3001',
  client_id: 'CLIENT_ID',
  redirect_uri: 'http://localhost:3000/authentication/callback',
  post_logout_redirect_uri: 'http://localhost:3000/',
  silent_redirect_uri: 'http://localhost:3000/authentication/silent_callback',
  response_type: 'code',
  scope: 'openid profile email api',
  automaticSilentRenew: true,
  loadUserInfo: true,
};
// ログ出力関数
const logger = {
  info: console.info,
  warn: console.warn,
  error: console.error,
  debug: console.debug,
};
// 認証プロバイダでのログインが成功し自サーバにリダイレクトされた時の表示処理
const CustomCallback = () => (
  <div><span>認証処理中...</span></div>
);
// 認証プロバイダでの認証が失敗し自サーバにリダイレクトされた時の表示処理
const NotAuthenticatedComponent = () => (
  <div><span>認証失敗しました。(Not Authenticated)</span></div>
);
// 認証プロバイダでの認可が失敗し自サーバにリダイレクトされた時の表示処理
const NotAuthorizedComponent = () => (
  <div><span>認可失敗しました。(Not Authorized)</span></div>
);
ReactDOM.render(
  <React.StrictMode>
    <AuthenticationProvider
      configuration={configuration}
      loggerLevel={oidcLog.DEBUG}
      logger={logger}
      isEnabled={true}
      callbackComponentOverride={CustomCallback}
      notAuthenticated={NotAuthenticatedComponent}
      notAuthorized={NotAuthorizedComponent}
      UserStore={InMemoryWebStorage}
    >
    <App />
    </AuthenticationProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();