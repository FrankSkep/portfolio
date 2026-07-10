<script>
    import Icon from '@iconify/svelte';
    export let personal;
    export let t;
</script>

<header id="home" class="mx-auto max-w-4xl px-6 py-20">
    <div class="mb-8">
        <div class="mb-6 flex items-center gap-2">
            <span
                class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                ><span class="text-[#93c5fd]">$</span> {t.commands.whoami}</span
            >
            <span class="animate-pulse text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
                >_</span
            >
        </div>

        <h1
            class="animate-gradient-x mb-4 bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#60a5fa] bg-clip-text text-5xl font-bold leading-tight text-transparent md:text-6xl"
            style="background-size: 200% auto;"
        >
            {personal.name.split(' ').slice(0, 2).join(' ')}
        </h1>

        <h2
            class="mb-6 text-xl font-medium text-[#60a5fa] drop-shadow-[0_0_10px_rgba(96,165,250,0.3)] md:text-2xl"
        >
            {personal.role}
        </h2>

        <div class="group mb-8 flex cursor-default items-center gap-2">
            <Icon
                icon="mdi:map-marker"
                width="20"
                height="20"
                class="text-[#6b7280] transition-all duration-300 group-hover:scale-110 group-hover:text-[#9ca3af]"
            />
            <span class="text-base text-[#d1d5db] transition-colors group-hover:text-[#e5e7eb] md:text-lg"
                >{personal.location}</span
            >
        </div>

        <p class="mb-8 max-w-3xl text-base leading-relaxed text-[#d1d5db] md:text-lg">
            {personal.description}
        </p>

        <div
            class="group relative overflow-hidden rounded-xl border border-[#2a2a35] bg-gradient-to-br from-[#1a1a24]/80 to-[#0f0f14]/80 p-5 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#3b82f6]/40 hover:shadow-xl hover:shadow-blue-500/10"
        >
            <div
                class="absolute inset-0 bg-gradient-to-br from-[#3b82f6]/0 to-[#1e3a8a]/0 transition-all duration-500 group-hover:from-[#3b82f6]/5 group-hover:to-[#1e3a8a]/5"
            ></div>

            <div class="relative z-10">
                <div class="mb-2 flex items-center gap-3">
                    <div
                        class="h-2.5 w-2.5 animate-pulse rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.6)]"
                    ></div>
                    <span
                        class="text-sm font-semibold text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.3)]"
                        >{t.labels.status}</span
                    >
                </div>
                <p class="text-sm text-[#e5e7eb] transition-colors group-hover:text-white md:text-base">
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
