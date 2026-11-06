import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  const [text, setText] = React.useState('');
  const fullText = "AI Engineer | Full Stack Developer | Problem Solver";

  React.useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="section-padding"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}
    >
      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

        @keyframes beamRotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes floatGentle {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes ambientAura {
          0%, 100% {
            opacity: 0.5;
            filter: blur(40px);
            transform: scale(0.95);
          }
          50% {
            opacity: 0.85;
            filter: blur(50px);
            transform: scale(1.05);
          }
        }

        /* ── Layout ── */
        .hero-layout {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 4.5rem;
          width: 100%;
          max-width: 1100px;
          margin: 0 auto;
        }

        .hero-text {
          flex: 1;
          text-align: left;
        }

        /* ── Portrait Rectangle Photo Holder ── */
        .photo-card-wrapper {
          position: relative;
          width: 295px;
          height: 395px;
          flex-shrink: 0;
          animation: floatGentle 6s ease-in-out infinite;
          perspective: 1000px;
        }

        /* Dynamic multi-tone ambient aura behind the frame */
        .photo-ambient-aura {
          position: absolute;
          inset: -15px;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(59, 130, 246, 0.45) 0%,
            rgba(168, 85, 247, 0.35) 45%,
            rgba(34, 211, 238, 0.2) 70%,
            transparent 85%
          );
          border-radius: 30px;
          z-index: 0;
          animation: ambientAura 5s ease-in-out infinite;
          pointer-events: none;
        }

        /* Outer subtle neon glass rim */
        .photo-glass-rim {
          position: absolute;
          inset: -8px;
          border-radius: 28px;
          border: 1px solid var(--glass-border);
          background: var(--photo-rim-bg);
          backdrop-filter: blur(12px);
          z-index: 1;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .photo-card-wrapper:hover .photo-glass-rim {
          inset: -12px;
          border-color: rgba(59, 130, 246, 0.4);
          background: var(--photo-rim-bg);
          box-shadow: 0 16px 45px var(--primary-glow);
        }

        /* Rotating Conic Border Beam Container */
        .photo-card-main {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 22px;
          overflow: hidden;
          padding: 2px;
          z-index: 2;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.65);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease;
        }

        .photo-card-wrapper:hover .photo-card-main {
          transform: translateY(-5px) scale(1.02);
          box-shadow: 0 30px 65px rgba(0, 0, 0, 0.75), 0 0 35px rgba(59, 130, 246, 0.35);
        }

        /* The circulating light beam */
        .photo-beam-light {
          position: absolute;
          width: 250%;
          height: 250%;
          top: -75%;
          left: -75%;
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 60deg,
            #3b82f6 120deg,
            #22d3ee 180deg,
            #a855f7 240deg,
            transparent 300deg,
            transparent 360deg
          );
          animation: beamRotate 5s linear infinite;
          z-index: 0;
        }

        /* Inner canvas frame holding just the photo */
        .photo-inner-canvas {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 20px;
          overflow: hidden;
          background: var(--photo-inner-bg);
          z-index: 1;
        }

        .photo-img-clean {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 15%;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), filter 0.4s ease;
        }

        .photo-card-wrapper:hover .photo-img-clean {
          transform: scale(1.04);
        }

        /* Minimalist outer corner frame lines (outside, strictly not overlapping the photo) */
        .corner-tick {
          position: absolute;
          width: 14px;
          height: 14px;
          z-index: 3;
          pointer-events: none;
          opacity: 0.6;
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .corner-tick-tl {
          top: -14px;
          left: -14px;
          border-top: 2px solid #3b82f6;
          border-left: 2px solid #3b82f6;
          border-top-left-radius: 6px;
        }

        .corner-tick-br {
          bottom: -14px;
          right: -14px;
          border-bottom: 2px solid #a855f7;
          border-right: 2px solid #a855f7;
          border-bottom-right-radius: 6px;
        }

        .photo-card-wrapper:hover .corner-tick {
          opacity: 1;
          transform: scale(1.15);
        }

        /* Responsive Layout */
        @media (max-width: 860px) {
          .hero-layout {
            flex-direction: column-reverse;
            text-align: center;
            gap: 3rem;
          }
          .hero-text {
            text-align: center;
          }
          .hero-cta {
            justify-content: center !important;
          }
          .photo-card-wrapper {
            width: 250px;
            height: 335px;
          }
        }
      `}</style>

      {/* Background Orbs */}
      <div style={{
        position: 'absolute', top: '15%', right: '5%',
        width: '380px', height: '380px',
        background: 'var(--primary-glow)', filter: 'blur(120px)',
        borderRadius: '50%', zIndex: -1
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '5%',
        width: '260px', height: '260px',
        background: 'var(--secondary-glow)', filter: 'blur(100px)',
        borderRadius: '50%', zIndex: -1
      }} />

      <motion.div
        className="hero-layout"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* ══ LEFT — Main Title & Content ══ */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            style={{ fontSize: 'clamp(2.8rem, 7vw, 5.2rem)', lineHeight: '1.1', marginBottom: '1.2rem' }}
          >
            Pranav <span className="text-gradient">Rajesh</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            style={{
              fontSize: 'clamp(1rem, 2.4vw, 1.45rem)',
              color: 'var(--text-muted)',
              marginBottom: '1.6rem',
              minHeight: '1.5em',
              fontWeight: 400,
            }}
          >
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>{text}</span>
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            style={{ maxWidth: '520px', color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '2.2rem', lineHeight: '1.7' }}
          >
            Building tomorrow with AI Meets Real World Solutions. Passionate about intelligent systems and scalable web technologies.
          </motion.p>

          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}
          >
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="#projects" className="bg-gradient"
              style={{ padding: '13px 28px', borderRadius: '12px', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              View Projects <ChevronRight size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="https://github.com/Pranav1Rajesh" target="_blank" rel="noopener noreferrer"
              className="glass"
              style={{ padding: '13px 28px', borderRadius: '12px', fontWeight: 600 }}
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href="https://www.linkedin.com/in/pranav-rajesh-822aa32a4/" target="_blank" rel="noopener noreferrer"
              className="glass"
              style={{ padding: '13px 28px', borderRadius: '12px', fontWeight: 600 }}
            >
              LinkedIn
            </motion.a>
          </motion.div>
        </div>

        {/* ══ RIGHT — Clean Portrait Rectangle Photo Holder ══ */}
        <motion.div
          className="photo-card-wrapper"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Ambient Lighting Aura */}
          <div className="photo-ambient-aura" />

          {/* Frosted Outer Glass Rim */}
          <div className="photo-glass-rim" />

          {/* Subtle Outer Framing Accents (Outside, never overlapping image) */}
          <div className="corner-tick corner-tick-tl" />
          <div className="corner-tick corner-tick-br" />

          {/* Main Card with Conic Rotating Border Beam */}
          <div className="photo-card-main">
            <div className="photo-beam-light" />
            <div className="photo-inner-canvas">
              <img
                src="/pranav.jpg"
                alt="Pranav Rajesh"
                className="photo-img-clean"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
