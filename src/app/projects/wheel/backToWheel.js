const BackToWheel = (props) => {

    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    const scrollToTop = () => {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
      <button
        className={props.className}
        style={{
            cursor: 'pointer',
        }}
        onClick={scrollToTop}
      >
        <span
            style={{
                position: 'absolute',
                clipPath: 'polygon(50% 20%, 0 70%, 100% 70%)',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'block',
                fontSize: '50px',
                width: '50px',
                height: '50px',
                backgroundColor: 'var(--foreground)',
                zIndex: '-1'
            }}
        >
        </span>
        <span style={{  }}>Back to Wheel</span>
      </button>
    )
  }
  
  export default BackToWheel