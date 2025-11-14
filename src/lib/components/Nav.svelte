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
    class="fixed top-0 right-0 left-0 z-50 border-b border-[#3b82f6]/20 bg-[#1c1c21]/95 shadow-lg shadow-black/20 backdrop-blur-md"
>
    <div class="mx-auto max-w-4xl px-6 py-4">
        <div class="flex items-center justify-between">
            <div
                class="cursor-default font-mono text-sm text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)] transition-transform hover:scale-105"
            >
                <span class="text-[#93c5fd]">$</span>
                <span>{personal.nickname.toLowerCase()}</span>
            </div>

            <div class="hidden items-center gap-2 md:flex">
                {#each navItems as item}
                    <button
                        on:click={() => smoothScroll(item.id)}
                        class="nav-item flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 text-[15px] transition-all duration-300 hover:scale-105 {currentSection ===
                        item.id
                            ? 'border border-[#3b82f6]/30 bg-gradient-to-r from-[#3b82f6]/20 to-[#1e3a8a]/20 text-[#60a5fa] shadow-lg shadow-blue-500/15'
                            : 'text-[#e5e7eb] hover:bg-[#272736]/80 hover:text-[#60a5fa]'}"
                    >
                        <Icon
                            icon={item.icon}
                            width="16"
                            height="16"
                            class="transition-transform duration-300"
                        />
                        {item.label}
                    </button>
                {/each}

                <!-- Language selector -->
                <LanguageSelector />
            </div>

            <!-- Mobile menu button -->
            <button
                on:click={toggleMobileMenu}
                class="cursor-pointer rounded-lg p-2 transition-colors hover:bg-[#272736] md:hidden"
            >
                <Icon
                    icon={mobileMenuOpen ? 'mdi:close' : 'mdi:menu'}
                    width="24"
                    height="24"
                    class="text-[#e5e7eb] transition-colors hover:text-[#22d3ee]"
                />
            </button>

            <!-- Mobile menu -->
            {#if mobileMenuOpen}
                <div
                    transition:slide={{ duration: 200 }}
                    class="absolute top-full right-0 left-0 border-b border-[#2a2a35] bg-[#1c1c21]/98 backdrop-blur-sm md:hidden"
                >
                    <div class="mx-auto max-w-4xl px-6 py-4">
                        <div class="flex flex-col gap-2">
                            {#each navItems as item}
                                <button
                                    on:click={() => {
                                        smoothScroll(item.id);
                                    }}
                                    class="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition-all hover:bg-[#272736] {currentSection ===
                                    item.id
                                        ? 'bg-[#272736] text-[#60a5fa]'
                                        : 'text-[#e5e7eb] hover:text-[#60a5fa]'}"
                                >
                                    <Icon icon={item.icon} width="16" height="16" />
                                    {item.label}
                                </button>
                            {/each}

                            <!-- Mobile language selector -->
                            <div class="mt-4 border-t border-[#2a2a35] pt-4">
                                <LanguageSelector />
                            </div>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</nav>
