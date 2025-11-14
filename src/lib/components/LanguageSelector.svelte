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
        class="flex min-w-[90px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#2a2a35] px-3 py-2 text-sm text-[#e5e7eb] transition-all duration-300
               hover:border-[#3b82f6]/30 hover:bg-[#272736] hover:text-[#60a5fa] hover:shadow-lg hover:shadow-blue-500/15 md:min-w-[auto] md:justify-start"
        title="Cambiar idioma / Change language"
    >
        <span class="text-base transition-transform duration-300 hover:scale-125"
            >{languages[currentLang].flag}</span
        >
        <Icon
            icon="mdi:chevron-down"
            width="16"
            height="16"
            class="transition-all duration-300 {isOpen ? 'rotate-180 text-[#60a5fa]' : ''}"
        />
    </button>

    {#if isOpen}
        <div
            class="animate-dropdown absolute top-full right-0 z-50 mt-2 w-40 overflow-hidden rounded-xl border border-[#3b82f6]/30 bg-gradient-to-br from-[#1c1c21]/98
                   to-[#181825]/98 shadow-2xl shadow-blue-500/15 backdrop-blur-md md:right-0 md:w-auto md:min-w-max"
        >
            {#each Object.entries(languages) as [lang, info]}
                <button
                    on:click={() => selectLanguage(lang)}
                    class="group relative flex min-h-[44px] w-full items-center gap-3 overflow-hidden px-4 py-3 text-left
                           transition-all duration-200 hover:bg-gradient-to-r hover:from-[#272736] hover:to-[#1e1e28] md:min-h-[auto] {lang ===
                    currentLang
                        ? 'bg-gradient-to-r from-[#272736] to-[#1e1e28] text-[#60a5fa]'
                        : 'text-[#e5e7eb]'}"
                >
                    <span
                        class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-500 group-hover:translate-x-full"
                    ></span>

                    <span
                        class="z-10 text-base transition-transform duration-200 group-hover:scale-125 md:text-base"
                        >{info.flag}</span
                    >
                    <span
                        class="z-10 flex-1 text-sm {lang === currentLang
                            ? 'text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]'
                            : 'text-[#e5e7eb] group-hover:text-[#60a5fa]'} transition-all duration-200"
                    >
                        {info.name}
                    </span>
                    {#if lang === currentLang}
                        <Icon
                            icon="mdi:check-circle"
                            width="16"
                            height="16"
                            class="z-10 flex-shrink-0 text-[#60a5fa] drop-shadow-[0_0_6px_rgba(96,165,250,0.5)]"
                        />
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
