/**
 * Zeedeo Design System - Core Design Tokens
 * 
 * Single source of truth for all design values.
 * Use these tokens in components instead of hardcoded values.
 */

// =============================================================================
// COLORS
// =============================================================================

export const colors = {
    // Brand Colors
    brand: {
        primary: '#e91e8c',
        primaryHover: '#d11a7d',
        primaryLight: 'rgba(233, 30, 140, 0.1)',
        primaryGlow: 'rgba(233, 30, 140, 0.3)',
        primaryGlowStrong: 'rgba(233, 30, 140, 0.4)',
    },

    // Background Colors
    bg: {
        dark: '#1a0a1a',
        darker: '#0d0510',
        card: '#0d0510',
        cardHover: '#2a1a3a',
        cardActive: '#3a2a4a',
        overlay: 'rgba(0, 0, 0, 0.6)',
    },

    // Text Colors
    text: {
        primary: '#ffffff',
        secondary: 'rgba(255, 255, 255, 0.7)',
        muted: 'rgba(255, 255, 255, 0.5)',
        placeholder: 'rgba(255, 255, 255, 0.3)',
        disabled: 'rgba(255, 255, 255, 0.2)',
    },

    // Border Colors
    border: {
        light: 'rgba(255, 255, 255, 0.1)',
        default: 'rgba(255, 255, 255, 0.15)',
        medium: 'rgba(255, 255, 255, 0.2)',
        focus: 'rgba(255, 255, 255, 0.3)',
        active: '#e91e8c',
    },

    // Status Colors
    status: {
        error: '#ef4444',
        errorLight: 'rgba(239, 68, 68, 0.1)',
        success: '#22c55e',
        successLight: 'rgba(34, 197, 94, 0.1)',
        warning: '#f59e0b',
        warningLight: 'rgba(245, 158, 11, 0.1)',
    },
} as const;

// =============================================================================
// GRADIENTS
// =============================================================================

export const gradients = {
    hero: 'linear-gradient(135deg, #1a0a1a 0%, #1e0e20 30%, #1a0a1a 50%, #2d1230 80%, #1a0a1a 100%)',
    heroVertical: 'linear-gradient(180deg, #1a0a1a 0%, #2d1230 30%, #1a0a1a 100%)',
    card: 'linear-gradient(135deg, #1e1e2f 0%, #252538 20%, #1a1a2a 40%, #1e1e2f 60%, #2a1a2f 80%, #351a30 100%)',
    button: 'linear-gradient(135deg, #e91e8c 0%, #d11a7d 100%)',
    overlay: 'linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.8) 100%)',
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

export const typography = {
    fontFamily: {
        sans: 'var(--font-poppins), system-ui, sans-serif',
    },

    fontSize: {
        xs: '12px',
        sm: '13px',
        base: '14px',
        md: '15px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '28px',
        '5xl': '36px',
        '6xl': '42px',
        '7xl': '48px',
        '8xl': '56px',
    },

    fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
    },

    lineHeight: {
        tight: 1.15,
        snug: 1.25,
        normal: 1.5,
        relaxed: 1.6,
        loose: 1.75,
    },

    letterSpacing: {
        tight: '-0.02em',
        normal: '0',
        wide: '0.02em',
    },
} as const;

// =============================================================================
// SPACING
// =============================================================================

export const spacing = {
    // Base spacing scale
    0: '0px',
    1: '4px',
    2: '8px',
    3: '12px',
    4: '16px',
    5: '20px',
    6: '24px',
    8: '32px',
    10: '40px',
    12: '48px',
    16: '64px',
    20: '80px',
    24: '96px',
    32: '128px',

    // Semantic spacing
    header: '72px',
    sectionSm: '48px',
    sectionMd: '80px',
    sectionLg: '120px',
    containerSm: '16px',
    containerMd: '32px',
    containerLg: '64px',
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const radius = {
    none: '0px',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '32px',
    full: '9999px',
} as const;

// =============================================================================
// SHADOWS
// =============================================================================

export const shadows = {
    none: 'none',
    sm: '0 2px 8px rgba(0, 0, 0, 0.2)',
    md: '0 4px 16px rgba(0, 0, 0, 0.25)',
    lg: '0 8px 32px rgba(0, 0, 0, 0.3)',
    xl: '0 12px 48px rgba(0, 0, 0, 0.35)',
    button: '0 4px 20px rgba(233, 30, 140, 0.3)',
    buttonHover: '0 6px 30px rgba(233, 30, 140, 0.4)',
    card: '0 4px 20px rgba(0, 0, 0, 0.3)',
    cardHover: '0 8px 32px rgba(0, 0, 0, 0.4)',
    input: '0 0 0 2px rgba(233, 30, 140, 0.2)',
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1440px',
} as const;

// =============================================================================
// Z-INDEX
// =============================================================================

export const zIndex = {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
} as const;

// =============================================================================
// TRANSITIONS
// =============================================================================

export const transitions = {
    fast: '150ms ease-out',
    normal: '200ms ease-out',
    slow: '300ms ease-out',
    slower: '500ms ease-out',
} as const;

// =============================================================================
// COMPONENT-SPECIFIC TOKENS
// =============================================================================

export const components = {
    button: {
        height: {
            sm: '36px',
            md: '40px',
            lg: '44px',
            xl: '52px',
        },
        padding: {
            sm: '16px',
            md: '24px',
            lg: '32px',
        },
    },
    input: {
        height: '44px',
        padding: '16px',
        borderRadius: '8px',
    },
    card: {
        padding: {
            sm: '16px',
            md: '24px',
            lg: '32px',
        },
        borderRadius: '16px',
    },
    container: {
        maxWidth: '1200px',
        maxWidthLg: '1440px',
        padding: {
            sm: '16px',
            md: '32px',
            lg: '64px',
        },
    },
} as const;

// =============================================================================
// TYPE EXPORTS
// =============================================================================

export type Colors = typeof colors;
export type Gradients = typeof gradients;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type Radius = typeof radius;
export type Shadows = typeof shadows;
export type Breakpoints = typeof breakpoints;
export type ZIndex = typeof zIndex;
export type Transitions = typeof transitions;
export type Components = typeof components;
