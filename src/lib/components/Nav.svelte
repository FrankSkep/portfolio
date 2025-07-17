<script>
  import { slide } from "svelte/transition";
  import Icon from "@iconify/svelte";
  import LanguageSelector from "./LanguageSelector.svelte";
  
  export let personal;
  export let navItems;
  export let currentSection;
  export let mobileMenuOpen;
  export let toggleMobileMenu;
  export let smoothScroll;
</script>

<nav class="fixed top-0 left-0 right-0 bg-[#1c1c21]/98 backdrop-blur-sm border-b border-[#2a2a35] z-50">
  <div class="max-w-4xl mx-auto px-6 py-4">
    <div class="flex items-center justify-between">
      <div class="text-[#22d3ee] font-mono text-sm">
        <span class="text-[#fbbf24]">$</span>
        {personal.nickname.toLowerCase()}
      </div>

      <!-- Desktop navigation -->
      <div class="hidden md:flex items-center gap-4">
        {#each navItems as item}
          <button
            on:click={() => smoothScroll(item.id)}
            class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-[#272736] text-sm cursor-pointer {currentSection ===
            item.id
              ? 'text-[#22d3ee] bg-[#272736]'
              : 'text-[#e5e7eb] hover:text-[#22d3ee]'}"
          >
            <Icon icon={item.icon} width="16" height="16" />
            {item.label}
          </button>
        {/each}
        
        <!-- Language selector -->
        <LanguageSelector />
      </div>

      <!-- Mobile menu button -->
      <button
        on:click={toggleMobileMenu}
        class="md:hidden p-2 rounded-lg hover:bg-[#272736] transition-colors cursor-pointer"
      >
        <Icon
          icon={mobileMenuOpen ? "mdi:close" : "mdi:menu"}
          width="24"
          height="24"
          class="text-[#e5e7eb] hover:text-[#22d3ee] transition-colors"
        />
      </button>

      <!-- Mobile menu -->
      {#if mobileMenuOpen}
        <div
          transition:slide={{ duration: 200 }}
          class="md:hidden absolute top-full left-0 right-0 bg-[#1c1c21]/98 backdrop-blur-sm border-b border-[#2a2a35]"
        >
          <div class="max-w-4xl mx-auto px-6 py-4">
            <div class="flex flex-col gap-2">
              {#each navItems as item}
                <button
                  on:click={() => { smoothScroll(item.id)}}
                  class="flex items-center gap-2 px-3 py-2 rounded-lg transition-all hover:bg-[#272736] text-sm w-full text-left cursor-pointer {currentSection ===
                  item.id
                    ? 'text-[#22d3ee] bg-[#272736]'
                    : 'text-[#e5e7eb] hover:text-[#22d3ee]'}"
                >
                  <Icon icon={item.icon} width="16" height="16" />
                  {item.label}
                </button>
              {/each}
              
              <!-- Mobile language selector -->
              <div class="mt-4 pt-4 border-t border-[#2a2a35]">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
</nav>