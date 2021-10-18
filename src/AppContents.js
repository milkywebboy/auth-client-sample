import React from 'react';
//import './AppContents.css';
 
// メイン表示領域
// props
//   user: useAuth0()で取得したuser情報
function AppContents(props) {
  let oidcUser = props.user;
  if (oidcUser){
    // 画面表示処理
    return (
      <div className="AppContents">
        <div>メイン表示領域</div>
        <div>
          <span>ユーザー名:</span><span>{oidcUser.profile.name}</span>
        </div>
        <div align="left">
          {JSON.stringify(oidcUser, null, 2)}
        </div>
      </div>
    );
  } else {
    // 画面表示処理
    return (
      <div className="AppContents">
        <div>メイン表示領域</div>
      </div>
    );
  }
}
export default AppContents;