<script>
    import Icon from '@iconify/svelte';
    import TechBadge from '$lib/components/TechBadge.svelte';
    export let experience;
    export let t;
</script>

<section id="experience" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span
            class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
            ><span class="text-[#93c5fd]">$</span> {t.commands.experience}</span
        >
        <h2 class="mt-2 mb-6 text-3xl font-bold text-[#f8fafc]">
            <Icon
                icon="mdi:briefcase"
                width="24"
                height="24"
                class="inline-block text-[#10b981] drop-shadow-[0_0_10px_rgba(16,185,129,0.4)]"
            />
            {t.sections.experience}
        </h2>
    </div>

    <div class="relative space-y-8">
        <!-- Timeline Line -->
        <div
            class="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-[#10b981]/60 via-[#059669]/40 to-transparent sm:left-6"
        ></div>

        {#each experience as exp, index}
            <div
                class="experience-item group relative pl-12 transition-all duration-500 sm:pl-16"
                style="animation-delay: {index * 0.1}s"
            >
                <!-- Timeline Dot -->
                <div
                    class="absolute left-0 top-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#10b981] bg-gradient-to-br from-[#1e1e28] to-[#181825] shadow-lg transition-all duration-300 group-hover:scale-125 group-hover:border-[#34d399] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] sm:left-2"
                >
                    <div
                        class="h-3 w-3 rounded-full bg-gradient-to-br from-[#10b981] to-[#059669] transition-all duration-300 group-hover:animate-pulse"
                    ></div>
                </div>

                <div
                    class="experience-card relative overflow-hidden rounded-xl border border-[#2a2a35] bg-gradient-to-br from-[#1e1e28] to-[#181825] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#10b981]/40 hover:shadow-2xl hover:shadow-emerald-500/10"
                >
                    <!-- Hover gradient effect -->
                    <div
                        class="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#10b981]/0 to-[#059669]/0 transition-all duration-500 group-hover:from-[#10b981]/8 group-hover:to-[#059669]/8"
                    ></div>

                    <div class="relative z-10">
                        <!-- Header -->
                        <div class="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                            <div class="flex-1">
                                <h3
                                    class="mb-1 text-xl font-bold text-[#10b981] drop-shadow-[0_0_8px_rgba(16,185,129,0.2)] transition-colors duration-300 group-hover:text-[#34d399]"
                                >
                                    {exp.position}
                                </h3>
                                <div class="flex items-center gap-2 text-[#c7d2fe]">
                                    <Icon icon="mdi:domain" width="18" height="18" class="text-[#818cf8]" />
                                    <span class="font-medium">{exp.company}</span>
                                </div>
                                {#if exp.location}
                                    <div class="mt-1 flex items-center gap-2 text-sm text-[#9ca3af]">
                                        <Icon icon="mdi:map-marker" width="16" height="16" />
                                        <span>{exp.location}</span>
                                    </div>
                                {/if}
                            </div>
                            <span
                                class="inline-block rounded-lg border border-[#10b981]/30 bg-gradient-to-r from-[#181825] to-[#121220] px-4 py-1.5 text-sm font-medium text-[#10b981] shadow-lg transition-transform duration-200 hover:scale-105"
                            >
                                {exp.period}
                            </span>
                        </div>

                        <!-- Description -->
                        {#if exp.description}
                            <p class="mb-4 text-[#d1d5db] leading-relaxed">
                                {exp.description}
                            </p>
                        {/if}

                        <!-- Responsibilities/Achievements -->
                        {#if exp.responsibilities && exp.responsibilities.length > 0}
                            <div class="mb-4">
                                <h4 class="mb-2 flex items-center gap-2 text-sm font-semibold text-[#f3f4f6]">
                                    <Icon icon="mdi:check-circle" width="18" height="18" class="text-[#10b981]" />
                                    {t.labels.responsibilities}
                                </h4>
                                <ul class="space-y-2 pl-1">
                                    {#each exp.responsibilities as responsibility}
                                        <li class="flex gap-2 text-sm text-[#d1d5db]">
                                            <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#10b981]"></span>
                                            <span>{responsibility}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                        {/if}

                        <!-- Technologies -->
                        {#if exp.technologies && exp.technologies.length > 0}
                            <div class="mt-4 pt-4 border-t border-[#2a2a35]">
                                <div class="flex flex-wrap gap-2">
                                    {#each exp.technologies as tech}
                                        <TechBadge {tech} size="sm" />
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </div>
        {/each}

        <!-- Timeline End -->
        <div class="relative pl-12 sm:pl-16">
            <div
                class="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#10b981]/50 bg-gradient-to-br from-[#1e1e28] to-[#181825] sm:left-2"
            >
                <Icon icon="mdi:circle" width="12" height="12" class="text-[#10b981]/50" />
            </div>
        </div>
    </div>
</section>

<style>
    .experience-item {
        opacity: 0;
        animation: fadeInUp 0.6s ease-out forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .experience-card {
        backdrop-filter: blur(10px);
    }

    .experience-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
            90deg,
            transparent,
            rgba(16, 185, 129, 0.3),
            transparent
        );
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .experience-card:hover::before {
        opacity: 1;
    }
</style>
