<script>
    import Icon from '@iconify/svelte';
    export let education;
    export let t;
</script>

<section id="education" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span
            class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
            ><span class="text-[#93c5fd]">$</span> {t.commands.education}</span
        >
        <h2 class="mt-2 mb-6 text-3xl font-bold text-[#f8fafc]">
            <Icon
                icon="mdi:school"
                width="24"
                height="24"
                class="inline-block text-[#818cf8] drop-shadow-[0_0_10px_rgba(129,140,248,0.4)]"
            />
            {t.sections.education}
        </h2>
    </div>

    <div class="space-y-6">
        {#each education as edu}
            <div
                class="education-card group relative rounded-xl border border-[#2a2a35] bg-gradient-to-br from-[#1e1e28] to-[#181825] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#6366f1]/40 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
                <div
                    class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#6366f1]/0 to-[#4338ca]/0 transition-all duration-500 group-hover:from-[#6366f1]/8 group-hover:to-[#4338ca]/8"
                ></div>

                <div class="relative z-10">
                    <div
                        class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"
                    >
                        <h3
                            class="text-lg font-semibold text-[#818cf8] drop-shadow-[0_0_8px_rgba(129,140,248,0.2)] transition-colors duration-300 group-hover:text-[#a5b4fc] sm:text-xl"
                        >
                            {edu.degree}
                        </h3>
                        <span
                            class="inline-block rounded-lg border border-[#6366f1]/30 bg-gradient-to-r from-[#181825] to-[#121220] px-4 py-1.5 text-xs font-medium text-[#818cf8] shadow-lg transition-transform duration-200 hover:scale-105 sm:text-sm"
                        >
                            {edu.period}
                        </span>
                    </div>
                    <div class="group/location flex items-center gap-2">
                        <Icon
                            icon="mdi:map-marker"
                            width="18"
                            height="18"
                            class="text-[#9ca3af] drop-shadow-[0_0_6px_rgba(156,163,175,0.3)] transition-transform group-hover/location:scale-125"
                        />
                        <span
                            class="text-sm text-[#d1d5db] transition-colors group-hover:text-[#e5e7eb] sm:text-base"
                            >{edu.location}</span
                        >
                    </div>
                </div>
            </div>
        {/each}
    </div>
</section>
