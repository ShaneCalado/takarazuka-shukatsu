import React from 'react';
import './Sozoku.css';

import inheritanceImg from '../../assets/images/inheritance.png';

export default function Inheritance() {
  return (
    <div className="souzoku-container">
      <div className="souzoku-main-image">
        <img
          src={inheritanceImg}
          alt="相続手続きに関する相談とサポート"
        />
      </div>

      <h1 className="souzoku-main-title">
        相続手続きでお困りではありませんか
      </h1>

      <div className="souzoku-intro">
        <p>
          相続が発生すると、戸籍の収集、相続人の確認、遺産の調査、
          遺産分割協議、預貯金や不動産の名義変更など、多くの手続きが必要になります。
          <strong>期限のある手続きもあるため、早めに全体像を整理することが大切です。</strong>
          当事務所では、ご家族の状況に応じて必要な手続きを整理し、相続手続きをサポートします。
        </p>
      </div>

      <div className="souzoku-question-box">
        <h2 className="souzoku-question-title">
          <span className="mark">？</span>
          相続手続きは何から始めればいいの？
        </h2>

        <ul className="souzoku-check-list">
          <li>親が亡くなったけれど、何から始めればよいのか分からない</li>
          <li>戸籍や銀行の手続きが複雑そうで心配</li>
          <li>仕事や家事で、平日に手続きを進める時間がない</li>
          <li>相続人が多く、誰に連絡すればよいか分からない</li>
        </ul>

        <p className="souzoku-question-lead">
          そう思っていませんか？
        </p>

        <p className="souzoku-description">
          相続手続きには、期限があるものや必要書類が多いものがあります。
          当事務所では、お客様の状況に合わせて必要な手続きを整理し、
          戸籍収集や遺産分割協議書の作成、金融機関の手続きなどをサポートします。
        </p>

        <a href="#souzoku-detail" className="souzoku-detail-btn">
          相続手続きについて詳しく見る
        </a>
      </div>

      <div id="souzoku-detail"></div>

      <h2 className="souzoku-section-title">
        相続手続きを依頼する「3つの安心」
      </h2>

      <div className="souzoku-reason-card">
        <h3>
          <span className="num">安心 1</span>
          必要な手続きと期限を整理できます
        </h3>
        <p>
          相続では、相続放棄、準確定申告、相続税申告など、期限が設けられている手続きがあります。
          <span className="souzoku-highlight">
            最初に相続人、財産、遺言書の有無を確認し、必要な手続きの順番を整理すること
          </span>
          で、手続き漏れを防ぎやすくなります。
        </p>
      </div>

      <div className="souzoku-reason-card">
        <h3>
          <span className="num">安心 2</span>
          戸籍収集や書類作成の負担を軽減できます
        </h3>
        <p>
          相続人を確定するためには、被相続人の出生から死亡までの戸籍などを集める必要があります。
          また、遺産分割協議書や相続関係説明図などの書類作成も必要になることがあります。
          <span className="souzoku-highlight">
            複雑な戸籍収集や書類作成を専門家に任せることで、ご家族の負担を軽減できます。
          </span>
        </p>
      </div>

      <div className="souzoku-reason-card">
        <h3>
          <span className="num">安心 3</span>
          預貯金や不動産などの手続きをまとめて進められます
        </h3>
        <p>
          金融機関ごとに必要書類や手続方法が異なるため、預貯金の相続手続きには時間がかかる場合があります。
          不動産がある場合は、司法書士と連携して相続登記を進めることもできます。
          <span className="souzoku-highlight">
            相続手続き全体を見ながら、必要に応じて他士業と連携して進めます。
          </span>
        </p>
      </div>

      <div className="souzoku-flow-box">
        <h3>相続手続きの一般的な流れ</h3>
        <ol className="souzoku-flow-list">
          <li>遺言書の有無を確認します。</li>
          <li>相続人を確認するため、戸籍を収集します。</li>
          <li>預貯金、不動産、保険、株式、債務などの相続財産を調査します。</li>
          <li>相続放棄や限定承認の必要性を検討します。</li>
          <li>相続人全員で遺産の分け方を話し合います。</li>
          <li>遺産分割協議書を作成し、相続人全員が署名・押印します。</li>
          <li>預貯金、株式、自動車、不動産などの名義変更を行います。</li>
          <li>必要に応じて相続税の申告を行います。</li>
        </ol>
      </div>

      <div className="souzoku-service-box">
        <h3>当事務所がサポートできる主な内容</h3>
        <ul className="souzoku-service-list">
          <li>相続手続き全体の整理と必要書類のご案内</li>
          <li>戸籍・除籍・改製原戸籍などの収集</li>
          <li>相続人調査と相続関係説明図の作成</li>
          <li>預貯金、不動産、保険などの財産調査の支援</li>
          <li>財産目録の作成</li>
          <li>遺産分割協議書の作成</li>
          <li>金融機関の相続手続き支援</li>
          <li>自動車や各種契約の名義変更・解約手続きの支援</li>
          <li>司法書士、税理士など他士業との連携</li>
        </ul>
      </div>

      <div className="souzoku-faq-box">
        <h3>相続手続きでよくあるご質問</h3>

        <div className="souzoku-faq-item">
          <h4>相続手続きは、いつまでに始めればよいですか？</h4>
          <p>
            戸籍収集や財産調査には時間がかかるため、できるだけ早めに始めることをおすすめします。
            相続放棄は原則として相続開始を知った時から3か月以内など、期限のある手続きもあります。
          </p>
        </div>

        <div className="souzoku-faq-item">
          <h4>遺言書がある場合も遺産分割協議は必要ですか？</h4>
          <p>
            原則として、遺言書に記載された内容に従って手続きを進めます。
            ただし、遺言書に記載のない財産がある場合などは、別途協議が必要になることがあります。
          </p>
        </div>

        <div className="souzoku-faq-item">
          <h4>相続人の中に連絡が取れない人がいる場合はどうなりますか？</h4>
          <p>
            戸籍の附票などから住所を確認し、書面で連絡する方法があります。
            それでも協議がまとまらない場合は、家庭裁判所の手続きが必要になることがあります。
          </p>
        </div>

        <div className="souzoku-faq-item">
          <h4>借金があるか分からない場合はどうすればよいですか？</h4>
          <p>
            郵便物、通帳、信用情報、登記事項証明書などを確認し、債務を調査します。
            相続放棄を検討する場合は期限があるため、早めの確認が重要です。
          </p>
        </div>
      </div>

      <div className="souzoku-note">
        <strong>ご注意：</strong><br />
        相続税申告、相続登記、相続人間の紛争など、行政書士の業務範囲を超える手続きについては、
        税理士、司法書士、弁護士などの専門家と連携して対応します。
      </div>

      <div className="souzoku-cta-section">
        <h2>相続手続きの不安を、一つずつ整理しませんか</h2>
        <p>
          「何から始めればよいか分からない」
          「仕事が忙しくて手続きを進められない」
          という段階からご相談いただけます。
        </p>
        <p>
          ご家族の状況と相続財産を確認し、必要な手続きを分かりやすくご案内します。
        </p>
        <a href="/contact/" className="souzoku-cta-btn">
          無料相談・お問い合わせはこちら
        </a>
      </div>
    </div>
  );
}