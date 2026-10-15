// src/pages/home/Home.tsx
import React from 'react';
import './Home.css';

import logoImg from '../../assets/images/logo.png';
import heroPcImg from '../../assets/images/hero-pc.png';
import heroSpImg from '../../assets/images/hero-sp.png';
import banner1Img from '../../assets/images/banner1.png';
import banner2Img from '../../assets/images/banner2.png';
import banner3Img from '../../assets/images/banner3.png';
import banner4Img from '../../assets/images/banner4.png';
import profileImg from '../../assets/images/profile.jpg';
import signatureImg from '../../assets/images/signature.png';

export default function Home() {
  return (
    <div id="gotop" className="home wp-singular page-template-default page page-id-66 wp-custom-logo wp-theme-syn-ownd wp-child-theme-syn-ownd-child">

      <div className="mv is-image is-imgsize" style={{ '--mv-height-pc': '70vh', '--mv-height-sp': '50vh' }}>
        <div className="mv__imgarea is-overlay" style={{ '--overlay-color': '#000000' }}>
          <picture className="mv__img">
            <source media="(min-width: 786px)" srcSet={heroPcImg} />
            <img src={heroSpImg} alt="" decoding="async" />
          </picture>
        </div>
      </div>

      <div className="container main">
        <main className="main-content">
          <div className="main-content__inner entry js-sf-target">
            <div className="entry__head">
              <h2 className="entry__ttl">ホーム</h2>
            </div>
            <div className="entry__main">
              <article className="post-content">
                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-930d3512 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <figure className="wp-block-image size-full">
                      <a href="/igon/">
                        <img decoding="async" width="600" height="300" src={banner1Img} alt="" className="wp-image-111" />
                      </a>
                    </figure>
                    <figure className="wp-block-image size-full">
                      <a href="/ninikoken/">
                        <img decoding="async" width="600" height="300" src={banner2Img} alt="" className="wp-image-113" />
                      </a>
                    </figure>
                  </div>
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <figure className="wp-block-image size-full">
                      <a href="/sozoku/">
                        <img decoding="async" width="600" height="300" src={banner3Img} alt="" className="wp-image-112" />
                      </a>
                    </figure>
                    <figure className="wp-block-image size-full">
                      <a href="/shigojimu/">
                        <img loading="lazy" decoding="async" width="600" height="300" src={banner4Img} alt="" className="wp-image-116" />
                      </a>
                    </figure>
                  </div>
                </div>

                <div className="home-shukatsu-container">
                  <section className="home-hero">
                    <h1 id="syn-toc1">宝塚で終活・遺言・相続のご相談なら<br />行政書士藤原修事務所</h1>
                    <p>将来の不安を整理し、ご本人とご家族が安心できる準備をお手伝いします。</p>
                    <span className="hero-sub">初回相談60分無料／宝塚市・阪神間は出張相談にも対応</span>
                  </section>
                  <h2 id="syn-toc2" className="home-section-title"><span>主な取扱業務</span></h2>
                  <div className="service-grid">
                    <div className="service-card">
                      <h2 id="syn-toc3">遺言書作成</h2>
                      <p>ご自身の想いと財産の引継ぎ方を、法的に有効な形で残すためのサポートを行います。</p>
                      <ul>
                        <li>公正証書遺言の原案作成</li>
                        <li>財産目録・相続関係の整理</li>
                        <li>公証人との事前調整</li>
                      </ul>
                      <a href="/igon/" className="home-btn">遺言書作成について詳しく見る</a>
                    </div>
                    <div className="service-card">
                      <h2 id="syn-toc4">相続手続き</h2>
                      <p>戸籍収集、相続人調査、遺産分割協議書の作成など、相続手続きをまとめて支援します。</p>
                      <ul>
                        <li>戸籍・相続人調査</li>
                        <li>財産目録・遺産分割協議書作成</li>
                        <li>金融機関等の手続き支援</li>
                      </ul>
                      <a href="/sozoku/" className="home-btn">相続手続きについて詳しく見る</a>
                    </div>
                    <div className="service-card">
                      <h2 id="syn-toc5">任意後見契約</h2>
                      <p>将来の判断能力低下に備え、信頼できる人へ財産管理や生活上の手続きを任せる準備をします。</p>
                      <ul>
                        <li>任意後見人候補者の検討</li>
                        <li>代理権目録・契約書案の作成</li>
                        <li>公正証書作成支援</li>
                      </ul>
                      <a href="/ninikoken/" className="home-btn">任意後見契約について詳しく見る</a>
                    </div>
                    <div className="service-card">
                      <h2 id="syn-toc6">死後事務委任契約</h2>
                      <p>葬儀、納骨、住居の整理、役所や各種契約の手続きなど、亡くなった後の事務に備えます。</p>
                      <ul>
                        <li>葬儀・納骨の希望整理</li>
                        <li>住居・家財・契約の整理</li>
                        <li>死後事務委任契約書の作成</li>
                      </ul>
                      <a href="/shigojimu/" className="home-btn">死後事務委任契約について詳しく見る</a>
                    </div>
                  </div>
                  
                  <h2 id="syn-toc7" className="home-section-title"><span>このようなお悩みはありませんか</span></h2>
                  <div className="worry-box">
                    <h3 id="syn-toc8" className="worry-title"><span className="mark">？</span>何から始めればよいのか分からない</h3>
                    <ul className="worry-list">
                      <li>遺言書は本当に必要なのか判断できない</li>
                      <li>将来、認知症になった場合の財産管理が心配</li>
                      <li>一人暮らしで、亡くなった後の手続きを頼める人がいない</li>
                      <li>親が亡くなったが、相続手続きをどこから始めればよいか分からない</li>
                      <li>仕事や家事が忙しく、平日に役所や金融機関へ行く時間がない</li>
                    </ul>
                    <div className="home-lead">
                      <strong>まだ具体的に決まっていなくても大丈夫です。</strong><br />
                      まずは現在のお悩みとご希望を伺い、必要な手続きと優先順位を一緒に整理します。無理に契約を勧めることはありませんので、安心してご相談ください。
                    </div>
                  </div>

                  <h2 id="syn-toc9" className="home-section-title"><span>ご相談から業務開始までの流れ</span></h2>
                  <div className="flow-grid">
                    <div className="flow-card">
                      <span className="step">STEP 1</span>
                      <h3 id="syn-toc10">お問い合わせ</h3>
                      <p>電話・メール・お問い合わせフォームからご連絡ください。</p>
                    </div>
                    <div className="flow-card">
                      <span className="step">STEP 2</span>
                      <h3 id="syn-toc11">初回ヒアリング</h3>
                      <p>対面またはオンラインで、お悩みやご希望を丁寧に伺います。</p>
                    </div>
                    <div className="flow-card">
                      <span className="step">STEP 3</span>
                      <h3 id="syn-toc12">ご提案・お見積り</h3>
                      <p>必要な手続きと費用をご説明し、ご納得後に進めます。</p>
                    </div>
                    <div className="flow-card">
                      <span className="step">STEP 4</span>
                      <h3 id="syn-toc13">ご契約・業務開始</h3>
                      <p>ご契約後、必要書類の収集や書類作成を進めます。</p>
                    </div>
                  </div>

                  <h2 id="syn-toc14" className="home-section-title"><span>よくある質問（Q&amp;A）</span></h2>
                  <div className="faq-box">
                    <div className="faq-item">
                      <h3 id="syn-toc15">Q．平日の夜や土日でも相談できますか？</h3>
                      <p><strong>A．はい。事前にご予約いただければ、平日の夜間や土日祝日も対応いたします。</strong><br />ご家族がそろう日時など、ご事情に合わせて調整します。</p>
                    </div>
                    <div className="faq-item">
                      <h3 id="syn-toc16">Q．事務所まで行く必要がありますか？</h3>
                      <p><strong>A．いいえ。ご自宅やご指定の場所への訪問相談も可能です。</strong><br />宝塚市内および近隣地域は、出張交通費無料で対応しています。</p>
                    </div>
                    <div className="faq-item">
                      <h3 id="syn-toc17">Q．まだ何も決まっていなくても相談できますか？</h3>
                      <p><strong>A．はい。何から始めればよいか分からない段階でのご相談をおすすめします。</strong><br />お話を伺いながら、今のお悩みと必要な準備を整理します。</p>
                    </div>
                    <div className="faq-item">
                      <h3 id="syn-toc18">Q．相談したら必ず契約しなければなりませんか？</h3>
                      <p><strong>A．いいえ。その必要はありません。</strong><br />ご相談後に必要な手続きと費用をご案内し、ご納得いただいた場合のみ契約します。</p>
                    </div>
                    <div className="faq-item">
                      <h3 id="syn-toc19">Q．費用はいつ発生しますか？</h3>
                      <p><strong>A．初回相談は60分無料です。</strong><br />業務を依頼される場合は、事前にお見積りをご提示し、ご納得いただいてから費用が発生します。</p>
                    </div>
                  </div>

                  <h2 id="syn-toc20" className="home-section-title"><span>ごあいさつ</span></h2>
                  <div className="profile-box">
                    <div className="profile-photo">
                      <img decoding="async" src={profileImg} alt="行政書士藤原修事務所 代表 藤原修" loading="lazy" />
                    </div>
                    <div className="profile-text">
                      <h3 id="syn-toc21">行政書士藤原修事務所<br />代表<br />藤原 修</h3>
                      <div style={{ margin: '24px 0', padding: '20px 22px', backgroundColor: '#f7f7f7', borderLeft: '4px solid #8b6f47' }}>
                        <p style={{ margin: '0 0 14px 0' }}>
                          私たちの事務所理念は、<br />
                          <strong style={{ fontSize: '1.2em' }}>「法律の力で、人々を幸せにする」</strong>
                        </p>
                        <p>法律や制度は、単にルールを定めるためだけのものではなく、人の暮らしや権利を守り、安心した生活を支えるためにあると考えています。</p>
                        <p>当事務所では、法律や制度を「難しいもの」で終わらせるのではなく、お客様一人ひとりが抱える不安や困りごとの解決に役立てることを大切にしています。</p>
                        <p style={{ marginBottom: 0 }}>
                          お客様のお話を丁寧にお聞きし、難しい専門用語をできるだけ使わず、分かりやすくご説明します。そして<strong>「相談してよかった」「これで安心できる」</strong>と思っていただける、身近な行政書士として誠実にサポートいたします。
                        </p>
                      </div>
                      <div className="profile-sign">
                        <img decoding="async" src={signatureImg} alt="行政書士 藤原修 自筆サイン" loading="lazy" />
                      </div>
                    </div>
                  </div>

                  <h2 id="syn-toc22" className="home-section-title"><span>事務所概要</span></h2>
                  <div className="office-grid">
                    <div className="office-row"><strong>事務所名</strong><span>行政書士藤原修事務所</span></div>
                    <div className="office-row"><strong>電話番号</strong><span>0797-90-2776</span></div>
                    <div className="office-row"><strong>所在地</strong><span>〒665-0847<br />兵庫県宝塚市すみれガ丘1-7-1-509</span></div>
                    <div className="office-row"><strong>営業時間</strong><span>平日9:00～18:00<br />土日祝は予約対応</span></div>
                    <div className="office-row"><strong>メール</strong><span>info@takarazuka-shukatsu.jp</span></div>
                    <div className="office-row"><strong>所属</strong><span>兵庫県行政書士会 阪神支部<br />NPO法人遺言相続支援センター会員</span></div>
                  </div>

                  <h2 id="syn-toc23" className="home-section-title"><span>対応エリア</span></h2>
                  <div className="area-box">
                    <strong>宝塚市を中心に、西宮市、伊丹市、川西市、尼崎市、三田市など、兵庫県・大阪府近郊に対応しています。</strong><br />宝塚市内および近隣地域は、出張交通費無料で対応します。
                  </div>

                  <h2 id="syn-toc24" className="home-section-title"><span>お客様の声</span></h2>
                  <div className="voice-grid">
                    <div className="voice-card">
                      <h3 id="syn-toc25">相続手続きをご依頼のお客様</h3>
                      <div className="stars">★★★★★</div>
                      <p>ごく単純な相続だと思い最初は自分でしようと考えていましたが、依頼してよかったです。説明も分かりやすく、安心して進められました。</p>
                      <strong>宝塚市・60代男性</strong>
                    </div>
                    <div className="voice-card">
                      <h3 id="syn-toc26">遺言書作成をご依頼のお客様</h3>
                      <div className="stars">★★★★</div>
                      <p>家族に迷惑をかけないよう準備したいと思っていました。丁寧に希望を聞いてもらい、安心できる遺言書を作ることができました。</p>
                      <strong>宝塚市・80代女性</strong>
                    </div>
                  </div>

                  <h2 id="syn-toc27" className="home-section-title"><span>解決事例</span></h2>
                  <div className="case-grid">
                    <div className="case-card">
                      <h3 id="syn-toc28">公正証書遺言の作成サポート</h3>
                      <p>財産の引継ぎ方を明確にしたいとのご相談を受け、面談を重ねて遺言書原案を作成。公証人との内容確認や証人の手配まで支援し、公正証書遺言を完成しました。</p>
                    </div>
                    <div className="case-card">
                      <h3 id="syn-toc29">相続人が多い相続手続きの支援</h3>
                      <p>戸籍収集と相続人調査を行い、相続関係を整理。相続人への説明文書や遺産分割協議書を作成し、手続きを進めました。</p>
                    </div>
                  </div>

                  <div className="contact-box">
                    <h2 id="syn-toc30">終活・遺言・相続のご相談は、初回60分無料です</h2>
                    <p>まだ具体的に決まっていない段階でも、<br />お気軽にご相談ください。</p>
                    <div className="contact-phone">☎ 0797-90-2776</div>
                    <p>受付時間：平日9:00～18:00（土日祝は予約対応）</p>
                    <div className="contact-buttons">
                      <a href="tel:0797902776" className="home-btn">電話で相談する</a>
                      <a href="mailto:info@takarazuka-shukatsu.jp" className="home-btn">メールで問い合わせる</a>
                      <a href="/contact/" className="home-btn">お問い合わせフォーム</a>
                    </div>
                    <div className="line-contact-box">
                      <h3 id="syn-toc31" className="line-contact-title">LINEからもお気軽にご相談ください</h3>
                      <p className="line-contact-text">スマートフォンでQRコードを読み取るか、下の「LINEで相談する」をクリックしてください。</p>
                      <div className="line-contact-inner">
                        <a href="https://lin.ee/RMUyxYw" target="_blank" rel="noopener noreferrer">
                          <img 
                              decoding="async" 
                              src="https://qr-official.line.me/gs/M_497zxqha_GW.png?oat_content=qr" 
                              alt="LINE公式アカウント" 
                              className="line-qr" 
                            />
                        </a>
                        <div>
                          <a href="https://lin.ee/RMUyxYw" className="line-btn" target="_blank" rel="noopener noreferrer">LINEで相談する</a>
                          <p className="line-note">友だち追加後、トーク画面からお気軽にご相談ください。</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-930d3512 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-930d3512 wp-block-columns-is-layout-flex">
                      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"></div>
                      <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"></div>
                    </div>
                  </div>
                </div>

                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-930d3512 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <h2 id="syn-toc32" className="wp-block-heading">アクセス</h2>
                  </div>
                </div>

                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.373214964272!2d135.3382603108874!3d34.82170777276388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f5dea051aeed%3A0x298975073830e9dd!2z6KGM5pS_5pu45aOr6Jek5Y6f5L-u5LqL5YuZ5omA!5e0!3m2!1sja!2sjp!4v1784592504778!5m2!1sja!2sjp" 
                  width="600" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin">
                </iframe>

                <div className="wp-block-columns is-layout-flex wp-container-core-columns-is-layout-930d3512 wp-block-columns-is-layout-flex">
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow">
                    <p className="wp-block-paragraph">
                      <a href="/プライバシーポリシー/" data-type="page" data-id="225">プライバシーポリシー</a>
                    </p>
                  </div>
                  <div className="wp-block-column is-layout-flow wp-block-column-is-layout-flow"></div>
                </div>
              </article>
            </div>
          </div>
        </main>
      </div>

      <footer className="ftr">
        <div className="ftr-info">
          <div className="container ftr-info__inner">
            <p className="ftr-info__logo">
              <a className="ftr-info__logo-link" href="/">
                <img width="1511" height="232" src={logoImg} className="ftr-info__logo-img" alt="宝塚終活サポートオフィス/行政書士藤原修事務所" loading="eager" />
              </a>
            </p>
          </div>
        </div>
        <div className="ftr__copy">
          <small>© 宝塚終活サポートオフィス/行政書士藤原修事務所. All Rights Reserved.</small>
        </div>
      </footer>

      <p className="return-top">
        <a href="#gotop" aria-label="ページの先頭へ"></a>
      </p>
    </div>
  );
}