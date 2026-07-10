<script>
    import { slide } from 'svelte/transition';
    import Icon from '@iconify/svelte';
    import LanguageSelector from './LanguageSelector.svelte';

    export let personal;
    export let navItems;
    export let currentSection;
    export let mobileMenuOpen;
    export let toggleMobileMenu;
    export let smoothScroll;
</script>

<nav
    class="fixed top-0 right-0 left-0 z-50 border-b border-[#2a2a35]/80 bg-[#0a0a0f]/95 shadow-lg shadow-black/30 backdrop-blur-xl"
>
    <div class="mx-auto max-w-6xl px-6 py-3">
        <div class="flex items-center justify-between gap-4">
            <!-- Logo -->
            <button
                on:click={() => smoothScroll('home')}
                class="flex-shrink-0 cursor-pointer font-mono text-sm font-medium text-[#60a5fa] transition-all duration-300 hover:text-[#93c5fd] hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
            >
                <span class="text-[#93c5fd]">$</span>
                <span>{personal.nickname.toLowerCase()}</span>
            </button>

            <!-- Desktop Navigation -->
            <div class="hidden flex-1 items-center justify-center gap-1 md:flex">
                {#each navItems as item}
                    <button
                        on:click={() => smoothScroll(item.id)}
                        class="nav-item group relative flex cursor-pointer items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-300 {currentSection ===
                        item.id
                            ? 'text-[#60a5fa]'
                            : 'text-[#d1d5db] hover:text-[#e5e7eb]'}"
                    >
                        <Icon
                            icon={item.icon}
                            width="16"
                            height="16"
                            class="transition-all duration-300 {currentSection === item.id
                                ? 'text-[#60a5fa]'
                                : 'text-[#9ca3af] group-hover:text-[#d1d5db]'}"
                        />
                        <span>{item.label}</span>
                        {#if currentSection === item.id}
                            <div
                                class="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] shadow-[0_0_8px_rgba(59,130,246,0.6)]"
                            ></div>
                        {/if}
                    </button>
                {/each}
            </div>

            <!-- Language Selector & Mobile Menu -->
            <div class="flex items-center gap-2">
                <div class="hidden md:block">
                    <LanguageSelector />
                </div>

                <!-- Mobile menu button -->
                <button
                    on:click={toggleMobileMenu}
                    class="cursor-pointer rounded-lg p-2 text-[#d1d5db] transition-all duration-300 hover:bg-[#1e1e28] hover:text-[#60a5fa] md:hidden"
                    aria-label="Toggle menu"
                >
                    <Icon
                        icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'}
                        width="24"
                        height="24"
                    />
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    {#if mobileMenuOpen}
        <div
            transition:slide={{ duration: 200 }}
            class="border-t border-[#2a2a35]/80 bg-[#0a0a0f]/98 backdrop-blur-xl md:hidden"
        >
            <div class="mx-auto max-w-6xl px-6 py-4">
                <div class="flex flex-col gap-1">
                    {#each navItems as item}
                        <button
                            on:click={() => smoothScroll(item.id)}
                            class="flex w-full cursor-pointer items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 {currentSection ===
                            item.id
                                ? 'bg-[#1e1e28] text-[#60a5fa]'
                                : 'text-[#d1d5db] hover:bg-[#1a1a24] hover:text-[#e5e7eb]'}"
                        >
                            <Icon
                                icon={item.icon}
                                width="18"
                                height="18"
                                class={currentSection === item.id
                                    ? 'text-[#60a5fa]'
                                    : 'text-[#9ca3af]'}
                            />
                            <span>{item.label}</span>
                        </button>
                    {/each}

                    <!-- Mobile language selector -->
                    <div class="mt-3 border-t border-[#2a2a35]/80 pt-3">
                        <LanguageSelector />
                    </div>
                </div>
            </div>
        </div>
    {/if}
</nav>

<style>
    .nav-item {
        position: relative;
    }

    /* Prevent text selection on navigation items */
    .nav-item span {
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
    }

    /* Remove any default button outlines */
    button:focus {
        outline: none;
    }

    button:focus-visible {
        outline: 2px solid rgba(59, 130, 246, 0.5);
        outline-offset: 2px;
    }
</style>
