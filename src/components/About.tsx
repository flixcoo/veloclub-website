import {IMAGES} from '../data/content';

const About = () => {
    const imageData = IMAGES.aboutImage;

    return (
        <section id="about" className="scroll-mt-20 py-8">
            <div className="mx-auto max-w-275 px-6">
                <h2 className="mb-12 text-5xl leading-[0.9] font-black tracking-[-1px] text-(--accent-color) uppercase">Die Band</h2>
                <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
                    <div>
                        <p className="mb-6 text-lg">
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
                                className="pointer-events-none aspect-4/5 w-full object-cover"
                            />
                        ) : (
                            <div className="flex aspect-4/5 w-full items-center justify-center bg-(--accent-color) font-bold text-white opacity-80">
                                <span>PORTRAIT PLACEHOLDER</span>
                            </div>
                        )}
                        {imageData.credit && (
                            <p className="mt-2 text-right text-xs text-gray-500">Foto: <a href={imageData.url ?? '#'} className="text-gray-500 transition-all duration-300 hover:text-(--accent-color) hover:underline!">{imageData.credit}</a></p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
