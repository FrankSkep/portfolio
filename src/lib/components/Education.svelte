<script>
  import Icon from "@iconify/svelte";
  export let education;
</script>

<section id="education" class="max-w-4xl mx-auto px-6 py-16">
  <div class="mb-12">
    <span class="text-[#22d3ee] text-sm font-medium"
      ><span class="text-[#fbbf24]">$</span> education --list</span
    >
    <h2 class="text-3xl font-bold text-[#f8fafc] mt-2 mb-6">Education</h2>
  </div>

  <div class="space-y-6">
    {#each education as edu}
      <div class="bg-[#1e1e28] border border-[#2a2a35] rounded-lg p-6">
        <div class="flex justify-between items-start mb-3">
          <h3 class="text-xl font-semibold text-[#22d3ee]">
            {edu.degree}
          </h3>
          <span
            class="text-[#9ca3af] text-sm bg-[#0a0a0f] px-3 py-1 rounded border border-[#2a2a35]"
          >
            {edu.period}
          </span>
        </div>
        <div class="flex items-center gap-2">
          <Icon
            icon="mdi:school"
            width="18"
            height="18"
            class="text-[#10b981]"
          />
          <span class="text-[#d1d5db]">{edu.location}</span>
        </div>
      </div>
    {/each}
  </div>
</section>
