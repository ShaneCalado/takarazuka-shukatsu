import React from 'react';
import './Ninikoken.css';

import voluntaryGuardianshipImg from '../../assets/images/voluntary-guardianship.png';

export default function VoluntaryGuardianship() {
  return (
    <div className="nin-kouken-container">
      {/* メイン画像 */}
      <div className="main-image">
        <img
          src={voluntaryGuardianshipImg}
          alt="任意後見契約による将来への備え"
        />
      </div>

      {/* ページタイトル */}
      <h1 className="nin-main-title">
        任意後見契約で、将来の判断能力の低下に備えませんか
      </h1>

      {/* 導入文 */}
      <div className="nin-intro">
        <p>
          任意後見契約とは、将来、認知症などにより判断能力が低下した場合に備えて、
          <strong>あらかじめ自分が信頼する人を任意後見人として選び、支援してもらう内容を決めておく制度</strong>です。
          元気で判断能力が十分にあるうちに準備しておくことで、ご本人の希望を将来の生活や財産管理に反映しやすくなります。
        </p>
      </div>

      {/* お悩み */}
      <div className="question-box">
        <h2 className="question-title">
          <span>？</span>子供たちにできるだけ迷惑をかけたくない。
        </h2>

        <ul className="check-list">
          <li>将来、子供たちに手続きの負担をかけたくない。</li>
          <li>認知症になったとき、預貯金や生活費の管理がどうなるのか不安。</li>
          <li>入院や介護施設への入所手続きを頼める人がいない。</li>
          <li>自分の希望に沿った生活や介護を続けられるようにしておきたい。</li>
        </ul>

        <div className="lead-text">
          <strong>そう思っていませんか？</strong><br />
          任意後見契約を活用することで、判断能力が低下した後の財産管理や生活上の手続きを、
          あらかじめ選んだ信頼できる人に依頼できます。大切なのは、元気なうちに準備を始めることです。
        </div>
      </div>

      {/* 3つの安心 */}
      <h2 className="nin-section-title">
        任意後見契約で備える「3つの安心」
      </h2>

      <div className="reason-card">
        <h3>
          <span className="num">安心 1</span>
          自分の信頼できる人を任意後見人に選べます
        </h3>
        <p>
          判断能力が低下した後に家庭裁判所が後見人を選任する法定後見制度とは異なり、
          任意後見契約では
          <span className="highlight">判断能力が十分にあるうちに、自分が信頼する家族や専門家を任意後見人として選ぶことができます。</span>
          誰に何を任せるのかを事前に決められるため、ご本人の希望を反映した備えができます。
        </p>
      </div>

      <div className="reason-card">
        <h3>
          <span className="num">安心 2</span>
          預貯金の管理や介護・生活上の手続きを任せられます
        </h3>
        <p>
          判断能力が低下すると、預貯金の管理、公共料金や医療費の支払い、
          介護サービスや施設入所の契約などをご本人だけで行うことが難しくなる場合があります。
          任意後見契約では、
          <span className="highlight">契約で定めた代理権の範囲内で、任意後見人が財産管理や生活上の手続きを行います。</span>
        </p>
      </div>

      <div className="reason-card">
        <h3>
          <span className="num">安心 3</span>
          公正証書で契約し、家庭裁判所の監督を受けます
        </h3>
        <p>
          任意後見契約は、
          <span className="highlight">公証役場で公正証書として作成します。</span>
          将来、ご本人の判断能力が低下した後、家庭裁判所に申立てを行い、
          任意後見監督人が選任されると契約の効力が生じます。
        </p>
      </div>

      {/* 開始までの流れ */}
      <div className="flow-box">
        <h3>任意後見契約が開始するまでの流れ</h3>
        <ol className="flow-list">
          <li>ご本人の判断能力が十分なうちに、任意後見人候補者と契約内容を決めます。</li>
          <li>公証役場で任意後見契約公正証書を作成します。</li>
          <li>将来、ご本人の判断能力が低下した場合、家庭裁判所へ申立てを行います。</li>
          <li>家庭裁判所が任意後見監督人を選任すると、任意後見契約が効力を生じます。</li>
          <li>任意後見人が契約内容に従い、財産管理や生活上の手続きを支援します。</li>
        </ol>
        <div className="flow-note">
          任意後見契約を作成しただけでは、直ちに任意後見人の代理権が始まるわけではありません。
        </div>
      </div>

      {/* できること */}
      <div className="scope-box">
        <h3>任意後見契約で依頼できる主な内容</h3>
        <ul className="scope-list">
          <li>預貯金の管理、生活費や医療費などの支払い</li>
          <li>介護サービス利用契約や施設入所契約の手続き</li>
          <li>家賃、公共料金、税金などの支払い</li>
          <li>不動産や重要書類の管理</li>
          <li>年金、保険、行政手続きに関する代理</li>
          <li>必要な医療・介護サービスを受けるための手続き</li>
        </ul>
      </div>

      {/* できないこと */}
      <div className="limit-box">
        <h3>任意後見人が当然にはできない主なこと</h3>
        <ul className="limit-list">
          <li>手術や治療など、医療行為そのものへの同意</li>
          <li>婚姻、離婚、養子縁組、遺言作成などの身分行為</li>
          <li>本人の身体を直接介護する行為</li>
          <li>本人の死亡後の葬儀、納骨、住居の明渡しなどの死後事務</li>
          <li>契約で代理権を与えていない行為</li>
        </ul>
      </div>

      {/* サポート内容 */}
      <div className="support-box">
        <h3>当事務所の主なサポート内容</h3>
        <ul className="support-list">
          <li>現在のお悩みや将来の希望についての聞き取り</li>
          <li>任意後見人候補者や契約内容の検討</li>
          <li>代理権目録など契約書案の作成支援</li>
          <li>公証人との事前打合せ</li>
          <li>必要書類のご案内と収集支援</li>
          <li>公正証書作成までの手続き支援</li>
          <li>遺言、財産管理等委任契約、死後事務委任契約との組合せの検討</li>
        </ul>
      </div>

      {/* 注意書き */}
      <div className="nin-note">
        <strong>ご注意：</strong>
        任意後見契約は、ご本人が亡くなると終了します。
        葬儀、納骨、住居の明渡し、携帯電話や各種契約の解約などを依頼したい場合は、
        死後事務委任契約もあわせて検討する必要があります。
      </div>

      {/* CTA */}
      <div className="cta-section">
        <h2>将来の不安を安心に変えるお手伝いをいたします</h2>
        <p>
          「任意後見と遺言の違いが分からない」
          「自分たちの状況に必要か知りたい」
          という段階でもお気軽にご相談ください。
        </p>
        <a href="/contact/" className="cta-btn">
          無料相談・お問い合わせはこちら
        </a>
      </div>
    </div>
  );
}