import noco from "./assets/noco.jpeg";
import temp from "./assets/tempPP.jpeg";
import apache from "./assets/Apache.jpg";
function Artists() {
  return (
    <>
      <div className="body">
        <header>
          <h1>Core Artists</h1>
        </header>
        <section class="artist-cards">
          <div class="artist-card">
            <img src={noco} alt="Artist 1" />
            <h2>Noco</h2>
            <p>
              DJ/Producer, from Manchester(UK), Guy Kensdale, arose into the
              world of underground music in 2012, primarily composing various
              genres of bass music. Later fixating himself on the dark, minimal
              sounds of Drum and Bass/140s. Fast forward to 2018 and we see the
              dawn of Noco
            </p>
            <a href="https://linktr.ee/Nocodnb">Link 1</a>
          </div>
          <div class="artist-card">
            <img src={apache} alt="Artist 2" />
            <h2>Apache</h2>
            <p>
              am a producer and a fine artist. Here you can find my music and
              artwork, I specialise in futuristic distorted electronic sounds,
              and fast paced, high tempo 160-180 BPM beats.
            </p>
            <a href="#">Link 1</a>
          </div>
          <div class="artist-card">
            <img src={temp} alt="Artist 3" />
            <h2>Ajedd</h2>
            <p>Bio</p>
            <a href="#">Link 1</a>
          </div>
          <div class="artist-card">
            <img src={temp} alt="Artist 1" />
            <h2>Ajile</h2>
            <p>Bio</p>
            <a href="#">Link 1</a>
          </div>
          <div class="artist-card">
            <img src={temp} alt="Artist 1" />
            <h2>Gr8dane</h2>
            <p>Bio</p>
            <a href="https://soundcloud.com/gr8danejj">Link 1</a>
          </div>
          <div class="artist-card">
            <img src={temp} alt="Artist 1" />
            <h2>Selkova</h2>
            <p>Bio</p>
            <a href="#">Link 1</a>
          </div>
        </section>
      </div>
    </>
  );
}
export default Artists;
