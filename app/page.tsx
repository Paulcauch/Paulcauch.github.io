import content from "./content.json";

const { profile, publications, presentations, teaching } = content;
const courses: {
  title: string;
  description: string;
  years: string;
  links: { label: string; url: string }[];
}[] = teaching.courses;

// Render only simple Markdown links; all other content remains escaped text.
function Biography({ text }: { text: string }) {
  return text.split(/(\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g).map((part, index) => {
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    return link ? <a key={index} href={link[2]}>{link[1]}</a> : part;
  });
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="site-shell">
        <header className="site-header">
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#publications">Publications</a>
            <a href="#presentations">Presentations</a>
            <a href="#teaching">Teaching</a>
          </nav>
        </header>
        <main>
          <section id="about" className={`intro ${profile.portrait ? "with-portrait" : ""}`} aria-labelledby="name">
            <div className="intro-content">
              <h1 id="name">{profile.name}</h1>
              <div className="bio">
                <p><Biography text={profile.biography} /></p>
              </div>
              <ul className="profile-links" aria-label="Contact and academic profiles">
                <li><a href={`mailto:${profile.email}`}>Email <span aria-hidden="true">↗</span></a></li>
                {profile.scholar && <li><a href={profile.scholar}>Google Scholar <span aria-hidden="true">↗</span></a></li>}
                <li><a href={profile.github}>GitHub <span aria-hidden="true">↗</span></a></li>
                <li><a href={profile.linkedin}>LinkedIn <span aria-hidden="true">↗</span></a></li>
              </ul>
            </div>
            {profile.portrait && <img className="portrait" src={profile.portrait} alt="Paul Caucheteux" width="184" height="220" />}
          </section>
          <section id="publications" className="work-section" aria-labelledby="publications-heading">
            <h2 id="publications-heading">Publications</h2>
            <ol className="work-list">
              {publications.map((paper) => (
                <li className="work-entry" key={paper.title}>
                  <div className="entry-year">{paper.year}</div>
                  <article>
                    <h3><a href={paper.links[0].url}>{paper.title}</a></h3>
                    <p className="authors">{paper.authors.map((author, index) => <span key={author}>{index > 0 && ", "}{author === profile.name ? <strong>{author}</strong> : author}</span>)}</p>
                    <p className="venue">{paper.venue}<span className="distinction">{paper.distinction}</span></p>
                    <ul className="resource-links" aria-label={`Resources for ${paper.title}`}>{paper.links.map((link) => <li key={link.label}><a href={link.url}>{link.label} <span aria-hidden="true">↗</span></a></li>)}</ul>
                  </article>
                </li>
              ))}
            </ol>
          </section>
          <section id="presentations" className="work-section" aria-labelledby="presentations-heading">
            <h2 id="presentations-heading">Presentations</h2>
            <ol className="work-list">
              {presentations.map((talk) => (
                <li className="work-entry" key={talk.title + talk.event}>
                  <div className="entry-year">{talk.year}</div>
                  <article>
                    <h3>{talk.title}</h3>
                    <p className="venue">{talk.event}</p>
                    <p className="talk-format">{talk.format}</p>
                    {talk.links.length > 0 && <ul className="resource-links" aria-label={`Resources for ${talk.title}`}>{talk.links.map((link) => <li key={link.label}><a href={link.url}>{link.label} <span aria-hidden="true">↗</span></a></li>)}</ul>}
                  </article>
                </li>
              ))}
            </ol>
          </section>
          <section id="teaching" className="work-section" aria-labelledby="teaching-heading">
            <h2 id="teaching-heading">Teaching</h2>
            <p className="teaching-intro">{teaching.intro}</p>
            <ul className="teaching-list">
              {courses.map((course) => (
                <li key={course.title}>
                  <h3>{course.title}</h3>
                  <p className="venue">{course.description && <>{course.description} · </>}{course.years}</p>
                  {course.links.length > 0 && (
                    <ul className="resource-links" aria-label={`Resources for ${course.title}`}>
                      {course.links.map((link) => <li key={link.url}><a href={link.url}>{link.label} <span aria-hidden="true">↗</span></a></li>)}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </main>
        <footer><span>{profile.name}</span><a href={`mailto:${profile.email}`}>{profile.email}</a></footer>
      </div>
    </>
  );
}
