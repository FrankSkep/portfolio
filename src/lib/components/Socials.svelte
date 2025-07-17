<script>
  import Icon from "@iconify/svelte";
  export let socials;
  export let t;
</script>

<section id="socials" class="max-w-4xl mx-auto px-6 py-16">
  <div class="mb-12">
    <span class="text-[#22d3ee] text-sm font-medium"
      ><span class="text-[#fbbf24]">$</span> {t.commands.connect}</span
    >
    <h2 class="text-3xl font-bold text-[#f8fafc] mt-2 mb-4">
      Contact
    </h2>
    <p class="text-[#d1d5db] mb-8 text-lg">
      {t.descriptions.contact}
    </p>
  </div>

  <div class="flex flex-wrap gap-4">
    {#each socials as social}
      <a
        href={social.href}
        target={social.href.startsWith("http") ? "_blank" : "_self"}
        rel={social.href.startsWith("http") ? "noopener noreferrer" : ""}
        class="group flex items-center gap-2 px-4 py-2 bg-[#1e1e28] border border-[#2a2a35] rounded-lg hover:border-[#22d3ee] hover:bg-[#1e1e28] transition-all duration-200"
      >
        <Icon
          icon={social.icon}
          width="20"
          height="20"
          class="text-[#9ca3af] group-hover:text-[#22d3ee] transition-colors"
        />
        <span
          class="text-[#e5e7eb] group-hover:text-[#22d3ee] transition-colors"
          >{social.label}</span
        >
      </a>
    {/each}
  </div>
</section>
