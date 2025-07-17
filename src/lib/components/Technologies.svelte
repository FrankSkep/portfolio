<script>
  import TechBadge from "$lib/components/TechBadge.svelte";
  import Icon from "@iconify/svelte";
  export let technologies;
  export let t;
</script>

<section id="technologies" class="max-w-4xl mx-auto px-6 py-16">
  <div class="mb-12">
    <span class="text-[#22d3ee] text-sm font-medium"
      ><span class="text-[#fbbf24]">$</span> {t.commands.cat}</span
    >
    <h2 class="text-3xl font-bold text-[#f8fafc] mt-2 mb-4">Technologies</h2>
    <p class="text-[#d1d5db] mb-8 text-lg">
      {t.descriptions.technologies}
    </p>
  </div>

  <div class="space-y-10">
    <div>
      <h3
        class="text-xl font-semibold text-[#22d3ee] mb-6 flex items-center gap-2"
      >
        <Icon icon="mdi:star" width="20" height="20" class="text-[#fbbf24]" />
        {t.labels.primaryTech}
      </h3>
      <div class="flex flex-wrap gap-3">
        {#each technologies.primary as tech}
          <TechBadge {tech} size="md" />
        {/each}
      </div>
    </div>

    <div>
      <h3
        class="text-xl font-semibold text-[#22d3ee] mb-6 flex items-center gap-2"
      >
        <Icon icon="mdi:plus" width="20" height="20" class="text-[#10b981]" />
        {t.labels.additionalTech}
      </h3>
      <div class="flex flex-wrap gap-3">
        {#each technologies.additional as tech}
          <TechBadge {tech} size="md" />
        {/each}
      </div>
    </div>
  </div>

  <div class="mt-10 p-6 bg-[#1e1e28] border-l-4 border-[#22d3ee] rounded-lg">
    <div class="flex items-start gap-3">
      <Icon
        icon="mdi:information"
        width="20"
        height="20"
        class="text-[#22d3ee] mt-0.5 flex-shrink-0"
      />
      <p class="text-[#d1d5db] italic">
        {t.labels.techNote}
      </p>
    </div>
  </div>
</section>
