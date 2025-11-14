<script>
    import Icon from '@iconify/svelte';
    export let socials;
    export let t;
</script>

<section id="socials" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span
            class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
            ><span class="text-[#93c5fd]">$</span> {t.commands.connect}</span
        >
        <h2 class="mt-2 mb-4 text-3xl font-bold text-[#f8fafc]">
            <Icon
                icon="mdi:account-circle"
                width="24"
                height="24"
                class="inline-block text-[#22d3ee] drop-shadow-[0_0_10px_rgba(34,211,238,0.4)]"
            />
            {t.titles.contact}
        </h2>
        <p class="mb-8 text-lg text-[#d1d5db]">
            {t.descriptions.contact}
        </p>
    </div>

    <div class="flex flex-wrap gap-4">
        {#each socials as social}
            <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : '_self'}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : ''}
                class="social-card group relative flex items-center gap-3 overflow-hidden rounded-xl border border-[#2a2a35] bg-gradient-to-br from-[#1e1e28] to-[#181825] px-6 py-3 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-[#06b6d4]/40 hover:shadow-2xl hover:shadow-cyan-500/15"
            >
                <div
                    class="absolute inset-0 bg-gradient-to-r from-[#06b6d4]/0 via-[#06b6d4]/8 to-[#0891b2]/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                ></div>

                <div
                    class="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full"
                ></div>

                <Icon
                    icon={social.icon}
                    width="24"
                    height="24"
                    class="relative z-10 text-[#9ca3af] transition-all duration-300 group-hover:scale-125 group-hover:rotate-12 group-hover:text-[#22d3ee] group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                />
                <span
                    class="relative z-10 font-medium text-[#e5e7eb] transition-all duration-300 group-hover:text-[#22d3ee] group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
                    >{social.label}</span
                >
            </a>
        {/each}
    </div>
</section>
