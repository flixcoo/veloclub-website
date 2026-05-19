import { Link } from 'react-router-dom';

const Datenschutz = () => {
    return (
        <div className="min-h-[80vh] py-12 px-0 md:py-32">
            <div className="max-w-[1100px] mx-auto px-6">
                <Link to="/" className="inline-block mb-8 mt-20 md:mt-0 text-sm md:text-md text-base font-semibold text-[var(--text-color)] hover:text-[var(--accent-color)] transition-colors">← Zurück zur Startseite</Link>

                <h1 className="text-2xl md:text-6xl font-black uppercase text-[var(--accent-color)] mb-12 leading-[0.9] tracking-[-1px]">Datenschutzerklärung</h1>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">1. Datenschutz auf einen Blick</h2>
                    <h3 className="text-xl font-semibold my-6 text-[var(--text-color)]">Allgemeine Hinweise</h3>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                        personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                        Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">2. Datenerfassung auf dieser Website</h2>
                    <h3 className="text-xl font-semibold my-6 text-[var(--text-color)]">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                        Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                    </p>

                    <h3 className="text-xl font-semibold my-6 text-[var(--text-color)]">Wie erfassen wir Ihre Daten?</h3>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                        Hierbei kann es sich z.B. um Daten handeln, die Sie per E-Mail an uns senden.
                    </p>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der
                        Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten
                        (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                    <h3 className="text-xl font-semibold my-6 text-[var(--text-color)]">Datenschutz</h3>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst.
                        Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der
                        gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                    </p>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                        Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">4. Eingebettete Inhalte</h2>
                    <h3 className="text-xl font-semibold my-6 text-[var(--text-color)]">Spotify</h3>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Auf dieser Website sind Funktionen des Musik-Dienstes Spotify eingebunden.
                        Anbieter ist die Spotify AB, Birger Jarlsgatan 61, 113 56 Stockholm, Schweden.
                    </p>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Wenn Sie eine Seite mit dem Spotify-Plugin besuchen, wird eine direkte Verbindung
                        zwischen Ihrem Browser und dem Spotify-Server hergestellt. Spotify erhält dadurch
                        die Information, dass Sie mit Ihrer IP-Adresse diese Website besucht haben.
                    </p>

                    <h3 className="text-xl font-semibold my-6 text-[var(--text-color)]">Apple Music</h3>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Auf dieser Website sind Funktionen von Apple Music eingebunden. Anbieter ist die
                        Apple Inc., One Apple Park Way, Cupertino, CA 95014, USA.
                    </p>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Beim Besuch einer Seite mit eingebetteten Apple Music Inhalten können Daten an
                        Apple übertragen werden.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">5. Server-Log-Dateien</h2>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Der Provider der Seiten erhebt und speichert automatisch Informationen in
                        so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt.
                        Dies sind:
                    </p>
                    <ul className="list-disc ml-8 mb-4">
                        <li className="text-base leading-relaxed mb-2 text-gray-800">Browsertyp und Browserversion</li>
                        <li className="text-base leading-relaxed mb-2 text-gray-800">verwendetes Betriebssystem</li>
                        <li className="text-base leading-relaxed mb-2 text-gray-800">Referrer URL</li>
                        <li className="text-base leading-relaxed mb-2 text-gray-800">Hostname des zugreifenden Rechners</li>
                        <li className="text-base leading-relaxed mb-2 text-gray-800">Uhrzeit der Serveranfrage</li>
                        <li className="text-base leading-relaxed mb-2 text-gray-800">IP-Adresse</li>
                    </ul>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold mb-4 text-[var(--text-color)]">6. Ihre Rechte</h2>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
                        personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
                        Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.
                    </p>
                    <p className="text-base leading-relaxed mb-4 text-gray-800">
                        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit
                        unter der im Impressum angegebenen Adresse an uns wenden.
                    </p>
                </section>

                <section className="mb-12">
                    <p className="italic text-gray-500 text-sm mt-8">
                        Stand: Dezember 2025
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Datenschutz;
