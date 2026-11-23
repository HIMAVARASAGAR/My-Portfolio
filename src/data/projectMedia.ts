import type { Project } from './projects';
export function projectMedia(project: Project) {
  if (project.id === 'portfolio') return { src: '/projects/portfolio.jpg', alt: 'Screenshot of Himavara Sagar’s portfolio', caption: 'Portfolio interface — earlier iteration.', credit: '', url: '' };
  const software = ['soteria', 'uce', 'aegis'].includes(project.id);
  return software
    ? { src: '/projects/code.jpg', alt: 'Close-up photograph of source code on a screen', caption: 'Context photograph · software development', credit: 'Godfrey Atima / Pexels', url: 'https://www.pexels.com/photo/programming-code-on-computer-screen-5223887/' }
    : { src: '/projects/electronics.jpg', alt: 'Macro photograph of electronic components on a circuit board', caption: 'Context photograph · electronic components', credit: 'Ivan Chumak / Pexels', url: 'https://www.pexels.com/photo/close-up-of-electronics-circuit-board-components-40342987/' };
}
