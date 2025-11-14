<script>
    import Icon from '@iconify/svelte';
    export let personal;
    export let t;
</script>

<header id="home" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-8">
        <div class="mb-8 flex items-center gap-2">
            <span
                class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                ><span class="text-[#93c5fd]">$</span> {t.commands.whoami}</span
            >
            <span class="animate-pulse text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                >_</span
            >
        </div>

        <h1
            class="animate-gradient-x mb-6 bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-6xl font-bold text-transparent"
            style="background-size: 200% auto;"
        >
            {personal.name.split(' ').slice(0, 2).join(' ')}
        </h1>

        <h2
            class="mb-6 text-2xl font-medium text-[#60a5fa] drop-shadow-[0_0_10px_rgba(96,165,250,0.3)]"
        >
            {personal.role}
        </h2>

        <div class="group mb-10 flex cursor-default items-center gap-2">
            <Icon
                icon="mdi:map-marker"
                width="24"
                height="24"
                class="text-[#6b7280] transition-all group-hover:scale-125 group-hover:text-[#9ca3af] group-hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.4)]"
            />
            <span class="text-lg text-[#d1d5db] transition-colors group-hover:text-[#e5e7eb]"
                >{personal.location}</span
            >
        </div>

        <p class="mb-10 max-w-3xl text-lg leading-relaxed text-[#d1d5db] will-change-contents">
            {personal.description}
        </p>

        <div
            class="group relative overflow-hidden rounded-xl border border-[#3b82f6]/30 bg-gradient-to-br from-[#1e1e28]/80 to-[#181825]/80 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-[#3b82f6]/50 hover:shadow-blue-500/15"
        >
            <div
                class="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/5 to-[#1e3a8a]/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            ></div>

            <div class="relative z-10">
                <div class="mb-3 flex items-center gap-3">
                    <div
                        class="h-3 w-3 animate-pulse rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                    ></div>
                    <span
                        class="text-sm font-semibold text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                        >{t.labels.status}</span
                    >
                </div>
                <p class="text-[#e5e7eb] transition-colors group-hover:text-white">
                    {personal.status}
                </p>
            </div>
        </div>
    </div>
</header>

<style>
    @keyframes gradient-x {
        0%,
        100% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
    }

    .animate-gradient-x {
        animation: gradient-x 3s ease infinite;
    }
</style>
