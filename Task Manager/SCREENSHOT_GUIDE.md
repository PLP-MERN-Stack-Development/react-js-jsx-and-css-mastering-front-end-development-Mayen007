# 📸 Screenshot Guide

## Quick Steps to Add Screenshots

### 1. Take the Screenshot

**On Windows:**

- Press `Win + Shift + S` to open Snipping Tool
- Select the area you want to capture
- The screenshot is copied to clipboard

**On Mac:**

- Press `Cmd + Shift + 4` to take a screenshot
- Click and drag to select the area
- File saves to Desktop

### 2. Save the Screenshot

1. Open Paint (Windows) or Preview (Mac)
2. Paste the screenshot (`Ctrl+V` / `Cmd+V`)
3. Save it to the `screenshots` folder with a descriptive name:
   - `homepage-light.png` - Homepage in light mode
   - `homepage-dark.png` - Homepage in dark mode
   - `task-manager.png` - Task manager page
   - `mobile-view.png` - Mobile responsive view
   - `api-posts.png` - API posts section

### 3. Recommended Screenshot Sizes

- **Desktop View**: 1920x1080 or 1440x900
- **Mobile View**: 375x812 (iPhone) or 414x896
- **Format**: PNG (better quality) or JPG (smaller size)

### 4. What to Capture

**Essential Screenshots:**

1. ✅ **Homepage (Light Mode)** - Full page with welcome card and API posts
2. **Task Manager** - Show tasks with add/complete/delete functionality
3. **Dark Mode** - Same view but in dark theme
4. **Mobile View** - Show hamburger menu open

**Optional Screenshots:** 5. API posts with search active 6. Task filters (All/Active/Completed) 7. Theme toggle in action 8. Responsive breakpoints

### 5. Add Screenshot to README

The README is already configured! Just:

1. Save your screenshot as `homepage-light.png` in the `screenshots/` folder
2. The README will automatically display it

To add more screenshots, uncomment the sections in README.md:

```markdown
<!-- Uncomment these sections after adding more screenshots

### Homepage - Dark Mode
![Dark Mode](./screenshots/homepage-dark.png)

### Task Manager Interface
![Task Manager](./screenshots/task-manager.png)

-->
```

### 6. Test the Screenshot Display

After adding screenshots:

1. Push to GitHub
2. View your repository README on GitHub
3. Screenshots should display automatically

**OR** preview locally:

- Use VS Code's Markdown Preview (`Ctrl+Shift+V`)
- Or push to GitHub and view there

## Tips for Great Screenshots

- ✅ Use actual tasks (not just "Task 1", "Task 2")
- ✅ Show the app in use (some tasks completed, some active)
- ✅ Clean browser - no bookmarks bar, extensions visible
- ✅ Full-screen browser for consistent look
- ✅ Use incognito/private mode for clean UI
- ✅ Make sure dark mode actually shows dark theme

## Example Screenshots Layout in README

```markdown
## 📸 Screenshots

### Homepage - Light Mode

![Task Manager Homepage](./screenshots/homepage-light.png)
_Welcome page with API posts display_

### Task Manager - Dark Mode

![Task Manager Dark](./screenshots/task-manager.png)
_Task management with dark theme_

### Mobile Responsive

![Mobile View](./screenshots/mobile-view.png)
_Hamburger menu navigation_
```

## Troubleshooting

**Screenshot not showing in README?**

- Check file name matches exactly (case-sensitive!)
- Verify file is in `screenshots/` folder
- Make sure it's `.png` or `.jpg` format
- Push changes to GitHub and refresh page

**File size too large?**

- Compress images: https://tinypng.com/
- Or reduce resolution before saving
- Keep under 1MB per image

## Current Status

- ✅ `screenshots/` folder created
- ✅ README updated with screenshot section
- ✅ Project structure updated
- ⏳ **Next**: Take your first screenshot and save as `homepage-light.png`
