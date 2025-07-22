<script lang="ts">
    import Icon from '@iconify/svelte';

    export let tech: string;
    export let size: 'sm' | 'md' | 'lg' = 'md';
    export let variant: 'default' | 'outline' | 'minimal' = 'default';

    const techIcons: Record<string, string> = {
        Java: 'logos:java',
        'Spring Boot': 'logos:spring-icon',
        Python: 'logos:python',
        FastAPI: 'simple-icons:fastapi',
        PostgreSQL: 'logos:postgresql',
        MySQL: 'logos:mysql',
        Docker: 'logos:docker-icon',
        AWS: 'logos:aws',
        Azure: 'logos:microsoft-azure',
        Git: 'logos:git-icon',
        Postman: 'logos:postman-icon',
        Linux: 'logos:linux-tux',
        SvelteKit: 'logos:svelte-icon',
        JavaScript: 'logos:javascript',
        Cloudinary: 'logos:cloudinary',
        JWT: 'simple-icons:jsonwebtokens',
        Electron: 'logos:electron',
        'AWS Rekognition': 'logos:aws',
        Maven: 'logos:maven',
        Hibernate: 'logos:hibernate'
    };

    const techColors: Record<string, string> = {
        Java: 'bg-[#2d1a0f]/80 text-[#ff8c42] border-[#ff8c42]/30',
        'Spring Boot': 'bg-[#1a2e1a]/80 text-[#7dd87d] border-[#7dd87d]/30',
        Python: 'bg-[#1a2a35]/80 text-[#4fc3f7] border-[#4fc3f7]/30',
        FastAPI: 'bg-[#1a2d2e]/80 text-[#4dd0e1] border-[#4dd0e1]/30',
        PostgreSQL: 'bg-[#2a1f35]/80 text-[#b39ddb] border-[#b39ddb]/30',
        MySQL: 'bg-[#2e1a2e]/80 text-[#ce93d8] border-[#ce93d8]/30',
        Docker: 'bg-[#1a2e22]/80 text-[#4caf50] border-[#4caf50]/30',
        AWS: 'bg-[#351a1a]/80 text-[#ff5252] border-[#ff5252]/30',
        Azure: 'bg-[#1a2a3a]/80 text-[#42a5f5] border-[#42a5f5]/30',
        SvelteKit: 'bg-[#351a25]/80 text-[#f06292] border-[#f06292]/30',
        JavaScript: 'bg-[#3a3a1a]/80 text-[#ffeb3b] border-[#ffeb3b]/30',
        Electron: 'bg-[#2a1f35]/80 text-[#ab47bc] border-[#ab47bc]/30',
        Git: 'bg-[#2a1f18]/80 text-[#d4a574] border-[#d4a574]/30',
        Postman: 'bg-[#3a2a1a]/80 text-[#ffc107] border-[#ffc107]/30',
        Linux: 'bg-[#252528]/80 text-[#90a4ae] border-[#90a4ae]/30',
        Cloudinary: 'bg-[#1a2a35]/80 text-[#29b6f6] border-[#29b6f6]/30',
        JWT: 'bg-[#2a1a35]/80 text-[#9c27b0] border-[#9c27b0]/30',
        Maven: 'bg-[#2a1a1a]/80 text-[#f57c00] border-[#f57c00]/30',
        Hibernate: 'bg-[#2a1f1a]/80 text-[#8d6e63] border-[#8d6e63]/30',
        'AWS Rekognition': 'bg-[#351a1a]/80 text-[#ff5252] border-[#ff5252]/30'
    };

    const sizeConfigs = {
        sm: { padding: 'px-2 py-0.5', text: 'text-xs', icon: 12, gap: 'gap-1', radius: 'rounded' },
        md: {
            padding: 'px-3 py-1',
            text: 'text-sm',
            icon: 16,
            gap: 'gap-1.5',
            radius: 'rounded-md'
        },
        lg: {
            padding: 'px-4 py-2',
            text: 'text-base',
            icon: 20,
            gap: 'gap-2',
            radius: 'rounded-lg'
        }
    };

    const variantConfigs = {
        default: 'border border-white/10',
        outline: 'border border-current bg-transparent',
        minimal: 'border-none bg-transparent'
    };

    const getTechIcon = (tech: string) => techIcons[tech] || 'carbon:code';
    const getTechColor = (tech: string) =>
        techColors[tech] || 'bg-[#2a1f35]/80 text-[#ba68c8] border-[#ba68c8]/30';
</script>

<span
    class="inline-flex items-center {sizeConfigs[size].padding} {sizeConfigs[size]
        .text} {sizeConfigs[size].gap} {sizeConfigs[size].radius} {getTechColor(
        tech
    )} {variantConfigs[variant]}
    bg-opacity-80 cursor-default font-semibold shadow-sm backdrop-blur-md transition-transform duration-200 select-none hover:scale-105"
    title={tech}
>
    <Icon
        icon={getTechIcon(tech)}
        width={sizeConfigs[size].icon}
        height={sizeConfigs[size].icon}
        class="flex-shrink-0"
    />
    <span>{tech}</span>
</span>

<style>
    .tech-badge {
        backdrop-filter: blur(6px);
    }
</style>
