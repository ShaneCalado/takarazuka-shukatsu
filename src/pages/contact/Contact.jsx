import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="contact-form-container">
      <div className="contact-header">
        <h2>無料ご相談・お問い合わせフォーム</h2>
      </div>

      <form className="contact-form" action="https://formsubmit.co/takarazuka.shukatsu@gmail.com" method="POST">
        {/* Inputs for FormSubmit configuration */}
        <input type="hidden" name="_subject" value="【ホームページより】お問い合わせが届きました" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://https://takarazuka-shukatsu.jp/" />

        <div className="form-note">
          遺言・相続・終活に関するご質問やご相談のご予約を承っております。<br />
          以下のフォームにご入力の上、「送信する」ボタンを押してください。
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="name">
            お名前 <span className="badge-required">必須</span>
          </label>
          <input type="text" id="name" name="お名前" className="form-control" placeholder="例：藤原 太郎" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="phone">
            電話番号 <span className="badge-required">必須</span>
          </label>
          <input type="tel" id="phone" name="電話番号" className="form-control" placeholder="例：090-0000-0000" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="email">
            メールアドレス <span className="badge-required">必須</span>
          </label>
          <input type="email" id="email" name="email" className="form-control" placeholder="例：example@email.com" required />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="address">
            ご住所 <span className="badge-optional">任意</span>
          </label>
          <input type="text" id="address" name="ご住所" className="form-control" placeholder="例：兵庫県宝塚市〇〇 1-2-3" />
        </div>

        <div className="form-group">
          <label className="form-label">
            主な相談分野 <span className="badge-optional">任意</span>
          </label>
          <div className="select-group">
            <label className="checkbox-label"><input type="checkbox" name="相談分野[]" value="遺言書作成サポート" /> 遺言書作成</label>
            <label className="checkbox-label"><input type="checkbox" name="相談分野[]" value="相続手続き" /> 相続手続き</label>
            <label className="checkbox-label"><input type="checkbox" name="相談分野[]" value="任意後見契約" /> 任意後見</label>
            <label className="checkbox-label"><input type="checkbox" name="相談分野[]" value="死後事務委任契約" /> 死後事務委任</label>
            <label className="checkbox-label"><input type="checkbox" name="相談分野[]" value="その他・終活全般" /> その他・終活全般</label>
          </div>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="preferred_date">
            相談ご希望日時（第1希望） <span className="badge-optional">任意</span>
          </label>
          <input type="text" id="preferred_date" name="相談希望日時" className="form-control" placeholder="例：〇月〇日（土）14:00頃" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="message">
            お問い合わせ・ご相談内容 <span className="badge-required">必須</span>
          </label>
          <textarea id="message" name="お問い合わせ内容" className="form-control" placeholder="ご相談したい内容やご質問を自由にご記入ください。" required></textarea>
        </div>

        <div className="submit-btn-container">
          <button type="submit" className="submit-btn">この内容で送信する</button>
        </div>
      </form>
    </div>
  );
}