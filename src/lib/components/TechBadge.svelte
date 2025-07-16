<script lang="ts">
  import Icon from "@iconify/svelte";

  export let tech: string;
  export let size: "sm" | "md" | "lg" = "md";
  export let variant: "default" | "outline" | "minimal" = "default";

  // Mapeo de tecnologías a iconos
  const techIcons = {
    Java: "logos:java",
    "Spring Boot": "logos:spring-icon",
    Python: "logos:python",
    FastAPI: "simple-icons:fastapi",
    PostgreSQL: "logos:postgresql",
    MySQL: "logos:mysql",
    Docker: "logos:docker-icon",
    AWS: "logos:aws",
    Azure: "logos:microsoft-azure",
    Git: "logos:git-icon",
    Postman: "logos:postman-icon",
    Linux: "logos:linux-tux",
    SvelteKit: "logos:svelte-icon",
    JavaScript: "logos:javascript",
    Cloudinary: "logos:cloudinary",
    JWT: "simple-icons:jsonwebtokens",
    "Spring Cloud": "logos:spring-icon",
    Eureka: "simple-icons:netflix",
    "API Gateway": "carbon:api-1",
    OpenFeign: "simple-icons:openjdk",
    Electron: "logos:electron",
    "AWS Rekognition": "logos:aws",
    Maven: "logos:maven",
    Hibernate: "logos:hibernate",
  };

  // Mapeo de tecnologías a colores
  const techColors = {
    // Backend/Java - Naranja
    Java: "bg-[#2d1a0f] text-[#ff8c42] border-[#ff8c42]/20",
    "Spring Boot": "bg-[#1a2e1a] text-[#7dd87d] border-[#7dd87d]/20",
    "Spring Security": "bg-[#1a2e1a] text-[#7dd87d] border-[#7dd87d]/20",
    "Spring Data": "bg-[#1a2e1a] text-[#7dd87d] border-[#7dd87d]/20",
    "Spring Cloud": "bg-[#1a2e1a] text-[#7dd87d] border-[#7dd87d]/20",
    Maven: "bg-[#2a1a1a] text-[#f57c00] border-[#f57c00]/20",
    Hibernate: "bg-[#2a1f1a] text-[#8d6e63] border-[#8d6e63]/20",

    // Python - Azul
    Python: "bg-[#1a2a35] text-[#4fc3f7] border-[#4fc3f7]/20",
    FastAPI: "bg-[#1a2d2e] text-[#4dd0e1] border-[#4dd0e1]/20",

    // Bases de datos - Violeta
    PostgreSQL: "bg-[#2a1f35] text-[#b39ddb] border-[#b39ddb]/20",
    MySQL: "bg-[#2e1a2e] text-[#ce93d8] border-[#ce93d8]/20",

    // DevOps/Cloud
    Docker: "bg-[#1a2e22] text-[#4caf50] border-[#4caf50]/20",
    AWS: "bg-[#351a1a] text-[#ff5252] border-[#ff5252]/20",
    "AWS Rekognition": "bg-[#351a1a] text-[#ff5252] border-[#ff5252]/20",
    Azure: "bg-[#1a2a3a] text-[#42a5f5] border-[#42a5f5]/20",

    // Frontend
    SvelteKit: "bg-[#351a25] text-[#f06292] border-[#f06292]/20",
    JavaScript: "bg-[#3a3a1a] text-[#ffeb3b] border-[#ffeb3b]/20",
    Electron: "bg-[#2a1f35] text-[#ab47bc] border-[#ab47bc]/20",

    // Herramientas
    Git: "bg-[#2a1f18] text-[#d4a574] border-[#d4a574]/20",
    Postman: "bg-[#3a2a1a] text-[#ffc107] border-[#ffc107]/20",
    Linux: "bg-[#252528] text-[#90a4ae] border-[#90a4ae]/20",

    // Servicios
    Cloudinary: "bg-[#1a2a35] text-[#29b6f6] border-[#29b6f6]/20",
    JWT: "bg-[#2a1a35] text-[#9c27b0] border-[#9c27b0]/20",
    Eureka: "bg-[#351f1f] text-[#e57373] border-[#e57373]/20",
    "API Gateway": "bg-[#1a2a3a] text-[#5c6bc0] border-[#5c6bc0]/20",
    OpenFeign: "bg-[#2d1a0f] text-[#ff8c42] border-[#ff8c42]/20",
  };

  // Configuraciones por tamaño
  const sizeConfigs = {
    sm: {
      padding: "px-2 py-0.5",
      text: "text-xs",
      icon: 10,
      gap: "gap-1",
      radius: "rounded"
    },
    md: {
      padding: "px-3 py-1",
      text: "text-sm",
      icon: 14,
      gap: "gap-1.5",
      radius: "rounded-md"
    },
    lg: {
      padding: "px-4 py-2",
      text: "text-base",
      icon: 16,
      gap: "gap-2",
      radius: "rounded-lg"
    }
  };

  // Configuraciones por variante
  const variantConfigs = {
    default: "border border-transparent",
    outline: "border bg-transparent",
    minimal: "border-none bg-transparent"
  };

  function getTechIcon(tech: string): string {
    return techIcons[tech as keyof typeof techIcons] || "carbon:code";
  }

  function getTechColor(tech: string): string {
    return techColors[tech as keyof typeof techColors] || "bg-[#2a1f35] text-[#ba68c8] border-[#ba68c8]/20";
  }

  $: config = sizeConfigs[size];
  $: variantClass = variantConfigs[variant];
  $: colorClass = getTechColor(tech);
</script>

<span
  class="inline-flex items-center {config.padding} {config.text} {config.gap} {config.radius} {colorClass} {variantClass} font-bold transition-all duration-200 hover:scale-105 hover:shadow-sm hover:brightness-110 cursor-default select-none"
  title={tech}
>
  <Icon icon={getTechIcon(tech)} width={config.icon} height={config.icon} class="flex-shrink-0" />
  <span class="font-bold">{tech}</span>
</span>

<style>
  span {
    backdrop-filter: blur(4px);
  }
</style>
