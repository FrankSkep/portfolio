<script>
    import TechBadge from '$lib/components/TechBadge.svelte';
    import Icon from '@iconify/svelte';
    export let technologies;
    export let t;
</script>

<section id="technologies" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span
            class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
            ><span class="text-[#93c5fd]">$</span> {t.commands.cat}</span
        >
        <h2 class="mt-2 mb-4 text-3xl font-bold text-[#f8fafc]">
            <Icon
                icon="mdi:tools"
                width="24"
                height="24"
                class="inline-block text-[#6366f1] drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]"
            />
            {t.titles.technologies}
        </h2>
        <p class="mb-8 text-lg text-[#d1d5db]">
            {t.descriptions.technologies}
        </p>
    </div>

    <div class="space-y-12">
        <div class="tech-section group">
            <h3
                class="mb-6 flex items-center gap-2 text-xl font-semibold text-[#60a5fa] drop-shadow-[0_0_10px_rgba(96,165,250,0.2)] transition-all group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]"
            >
                <Icon
                    icon="mdi:lightbulb-on"
                    width="22"
                    height="22"
                    class="text-[#93c5fd] drop-shadow-[0_0_8px_rgba(147,197,253,0.3)]"
                />
                {t.labels.primaryTech}
            </h3>
            <div class="flex flex-wrap gap-3">
                {#each technologies.primary as tech}
                    <TechBadge {tech} size="md" />
                {/each}
            </div>
        </div>

        <div class="tech-section group">
            <h3
                class="mb-6 flex items-center gap-2 text-xl font-semibold text-[#60a5fa] drop-shadow-[0_0_10px_rgba(96,165,250,0.2)] transition-all group-hover:drop-shadow-[0_0_15px_rgba(96,165,250,0.3)]"
            >
                <Icon
                    icon="mdi:plus-circle"
                    width="22"
                    height="22"
                    class="text-[#6366f1] drop-shadow-[0_0_8px_rgba(99,102,241,0.3)]"
                />
                {t.labels.additionalTech}
            </h3>
            <div class="flex flex-wrap gap-3">
                {#each technologies.additional as tech}
                    <TechBadge {tech} size="md" />
                {/each}
            </div>
        </div>
    </div>

    <div
        class="group mt-12 rounded-xl border-l-4 border-[#60a5fa] bg-gradient-to-r from-[#1e1e28]/80 to-[#181825]/80 p-6 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10"
    >
        <div class="flex items-start gap-3">
            <Icon
                icon="mdi:information"
                width="22"
                height="22"
                class="mt-0.5 flex-shrink-0 text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.4)] transition-transform group-hover:scale-110"
            />
            <p class="text-[#d1d5db] italic transition-colors group-hover:text-[#e5e7eb]">
                {t.labels.techNote}
            </p>
        </div>
    </div>
</section>
