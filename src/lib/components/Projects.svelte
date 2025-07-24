<script>
    import TechBadge from '$lib/components/TechBadge.svelte';
    import Icon from '@iconify/svelte';
    export let projects;
    export let showHighlights;
    export let t;
</script>

<section id="projects" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span class="command-text text-sm font-medium text-[#22d3ee]"
            ><span class="text-[#fbbf24]">$</span> {t.commands.ls}</span
        >
        <h2 class="mt-2 mb-4 text-3xl font-bold text-[#f8fafc]">
            <Icon icon="mdi:folder" width="24" height="24" class="inline-block text-[#fbbf24]" />
            {t.sections.projects}</h2>
        <p class="mb-8 text-lg text-[#d1d5db]">
            {t.descriptions.projects}
        </p>
    </div>

    <div class="space-y-8">
        {#each projects as project, index}
            <div
                class="rounded-lg border border-[#2a2a35] bg-[#1e1e28] p-6 transition-all duration-200 hover:border-[#22d3ee]/30"
            >
                <div class="mb-4 flex items-start justify-between">
                    <h3 class="text-xl font-semibold text-[#22d3ee]">
                        {project.name}
                    </h3>
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="flex items-center gap-2 text-[#9ca3af] transition-colors hover:text-[#22d3ee]"
                        title={t.labels.viewOnGithub}
                    >
                        <Icon icon="mdi:github" width="20" height="20" />
                        <span class="text-sm">GitHub</span>
                    </a>
                </div>

                <p class="mb-4 leading-relaxed text-[#d1d5db]">
                    {project.description}
                </p>

                <!-- Button to toggle "View more" -->
                {#if project.highlights}
                    <button
                        on:click={() => (showHighlights[index] = !showHighlights[index])}
                        class="mb-4 cursor-pointer text-sm text-[#fbbf24] transition-colors hover:text-[#f59e0b]"
                    >
                        {showHighlights[index] ? `${t.labels.viewLess}` : `${t.labels.viewMore}`}
                    </button>

                    <!-- Highlights -->
                    {#if showHighlights[index]}
                        <div class="mb-4 rounded-lg border border-[#2a2a35] bg-[#181825] p-4">
                            <h4 class="mb-3 text-sm font-medium text-[#22d3ee]">
                                {t.labels.featuredHighlights}
                            </h4>
                            <ul class="space-y-2">
                                {#each project.highlights as highlight}
                                    <li class="flex items-start text-sm text-[#d1d5db]">
                                        <Icon
                                            icon="mdi:check"
                                            width="16"
                                            height="16"
                                            class="mt-0.5 mr-2 flex-shrink-0 text-[#10b981]"
                                        />
                                        {highlight}
                                    </li>
                                {/each}
                            </ul>
                        </div>
                    {/if}
                {/if}

                <div class="flex flex-wrap gap-2">
                    {#each project.tech as tech}
                        <TechBadge {tech} size="sm" />
                    {/each}
                </div>
            </div>
        {/each}
    </div>
</section>
