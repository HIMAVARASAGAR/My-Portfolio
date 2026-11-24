import type * as ReactRuntime from 'react';

type Runtime = typeof ReactRuntime;
type NativeComponent = ReactRuntime.ElementType;

// These components use the reference renderer's React instance and GLUI text.
// They are part of its scene, not an independently mounted visual layer.
export function createSections(React: Runtime, RawText: NativeComponent, InView: NativeComponent, useScroll: () => { scrollTo: (target: HTMLElement, options: Record<string, unknown>) => void } | undefined) {
  const email = 'himavarasagar6675@gmail.com';
  function Text(props: Record<string, unknown>) {
    // Keep semantic text in the page. The shared fluid canvas remains underneath;
    // transparent, blended glyphs react to its ink without a second visual panel.
    return <RawText {...props} glui={false} className={`native-live-text ${props.className || ''}`}/>;
  }
  function Label({ children, className = '' }: { children: string; className?: string }) {
    return <Text className={`native-label ${className}`} text={children} />;
  }
  function Skills() {
    const skills = [
      { number: '01', title: 'Code.', tools: ['Python','C / C++','JavaScript','MATLAB'], project: 'uce', caption: 'Universal Cognitive Engine' },
      { number: '02', title: 'Web.', tools: ['React','TypeScript','GSAP','Vite'], project: 'portfolio', caption: 'Portfolio Website' },
      { number: '03', title: 'Hardware.', tools: ['Verilog','Vivado','CST','Simulink'], project: 'mips', caption: 'MIPS' },
    ];
    return <section id="skills" aria-label="Skills" className="native-skills native-chapter">
      <InView><Label>01 / Skills</Label><Text HTMLContainer="h2" className="native-chapter-title" text="Skills." /></InView>
      <div className="native-skills-grid">{skills.map(skill => <InView key={skill.title} className="native-skill">
        <Label>{skill.number}</Label><Text HTMLContainer="h3" className="native-skill-title" text={skill.title} />
        <div className="native-tool-icons">{skill.tools.map(tool => {
          const icon = ({Python:'python','C / C++':'cplusplus',JavaScript:'javascript',MATLAB:'matlab',React:'react',TypeScript:'typescript',Vite:'vitejs'} as Record<string,string>)[tool];
          return <div className="native-tool" key={tool} tabIndex={0}>{icon ? <img src={`/skills/${icon}.svg`} alt=""/> : <span className="native-tool-wordmark" aria-hidden="true">{tool === 'Verilog' ? 'V' : tool === 'Vivado' ? 'AMD' : tool}</span>}<span>{tool}</span></div>;
        })}</div>
        <a href={`#project-${skill.project}`} className="native-project-link" aria-label={`Open ${skill.caption}`}><Text text={`${skill.caption} +`} /></a>
      </InView>)}</div>
    </section>;
  }
  function About() {
    return <section id="about" aria-label="About Himavara Sagar" className="native-about native-chapter">
      <InView><Label>02 / About</Label><Text HTMLContainer="h2" className="native-about-title" text="About<br/>me." /></InView>
      <InView className="native-biography"><Text className="native-about-copy" text="I build software and digital hardware. My background is in Electronics & Communication Engineering at NIT Calicut." />
        <div className="native-record"><Label>2021—2025</Label><Text text="B.Tech, NIT Calicut" /></div>
        <div className="native-record"><Label>2023—2024</Label><Text text="Senior Executive<br/>Workshop Committee, Tathva" /></div>
      </InView>
      <InView className="native-project-intro"><Label>03 / Projects</Label><Text HTMLContainer="h2" className="native-project-heading" text="Projects." /><Label>11 projects / Software + electronics</Label></InView>
    </section>;
  }
  function Contact() {
    const [copied, setCopied] = React.useState(false);
    const [failed, setFailed] = React.useState(false);
    const timeout = React.useRef<ReturnType<typeof setTimeout>>();
    React.useEffect(() => () => clearTimeout(timeout.current), []);
    async function copy() {
      try { await navigator.clipboard.writeText(email); setCopied(true); setFailed(false); clearTimeout(timeout.current); timeout.current = setTimeout(() => setCopied(false), 2500); }
      catch { setFailed(true); }
    }
    return <footer id="contact" aria-label="Contact" className="native-contact native-chapter">
      <InView><Label>04 / Contact</Label><a href={`mailto:${email}`} className="native-hello" aria-label="Email Himavara Sagar"><Text HTMLContainer="h2" text="Hello." /></a></InView>
      <InView className="native-contact-details"><div><Label>To Himavara Sagar</Label><a className="native-email" aria-label={email} href={`mailto:${email}`}><Text text={email} /></a><button className="native-copy" aria-label="Copy email address" onClick={copy}><Text text="Copy email +" /></button><span className="native-status" role="status">{copied ? 'Email copied.' : failed ? 'Please select the email address to copy it.' : ''}</span></div>
        <div className="native-socials"><a aria-label="GitHub" href="https://github.com/HIMAVARASAGAR" target="_blank" rel="noreferrer"><Text text="GitHub +" /></a><a aria-label="LinkedIn" href="https://www.linkedin.com/in/kakihimavarasagar/" target="_blank" rel="noreferrer"><Text text="LinkedIn +" /></a></div>
      </InView>
      <InView className="native-signoff"><Label>Himavara Sagar</Label><Label>Software & digital hardware</Label><Label>{`© ${new Date().getFullYear()}`}</Label></InView>
    </footer>;
  }
  function Navigation() {
    const scroll = useScroll();
    React.useEffect(() => {
      const navigate = (event: MouseEvent | KeyboardEvent) => {
        if (!scroll || (event instanceof KeyboardEvent && event.key !== 'Enter') || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || (event instanceof MouseEvent && event.button !== 0)) return;
        const link = (event.target as HTMLElement)?.closest<HTMLAnchorElement>('a[href]');
        if (!link || link.origin !== location.origin || location.pathname !== '/') return;
        const section = link.hash === '#skills' ? 'skills' : ({ '/profile':'about', '/projects':'projects', '/contact':'contact' } as Record<string,string>)[link.pathname];
        const target = section && document.getElementById(section);
        if (!target) return;
        event.preventDefault(); event.stopImmediatePropagation();
        scroll.scrollTo(target, { offset:-110, duration:1.25, immediate:matchMedia('(prefers-reduced-motion: reduce)').matches });
      };
      const anchor = ['#skills','#projects','#about','#contact'].includes(location.hash) ? document.querySelector<HTMLElement>(location.hash) : null;
      const timer = anchor && scroll ? setTimeout(() => scroll.scrollTo(anchor,{offset:-110,immediate:true}),2200) : undefined;
      window.addEventListener('click',navigate,true); window.addEventListener('keydown',navigate,true);
      return () => { clearTimeout(timer); window.removeEventListener('click',navigate,true); window.removeEventListener('keydown',navigate,true); };
    }, [scroll]);
    return null;
  }
  function HeroIntro() {
    return <div className="native-hero-intro"><div><Text text="I build software<br/>and digital hardware." className="native-hero-statement"/><a href="/projects" className="native-hero-link">Explore projects <span aria-hidden="true">↗</span></a></div><div className="native-hero-note"><span>Electronics & Communication</span><span>NIT Calicut</span><span className="native-hero-line" aria-hidden="true"/></div></div>;
  }
  return { Skills, About, Contact, Navigation, HeroIntro };
}
