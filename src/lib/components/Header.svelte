<script>
  import Icon from "@iconify/svelte";
  export let personal;
  export let t;
</script>

<header id="home" class="max-w-4xl mx-auto px-6 py-12">
  <div class="mb-8">
    <!-- Terminal command -->
    <div class="mb-6">
      <span class="text-[#22d3ee] text-sm font-medium"
        ><span class="text-[#fbbf24]">$</span> {t.commands.whoami}</span
      >
      <span class="text-[#22d3ee] animate-pulse">_</span>
    </div>

    <!-- Name -->
    <h1 class="text-5xl font-bold mb-4 text-[#f8fafc]">
      {personal.name.split(" ").slice(0, 2).join(" ")}
    </h1>

    <!-- Role -->
    <h2 class="text-[#22d3ee] text-xl mb-4 font-medium">{personal.role}</h2>

    <!-- Location -->
    <div class="flex items-center gap-2 mb-8">
      <Icon
        icon="mdi:map-marker"
        width="20"
        height="20"
        class="text-[#10b981]"
      />
      <span class="text-[#d1d5db] text-lg">{personal.location}</span>
    </div>

    <!-- Description -->
    <p class="text-[#d1d5db] leading-relaxed text-lg mb-8 max-w-3xl">
      {personal.description}
    </p>

    <!-- Status card -->
    <div class="p-6 bg-[#1e1e28] border border-[#2a2a35] rounded-lg">
      <div class="flex items-center gap-3 mb-2">
        <div class="w-2 h-2 bg-[#10b981] rounded-full"></div>
        <span class="text-[#10b981] text-sm font-medium">{t.labels.status}</span>
      </div>
      <p class="text-[#e5e7eb]">{personal.status}</p>
    </div>
  </div>
</header>