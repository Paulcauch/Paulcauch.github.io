import { profile, publications, presentations } from "./content";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#about">Skip to content</a>
      <div className="site-shell">
        <header className="site-header">
          <a className="wordmark" href="#about" aria-label="Paul Caucheteux, home">PC<span aria-hidden="true">.</span></a>
          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#publications">Publications</a>
            <a href="#presentations">Presentations</a>
          </nav>
        </header>
        <main>
          <section id="about" className={`intro ${profile.portrait ? "with-portrait" : ""}`} aria-labelledby="name">
            <div className="intro-content">
              <p className="eyebrow">{profile.field}</p>
              <h1 id="name">{profile.name}</h1>
              <p className="role">{profile.role} at <a href="https://crest.science/">CREST</a> / <a href="https://www.ensae.fr/">ENSAE Paris</a></p>
              <div className="bio">
                <p>I work on generative modeling and optimization in the space of probability distributions, with a particular interest in Wasserstein gradient flows.</p>
                <p>My supervisors are <a href="https://akorba.github.io/">Anna Korba</a> and <a href="https://clbonet.github.io/">Clément Bonet</a>.</p>
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
        </main>
        <footer><span>{profile.name}</span><a href={`mailto:${profile.email}`}>{profile.email}</a></footer>
      </div>
    </>
  );
}
