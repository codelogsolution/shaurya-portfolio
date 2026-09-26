import {
    Mail,
    ExternalLink,
} from "lucide-react";
import type { Profile } from "../../types/portfolio";

type ContactSectionProps = {
    profile: Profile;
};

const ContactSection = ({ profile }: ContactSectionProps) => {
    return (
        <section
            id="contact"
            className="bg-slate-900 px-6 py-24 text-white lg:px-8"
        >
            <div className="mx-auto max-w-4xl text-center">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                    Contact
                </p>

                <h2 className="text-3xl font-bold sm:text-4xl">
                    Let's build something meaningful
                </h2>

                <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
                    I am open to professional opportunities, collaborations, and
                    interesting technology projects.
                </p>

                <div className="mt-10 flex flex-wrap justify-center gap-4">
                    {profile.contact.email && (
                        <a
                            href={`mailto:${profile.contact.email}`}
                            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950"
                        >
                            <Mail size={18} />
                            Email Me
                        </a>
                    )}

                    {profile.contact.linkedin && (
                        <a
                            href={profile.contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <span className="font-bold">in</span>
                            LinkedIn
                            <ExternalLink size={16} />
                        </a>
                    )}

                    {profile.contact.github && (
                        <a
                            href={profile.contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 text-slate-200 transition hover:border-cyan-400 hover:text-cyan-400"
                        >
                            <span className="font-bold">GH</span>
                            GitHub
                            <ExternalLink size={16} />
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;