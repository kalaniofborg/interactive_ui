import React from 'react';

const BlogMagazine = () => {
  return (
    <div className="h-screen bg-gray-900 flex items-center font-sans w-full" style={{ margin: 0, padding: 0 }}>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500&family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@400;500;600;700&display=swap");
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        html, body {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        @media screen and (max-width: 768px) {
          .h-screen {
            padding: 0 !important;
          }
        }
        
        .title-font { font-family: "Space Grotesk", sans-serif; }
        .subtitle-font { font-family: "Inter", sans-serif; }
        .italic-font { font-family: "Playfair Display", serif; }
        
        .blog-container {
          background-color: #e9e6e4;
          width: 100%;
          display: grid;
          height: 100%;
          max-height: 800px;
          overflow: hidden;
          grid-template-columns: 15% 20% 35% 30%;
          grid-template-rows: 100%;
          padding: 40px 20px;
          position: relative;
        }
        
        @media screen and (max-width: 1030px) {
          .blog-container {
            grid-template-columns: 20% 50% 30%;
          }
          .is-menu {
            display: none !important;
          }
        }
        
        @media screen and (max-width: 768px) {
          .blog-container {
            grid-template-columns: 25% 75%;
            width: 100%;
            max-width: none;
            height: 100vh;
            padding: 20px 2px;
          }
          .right-blog {
            display: none !important;
          }
        }
        
        @media screen and (max-width: 560px) {
          .blog-container {
            grid-template-columns: 100%;
            height: 100vh;
            padding: 10px 2px;
          }
          .blog-is-sticky {
            display: none !important;
          }
        }
        
        .blog-part {
          padding: 0 20px;
        }
        
        .blog-part:not(:last-child) {
          border-right: 1px solid #94918f;
        }
        
        .blog-menu {
          font-size: 22px;
          text-decoration: none;
          color: #161419;
          display: flex;
          letter-spacing: -0.5px;
          align-items: center;
        }
        
        @media screen and (max-width: 1260px) {
          .blog-menu {
            font-size: 1.6vw;
          }
        }
        
        @media screen and (max-width: 768px) {
          .blog-menu {
            font-size: 18px;
          }
        }
        
        @media screen and (max-width: 560px) {
          .blog-menu {
            font-size: 16px;
          }
        }
        
        .blog-menu + .blog-menu {
          margin-top: 24px;
        }
        
        .blog-menu.mention {
          margin-top: auto;
          font-size: 19px;
        }
        
        .blog-menu.subscribe {
          margin-top: 8px;
          font-size: 19px;
          position: relative;
        }
        
        .blog-menu.subscribe:before {
          content: "";
          width: 16px;
          height: 16px;
          background-color: #161419;
          border-radius: 1px;
          margin-right: 14px;
        }
        
        .blog-menu.rounded:before {
          content: "";
          border-radius: 50%;
          width: 12px;
          height: 12px;
          background-color: #161419;
          margin-right: 12px;
        }
        
        .blog-big-title {
          font-size: 132px;
          font-weight: 700;
          letter-spacing: -5px;
          line-height: 1;
          margin-bottom: 6px;
        }
        
        @media screen and (max-width: 1400px) {
          .blog-big-title {
            font-size: 120px;
          }
        }
        
        @media screen and (max-width: 1260px) {
          .blog-big-title {
            font-size: 9vw;
            letter-spacing: -2px;
          }
        }
        
        @media screen and (max-width: 560px) {
          .blog-big-title {
            font-size: 36px;
            margin-bottom: 12px;
          }
        }
        
        .blog-header {
          display: flex;
          flex-direction: column;
        }
        
        .blog-article {
          padding: 0 20px;
        }
        
        .blog-article img {
          height: 260px;
          max-height: 22vh;
          width: 100%;
          object-fit: cover;
          filter: grayscale(1);
        }
        
        .page-number {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          font-size: 72px;
          text-align: center;
          letter-spacing: -3px;
          font-weight: lighter;
          border-right: 1px solid #94918f;
          white-space: nowrap;
        }
        
        @media screen and (max-width: 1260px) {
          .page-number {
            font-size: 5vw;
          }
        }
        
        .small-title {
          border-bottom: 1px solid #94918f;
          margin-bottom: 20px;
          padding-bottom: 20px;
        }
        
        @media screen and (max-width: 560px) {
          .small-title {
            font-size: 14px;
            position: absolute;
            top: 10px;
            right: 24px;
            border-bottom: 0;
            margin-bottom: 0;
            padding-bottom: 0;
          }
        }
        
        .date {
          display: flex;
          justify-content: flex-end;
        }
        
        .blog-article h2 {
          font-size: 26px;
          font-weight: 500;
          line-height: 1.2;
          margin: 8px 0 8px;
        }
        
        @media screen and (max-width: 768px) {
          .blog-article h2 {
            font-size: 22px;
          }
        }
        
        @media screen and (max-width: 560px) {
          .blog-article h2 {
            font-size: 20px;
          }
        }
        
        .blog-article h2 span {
          font-family: "Playfair Display", serif;
        }
        
        .blog-article p {
          line-height: 1.5;
          margin: 14px 0;
        }
        
        @media screen and (max-width: 560px) {
          .blog-article p {
            font-size: 14px;
          }
        }
        
        .blog-article a {
          color: #161419;
          text-decoration: none;
          font-size: 26px;
          letter-spacing: -1px;
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: auto;
          border-top: 1px solid #94918f;
          padding-top: 14px;
        }
        
        @media screen and (max-width: 768px) {
          .blog-article a {
            font-size: 20px;
          }
        }
        
        @media screen and (max-width: 560px) {
          .blog-article a {
            font-size: 18px;
          }
        }
        
        .blog-detail {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
        }
        
        .blog-detail span {
          font-family: "Playfair Display", serif;
        }
        
        .blog-header-container {
          overflow-y: auto;
          overflow-x: hidden;
          height: 100%;
          display: flex;
          flex-direction: column;
          scroll-snap-type: y mandatory;
          border-right: 1px solid #94918f;
        }
        
        @media screen and (max-width: 768px) {
          .blog-header-container {
            border-right: 0;
          }
        }
        
        .blog-header-container > * {
          flex-shrink: 0;
          min-height: 100%;
          scroll-snap-align: start;
        }
        
        .blog-article:not(.header-article) {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }
        
        .marquee-container {
          font-size: 20px;
          background-color: #121418;
          color: #e9e6e4;
          padding: 6px 0;
          width: calc(100% + 44px);
          margin-left: -20px;
          flex-shrink: 0;
          overflow: hidden;
          white-space: nowrap;
        }
        
        .marquee-content {
          display: inline-block;
          padding-left: 100%;
          animation: marquee 30s linear infinite;
        }
        
        @keyframes marquee {
          0% { transform: translate3d(100%, 0, 0); }
          100% { transform: translate3d(-100%, 0, 0); }
        }
        
        .marquee-span:before {
          display: inline-block;
          content: "";
          border-radius: 50%;
          width: 10px;
          height: 10px;
          position: relative;
          top: -1px;
          vertical-align: baseline;
          background-color: #e9e6e4;
          margin: 0 16px;
        }
        
        .blog-right {
          overflow: auto;
          height: calc(100% + 60px);
        }
        
        .blog-right-title {
          font-size: 25px;
          font-family: "Playfair Display", serif;
        }
        
        .blog-right-title-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #94918f;
          margin-bottom: 20px;
          padding-bottom: 20px;
          margin-top: 100px;
          letter-spacing: -1px;
        }
        
        @media screen and (max-width: 1400px) {
          .blog-right-title-container {
            margin-top: 88px;
          }
        }
        
        @media screen and (max-width: 1260px) {
          .blog-right-title-container {
            margin-top: 6vw;
          }
        }
        
        @media screen and (max-width: 1030px) {
          .blog-right-title-container {
            margin-top: 5vw;
          }
        }
        
        .blog-title-date {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
        }
        
        .blog-right-page {
          font-size: 56px;
          margin-bottom: 16px;
          font-family: "Space Grotesk", sans-serif;
        }
        
        .blog-right-page-title {
          font-family: "Space Grotesk", sans-serif;
          font-size: 28px;
          font-weight: 600;
          max-width: 16ch;
          letter-spacing: -2px;
        }
        
        .blog-right-page-subtitle {
          max-width: 33ch;
          font-size: 15px;
          margin-top: 12px;
          line-height: 1.4;
        }
        
        .blog-right-container + .blog-right-container {
          margin-top: 40px;
        }
        
        .circle {
          width: 100%;
          aspect-ratio: 1/1;
          border-radius: 50%;
          background-color: #121418;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
          color: #e9e6e4;
          padding: 20px;
          text-align: center;
          margin-top: 40px;
        }
        
        .circle-title {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 12px;
          font-family: "Space Grotesk", sans-serif;
        }
        
        @media screen and (max-width: 1030px) {
          .circle-title {
            display: none;
          }
        }
        
        .circle-subtitle {
          max-width: 30ch;
          font-size: 14px;
          line-height: 1.3;
          margin-bottom: 16px;
        }
        
        .circle-footer {
          font-family: "Playfair Display", serif;
          font-size: 30px;
        }
        
        ::-webkit-scrollbar {
          display: none;
        }
      `}} />
      
      <div className="blog-container">
        {/* Menu Section */}
        <div className="blog-part is-menu flex flex-col">
          <a href="#" className="blog-menu">
            Work
            <svg fill="none" stroke="currentColor" strokeWidth=".7" strokeLinecap="round" strokeLinejoin="round" className="w-6 ml-1" viewBox="0 0 24 24">
              <path d="M7 17L17 7M7 7h10v10" />
            </svg>
          </a>
          <a href="#" className="blog-menu">Studio</a>
          <a href="#" className="blog-menu">Blog</a>
          <a href="#" className="blog-menu">Contact</a>
        </div>
        
        {/* Sticky Header */}
        <div className="blog-header blog-is-sticky">
          <div className="blog-article header-article">
            <div className="blog-big-title title-font">Self</div>
            <div className="blog-menu rounded small-title">Pinned Issue</div>
          </div>
          <div className="blog-article page-number title-font">
            NO. 01
          </div>
        </div>
        
        {/* Main Content */}
        <div className="blog-header-container">
          {/* Esteem Section */}
          <div className="blog-header">
            <div className="blog-article header-article">
              <div className="blog-big-title title-font">Esteem</div>
              <div className="blog-menu small-title date">12.06.2021</div>
            </div>
            <div className="blog-article">
              <img src="https://images.unsplash.com/photo-1496629062893-b0f566065d44?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <h2>Sharing The <span>Widespread</span> Acclaim About Motivation</h2>
              <div className="blog-detail">
                <span>By Richard Carnation</span>
                <span>5 Min Read</span>
              </div>
              <p>Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's unconventional</p>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 mr-2" viewBox="0 0 24 24">
                  <path d="M15 10l5 5-5 5" />
                  <path d="M4 4v7a4 4 0 004 4h12" />
                </svg>
                See More
              </a>
            </div>
          </div>
          
          {/* Love Section */}
          <div className="blog-header">
            <div className="blog-article header-article">
              <div className="blog-big-title title-font">Love</div>
              <div className="blog-menu small-title date">12.06.2021</div>
            </div>
            <div className="blog-article">
              <img src="https://images.unsplash.com/photo-1529255484355-cb73c33c04bb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTh8fGJsYWNrJTIwYW5kJTIwd2hpdGV8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <h2>Talking About <span>Vulnerability</span> During Quarantine</h2>
              <div className="blog-detail">
                <span>By Tom Hiddleston</span>
                <span>5 Min Read</span>
              </div>
              <p>Having traveled to Turkey multiple times, with critics praising Ocean's introspective lyrics and the album's unconventional</p>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 mr-2" viewBox="0 0 24 24">
                  <path d="M15 10l5 5-5 5" />
                  <path d="M4 4v7a4 4 0 004 4h12" />
                </svg>
                See More
              </a>
            </div>
          </div>
          
          {/* Control Section */}
          <div className="blog-header">
            <div className="blog-article header-article">
              <div className="blog-big-title title-font">Control</div>
              <div className="blog-menu small-title date">12.06.2021</div>
            </div>
            <div className="blog-article">
              <img src="https://images.unsplash.com/photo-1616248249518-b16013cd4e42?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTkzfHxibGFjayUyMGFuZCUyMHdoaXRlfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
              <h2>How 2020 Changed <span>Understanding</span> Of Mental Health</h2>
              <div className="blog-detail">
                <span>By Scarlett Witch</span>
                <span>5 Min Read</span>
              </div>
              <p>Time is defines ad the indefinete continued progress, with critics praising Ocean's introspective lyrics and the album's</p>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 mr-2" viewBox="0 0 24 24">
                  <path d="M15 10l5 5-5 5" />
                  <path d="M4 4v7a4 4 0 004 4h12" />
                </svg>
                See More
              </a>
            </div>
          </div>
        </div>
        
        {/* Right Sidebar */}
        <div className="blog-part right-blog flex flex-col">
          <div className="marquee-container">
            <div className="marquee-content">
              <span className="marquee-span">Now And Then You Miss It Sounds Make You Cry</span>
              <span className="marquee-span">Now In - MoMa Sharing Exhibition NOW</span>
              <span className="marquee-span">NYC Opens After Long Lockdown Check</span>
            </div>
          </div>
          
          <div className="blog-right-title-container">
            <div className="blog-right-title">Featured Articles</div>
            <div className="blog-menu rounded">See All</div>
          </div>
          
          <div className="blog-right">
            <div className="blog-right-container">
              <div className="blog-title-date">
                <div className="blog-right-page">1</div>
                <div className="date">12.06.2021</div>
              </div>
              <div className="blog-right-page-title">Blonde - Widespread Acclaim</div>
              <div className="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's</div>
            </div>
            
            <div className="blog-right-container">
              <div className="blog-title-date">
                <div className="blog-right-page">2</div>
                <div className="date">12.06.2021</div>
              </div>
              <div className="blog-right-page-title">Introspective Lyrics and Beats</div>
              <div className="blog-right-page-subtitle">When we toured Scotland we stopped at several selft-sealing hpuses because hotels would</div>
            </div>
            
            <div className="blog-right-container">
              <div className="blog-title-date">
                <div className="blog-right-page">3</div>
                <div className="date">12.06.2021</div>
              </div>
              <div className="blog-right-page-title">The Language Of Gris: Comples Beauty Of Monochrome</div>
              <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
            </div>
            
            <div className="blog-right-container">
              <div className="blog-title-date">
                <div className="blog-right-page">4</div>
                <div className="date">12.06.2021</div>
              </div>
              <div className="blog-right-page-title">A24 IS LAUNCHING ITS OWN BEAUTY BRAND</div>
              <div className="blog-right-page-subtitle">Blonde received widespread acclaim, with critics praising Ocean's introspective lyrics and the album's</div>
            </div>
            
            <div className="blog-right-container">
              <div className="blog-title-date">
                <div className="blog-right-page">5</div>
                <div className="date">12.06.2021</div>
              </div>
              <div className="blog-right-page-title">Elon Musk's SpaceX is launching a moon satellite</div>
              <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
            </div>
            
            <div className="blog-right-container">
              <div className="blog-title-date">
                <div className="blog-right-page">6</div>
                <div className="date">12.06.2021</div>
              </div>
              <div className="blog-right-page-title">What Happens When You Leave Your Old life Behind</div>
              <div className="blog-right-page-subtitle">The interior concept was conceived of by Dutch archtitect Studio Anne Holtrop who cleverly emulated</div>
            </div>
            
            <div className="circle">
              <div className="circle-title">Leave Your Old Life Behind</div>
              <div className="circle-subtitle">Don't try to be like someone else, be yourself. Be secure with yourself.</div>
              <div className="circle-footer">Explore</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMagazine;
