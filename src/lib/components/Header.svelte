<script>
    import Icon from '@iconify/svelte';
    export let personal;
    export let t;
</script>

<header id="home" class="mx-auto max-w-4xl px-6 py-12">
    <div class="mb-8">
        <!-- Terminal command -->
        <div class="mb-6">
            <span class="text-sm font-medium text-[#22d3ee]"
                ><span class="text-[#fbbf24]">$</span> {t.commands.whoami}</span
            >
            <span class="animate-pulse text-[#22d3ee]">_</span>
        </div>

        <!-- Name -->
        <h1 class="mb-4 text-5xl font-bold text-[#f8fafc]">
            {personal.name.split(' ').slice(0, 2).join(' ')}
        </h1>

        <!-- Role -->
        <h2 class="mb-4 text-xl font-medium text-[#22d3ee]">{personal.role}</h2>

        <!-- Location -->
        <div class="mb-8 flex items-center gap-2">
            <Icon icon="mdi:map-marker" width="20" height="20" class="text-[#10b981]" />
            <span class="text-lg text-[#d1d5db]">{personal.location}</span>
        </div>

        <!-- Description -->
        <p class="mb-8 max-w-3xl text-lg leading-relaxed text-[#d1d5db] will-change-contents">
            {personal.description}
        </p>

        <!-- Status card -->
        <div class="rounded-lg border border-[#2a2a35] bg-[#1e1e28] p-6">
            <div class="mb-2 flex items-center gap-3">
                <div class="h-2 w-2 rounded-full bg-[#10b981]"></div>
                <span class="text-sm font-medium text-[#10b981]">{t.labels.status}</span>
            </div>
            <p class="text-[#e5e7eb]">{personal.status}</p>
        </div>
    </div>
</header>