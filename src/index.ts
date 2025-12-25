/**
 * @zos/ui - zOS UI Components
 *
 * Core UI components for building zOS desktop environments.
 * Built on @hanzo/ui for a consistent design system.
 */

// Window components
export { default as ZWindow } from './components/window/ZWindow';
export type { ZWindowProps } from './components/window/ZWindow';
export { default as WindowTitleBar } from './components/window/WindowTitleBar';
export { default as WindowResizeHandle } from './components/window/WindowResizeHandle';
export * from './components/window/windowUtils';

// Dock components
export { default as ZDock } from './components/dock/ZDock';
export { default as DockItem } from './components/dock/DockItem';
export { default as TrashItem } from './components/dock/TrashItem';
export { default as MobileOverflow } from './components/dock/MobileOverflow';
export { default as ApplicationsPopover } from './components/dock/ApplicationsPopover';
export * from './components/dock/dockData';
export * from './components/dock/icons';

// Hooks
export { useWindowManager } from './hooks/useWindowManager';
export type { WindowManager, WindowState, WindowGeometry, AppType } from './hooks/useWindowManager';
export { ALL_APPS } from './hooks/useWindowManager';

export { useDesktopSettings } from './hooks/useDesktopSettings';
export type { DesktopSettings, DesktopSettingsActions, ColorScheme, FontSize, DockPosition } from './hooks/useDesktopSettings';

export { useOverlays } from './hooks/useOverlays';
export type { OverlayState, OverlayActions } from './hooks/useOverlays';

export { useKeyboardShortcuts, formatShortcut } from './hooks/useKeyboardShortcuts';
export type { KeyboardShortcut } from './hooks/useKeyboardShortcuts';

export { useIsMobile } from './hooks/use-mobile';

// Utils
export * from './utils/animationConstants';
