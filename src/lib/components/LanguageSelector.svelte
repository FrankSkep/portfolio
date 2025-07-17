<script lang="ts">
    import { currentLanguage, setLanguage } from '$lib/stores/language.js';
    import Icon from '@iconify/svelte';
    import { onMount } from 'svelte';

    let isOpen = false;
    let buttonElement: HTMLDivElement;

    function toggleLanguage() {
        isOpen = !isOpen;
    }

    function selectLanguage(lang: string) {
        setLanguage(lang);
        isOpen = false;
    }

    // Close dropdown when clicking outside
    function handleClickOutside(event: MouseEvent) {
        if (buttonElement && !buttonElement.contains(event.target as Node)) {
            isOpen = false;
        }
    }

    onMount(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    });

    // Define the type for language keys
    type LanguageKey = 'en' | 'es';

    const languages: Record<LanguageKey, { name: string; code: string; flag: string }> = {
        en: { name: 'English', code: 'EN', flag: '🇺🇸' },
        es: { name: 'Español', code: 'ES', flag: '🇪🇸' }
    };

    // Safe casting to access properties
    $: currentLang = $currentLanguage as LanguageKey;
</script>

<div class="relative" bind:this={buttonElement}>
    <button
        on:click={toggleLanguage}
        class="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#e5e7eb] transition-all hover:bg-[#272736] hover:text-[#22d3ee] 
               md:min-w-[auto] min-w-[90px] justify-center md:justify-start"
        title="Cambiar idioma / Change language"
    >
        <span class="text-sm">{languages[currentLang].flag}</span>
        <span class="font-mono text-xs">
            {languages[currentLang].code}
        </span>
        <Icon
            icon="mdi:chevron-down"
            width="16"
            height="16"
            class="transition-all duration-200 {isOpen ? 'rotate-180' : ''}"
        />
    </button>

    {#if isOpen}
        <div
            class="absolute top-full z-50 mt-2 overflow-hidden rounded-lg border border-[#2a2a35] bg-[#1c1c21]/98 shadow-xl backdrop-blur-sm
                   right-0 md:right-0 md:min-w-max w-40 md:w-auto"
        >
            {#each Object.entries(languages) as [lang, info]}
                <button
                    on:click={() => selectLanguage(lang)}
                    class="group flex w-full items-center gap-3 px-4 py-3 text-left transition-all duration-150 hover:bg-[#272736] 
                           min-h-[44px] md:min-h-[auto] {lang === currentLang
                        ? 'bg-[#272736] text-[#22d3ee]'
                        : 'text-[#e5e7eb]'}"
                >
                    <span class="text-base md:text-sm">{info.flag}</span>
                    <span
                        class="text-sm flex-1 {lang === currentLang
                            ? 'text-[#22d3ee]'
                            : 'text-[#e5e7eb] group-hover:text-[#22d3ee]'} transition-colors"
                    >
                        {info.name}
                    </span>
                    {#if lang === currentLang}
                        <Icon icon="mdi:check" width="16" height="16" class="text-[#22d3ee] flex-shrink-0" />
                    {/if}
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    /* Smooth animation for dropdown */
    div:global(.animate-dropdown) {
        animation: slideDown 0.2s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-8px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    div:global(.language-dropdown) {
        z-index: 9999;
    }

    @media (max-width: 768px) {
        button {
            -webkit-tap-highlight-color: transparent;
        }
    }
</style>