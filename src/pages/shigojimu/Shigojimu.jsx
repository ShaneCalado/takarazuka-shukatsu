import React from 'react';
import './Shigojimu.css';

import postDeathAffairsImg from '../../assets/images/post-death-affairs.png';

export default function PostDeathAffairs() {
  return (
    <div className="shigo-jimu-container">
      {/* メイン画像 */}
      <div className="shigo-main-image">
        <img
          src={postDeathAffairsImg}
          alt="死後事務委任契約による亡くなった後の手続きへの備え"
        />
      </div>

      {/* ページタイトル */}
      <h1 className="shigo-main-title">
        死後事務委任契約で、亡くなった後の手続きに備えませんか
      </h1>

      {/* 導入 */}
      <div className="shigo-intro">
        <p>
          死後事務委任契約とは、ご本人が亡くなった後に必要となる葬儀、納骨、
          行政機関への届出、住居の明渡し、各種契約の解約などを、
          <strong>あらかじめ信頼できる人に依頼しておく契約</strong>です。
          お一人暮らしの方だけでなく、ご家族が遠方にいる方や、
          ご家族へできるだけ負担をかけたくない方にも利用されています。
        </p>
      </div>

      {/* 悩み提示 */}
      <div className="shigo-question-box">
        <h2 className="shigo-question-title">
          一人暮らしなので、自分が亡くなったあとのことが心配。
        </h2>

        <ul className="shigo-check-list">
          <li>一人暮らしなので、自分が亡くなったあとの手続きが心配</li>
          <li>身近に頼れる家族がいないため、誰にお願いすればよいか分からない</li>
          <li>亡くなった後、家や荷物の整理、役所の手続きをしてくれる人がいない</li>
          <li>葬儀や納骨について、自分の希望を確実に伝えておきたい</li>
        </ul>

        <p className="shigo-question-lead">
          そう思っていませんか？
        </p>

        <p className="shigo-description">
          死後事務委任契約を利用することで、ご逝去後の行政機関への届出や各種手続き、
          葬儀・納骨、住居や家財の整理などを、あらかじめ信頼できる人に依頼できます。
          お一人暮らしの方や身寄りの少ない方、ご家族に負担をかけたくない方も、
          安心して将来に備えることができます。
        </p>

        <a href="#shigo-detail" className="shigo-detail-btn">
          死後事務委任契約について詳しく見る
        </a>
      </div>

      {/* 詳細開始 */}
      <div id="shigo-detail"></div>

      <h2 className="shigo-section-title">
        死後事務委任契約で備える「3つの安心」
      </h2>

      {/* 安心1 */}
      <div className="shigo-reason-card">
        <h3>
          <span className="shigo-num">安心 1</span>
          亡くなった後の手続きを、信頼できる人に依頼できます
        </h3>
        <p>
          ご本人が亡くなると、行政機関への届出、葬儀や納骨、
          病院・介護施設への支払い、住居の整理など、さまざまな手続きが発生します。
          <br />
          死後事務委任契約を結んでおくことで、
          <span className="shigo-highlight">
            誰に、どの事務を、どのような内容で依頼するかを元気なうちに決めておくことができます。
          </span>
        </p>
      </div>

      {/* 安心2 */}
      <div className="shigo-reason-card">
        <h3>
          <span className="shigo-num">安心 2</span>
          葬儀・納骨など、ご本人の希望を反映できます
        </h3>
        <p>
          葬儀の方法、宗教・宗派、納骨先、永代供養、散骨などについて、
          ご本人の希望があっても、周囲の人に伝わっていなければ実現できないことがあります。
          <br />
          契約書に具体的な希望を記載しておくことで、
          <span className="shigo-highlight">
            ご本人の意思に沿った葬儀や納骨を行いやすくなります。
          </span>
        </p>
      </div>

      {/* 安心3 */}
      <div className="shigo-reason-card">
        <h3>
          <span className="shigo-num">安心 3</span>
          ご家族や周囲の方の負担を軽減できます
        </h3>
        <p>
          ご本人が亡くなった後の手続きは種類が多く、
          ご家族が遠方に住んでいる場合や、ご家族自身が高齢の場合には大きな負担となります。
          <br />
          手続きの内容と担当者をあらかじめ決めておくことで、
          <span className="shigo-highlight">
            ご家族や周囲の方が、何をすればよいか分からず困る事態を防ぎやすくなります。
          </span>
        </p>
      </div>

      {/* 主な事務 */}
      <div className="shigo-service-box">
        <h3>死後事務委任契約で依頼できる主な内容</h3>
        <ul className="shigo-service-list">
          <li>親族や関係者への死亡の連絡</li>
          <li>死亡届など、行政機関への届出に関する手配</li>
          <li>葬儀、火葬、納骨、永代供養などの手配</li>
          <li>病院、介護施設、福祉施設などへの費用の支払い</li>
          <li>住居の明渡し、家財や遺品の整理に関する手配</li>
          <li>電気、ガス、水道、電話などの解約手続き</li>
          <li>携帯電話、インターネット、各種サービスの解約手続き</li>
          <li>ペットの引渡しや今後の飼育に関する手配</li>
          <li>勤務先、知人、友人などへの連絡</li>
          <li>契約内容に基づく死後事務費用の精算</li>
        </ul>
      </div>

      {/* 流れ */}
      <div className="shigo-flow-box">
        <h3>死後事務委任契約を作成するまでの流れ</h3>
        <ol className="shigo-flow-list">
          <li>ご本人の希望や家族関係、財産状況などを確認します。</li>
          <li>亡くなった後に依頼したい手続きを整理します。</li>
          <li>受任者となる人と、具体的な委任内容を決めます。</li>
          <li>手続きに必要となる費用や報酬、預託金などを検討します。</li>
          <li>契約書を作成し、双方で内容を確認します。</li>
          <li>必要に応じて公正証書で契約を作成します。</li>
          <li>契約書や連絡先を適切な場所で保管します。</li>
        </ol>
      </div>

      {/* 制度比較 */}
      <div className="shigo-compare-box">
        <h3>遺言・任意後見契約との違い</h3>

        <div className="shigo-compare-item">
          <h4>遺言</h4>
          <p>
            預貯金や不動産などの財産を、誰にどのように引き継がせるかを定めるものです。
            葬儀や住居の明渡しなど、死後の事務手続きについては、
            遺言だけでは十分に対応できない場合があります。
          </p>
        </div>

        <div className="shigo-compare-item">
          <h4>任意後見契約</h4>
          <p>
            ご本人が存命中に判断能力が低下した場合に、
            財産管理や介護・生活上の契約手続きを支援してもらう制度です。
            原則として、ご本人が亡くなると任意後見契約は終了します。
          </p>
        </div>

        <div className="shigo-compare-item">
          <h4>死後事務委任契約</h4>
          <p>
            ご本人が亡くなった後の葬儀、納骨、行政手続き、住居の整理、
            各種契約の解約などを依頼する契約です。
          </p>
        </div>
      </div>

      {/* サポート */}
      <div className="shigo-support-box">
        <h3>当事務所の主なサポート内容</h3>
        <ul className="shigo-support-list">
          <li>現在のお悩みやご希望の聞き取り</li>
          <li>死後に必要となる手続きの整理</li>
          <li>死後事務委任契約書の原案作成</li>
          <li>受任者や関係者との役割分担の整理</li>
          <li>公証人との事前打合せ</li>
          <li>公正証書作成に必要な書類のご案内</li>
          <li>遺言書、任意後見契約、財産管理等委任契約との組合せの検討</li>
          <li>葬儀、納骨、住居、家財、ペットなどのご希望の整理</li>
        </ul>
      </div>

      {/* 注意 */}
      <div className="shigo-note">
        <strong>ご注意：</strong><br />
        死後事務委任契約は、相続財産を誰に渡すかを決める遺言とは役割が異なります。
        また、相続人にしか行えない手続きや、契約内容だけでは対応できない事務もあります。
        ご本人の状況に応じて、遺言書、任意後見契約、財産管理等委任契約などと
        組み合わせて準備することが大切です。
      </div>

      {/* CTA */}
      <div className="shigo-cta-section">
        <h2>亡くなった後の不安を、元気なうちに整理しませんか</h2>
        <p>
          「自分が亡くなった後、誰が手続きをしてくれるのか不安」
          「家族にできるだけ負担をかけたくない」
          という段階からご相談いただけます。
        </p>
        <p>
          ご本人の希望やご家族の状況を伺い、
          必要な備えを一緒に整理いたします。
        </p>
        <a href="/contact/" className="shigo-cta-btn">
          無料相談・お問い合わせはこちら
        </a>
      </div>
    </div>
  );
}