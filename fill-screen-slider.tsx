import React, { useEffect, useRef, useState } from 'react';

interface DataItem {
  place: string;
  title: string;
  title2: string;
  description: string;
  image: string;
}

const data: DataItem[] = [
  {
    place: 'Switzerland Alps',
    title: 'SAINT',
    title2: 'ANTONIEN',
    description: 'Tucked away in the Switzerland Alps, Saint Antönien offers an idyllic retreat for those seeking tranquility and adventure alike. It\'s a hidden gem for backcountry skiing in winter and boasts lush trails for hiking and mountain biking during the warmer months.',
    image: 'https://assets.codepen.io/3685267/timed-cards-1.jpg'
  },
  {
    place: 'Japan Alps',
    title: 'NANGANO',
    title2: 'PREFECTURE',
    description: 'Nagano Prefecture, set within the majestic Japan Alps, is a cultural treasure trove with its historic shrines and temples, particularly the famous Zenkō-ji. The region is also a hotspot for skiing and snowboarding, offering some of the country\'s best powder.',
    image: 'https://assets.codepen.io/3685267/timed-cards-2.jpg'
  },
  {
    place: 'Sahara Desert - Morocco',
    title: 'MARRAKECH',
    title2: 'MEROUGA',
    description: 'The journey from the vibrant souks and palaces of Marrakech to the tranquil, starlit sands of Merzouga showcases the diverse splendor of Morocco. Camel treks and desert camps offer an unforgettable immersion into the nomadic way of life.',
    image: 'https://assets.codepen.io/3685267/timed-cards-3.jpg'
  },
  {
    place: 'Sierra Nevada - USA',
    title: 'YOSEMITE',
    title2: 'NATIONAL PARK',
    description: 'Yosemite National Park is a showcase of the American wilderness, revered for its towering granite monoliths, ancient giant sequoias, and thundering waterfalls. The park offers year-round recreational activities, from rock climbing to serene valley walks.',
    image: 'https://assets.codepen.io/3685267/timed-cards-4.jpg'
  }
];

const TravelSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % data.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + data.length) % data.length);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const currentData = data[currentIndex];
  const nextIndex = (currentIndex + 1) % data.length;
  const nextData = data[nextIndex];

  return (
    <div className="travel-slider">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@500&display=swap");
        
        .travel-slider {
          margin: 0;
          background-color: #1a1a1a;
          color: #FFFFFFDD;
          font-family: "Inter", sans-serif;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          position: relative;
        }

        /* Navigation */
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 36px;
          font-weight: 500;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-transform: uppercase;
          font-size: 14px;
        }

        .nav-menu {
          display: flex;
          align-items: center;
          gap: 24px;
          text-transform: uppercase;
          font-size: 14px;
        }

        .nav-item {
          position: relative;
          cursor: pointer;
        }

        .nav-item.active::after {
          content: "";
          position: absolute;
          bottom: -8px;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 99px;
          background-color: #ecad29;
        }

        .nav-icon {
          width: 20px;
          height: 20px;
        }

        /* Main layout */
        .main-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 100vh;
        }

        /* Left column - Content */
        .content-column {
          padding: 120px 60px 80px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 10;
        }

        .place-tag {
          position: relative;
          font-size: 20px;
          margin-bottom: 24px;
          padding-top: 16px;
        }

        .place-tag::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 30px;
          height: 4px;
          border-radius: 99px;
          background-color: white;
        }

        .main-title {
          font-family: "Oswald", sans-serif;
          font-weight: 600;
          font-size: clamp(48px, 8vw, 72px);
          line-height: 0.9;
          margin-bottom: 16px;
          overflow: hidden;
        }

        .title-line {
          transform: translateY(100%);
          animation: slideInUp 0.8s ease-out forwards;
        }

        .title-line:nth-child(2) {
          animation-delay: 0.1s;
        }

        @keyframes slideInUp {
          to {
            transform: translateY(0);
          }
        }

        .description {
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 500px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.3s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .cta-buttons {
          display: flex;
          align-items: center;
          gap: 16px;
          opacity: 0;
          animation: fadeInUp 0.8s ease-out 0.4s forwards;
        }

        .bookmark-btn {
          border: none;
          background-color: #ecad29;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .bookmark-btn:hover {
          transform: scale(1.1);
        }

        .discover-btn {
          border: 1px solid #ffffff;
          background-color: transparent;
          height: 48px;
          border-radius: 24px;
          color: #ffffff;
          padding: 0 24px;
          font-size: 14px;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .discover-btn:hover {
          background-color: #ffffff;
          color: #1a1a1a;
        }

        /* Right column - Images */
        .image-column {
          position: relative;
          overflow: hidden;
        }

        .main-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: transform 1s ease-in-out;
        }

        .main-image.active {
          transform: scale(1);
        }

        .main-image.next {
          transform: scale(1.1) translateX(100%);
        }

        .main-image.prev {
          transform: scale(1.1) translateX(-100%);
        }

        /* Thumbnail strip */
        .thumbnail-strip {
          position: absolute;
          bottom: 80px;
          right: 40px;
          display: flex;
          gap: 12px;
          z-index: 20;
        }

        .thumbnail {
          width: 60px;
          height: 80px;
          background-size: cover;
          background-position: center;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.6;
          border: 2px solid transparent;
        }

        .thumbnail.active {
          opacity: 1;
          border-color: #ecad29;
          transform: scale(1.1);
        }

        .thumbnail:hover {
          opacity: 1;
          transform: scale(1.05);
        }

        /* Controls */
        .controls {
          position: absolute;
          bottom: 40px;
          left: 60px;
          display: flex;
          align-items: center;
          gap: 24px;
          z-index: 20;
        }

        .arrow-btn {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255, 255, 255, 0.3);
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          color: rgba(255, 255, 255, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .arrow-btn:hover {
          border-color: #ecad29;
          color: #ecad29;
          transform: scale(1.1);
        }

        .progress-bar-container {
          width: 200px;
          height: 3px;
          background-color: rgba(255, 255, 255, 0.2);
          border-radius: 2px;
          overflow: hidden;
        }

        .progress-bar {
          height: 100%;
          background-color: #ecad29;
          border-radius: 2px;
          transition: width 0.3s ease;
        }

        .slide-counter {
          font-size: 18px;
          font-weight: bold;
          color: white;
          min-width: 40px;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .main-container {
            grid-template-columns: 1fr;
            grid-template-rows: 1fr auto;
          }
          
          .content-column {
            padding: 100px 40px 40px;
          }
          
          .image-column {
            height: 50vh;
          }
          
          .thumbnail-strip {
            bottom: 20px;
            right: 20px;
          }
          
          .controls {
            bottom: 20px;
            left: 40px;
          }
        }

        @media (max-width: 768px) {
          .navigation {
            padding: 16px 20px;
          }
          
          .nav-menu {
            gap: 16px;
            font-size: 12px;
          }
          
          .content-column {
            padding: 80px 20px 40px;
          }
          
          .main-title {
            font-size: clamp(32px, 10vw, 48px);
          }
          
          .description {
            font-size: 14px;
            margin-bottom: 24px;
          }
          
          .thumbnail-strip {
            gap: 8px;
          }
          
          .thumbnail {
            width: 40px;
            height: 60px;
          }
          
          .controls {
            left: 20px;
            gap: 16px;
          }
          
          .progress-bar-container {
            width: 120px;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-brand">
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          <div>Globe Express</div>
        </div>
        <div className="nav-menu">
          <div className="nav-item active">Home</div>
          <div className="nav-item">Holidays</div>
          <div className="nav-item">Destinations</div>
          <div className="nav-item">Flights</div>
          <div className="nav-item">Offers</div>
          <div className="nav-item">Contact</div>
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <svg className="nav-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
      </nav>

      {/* Main Content */}
      <div className="main-container">
        {/* Left Column - Content */}
        <div className="content-column">
          <div className="place-tag" key={`place-${currentIndex}`}>
            {currentData.place}
          </div>
          
          <div className="main-title" key={`title-${currentIndex}`}>
            <div className="title-line">{currentData.title}</div>
            <div className="title-line">{currentData.title2}</div>
          </div>
          
          <div className="description" key={`desc-${currentIndex}`}>
            {currentData.description}
          </div>
          
          <div className="cta-buttons">
            <button className="bookmark-btn">
              <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="discover-btn">Discover Location</button>
          </div>
        </div>

        {/* Right Column - Images */}
        <div className="image-column">
          <div 
            className="main-image active"
            style={{ backgroundImage: `url(${currentData.image})` }}
            key={`main-${currentIndex}`}
          ></div>
          
          {/* Thumbnail Strip */}
          <div className="thumbnail-strip">
            {data.map((item, index) => (
              <div
                key={index}
                className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
                style={{ backgroundImage: `url(${item.image})` }}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="controls">
        <button className="arrow-btn" onClick={prevSlide}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button className="arrow-btn" onClick={nextSlide}>
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
        
        <div className="progress-bar-container">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentIndex + 1) / data.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="slide-counter">
          {String(currentIndex + 1).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};

export default TravelSlider;
