import {IMAGES} from '../data/content';

const About = () => {
    const imageData = IMAGES.aboutImage;

    return (
        <section id="about" className="py-8 scroll-mt-20">
            <div className="max-w-[1100px] mx-auto px-6">
                <h2 className="text-5xl font-black uppercase text-[var(--accent-color)] mb-12 leading-[0.9] tracking-[-1px]">Die Band</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <p className="text-lg mb-6">
                            Zwischen Jazz-Gitarren, Post-Punk-Drums und einem Bass der beides connectet,
                            schaffen <strong>Véloclub</strong> sich ihren eigenen Sound.
                            Da alle vier aus verschiedenen Musikrichtungen kommen, ist es der Band wichtig genau das in
                            ihrer Musik unterzubringen. Wie genau die musikalischen Elemente in die Musik einfließen,
                            ändert sich jedoch von Release zu Release. Véloclub entwickeln so wiedererkennbare Elemente,
                            die außerhalb von Genres für Stringenz in der Musik sorgen.
                            So spiegelt sich diese Ambivalenz auch in ihren Konzerten wieder. Véloclub spielen mal laut
                            in Clubs, leise in Cafés, gefühlvoll auf Festivals. Immer drauf bedacht, ihre Musik nochmals
                            weiter zu entwickeln und sich im eigenen Wandel treu zu bleiben.
                        </p>
                    </div>
                    <div className="w-full">
                        {imageData.image ? (
                            <img
                                src={imageData.image}
                                alt="Véloclub Portrait"
                                className="w-full aspect-[4/5] object-cover"
                            />
                        ) : (
                            <div className="w-full bg-[var(--accent-color)] opacity-80 text-white font-bold flex items-center justify-center aspect-[4/5]">
                                <span>PORTRAIT PLACEHOLDER</span>
                            </div>
                        )}
                        {imageData.credit && (
                            <p className="text-xs text-gray-500 mt-2 text-right">Foto: <a href={imageData.link ?? '#'} className="text-gray-500 hover:underline! hover:text-[var(--accent-color)] transition-all duration-300">{imageData.credit}</a></p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
