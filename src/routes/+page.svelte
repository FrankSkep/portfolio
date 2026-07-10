<script lang="ts">
    import portfolioDataEn from '$lib/data/portfolio-en.json' with { type: 'json' };
    import portfolioDataEs from '$lib/data/portfolio-es.json' with { type: 'json' };
    import translations from '$lib/data/translations.json' with { type: 'json' };
    import { currentLanguage } from '$lib/stores/language.js';
    import { onMount } from 'svelte';
    import Nav from '$lib/components/Nav.svelte';
    import Header from '$lib/components/Header.svelte';
    import Projects from '$lib/components/Projects.svelte';
    import Experience from '$lib/components/Experience.svelte';
    import Technologies from '$lib/components/Technologies.svelte';
    import Education from '$lib/components/Education.svelte';
    import Certifications from '$lib/components/Certifications.svelte';
    import Socials from '$lib/components/Socials.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import Icon from '@iconify/svelte';

    // Define types for translations
    type Language = 'en' | 'es';

    let showHighlights = {};
    let currentSection = 'home';
    let showScrollTop = false;
    let mobileMenuOpen = false;

    // Reactive data based on language with specific types
    $: portfolioData = $currentLanguage === 'es' ? portfolioDataEs : portfolioDataEn;
    $: t = translations[$currentLanguage as Language];
    $: ({ personal, projects, experience, technologies, education, certifications, footer } = portfolioData);

    $: navItems = [
        { id: 'home', label: t.sections.home, icon: 'mdi:home' },
        { id: 'projects', label: t.sections.projects, icon: 'mdi:folder' },
        { id: 'experience', label: t.sections.experience, icon: 'mdi:briefcase' },
        { id: 'technologies', label: t.sections.technologies, icon: 'mdi:tools' },
        { id: 'education', label: t.sections.education, icon: 'mdi:school' },
        { id: 'certifications', label: t.sections.certifications, icon: 'mdi:certificate' },
        { id: 'socials', label: t.sections.contact, icon: 'mdi:account' }
    ];

    function handleScroll() {
        showScrollTop = window.scrollY > 300;
        const sections = ['home', 'projects', 'experience', 'technologies', 'education', 'certifications', 'socials'];
        const scrollPosition = window.scrollY + 100;

        for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
                const { offsetTop, offsetHeight } = element;
                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                    currentSection = section;
                    break;
                }
            }
        }
    }

    function smoothScroll(targetId: string) {
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            currentSection = targetId;
            mobileMenuOpen = false;
        }
    }

    function toggleMobileMenu() {
        mobileMenuOpen = !mobileMenuOpen;
    }

    onMount(() => {
        handleScroll();
    });
</script>

<svelte:window on:scroll={handleScroll} />

<Nav {personal} {navItems} {currentSection} {mobileMenuOpen} {toggleMobileMenu} {smoothScroll} />

<div class="animate-fade-in min-h-screen bg-[#1c1c21] pt-12 font-mono text-[#e5e7eb]">
    <Header {personal} {t} />
    <div class="section-separator"></div>
    <Experience {experience} {t} />
    <div class="section-separator"></div>
    <Projects {projects} {showHighlights} {t} />
    <div class="section-separator"></div>
    <Technologies {technologies} {t} />
    <div class="section-separator"></div>
    <Education {education} {t} />
    <div class="section-separator"></div>
    <Certifications {certifications} {t} />
    <div class="section-separator"></div>
    <Socials
        socials={[
            { href: personal.socials.github, icon: 'mdi:github', label: t.labels.github },
            { href: personal.socials.linkedin, icon: 'mdi:linkedin', label: t.labels.linkedin },
            { href: 'mailto:' + personal.socials.email, icon: 'mdi:email', label: t.labels.email }
        ]}
        {t}
    />
    <Footer {footer} />
</div>

{#if showScrollTop}
    <button
        on:click={() => smoothScroll('home')}
        class="scroll-to-top fixed right-6 bottom-6 z-50 cursor-pointer rounded-full bg-gradient-to-br from-[#3b82f6] to-[#1e40af] p-4 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40"
        title={t.labels.backToTop}
    >
        <Icon icon="mdi:arrow-up" width="24" height="24" />
    </button>
{/if}

<style>
    .section-separator {
        max-width: 60%;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        height: 1px;
        background: linear-gradient(to right, transparent, #6b728080, transparent);
        box-shadow: 0 0 15px rgba(107, 114, 128, 0.2);
        contain: layout style paint;
        animation: glow-pulse 4s ease-in-out infinite;
    }

    @keyframes glow-pulse {
        0%,
        100% {
            opacity: 0.5;
            box-shadow: 0 0 15px rgba(107, 114, 128, 0.2);
        }
        50% {
            opacity: 0.8;
            box-shadow: 0 0 20px rgba(107, 114, 128, 0.3);
        }
    }

    :global(body) {
        margin: 0;
        padding: 0;
        font-family:
            'Inter',
            -apple-system,
            BlinkMacSystemFont,
            'Segoe UI',
            Roboto,
            sans-serif;
        scroll-behavior: smooth;
        background: #0a0a0f;
        background-image:
            radial-gradient(at 0% 0%, rgba(59, 130, 246, 0.05) 0px, transparent 50%),
            radial-gradient(at 100% 100%, rgba(30, 58, 138, 0.08) 0px, transparent 50%);
        color: #e5e7eb;
        position: relative;
    }

    :global(body::before) {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(59, 130, 246, 0.02) 2px,
            rgba(59, 130, 246, 0.02) 4px
        );
        pointer-events: none;
        z-index: 1;
    }

    :global(*) {
        box-sizing: border-box;
    }

    :global(html) {
        scroll-padding-top: 100px;
    }

    /* Scrollbar */
    :global(::-webkit-scrollbar) {
        width: 10px;
    }

    :global(::-webkit-scrollbar-track) {
        background: #0a0a0f;
        border-left: 1px solid #2a2a35;
    }

    :global(::-webkit-scrollbar-thumb) {
        background: linear-gradient(180deg, #3b82f6, #1e3a8a);
        border-radius: 10px;
        border: 2px solid #0a0a0f;
    }

    :global(::-webkit-scrollbar-thumb:hover) {
        background: linear-gradient(180deg, #60a5fa, #2563eb);
        box-shadow: 0 0 10px rgba(59, 130, 246, 0.4);
    }

    /* Selection effects */
    :global(::selection) {
        background: #3b82f6;
        color: #fff;
    }

    /* Fade-in animation */
    @keyframes fade-in {
        from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
        }
        to {
            opacity: 1;
            transform: translateY(0) scale(1);
        }
    }

    .animate-fade-in {
        animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1);
    }

    @media (max-width: 768px) {
        :global(h1) {
            font-size: 1.975rem !important;
        }

        :global(h2) {
            font-size: 1.2rem !important;
        }

        :global(h3) {
            font-size: 1rem !important;
        }

        :global(span),
        :global(button) {
            font-size: 0.975rem !important;
        }

        :global(section) {
            padding: 2rem 1.5rem !important;
        }

        :global(footer) {
            font-size: 0.875rem !important;
        }
        :global(button.fixed) {
            bottom: 4.5rem !important;
            right: 1rem !important;
            padding: 0.75rem !important;
        }

        :global p {
            font-size: 0.965rem;
        }

        :global h3 {
            font-size: 1rem;
        }

        :global .text-sm {
            font-size: 0.75rem;
        }

        :global(.space-y-8 > *:not(:last-child)) {
            margin-bottom: 1rem;
        }

        :global(.command-text) {
            font-size: 0.745rem !important;
        }
    }
</style>
