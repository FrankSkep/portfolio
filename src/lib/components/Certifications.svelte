<script lang="ts">
    import Icon from '@iconify/svelte';

    export let certifications: Array<{
        name: string;
        issuer: string;
        date: string;
        url: string;
    }>;
    export let t: any;

    // Map issuer names to icons
    const issuerIcons: Record<string, string> = {
        'SoloLearn': 'simple-icons:sololearn',
        'HackerRank': 'simple-icons:hackerrank',
        'freeCodeCamp': 'simple-icons:freecodecamp',
        'LinkedIn Learning': 'simple-icons:linkedin',
        'Microsoft and LinkedIn Learning': 'simple-icons:microsoft',
        'Coursera': 'simple-icons:coursera',
        'Udemy': 'simple-icons:udemy',
        'edX': 'simple-icons:edx',
        'Platzi': 'simple-icons:platzi'
    };

    function getIssuerIcon(issuer: string): string {
        return issuerIcons[issuer] || 'mdi:certificate';
    }

    function getIssuerColor(issuer: string): string {
        const colors: Record<string, string> = {
            'SoloLearn': 'from-blue-500/10 to-blue-600/5',
            'HackerRank': 'from-green-500/10 to-green-600/5',
            'freeCodeCamp': 'from-green-500/10 to-green-700/5',
            'LinkedIn Learning': 'from-blue-500/10 to-blue-700/5',
            'Microsoft and LinkedIn Learning': 'from-blue-500/10 to-cyan-600/5',
            'Coursera': 'from-blue-500/10 to-indigo-600/5',
            'Udemy': 'from-purple-500/10 to-purple-600/5',
            'edX': 'from-red-500/10 to-red-600/5',
            'Platzi': 'from-green-500/10 to-emerald-600/5'
        };
        return colors[issuer] || 'from-blue-500/10 to-purple-500/5';
    }

</script>

<section id="certifications" class="mx-auto max-w-4xl px-6 py-16">
    <div class="mb-12">
        <span
            class="command-text text-sm font-medium text-[#60a5fa] drop-shadow-[0_0_8px_rgba(96,165,250,0.3)]"
            ><span class="text-[#93c5fd]">$</span> certifications --list</span
        >
        <h2 class="mt-2 mb-4 text-3xl font-bold text-[#f8fafc]">
            <Icon
                icon="mdi:certificate"
                width="24"
                height="24"
                class="inline-block text-[#93c5fd] drop-shadow-[0_0_10px_rgba(147,197,253,0.4)]"
            />
            {t.titles.certifications}
        </h2>
        <p class="mb-8 text-lg text-[#d1d5db]">
            {t.descriptions.certifications}
        </p>
    </div>

    <!-- Certifications Grid -->
    <div class="grid gap-6 md:grid-cols-2">
        {#each certifications as cert}
            <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                class="certification-card group relative overflow-hidden rounded-xl border border-[#2a2a35] bg-gradient-to-br from-[#1e1e28] to-[#181825] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#3b82f6]/40 hover:shadow-2xl hover:shadow-blue-500/10"
            >
                <!-- Hover Effect -->
                <div
                    class="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-[#3b82f6]/0 to-[#1e3a8a]/0 transition-all duration-500 group-hover:from-[#3b82f6]/8 group-hover:to-[#1e3a8a]/8"
                ></div>

                <!-- Content -->
                <div class="relative z-10">
                    <!-- Icon and Date -->
                    <div class="mb-4 flex items-start justify-between">
                        <div
                            class="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3b82f6]/10 text-[#60a5fa] transition-all duration-300 group-hover:bg-[#3b82f6]/20 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(96,165,250,0.4)]"
                        >
                            <Icon icon={getIssuerIcon(cert.issuer)} width="24" height="24" />
                        </div>
                        <span class="text-sm text-[#9ca3af]">{cert.date}</span>
                    </div>

                    <!-- Certificate Name -->
                    <h3 class="mb-3 text-lg font-semibold text-[#60a5fa] drop-shadow-[0_0_10px_rgba(96,165,250,0.2)] transition-colors duration-300 group-hover:text-[#93c5fd]">
                        {cert.name}
                    </h3>

                    <!-- Issuer -->
                    <p class="mb-4 text-sm text-[#d1d5db] transition-colors group-hover:text-[#e5e7eb]">
                        <span class="text-[#9ca3af]">{t.labels.issuedBy} </span>
                        <span class="font-medium text-[#e5e7eb]">{cert.issuer}</span>
                    </p>

                    <!-- View Certificate Link -->
                    <div class="flex items-center gap-2 text-sm font-medium text-[#93c5fd] transition-all duration-300 hover:text-[#60a5fa]">
                        <span>{t.labels.viewCertificate}</span>
                        <Icon
                            icon="mdi:arrow-right"
                            width="16"
                            height="16"
                            class="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </div>
                </div>

                <!-- External Link Icon -->
                <div
                    class="absolute right-4 top-4 text-[#6b7280] opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                    <Icon icon="mdi:open-in-new" width="20" height="20" />
                </div>
            </a>
        {/each}
    </div>
</section>

<style>
    .certification-card {
        position: relative;
    }
</style>
