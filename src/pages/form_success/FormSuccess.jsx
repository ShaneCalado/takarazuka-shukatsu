import { Link } from 'react-router-dom';
import './FormSuccess.css';

export default function Success() {
  return (
    <div className="success-container">
      <div className="success-box">
        <h2>お問い合わせを受け付けました</h2>
        <p>
          この度は、宝塚終活サポートセンターにお問い合わせいただき、誠にありがとうございます。<br />
          ご入力いただいた内容を無事に送信いたしました。
        </p>
        <p>
          内容を確認次第、担当者より折り返しご連絡させていただきますので、今しばらくお待ちくださいませ。
        </p>
        <div className="success-btn-group">
          <Link to="/" className="success-back-btn">ホームに戻る</Link>
        </div>
      </div>
    </div>
  );
}