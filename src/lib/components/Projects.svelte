<script>
    import TechBadge from '$lib/components/TechBadge.svelte';
    import Icon from '@iconify/svelte';
    export let projects;
    export let showHighlights;
    export let t;
</script>

<section id="projects" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span
            class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
            ><span class="text-[#93c5fd]">$</span> {t.commands.ls}</span
        >
        <h2 class="mt-2 mb-4 text-3xl font-bold text-[#f8fafc]">
            <Icon
                icon="mdi:folder-open"
                width="24"
                height="24"
                class="inline-block text-[#93c5fd] drop-shadow-[0_0_10px_rgba(147,197,253,0.4)]"
            />
            {t.sections.projects}
        </h2>
        <p class="mb-8 text-lg text-[#d1d5db]">
            {t.descriptions.projects}
        </p>
    </div>

    <div class="space-y-6">
        {#each projects as project, index}
            <div
                class="project-card group relative rounded-xl border border-[#2a2a35] bg-gradient-to-br from-[#1e1e28] to-[#181825] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <div
                    class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#3b82f6]/0 to-[#1e3a8a]/0 transition-all duration-500 group-hover:from-[#3b82f6]/8 group-hover:to-[#1e3a8a]/8"
                ></div>

                <div class="relative z-10">
                    <div class="mb-4 flex items-start justify-between">
                        <h3
                            class="text-xl font-semibold text-[#60a5fa] drop-shadow-[0_0_10px_rgba(96,165,250,0.2)] transition-colors duration-300 group-hover:text-[#93c5fd]"
                        >
                            {project.name}
                        </h3>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="flex items-center gap-2 text-[#9ca3af] transition-all duration-300 hover:scale-110 hover:text-[#60a5fa] hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.4)]"
                            title={t.labels.viewOnGithub}
                        >
                            <Icon icon="mdi:github" width="20" height="20" />
                            <span class="text-sm">GitHub</span>
                        </a>
                    </div>

                    <p
                        class="mb-4 leading-relaxed text-[#d1d5db] transition-colors group-hover:text-[#e5e7eb]"
                    >
                        {project.description}
                    </p>

                    {#if project.highlights}
                        <button
                            on:click={() => (showHighlights[index] = !showHighlights[index])}
                            class="mb-4 flex cursor-pointer items-center gap-1 text-sm font-medium text-[#93c5fd] transition-all duration-300 hover:translate-x-1 hover:text-[#60a5fa] hover:drop-shadow-[0_0_8px_rgba(147,197,253,0.5)]"
                        >
                            {showHighlights[index]
                                ? `${t.labels.viewLess}`
                                : `${t.labels.viewMore}`}
                            <Icon
                                icon={showHighlights[index] ? 'mdi:chevron-up' : 'mdi:chevron-down'}
                                width="16"
                                height="16"
                            />
                        </button>

                        {#if showHighlights[index]}
                            <div
                                class="animate-fade-in mb-4 rounded-lg border border-[#3b82f6]/30 bg-gradient-to-br from-[#181825] to-[#121220] p-4 shadow-inner"
                            >
                                <h4
                                    class="mb-3 text-sm font-semibold text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                                >
                                    {t.labels.featuredHighlights}
                                </h4>
                                <ul class="space-y-2">
                                    {#each project.highlights as highlight}
                                        <li
                                            class="flex items-start text-sm text-[#d1d5db] transition-colors hover:text-[#e5e7eb]"
                                        >
                                            <Icon
                                                icon="mdi:check-circle"
                                                width="16"
                                                height="16"
                                                class="mt-0.5 mr-2 flex-shrink-0 text-[#60a5fa] drop-shadow-[0_0_6px_rgba(96,165,250,0.4)]"
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
            </div>
        {/each}
    </div>
</section>
