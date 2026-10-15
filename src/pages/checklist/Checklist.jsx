import React from 'react';
import './Checklist.css';

export default function Checklist() {
  return (
    <div className="shukatsu-container">
      <div className="shukatsu-dl-btn">
        <a href="/downloads/checklist.pdf" target="_blank" rel="noopener noreferrer">
           終活チェックリスト（PDF版）を無料ダウンロード
        </a>
      </div>

      <div className="shukatsu-header">
        <h2>安心の終活準備チェックリスト</h2>
        <p style={{ marginTop: '5px', marginBottom: 0 }}>～ これからの人生を自分らしく、安心して楽しむために ～</p>
      </div>

      <div className="shukatsu-intro">
        <strong>【ご活用のメッセージ】</strong><br />
        終活は「これからの人生をより豊かに生きるための整理」です。一度にすべてを埋める必要はありません。まずは気になるところ、書きやすい項目から少しずつチェックしてみましょう。
      </div>

      <div className="shukatsu-section-title">1. 医療・介護の備え（万が一の安心のために）</div>
      <ul className="shukatsu-list">
        <li className="shukatsu-item">
          <label><input type="checkbox" /> かかりつけ医・持病の整理</label>
          <div className="shukatsu-desc">病院名、主治医、服用中の薬やアレルギーの記録</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 医療・病気告知のご希望</label>
          <div className="shukatsu-desc">病名や余命の告知を希望するかどうか</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 延命治療についての方針</label>
          <div className="shukatsu-desc">延命措置（胃ろう・人工呼吸器等）のご希望</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 介護が必要になった時のご希望</label>
          <div className="shukatsu-desc">自宅介護を希望か、施設入所を希望か</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 認知症・判断力低下への備え（任意後見契約の検討）</label>
          <div className="shukatsu-desc">将来、財産管理や介護手続きを信頼できる人に頼む仕組みの確認</div>
        </li>
      </ul>

      <div className="shukatsu-section-title">2. 財産・資産の整理（家族への思いやり）</div>
      <ul className="shukatsu-list">
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 預貯金口座の一覧化</label>
          <div className="shukatsu-desc">利用している金融機関・支店・通帳の保管場所</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 不動産（土地・建物）の確認</label>
          <div className="shukatsu-desc">名義人、所在地、権利書の保管場所</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 有価証券・保険の整理</label>
          <div className="shukatsu-desc">株式・投資信託・生命保険・損害保険の内容</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 年金・クレジットカード</label>
          <div className="shukatsu-desc">年金手帳の場所、解約が必要なカードの把握</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> ローン・借入金・貸付金の有無</label>
          <div className="shukatsu-desc">家族が困らないよう、プラスの財産・マイナスの財産を把握</div>
        </li>
      </ul>

      <div className="shukatsu-section-title">3. 相続・遺言の準備（円満な承継のために）</div>
      <ul className="shukatsu-list">
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 推定相続人の確認</label>
          <div className="shukatsu-desc">誰が相続人になるか（家系図・戸籍の確認）</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 遺言書（自筆証書・公正証書）の作成</label>
          <div className="shukatsu-desc">財産の分け方や想いを法的に有効な形で遺す</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 遺産分割の方針決定</label>
          <div className="shukatsu-desc">特定の人に譲りたい財産（自宅や事業など）がある場合の事前準備</div>
        </li>
      </ul>

      <div className="shukatsu-section-title">4. 葬儀・供養・お墓（自分らしいフィナーレ）</div>
      <ul className="shukatsu-list">
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 葬儀スタイルのご希望</label>
          <div className="shukatsu-desc">家族葬・一般葬・直葬・お別れ会など</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 宗教・宗派・遺影写真</label>
          <div className="shukatsu-desc">菩提寺・神社・キリスト教・無宗教、希望の写真</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> お墓・納骨について</label>
          <div className="shukatsu-desc">先祖代々のお墓・樹木葬・散骨・手元供養など</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 死後事務委任契約の検討</label>
          <div className="shukatsu-desc">退院手続き・行政手続き・部屋の片付け等の依頼</div>
        </li>
      </ul>

      <div className="shukatsu-section-title">5. デジタル・身の回り</div>
      <ul className="shukatsu-list">
        <li className="shukatsu-item">
          <label><input type="checkbox" /> スマホ・パソコンのID・パスワード</label>
          <div className="shukatsu-desc">ログイン情報の保管場所、死亡後のデータ削除の希望</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 定期購入・サブスク等の確認</label>
          <div className="shukatsu-desc">月額サービスや有料会員契約の解約リスト</div>
        </li>
        <li className="shukatsu-item">
          <label><input type="checkbox" /> 大切な想い出・アルバム・日記などの取り扱い</label>
          <div className="shukatsu-desc">残してほしいもの、処分してほしいものの指示</div>
        </li>
      </ul>

      <div className="shukatsu-footer-box">
        <h3 style={{ marginTop: 0, color: '#2e6b4f' }}>行政書士からのワンポイントアドバイス</h3>
        <p style={{ textAlign: 'left' }}>
          終活チェックリストで「気になる点」や「自分だけでは決められないこと（遺言書の書き方・任意後見・相続手続きなど）」がございましたら、お気軽に当事務所へご相談ください。法律の専門家として、あなたの想いを形にするお手伝いをいたします。
        </p>
        <div style={{ fontWeight: 'bold', fontSize: '18px', color: '#1b4332', marginTop: '15px' }}>
          行政書士藤原修事務所 TEL: 0797-90-2776
        </div>
      </div>

      <div className="shukatsu-dl-btn" style={{ marginTop: '30px' }}>
        <a href="/downloads/checklist.pdf" target="_blank" rel="noopener noreferrer">
           終活チェックリスト（PDF版）を無料ダウンロード
        </a>
      </div>
    </div>
  );
}