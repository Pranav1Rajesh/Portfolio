import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

/* WhatsApp SVG icon (matches lucide style) */
const WhatsAppIcon = ({ size = 32 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="WhatsApp"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const WHATSAPP_NUMBER = '916380237447';
const WHATSAPP_MSG = encodeURIComponent(
  "Hi Pranav! We looked into your portfolio and would like to discuss a potential opportunity with you. Are you available for a quick chat?"
);

const contactLinks = [
  {
    id: 'email',
    href: 'mailto:pranav.rajesh@gmail.com',
    icon: <Mail size={32} />,
    label: 'Email',
    color: '#3b82f6',
    target: '_self',
  },
  {
    id: 'whatsapp',
    href: `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`,
    icon: <WhatsAppIcon size={32} />,
    label: 'WhatsApp',
    color: '#25d366',
    target: '_blank',
  },
  {
    id: 'github',
    href: 'https://github.com/Pranav1Rajesh',
    icon: <Github size={32} />,
    label: 'GitHub',
    color: '#a855f7',
    target: '_blank',
  },
  {
    id: 'linkedin',
    href: 'https://www.linkedin.com/in/pranav-rajesh-822aa32a4/',
    icon: <Linkedin size={32} />,
    label: 'LinkedIn',
    color: '#0ea5e9',
    target: '_blank',
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <style>{`
        .contact-card {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--card-hover-color, transparent);
          opacity: 0;
          transition: opacity 0.35s ease;
          border-radius: inherit;
        }
        .contact-card:hover::before {
          opacity: 0.1;
        }
        .contact-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5), 0 0 24px var(--card-hover-shadow, transparent);
        }
        .contact-icon-wrap {
          transition: transform 0.3s ease;
        }
        .contact-card:hover .contact-icon-wrap {
          transform: scale(1.15) rotate(-5deg);
        }
      `}</style>

      <div style={{ maxWidth: '860px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 style={{ fontSize: 'medium', color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem' }}>
            Contact
          </h2>
          <h3 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Let's Connect</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', marginBottom: '3rem', maxWidth: '520px', margin: '0 auto 3rem auto' }}>
            Have a project in mind or just want to say hi? I'm always open to new opportunities and conversations.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            {contactLinks.map(({ id, href, icon, label, color, target }, i) => (
              <motion.a
                key={id}
                href={href}
                target={target}
                rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                className="glass contact-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.9rem',
                  padding: '2rem 1.6rem',
                  borderRadius: '24px',
                  minWidth: '140px',
                  color: 'var(--text-main)',
                  '--card-hover-color': color,
                  '--card-hover-shadow': color + '55',
                }}
              >
                <span
                  className="contact-icon-wrap"
                  style={{ color }}
                >
                  {icon}
                </span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600 }}>{label}</span>
              </motion.a>
            ))}
          </div>

          <p style={{ marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Pranav Rajesh. Built with Passion &amp; Intelligence.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
