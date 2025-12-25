# @zos/ui

Core UI components for building zOS desktop environments. Built on [@hanzo/ui](https://github.com/hanzo-ai/ui) for a consistent design system.

## Installation

```bash
npm install @zos/ui @hanzo/ui
```

## Components

### Window System

```tsx
import { ZWindow, useWindowManager } from '@zos/ui';

function MyWindow() {
  return (
    <ZWindow
      title="My App"
      onClose={() => {}}
      initialSize={{ width: 800, height: 600 }}
      windowType="default"
      resizable
    >
      <div>Window content</div>
    </ZWindow>
  );
}
```

#### Window Types
- `default` - Standard macOS-style window
- `terminal` - Dark terminal style
- `safari` - Browser style
- `textpad` - Text editor style
- `system` - System dialog style
- `about` - About dialog style

### Dock

```tsx
import { ZDock, DockItem } from '@zos/ui';

function Desktop() {
  return (
    <ZDock
      onFinderClick={() => openFinder()}
      onTerminalClick={() => openTerminal()}
      activeApps={['finder', 'terminal']}
      launchingApp={null}
    />
  );
}
```

### Icons

All macOS-style icons are included:

```tsx
import {
  FinderIcon,
  SafariIcon,
  TerminalIcon,
  MailIcon,
  MusicIcon,
  PhotosIcon,
  CalendarIcon,
  CalculatorIcon,
  // ... and more
} from '@zos/ui';
```

## Hooks

### useWindowManager

Manage window state across your desktop:

```tsx
import { useWindowManager } from '@zos/ui';

function Desktop() {
  const wm = useWindowManager();

  // Open/close windows
  wm.openWindow('Finder');
  wm.closeWindow('Finder');
  wm.toggleWindow('Finder');

  // Focus management
  wm.focusWindow('Finder');

  // Tiling
  wm.tileWindowLeft('Finder');
  wm.tileWindowRight('Terminal');
  wm.maximizeWindow('Safari');
  wm.minimizeWindow('Mail');

  // State
  wm.windows          // Record<AppType, boolean>
  wm.activeApp        // AppType | null
  wm.openApps         // AppType[]
  wm.visibleApps      // AppType[] (non-minimized)

  // Helpers
  wm.isOpen('Finder')     // boolean
  wm.isMinimized('Mail')  // boolean
  wm.isMaximized('Safari') // boolean
  wm.isTiled('Terminal')  // 'left' | 'right' | null
}
```

### useDesktopSettings

Manage desktop appearance settings:

```tsx
import { useDesktopSettings } from '@zos/ui';

function Settings() {
  const settings = useDesktopSettings();

  // Appearance
  settings.colorScheme     // 'light' | 'dark' | 'auto'
  settings.setColorScheme('dark');

  // Dock
  settings.dockSize        // number (32-128)
  settings.dockMagnification // boolean
  settings.dockPosition    // 'bottom' | 'left' | 'right'

  settings.setDockSize(64);
  settings.toggleDockMagnification();
  settings.setDockPosition('left');
}
```

### useKeyboardShortcuts

Register global keyboard shortcuts:

```tsx
import { useKeyboardShortcuts } from '@zos/ui';

function App() {
  useKeyboardShortcuts({
    shortcuts: [
      {
        key: 'n',
        meta: true,
        action: () => createNewWindow(),
        description: 'New Window'
      },
      {
        key: 'q',
        meta: true,
        action: () => quitApp(),
        description: 'Quit'
      }
    ]
  });
}
```

### useIsMobile

Responsive design helper:

```tsx
import { useIsMobile } from '@zos/ui';

function Component() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileView /> : <DesktopView />;
}
```

## Utilities

### Animation Constants

```tsx
import { ANIMATION_DURATIONS } from '@zos/ui';

// Available durations
ANIMATION_DURATIONS.WINDOW_OPEN     // 200ms
ANIMATION_DURATIONS.WINDOW_CLOSE    // 150ms
ANIMATION_DURATIONS.WINDOW_MINIMIZE // 300ms
ANIMATION_DURATIONS.DOCK_BOUNCE     // 400ms
```

## Styling

The components use Tailwind CSS and are designed to work with the zOS glass morphism design system:

```css
.glass-window {
  @apply bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl;
}

.glass-lg {
  @apply bg-black/60 backdrop-blur-2xl border border-white/10 rounded-2xl;
}
```

## License

MIT
