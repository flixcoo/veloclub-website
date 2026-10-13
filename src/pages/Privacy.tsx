import {Link} from 'react-router-dom';

const Privacy = () => {
    return (
        <div className="min-h-[70vh] md:py-15">
            <title>Datenschutzerklärung - Véloclub</title>
            <div className="mx-auto max-w-275 px-6">
                {/*Back to homepage button*/}
                <Link
                    to="/"
                    className="mb-8 flex items-center text-sm font-semibold text-black transition-colors hover:text-orange-600 md:mt-0 md:text-base"
                >
                    <span className={'text-lg md:text-sm'}>← Zurück</span>&nbsp;
                    <span className={'hidden md:block'}>zur Startseite</span>
                </Link>

                <h1 className="mb-12 text-2xl leading-[0.9] font-black tracking-[-1px] text-orange-600 uppercase md:text-6xl">
                    Datenschutzerklärung
                </h1>

                <section className="mb-12">
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Diese Datenschutzerklärung gilt für{' '}
                        <a href="https://veloclubband.de" className="underline transition-colors hover:text-orange-600">
                            veloclubband.de
                        </a>{' '}
                        und{' '}
                        <a
                            href="https://linktree.veloclubband.de"
                            className="underline transition-colors hover:text-orange-600"
                        >
                            linktree.veloclubband.de
                        </a>
                        . Wir erfassen auf diesen Websites so wenig Daten wie möglich. Es gibt keine Kontaktformulare,
                        keine Benutzerkonten und keine Tracking-Cookies. Im Folgenden erklären wir kurz, welche Daten
                        trotzdem anfallen und warum.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-black">1. Verantwortlich</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Véloclub GbR
                        <br />
                        Mechlerstraße 4<br />
                        04105 Leipzig
                        <br />
                        E-Mail: hi [at] veloclubband.de
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-black">2. Hosting & Bereitstellung</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Diese Website läuft auf einem eigenen Server (VPS) der IONOS SE, Elgendorfer Str. 57, 56410
                        Montabaur. Der Server steht in Deutschland. Mit IONOS besteht ein Vertrag zur
                        Auftragsverarbeitung nach Art. 28 DSGVO.
                    </p>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Beim Aufruf der Website verarbeitet der Server technisch notwendige Daten wie IP-Adresse, Datum
                        und Uhrzeit, aufgerufene Seite, Referrer sowie Browser und Betriebssystem. Diese Daten werden
                        nur genutzt, um die Website auszuliefern und den sicheren Betrieb zu gewährleisten, und nicht
                        mit anderen Daten zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-black">3. Analyse der Daten</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Um zu verstehen, wie unsere Website genutzt wird, verwenden wir das Open-Source-Tool Umami.
                        Umami wird von uns selbst betrieben, die Daten werden also nicht an Dritte weitergegeben. Umami
                        setzt keine Cookies und speichert keine IP-Adressen. Besuche werden über eine anonyme
                        Sitzungskennung zugeordnet, die keine Wiedererkennung über andere Websites hinweg erlaubt.
                    </p>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">Umami erfasst dabei:</p>
                    <ul className="mb-4 ml-8 list-disc">
                        <li className="mb-2 text-base leading-relaxed text-gray-800">
                            <strong>Statistiken:</strong> aufgerufene Seiten, Referrer, Browser, Betriebssystem,
                            Gerätetyp, Bildschirmgröße, Sprache und ungefähre Herkunft (Land, Region).
                        </li>
                        <li className="mb-2 text-base leading-relaxed text-gray-800">
                            <strong>Heatmaps:</strong> Klicks und Scrolltiefe. Diese Daten werden nur zusammengefasst
                            ausgewertet, einzelne Besuche sind darin nicht erkennbar.
                        </li>
                        <li className="mb-2 text-base leading-relaxed text-gray-800">
                            <strong>Sitzungsaufzeichnungen:</strong> Bei etwa 20&nbsp;% der Besuche wird der Ablauf
                            aufgezeichnet, also Mausbewegungen, Klicks, Scrollen und Seitenwechsel, für maximal 5
                            Minuten. Eingaben in Formularfelder werden dabei immer unkenntlich gemacht. Die
                            Aufzeichnungen werden nach 30 Tagen automatisch gelöscht.
                        </li>
                    </ul>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Wir nutzen diese Daten ausschließlich, um die Website zu verbessern, und versuchen nicht,
                        einzelne Personen zu identifizieren. Rechtsgrundlage ist unser berechtigtes Interesse (Art. 6
                        Abs. 1 lit. f DSGVO). Du kannst dem jederzeit widersprechen, zum Beispiel indem du in deinem
                        Browser einen Tracking-Blocker verwendest.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-black">4. Eingebettete Inhalte</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Auf der Webseite binden wir Musik und Videos von folgenden Anbietern ein:
                    </p>
                    <ul className="mb-4 ml-8 list-disc">
                        <li className="mb-2 text-base leading-relaxed text-gray-800">
                            Spotify (Spotify AB, Regeringsgatan 19, 111 53 Stockholm, Schweden)
                        </li>
                        <li className="mb-2 text-base leading-relaxed text-gray-800">
                            Apple Music (Apple Distribution International Ltd., Hollyhill Industrial Estate, Cork,
                            Irland)
                        </li>
                        <li className="mb-2 text-base leading-relaxed text-gray-800">
                            YouTube (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland)
                        </li>
                        <li className="mb-2 text-base leading-relaxed text-gray-800">
                            SoundCloud (SoundCloud Global Limited &amp; Co. KG, Rheinsberger Str. 76/77, 10115 Berlin)
                        </li>
                    </ul>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Beim Laden dieser Inhalte stellt dein Browser eine Verbindung zu den Servern des jeweiligen
                        Anbieters her. Dabei werden mindestens deine IP-Adresse und die Information, dass du unsere
                        Seite besucht hast, übertragen. Die Anbieter können außerdem Cookies setzen und Daten in die USA
                        übermitteln. Die Übermittlung stützt sich auf das EU-US Data Privacy Framework. Weitere
                        Informationen findest du in den Datenschutzerklärungen der Anbieter.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-black">5. Deine Rechte</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Du hast nach der DSGVO das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                        Verarbeitung, Datenübertragbarkeit und Widerspruch. Da die Analysedaten anonym sind, können wir
                        sie allerdings keiner Person zuordnen (Art. 11 DSGVO). Für Daten bei den eingebetteten Diensten
                        wende dich bitte direkt an den jeweiligen Anbieter.
                    </p>
                </section>

                <section className="mb-12">
                    <p className="mt-8 text-sm text-gray-500 italic">Stand: Oktober 2026</p>
                </section>
            </div>
        </div>
    );
};

export default Privacy;
