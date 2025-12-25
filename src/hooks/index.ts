/**
 * zOS UI Hooks
 */

export { useWindowManager, ALL_APPS } from './useWindowManager';
export type { WindowManager, WindowState, WindowGeometry, AppType } from './useWindowManager';

export { useDesktopSettings } from './useDesktopSettings';
export type { DesktopSettings, DesktopSettingsActions, ColorScheme, FontSize, DockPosition } from './useDesktopSettings';

export { useOverlays } from './useOverlays';
export type { OverlayState, OverlayActions } from './useOverlays';

export { useKeyboardShortcuts, formatShortcut } from './useKeyboardShortcuts';
export type { KeyboardShortcut } from './useKeyboardShortcuts';

export { useIsMobile } from './use-mobile';
