import React from 'react';
import { Link } from 'react-router-dom';

const Datenschutz = () => {
  return (
    <div className="legal-page">
      <div className="container">
        <Link to="/" className="back-link">← Zurück zur Startseite</Link>

        <h1 className="legal-title">Datenschutzerklärung</h1>

        <section className="legal-section">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
            Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Datenerfassung auf dieser Website</h2>
          <h3>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
          <p>
            Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
            Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
          </p>

          <h3>Wie erfassen wir Ihre Daten?</h3>
          <p>
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z.B. um Daten handeln, die Sie per E-Mail an uns senden.
          </p>
          <p>
            Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
            Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
            (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
          <h3>Datenschutz</h3>
          <p>
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
            Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
            gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p>
            Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
            Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Eingebettete Inhalte</h2>
          <h3>Spotify</h3>
          <p>
            Auf dieser Website sind Funktionen des Musik-Dienstes Spotify eingebunden.
            Anbieter ist die Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm, Schweden.
          </p>
          <p>
            Wenn Sie eine Seite mit dem Spotify-Plugin besuchen, wird eine direkte Verbindung
            zwischen Ihrem Browser und dem Spotify-Server hergestellt. Spotify erhält dadurch
            die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben.
          </p>

          <h3>Apple Music</h3>
          <p>
            Auf dieser Website sind Funktionen von Apple Music eingebunden. Anbieter ist die
            Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA.
          </p>
          <p>
            Beim Besuch einer Seite mit eingebetteten Apple Music Inhalten können Daten an
            Apple übertragen werden.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Server-Log-Dateien</h2>
          <p>
            Der Provider der Seiten erhebt und speichert automatisch Informationen in
            so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
            Dies sind:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Ihre Rechte</h2>
          <p>
            Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
            personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
            Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
          </p>
          <p>
            Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
            unter der im Impressum angegebenen Adresse an uns wenden.
          </p>
        </section>

        <section className="legal-section">
          <p className="legal-updated">
            Stand: Dezember 2025
          </p>
        </section>
      </div>
    </div>
  );
};

export default Datenschutz;

