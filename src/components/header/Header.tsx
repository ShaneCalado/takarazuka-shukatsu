import React, { useState } from 'react';
import './Header.css';

import logoImg from '../../assets/images/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="hdr">
        <div className="hdr__catchphrase">
          <div className="container">宝塚の行政書士です。終活・遺言・相続手続きをサポートしています。</div>
        </div>
        <div className="container hdr__detail">
          <div className="hdr__logo">
            <h1 className="hdr__logo-ttl">
              <a className="hdr__logo-link" href="/">
                <img width="1511" height="232" src={logoImg} className="hdr__logo-img" alt="宝塚終活サポートオフィス/行政書士藤原修事務所" loading="eager" />
              </a>
            </h1>
          </div>
          <div className="hdr__nav">
            <nav className="ddmenu" aria-label="グローバルナビゲーション">
              <div className="ddmenu__inner">
                <ul className="ddmenu__list">
                  <li className="menu-item"><a href="/">ホーム</a></li>
                  <li className="menu-item"><a href="/igon/">遺言</a></li>
                  <li className="menu-item"><a href="/sozoku/">相続</a></li>
                  <li className="menu-item"><a href="/ninikoken/">任意後見</a></li>
                  <li className="menu-item"><a href="/shigojimu/">死後事務</a></li>
                  <li className="menu-item"><a href="/checklist/">チェックリスト</a></li>
                  <li className="menu-item"><a href="/contact/">お問い合わせ</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="ham-menu-btn js-menu-btn is-md">
            <button className="ham-menu-btn__button" aria-label="メニューを開く" onClick={toggleMenu}>
              <i className="ham-menu-btn__icon icon-menu" aria-hidden="true">☰</i>
            </button>
          </div>
        </div>
        <div className="hdr-news">
          <p className="hdr-news__txtarea">遺言書作成サポート・任意後見契約・死後事務委任契約・相続手続き</p>
        </div>
      </header>

      {/* Fixed Sticky Header for Scrolling */}
      <div className="hdr-fixed js-hdr-fixed">
        <div className="container hdr-fixed__inner">
          <div className="hdr-fixed__logo">
            <p className="hdr__logo-ttl hdr__logo-ttl--fixed">
              <a className="hdr__logo-link" href="/">
                <img width="1511" height="232" src={logoImg} className="hdr__logo-img" alt="宝塚終活サポートオフィス/行政書士藤原修事務所" loading="eager" />
              </a>
            </p>
          </div>
          <div className="hdr__nav">
            <nav className="ddmenu" aria-label="グローバルナビゲーション">
              <div className="ddmenu__inner">
                <ul className="ddmenu__list">
                  <li className="menu-item"><a href="/">ホーム</a></li>
                  <li className="menu-item"><a href="/igon/">遺言</a></li>
                  <li className="menu-item"><a href="/sozoku/">相続</a></li>
                  <li className="menu-item"><a href="/ninikoken/">任意後見</a></li>
                  <li className="menu-item"><a href="/shigojimu/">死後事務</a></li>
                  <li className="menu-item"><a href="/checklist/">チェックリスト</a></li>
                  <li className="menu-item"><a href="/contact/">お問い合わせ</a></li>
                </ul>
              </div>
            </nav>
          </div>
          <div className="ham-menu-btn js-menu-btn is-md">
            <button className="ham-menu-btn__button" aria-label="メニューを開く" onClick={toggleMenu}>
              <i className="ham-menu-btn__icon icon-menu" aria-hidden="true">☰</i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Hamburger Menu Overlay */}
      <div className={`ham-menu js-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <nav className="ham-menu__inner">
          <div className="ham-menu-btn is-close js-menu-btn">
            <button className="ham-menu-btn__button" aria-label="メニューを閉じる" onClick={toggleMenu}>
              <i className="ham-menu-btn__icon icon-menu_close" aria-hidden="true">✕</i>
            </button>
          </div>
          <div className="ham-menu__nav">
            <ul className="common-nav">
              <li className="menu-item"><a href="/" onClick={toggleMenu}>ホーム</a></li>
              <li className="menu-item"><a href="/igon/" onClick={toggleMenu}>遺言</a></li>
              <li className="menu-item"><a href="/sozoku/" onClick={toggleMenu}>相続</a></li>
              <li className="menu-item"><a href="/ninikoken/" onClick={toggleMenu}>任意後見</a></li>
              <li className="menu-item"><a href="/shigojimu/" onClick={toggleMenu}>死後事務</a></li>
              <li className="menu-item"><a href="/checklist/" onClick={toggleMenu}>チェックリスト</a></li>
              <li className="menu-item"><a href="/contact/" onClick={toggleMenu}>お問い合わせ</a></li>
            </ul>
          </div>
        </nav>
        <div className="ham-menu__bg js-menu-bg" onClick={toggleMenu}></div>
      </div>
    </>
  );
}