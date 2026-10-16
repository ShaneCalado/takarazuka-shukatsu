import React from 'react';
import './Igon.css';
import willImg from '../../assets/images/will.png';

export default function Jigon() {
  return (
    <div className="will-container">
      {/* Main Image */}
      <div className="will-main-image">
       <img src={willImg} alt="遺言書作成サポート" />
      </div>

      {/* Intro Section */}
      <h1 className="will-main-title">
        遺言書を作成して、ご自身の想いを確実に残しませんか
      </h1>

      <div className="will-intro">
        <p>
          遺言書は、亡くなった後の財産の引継ぎ方や、ご家族への想いをあらかじめ形にしておくための大切な準備です。
          当事務所では、相続関係や財産内容を整理しながら、<strong>公正証書遺言を中心に、法的に有効で実行しやすい遺言書の作成</strong>をサポートします。
        </p>
      </div>

      {/* Question Box */}
      <div className="question-box">
        <h2 className="question-title">
          <span>？</span>「遺言書」って本当に書く必要があるのかな？
        </h2>
        <ul className="check-list">
          <li>「まだ元気だから…」</li>
          <li>「うちは財産が少ないから…」</li>
          <li>「家族は仲がいいから揉めないと思うけど…」</li>
        </ul>
        <div className="lead-text">
          <strong>そう思っていませんか？</strong><br />
          遺言書は、ご自身の想いを大切なご家族へ伝えるための大切な準備です。将来の負担やトラブルを防ぐことにもつながります。
        </div>
      </div>

      {/* Worries Section */}
      <h2 className="will-section-title">このようなお悩みはありませんか</h2>
      <div className="reason-card">
        <ul className="check-list">
          <li>子どもたちが相続で困らないようにしておきたい</li>
          <li>特定の家族に自宅や財産を引き継いでもらいたい</li>
          <li>前婚の子、子どものいない夫婦、兄弟姉妹など相続関係が複雑で心配</li>
          <li>公正証書遺言を作りたいが、何から始めればよいか分からない</li>
          <li>財産目録や必要書類の準備を専門家に手伝ってほしい</li>
        </ul>
      </div>

      {/* 3 Reasons Section */}
      <h2 className="will-section-title">遺言書が必要な「3つの理由」</h2>
      
      <div className="reason-card">
        <h3><span className="num">理由 1</span> 「まだ元気だから」は、作成のベストタイミングです</h3>
        <p>
          遺言書は、法律上<span className="highlight">「十分な判断能力がある状態」で作成しなければ無効</span>になってしまいます。認知症などで判断能力が低下してしまうと、作成したくてもできなくなってしまうのが実情です。<br />
          頭もしっかりされていて元気な「今」こそが、将来に備えてじっくり考え、遺言書を準備するのに最適で安全なタイミングです。
        </p>
      </div>
      
      <div className="reason-card">
        <h3><span className="num">理由 2</span> 「財産が少ないから大丈夫」が、実は一番危険？</h3>
        <p>
          家庭裁判所に持ち込まれる遺産分割トラブルの<span className="highlight">約75%以上は「遺産総額5,000万円以下（うち、約33%は1,000万円以下）」の一般的なご家庭</span>で起きています。<br />
          例えば「自宅の土地建物」と「わずかな預貯金」しかない場合、不動産を綺麗に等分することが難しいため、分け方を巡って兄弟・親族間で意見が割れてしまうケースが多発します。
        </p>
      </div>
      
      <div className="reason-card">
        <h3><span className="num">理由 3</span> 「仲が良い家族」に面倒な手続きをさせないために</h3>
        <p>
          遺言書がない場合、残されたご家族全員で「遺産分割協議」を行い、全員の印鑑証明書と実印を揃えなければ銀行口座の解約や不動産の名義変更ができません。<br />
          いくら仲が良くても、忙しい家族間で何度も書類をやり取りする作業は大きな負担となります。<span className="highlight">有効な遺言書が1枚あるだけで、ご家族の手続きの手間は劇的に軽減されます。</span>
        </p>
      </div>

      {/* Merits Section */}
      <h2 className="will-section-title">遺言書を準備する主なメリット</h2>
      
      <div className="reason-card">
        <h3 style={{ display: 'block', marginBottom: '8px' }}>1．財産の引継ぎ先を自分で決められます</h3>
        <p>法定相続分だけに頼らず、ご自身の意思に沿って財産の承継方法を定めることができます。遺留分などへの配慮が必要な場合は、その点も確認しながら内容を整理します。</p>
      </div>
      
      <div className="reason-card">
        <h3 style={{ display: 'block', marginBottom: '8px' }}>2．相続手続きの負担を軽くできます</h3>
        <p>遺言内容が明確で、遺言執行者等の定めも整っていれば、相続開始後の手続きを進めやすくなります。</p>
      </div>
      
      <div className="reason-card">
        <h3 style={{ display: 'block', marginBottom: '8px' }}>3．ご家族への想いを形にできます</h3>
        <p>財産の分け方だけでなく、付言事項を活用して、遺言を作成した理由やご家族への気持ちを伝えることもできます。</p>
      </div>

      {/* Table & Support Info */}
      <h2 className="will-section-title">当事務所では公正証書遺言を中心にサポートします</h2>
      
      <table className="recover-table">
        <tbody>
          <tr>
            <th>方式</th>
            <th>特徴</th>
          </tr>
          <tr>
            <td>公正証書遺言</td>
            <td>公証人が関与して作成します。方式不備のリスクが小さく、原本が公証役場に保管されるため、確実性を重視する方に適しています。</td>
          </tr>
          <tr>
            <td>自筆証書遺言</td>
            <td>本人が作成する方式です。手軽な一方、方式要件や保管方法に注意が必要です。法務局の遺言書保管制度を利用する方法もあります。</td>
          </tr>
        </tbody>
      </table>

      <div className="recover-green">
        <h3>当事務所の主なサポート内容</h3>
        <ul className="check-list">
          <li>相続人・相続関係の整理</li>
          <li>財産内容の整理、財産目録作成支援</li>
          <li>ご希望の聞き取りと遺言書原案の作成</li>
          <li>公証人との事前調整</li>
          <li>公正証書作成に必要な書類のご案内</li>
          <li>必要に応じて任意後見・死後事務委任・財産管理等との組合せを検討</li>
        </ul>
      </div>

      <div className="recover-warn">
        <h3>遺言だけでは生前の財産管理はできません</h3>
        <p>遺言は主に亡くなった後の財産承継に備える制度です。認知症などで判断能力が低下した後の財産管理や生活上の手続きに備える場合は、任意後見契約や財産管理等委任契約などを別に検討します。</p>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2 style={{ marginTop: 0, color: '#0d47a1', fontSize: '24px', lineHeight: 1.5 }}>
          遺言を作るべきか分からない段階でもご相談いただけます
        </h2>
        <p>現在の家族関係と財産状況を確認し、必要な準備を一緒に整理します。</p>
        <a href="/contact/" className="cta-btn">無料相談・お問い合わせはこちら</a>
      </div>
    </div>
  );
}