import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-box">
        <h2>404 - ページが見つかりません</h2>
        <p>
          申し訳ありません。<br />
          アクセスしようとしたページは削除されたか、URLが変更されたか、<br />
          現在利用できない可能性があります。
        </p>
        <div className="notfound-btn-group">
          <Link to="/" className="notfound-home-btn">トップページへ戻る</Link>
        </div>
      </div>
    </div>
  );
}