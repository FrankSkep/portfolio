<script lang="ts">
  import portfolioData from "$lib/data/portfolio.json";
  import { onMount } from "svelte";
  import Nav from "$lib/components/Nav.svelte";
  import Header from "$lib/components/Header.svelte";
  import Projects from "$lib/components/Projects.svelte";
  import Technologies from "$lib/components/Technologies.svelte";
  import Education from "$lib/components/Education.svelte";
  import Socials from "$lib/components/Socials.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Icon from "@iconify/svelte";

  const { personal, projects, technologies, education, footer } = portfolioData;
  let showHighlights = {};
  let currentSection = "home";
  let showScrollTop = false;
  let mobileMenuOpen = false;

  const navItems = [
    { id: "home", label: "Home", icon: "mdi:home" },
    { id: "projects", label: "Projects", icon: "mdi:folder" },
    { id: "technologies", label: "Tech", icon: "mdi:tools" },
    { id: "education", label: "Education", icon: "mdi:school" },
    { id: "socials", label: "Contact", icon: "mdi:account" },
  ];

  function handleScroll() {
    showScrollTop = window.scrollY > 300;
    const sections = ["home", "projects", "technologies", "education", "socials"];
    const scrollPosition = window.scrollY + 100;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          currentSection = section;
          break;
        }
      }
    }
  }

  function smoothScroll(targetId: string) {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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

<Nav
  {personal}
  {navItems}
  {currentSection}
  {mobileMenuOpen}
  {toggleMobileMenu}
  {smoothScroll}
/>

<div class="min-h-screen bg-[#1c1c21] text-[#e5e7eb] font-mono pt-12 animate-fade-in">
  <Header {personal} />
  <Projects {projects} {showHighlights} />
  <Technologies {technologies} />
  <Education {education} />
  <Socials
    socials={[
      { href: personal.socials.github, icon: "mdi:github", label: "GitHub" },
      { href: personal.socials.linkedin, icon: "mdi:linkedin", label: "LinkedIn" },
      { href: "mailto:" + personal.socials.email, icon: "mdi:email", label: "Email" },
    ]}
  />
  <Footer {footer} />
</div>

{#if showScrollTop}
  <button
    on:click={() => smoothScroll("home")}
    class="fixed bottom-6 right-6 p-3 bg-[#22d3ee] text-[#0a0a0f] rounded-full shadow-lg hover:bg-[#0891b2] transition-colors z-50 cursor-pointer"
    title="Volver arriba"
  >
    <Icon icon="mdi:arrow-up" width="24" height="24" />
  </button>
{/if}

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family:
      "Inter",
      -apple-system,
      BlinkMacSystemFont,
      "Segoe UI",
      Roboto,
      sans-serif;
    scroll-behavior: smooth;
    background: #0a0a0f;
    color: #e5e7eb;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(html) {
    scroll-padding-top: 100px;
  }

  /* Scrollbar elegante */
  :global(::-webkit-scrollbar) {
    width: 8px;
  }

  :global(::-webkit-scrollbar-track) {
    background: #0a0a0f;
  }

  :global(::-webkit-scrollbar-thumb) {
    background: #2a2a35;
    border-radius: 4px;
  }

  :global(::-webkit-scrollbar-thumb:hover) {
    background: #22d3ee;
  }

  /* Efectos de selección */
  :global(::selection) {
    background: #22d3ee;
    color: #0a0a0f;
  }

  /* Animación de entrada */
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 1s ease-out;
  }

  /* Mejor espaciado en móviles */
  @media (max-width: 768px) {
    :global(h1) {
      font-size: 2.5rem !important;
    }

    :global(section) {
      padding: 2rem 1.5rem !important;
    }
  }
</style>
