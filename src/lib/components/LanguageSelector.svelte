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

<div class="language-selector relative" bind:this={buttonElement}>
    <button
        on:click={toggleLanguage}
        class="flex min-w-[90px] cursor-pointer items-center justify-center gap-2 rounded-lg border border-[#2a2a35] bg-[#0a0a0f]/50 px-3 py-1.5 text-sm font-medium text-[#d1d5db] 
               transition-all duration-300 hover:border-[#3b82f6]/40 hover:bg-[#1e1e28] hover:text-[#e5e7eb] md:min-w-[auto] md:justify-start"
        title="Change language / Cambiar idioma"
        aria-label="Language selector"
    >
        <span class="text-base">{languages[currentLang].flag}</span>
        <span class="hidden md:inline">{languages[currentLang].code}</span>
        <Icon
            icon="mdi:chevron-down"
            width="16"
            height="16"
            class="transition-all duration-300 {isOpen ? 'rotate-180' : ''}"
        />
    </button>

    {#if isOpen}
        <div
            class="dropdown-menu absolute top-full right-0 z-[60] mt-2 min-w-[180px] overflow-hidden rounded-lg border border-[#2a2a35] bg-[#0a0a0f]/98 shadow-xl shadow-black/40 backdrop-blur-xl"
        >
            {#each Object.entries(languages) as [lang, info]}
                <button
                    on:click={() => selectLanguage(lang)}
                    class="group flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm font-medium transition-all duration-200
                           {lang === currentLang
                        ? 'bg-[#1e1e28] text-[#60a5fa]'
                        : 'text-[#d1d5db] hover:bg-[#1a1a24] hover:text-[#e5e7eb]'}"
                >
                    <span class="text-base">{info.flag}</span>
                    <span class="flex-1">{info.name}</span>
                    {#if lang === currentLang}
                        <Icon
                            icon="mdi:check-circle"
                            width="16"
                            height="16"
                            class="text-[#60a5fa]"
                        />
                    {/if}
                </button>
            {/each}
        </div>
    {/if}
</div>

<style>
    .language-selector {
        z-index: 50;
    }

    .dropdown-menu {
        animation: slideDown 0.15s ease-out;
    }

    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-4px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    /* Prevent text selection */
    button span {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    /* Remove default button outlines */
    button:focus {
        outline: none;
    }

    button:focus-visible {
        outline: 2px solid rgba(59, 130, 246, 0.5);
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        button {
            -webkit-tap-highlight-color: transparent;
            touch-action: manipulation;
        }
    }
</style>
