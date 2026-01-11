import React, { useState } from 'react';

const SquishyToggleButtons: React.FC = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [activeStates, setActiveStates] = useState({ toggle1: false, toggle2: false });

  const handleMouseDown = (toggleName: 'toggle1' | 'toggle2') => {
    setActiveStates(prev => ({ ...prev, [toggleName]: true }));
  };

  const handleMouseUp = (toggleName: 'toggle1' | 'toggle2') => {
    setActiveStates(prev => ({ ...prev, [toggleName]: false }));
  };

  const toggleHandler = (toggleName: 'toggle1' | 'toggle2') => {
    if (toggleName === 'toggle1') {
      setToggle1(!toggle1);
    } else {
      setToggle2(!toggle2);
    }
  };

  return (
    <div style={{
      fontFamily: "'Lato', sans-serif",
      background: 'url(https://s.cdpn.io/1715/dark_stripes.png)',
      textAlign: 'center',
      height: '100vh',
      margin: 0,
      padding: 0,
      overflow: 'hidden'
    }}>
      <link href="https://fonts.googleapis.com/css?family=Lato:700" rel="stylesheet" />
      
      <div style={{
        textAlign: 'center',
        position: 'absolute',
        marginTop: '-80px',
        width: '100%',
        top: '50%'
      }}>
        
        {/* First Toggle */}
        <div style={{
          margin: '4px',
          display: 'inline-block',
          boxShadow: 'inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px 0 rgba(0,0,0,0.25)',
          borderRadius: '8px',
          background: '#ccd0d4',
          position: 'relative',
          height: '140px',
          width: '140px'
        }}>
          <div style={{
            boxShadow: '0 0 17.5px 8.75px #fff',
            borderRadius: '118.3px',
            background: '#fff',
            position: 'absolute',
            marginLeft: '-50.415px',
            marginTop: '-50.415px',
            opacity: 0.2,
            content: '',
            height: '100.83px',
            width: '100.83px',
            left: '50%',
            top: '50%',
            pointerEvents: 'none'
          }} />
          
          <span style={{
            filter: 'blur(1px)',
            transition: 'all 300ms cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            boxShadow: (toggle1 || activeStates.toggle1) 
              ? '0 15px 25px -4px rgba(0,0,0,0.4), inset 0 -8px 25px -1px rgba(255,255,255,0.9), 0 -10px 15px -1px rgba(255,255,255,0.6), inset 0 8px 20px 0 rgba(0,0,0,0.2), inset 0 0 5px 1px rgba(255,255,255,0.6)'
              : activeStates.toggle1 
                ? '0 15px 25px -4px rgba(0,0,0,0.4), inset 0 -8px 30px 1px rgba(255,255,255,0.9), 0 -10px 15px -1px rgba(255,255,255,0.6), inset 0 8px 25px 0 rgba(0,0,0,0.4), inset 0 0 10px 1px rgba(255,255,255,0.6)'
                : '0 15px 25px -4px rgba(0,0,0,0.5), inset 0 -3px 4px -1px rgba(0,0,0,0.2), 0 -10px 15px -1px rgba(255,255,255,0.6), inset 0 3px 4px -1px rgba(255,255,255,0.2), inset 0 0 5px 1px rgba(255,255,255,0.8), inset 0 20px 30px 0 rgba(255,255,255,0.2)',
            borderRadius: '96.32px',
            position: 'absolute',
            background: '#ccd0d4',
            marginLeft: '-48.16px',
            marginTop: '-48.16px',
            display: 'block',
            height: '96.32px',
            width: '96.32px',
            left: '50%',
            top: '50%',
            pointerEvents: 'none'
          }} />
          
          <span style={{
            transition: 'color 300ms ease-out',
            textShadow: '1px 1px 3px #ccd0d4, 0 0 0 rgba(0,0,0,0.8), 1px 1px 4px #fff',
            lineHeight: '139px',
            textAlign: 'center',
            position: 'absolute',
            fontWeight: 700,
            fontSize: (toggle1 || activeStates.toggle1) ? '40px' : '42px',
            display: 'block',
            opacity: 0.9,
            height: '100%',
            width: '100%',
            color: (toggle1 || activeStates.toggle1) ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.4)',
            pointerEvents: 'none'
          }}>
            +
          </span>
          
          <input
            type="checkbox"
            checked={toggle1}
            onChange={() => toggleHandler('toggle1')}
            onMouseDown={() => handleMouseDown('toggle1')}
            onMouseUp={() => handleMouseUp('toggle1')}
            onMouseLeave={() => handleMouseUp('toggle1')}
            style={{
              opacity: 0,
              position: 'absolute',
              cursor: 'pointer',
              zIndex: 1,
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              margin: 0
            }}
          />
        </div>

        {/* Second Toggle */}
        <div style={{
          margin: '4px',
          display: 'inline-block',
          boxShadow: 'inset 0 0 35px 5px rgba(0,0,0,0.25), inset 0 2px 1px 1px rgba(255,255,255,0.9), inset 0 -2px 1px 0 rgba(0,0,0,0.25)',
          borderRadius: '8px',
          background: '#ccd0d4',
          position: 'relative',
          height: '140px',
          width: '140px'
        }}>
          <div style={{
            boxShadow: '0 0 17.5px 8.75px #fff',
            borderRadius: '118.3px',
            background: '#fff',
            position: 'absolute',
            marginLeft: '-50.415px',
            marginTop: '-50.415px',
            opacity: 0.2,
            content: '',
            height: '100.83px',
            width: '100.83px',
            left: '50%',
            top: '50%',
            pointerEvents: 'none'
          }} />
          
          <span style={{
            filter: 'blur(1px)',
            transition: 'all 300ms cubic-bezier(0.230, 1.000, 0.320, 1.000)',
            boxShadow: (toggle2 || activeStates.toggle2) 
              ? '0 15px 25px -4px rgba(0,0,0,0.4), inset 0 -8px 25px -1px rgba(255,255,255,0.9), 0 -10px 15px -1px rgba(255,255,255,0.6), inset 0 8px 20px 0 rgba(0,0,0,0.2), inset 0 0 5px 1px rgba(255,255,255,0.6)'
              : activeStates.toggle2 
                ? '0 15px 25px -4px rgba(0,0,0,0.4), inset 0 -8px 30px 1px rgba(255,255,255,0.9), 0 -10px 15px -1px rgba(255,255,255,0.6), inset 0 8px 25px 0 rgba(0,0,0,0.4), inset 0 0 10px 1px rgba(255,255,255,0.6)'
                : '0 15px 25px -4px rgba(0,0,0,0.5), inset 0 -3px 4px -1px rgba(0,0,0,0.2), 0 -10px 15px -1px rgba(255,255,255,0.6), inset 0 3px 4px -1px rgba(255,255,255,0.2), inset 0 0 5px 1px rgba(255,255,255,0.8), inset 0 20px 30px 0 rgba(255,255,255,0.2)',
            borderRadius: '96.32px',
            position: 'absolute',
            background: '#ccd0d4',
            marginLeft: '-48.16px',
            marginTop: '-48.16px',
            display: 'block',
            height: '96.32px',
            width: '96.32px',
            left: '50%',
            top: '50%',
            pointerEvents: 'none'
          }} />
          
          <span style={{
            transition: 'color 300ms ease-out',
            textShadow: '1px 1px 3px #ccd0d4, 0 0 0 rgba(0,0,0,0.8), 1px 1px 4px #fff',
            lineHeight: '139px',
            textAlign: 'center',
            position: 'absolute',
            fontWeight: 700,
            fontSize: (toggle2 || activeStates.toggle2) ? '40px' : '42px',
            display: 'block',
            opacity: 0.9,
            height: '100%',
            width: '100%',
            color: (toggle2 || activeStates.toggle2) ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.4)',
            pointerEvents: 'none'
          }}>
            –
          </span>
          
          <input
            type="checkbox"
            checked={toggle2}
            onChange={() => toggleHandler('toggle2')}
            onMouseDown={() => handleMouseDown('toggle2')}
            onMouseUp={() => handleMouseUp('toggle2')}
            onMouseLeave={() => handleMouseUp('toggle2')}
            style={{
              opacity: 0,
              position: 'absolute',
              cursor: 'pointer',
              zIndex: 1,
              height: '100%',
              width: '100%',
              left: 0,
              top: 0,
              margin: 0
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default SquishyToggleButtons;
