import React from 'react';
//import './AppHeader.css';
 
// ヘッダ表示領域
// props
//   logoutFunc: useReactOidc()で取得したlogout関数
function AppHeader(props) {
  // ログアウトボタン押下時
  const handleLogout = (event) => {
    // 親コンポーネント(App)から受け渡されたlogout関数を呼び出し
    props.logoutFunc();
  }
  
  // ログアウト関数が指定されている場合 (→ログアウトボタンを表示)
  if (props.logoutFunc){
    return (
      <div className="AppHeader">
        <span></span>
        <span>OpenID Connect Sample 2</span>
        <span className='right'>
          <button onClick={handleLogout}>Logout</button>
        </span>
      </div>
    );
  // ログアウト関数が指定されていない場合 (→ログアウトボタンは非表示)
  } else {
    return (
      <div className="AppHeader">
        <span></span>
        <span>OpenID Connect Sample 2</span>
      </div>
    );
  }
}
export default AppHeader;
