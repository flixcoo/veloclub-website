import {Link} from 'react-router-dom';

const LegalNotice = () => {
    return (
        <div className="min-h-[70vh] md:py-15">
            <div className="mx-auto max-w-275 px-6">
                {/*Back to homepage button*/}
                <Link to="/" className="md:text-md mb-8 flex items-center text-sm font-semibold text-(--text-color) transition-colors hover:text-(--accent-color) md:mt-0">
                    <span className={'text-lg md:text-sm'}>← Zurück</span>&nbsp;<span className={'hidden md:block'}>zur Startseite</span>
                </Link>

                <h1 className="mb-12 text-2xl leading-[0.9] font-black tracking-[-1px] text-(--accent-color) uppercase md:text-6xl">Impressum</h1>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-(--text-color)">Angaben gemäß § 5 TMG</h2>
                    <h4 className="my-6 text-xl font-semibold text-(--text-color)">Véloclub GbR</h4>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Mechlerstraße 4<br />
                        04105 Leipzig<br />
                        Deutschland
                    </p>

                    <h4 className="my-6 text-xl font-semibold text-(--text-color)">Kontakt</h4>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">E-Mail: hi [at] veloclubband.de</p>

                    <h4 className="my-6 text-xl font-semibold text-(--text-color)">Vertreten durch die Gesellschafter</h4>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Leo Indefrey, Nils-Henning Haase, Felix Kirchner und Jonas Rautenberg<br />
                        Steuernummer: 231 / 155 / 14202
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-(--text-color)">Haftung für Inhalte</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                        nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                        Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                        Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                        Tätigkeit hinweisen.
                    </p>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                        allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                        erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                        Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-(--text-color)">Haftung für Links</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                        Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                        Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                        Seiten verantwortlich.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="mb-4 text-2xl font-bold text-(--text-color)">Urheberrecht</h2>
                    <p className="mb-4 text-base leading-relaxed text-gray-800">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                        dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                        der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                        Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default LegalNotice;
