// src/themes/_token.ts
const tokens = {
    layout: {
        maxWidth: 1440,
        headerHeight: 64,
        sidebarWidth: 240,
    },
    radius: {
        sm: 6,
        md: 8,
        lg: 12,
        pill: 999,
    },
    spacing: {
        unit: 8,
        xs: 8,
        sm: 16,
        md: 24,
        lg: 32,
        xl: 48,
        xxl: 64,
    },
    control: {
        height: 44,
    },
    elevation: {
        card: "0 2px 8px rgba(15, 23, 42, 0.08)",
        elevated: "0 4px 16px rgba(15, 23, 42, 0.10)",
    },
} as const;

export { tokens };
