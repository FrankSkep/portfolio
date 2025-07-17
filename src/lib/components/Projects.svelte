<script>
  import TechBadge from "$lib/components/TechBadge.svelte";
  import Icon from "@iconify/svelte";
  export let projects;
  export let showHighlights;
  export let t;
</script>

<section id="projects" class="max-w-4xl mx-auto px-6 py-16">
  <div class="mb-12">
    <span class="text-[#22d3ee] text-sm font-medium"
      ><span class="text-[#fbbf24]">$</span> {t.commands.ls}</span
    >
    <h2 class="text-3xl font-bold text-[#f8fafc] mt-2 mb-4">{t.sections.projects}</h2>
    <p class="text-[#d1d5db] mb-8 text-lg">
      {t.descriptions.projects}
    </p>
  </div>

  <div class="space-y-8">
    {#each projects as project, index}
      <div
        class="bg-[#1e1e28] border border-[#2a2a35] rounded-lg p-6 hover:border-[#22d3ee]/30 transition-all duration-200"
      >
        <div class="flex items-start justify-between mb-4">
          <h3 class="text-xl font-semibold text-[#22d3ee]">
            {project.name}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center gap-2 text-[#9ca3af] hover:text-[#22d3ee] transition-colors"
            title={t.labels.viewOnGithub}
          >
            <Icon icon="mdi:github" width="20" height="20" />
            <span class="text-sm">GitHub</span>
          </a>
        </div>

        <p class="text-[#d1d5db] mb-4 leading-relaxed">
          {project.description}
        </p>

        <!-- Button to toggle "View more" -->
        {#if project.highlights}
          <button
            on:click={() => (showHighlights[index] = !showHighlights[index])}
            class="text-sm text-[#fbbf24] hover:text-[#f59e0b] transition-colors mb-4 cursor-pointer"
          >
            {showHighlights[index] ? `${t.labels.viewLess}` : `${t.labels.viewMore}`}
          </button>

          <!-- Highlights -->
          {#if showHighlights[index]}
            <div
              class="mb-4 p-4 bg-[#181825] border border-[#2a2a35] rounded-lg"
            >
              <h4 class="text-sm font-medium text-[#22d3ee] mb-3">
                {t.labels.featuredHighlights}
              </h4>
              <ul class="space-y-2">
                {#each project.highlights as highlight}
                  <li class="text-[#d1d5db] text-sm flex items-start">
                    <Icon
                      icon="mdi:check"
                      width="16"
                      height="16"
                      class="text-[#10b981] mt-0.5 mr-2 flex-shrink-0"
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
