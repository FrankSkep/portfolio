<script>
    export let footer;
</script>

<footer
    class="text-md mx-auto mt-16 max-w-4xl border-t border-[#3b82f6]/20 px-6 py-10 text-center text-[#9ca3af] backdrop-blur-sm"
>
    <div class="relative">
        <div class="absolute inset-0 flex items-center justify-center">
            <div
                class="h-px w-full max-w-md bg-gradient-to-r from-transparent via-[#6b7280]/40 to-transparent"
            ></div>
        </div>

        <p
            class="relative z-10 py-4 text-sm transition-colors duration-300 hover:text-[#d1d5db] sm:text-base"
        >
            {footer}
        </p>

        <div class="mt-4 flex justify-center gap-2">
            <span class="h-1 w-1 animate-pulse rounded-full bg-[#60a5fa]/40"></span>
            <span
                class="h-1 w-1 animate-pulse rounded-full bg-[#6366f1]/40"
                style="animation-delay: 0.2s;"
            ></span>
            <span
                class="h-1 w-1 animate-pulse rounded-full bg-[#22d3ee]/40"
                style="animation-delay: 0.4s;"
            ></span>
        </div>
    </div>
</footer>
