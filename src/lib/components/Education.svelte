<script>
    import Icon from '@iconify/svelte';
    export let education;
    export let t;
</script>

<section id="education" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span class="text-sm font-medium text-[#22d3ee]"
            ><span class="text-[#fbbf24]">$</span> {t.commands.education}</span
        >
        <h2 class="mt-2 mb-6 text-3xl font-bold text-[#f8fafc]">
            <Icon icon="mdi:school" width="24" height="24" class="inline-block text-[#e879f9]" />
            {t.sections.education}</h2>
    </div>

    <div class="space-y-6">
        {#each education as edu}
            <div class="rounded-lg border border-[#2a2a35] bg-[#1e1e28] p-6">
                <div class="mb-3 flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <h3 class="text-lg font-semibold text-[#22d3ee] sm:text-xl">
                        {edu.degree}
                    </h3>
                    <span
                        class="mt-2 rounded border border-[#2a2a35] bg-[#181825] px-3 py-1 text-xs text-[#9ca3af] sm:mt-0 sm:text-sm"
                    >
                        {edu.period}
                    </span>
                </div>
                <div class="flex items-center gap-2">
                    <Icon icon="mdi:school" width="16" height="16" class="text-[#10b981]" />
                    <span class="text-sm text-[#d1d5db] sm:text-base">{edu.location}</span>
                </div>
            </div>
        {/each}
    </div>
</section>
