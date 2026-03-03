---
description: Integrate images from a public folder into a React registration details component
---

# Integrate Images Workflow

Repeat this process when the user provides a **source image folder** (in `public/`) and a **destination component file** (a `*Details.jsx` or similar file in `src/components/`).

## Inputs (provided by the user)

- **Source folder**: A directory inside `public/` containing `.png`, `.jpg`, or `.webp` images (e.g. `public/Company Registration/`).
- **Destination file**: A React component file (e.g. `src/components/CompanyRegistration/RegistrationDetails.jsx`).

## Steps

### 1. List images in the source folder
List all image files in the source folder to get their exact filenames and extensions.

### 2. Audit the destination component
Read the destination file and identify:
- **Every `<img>` tag** – note its current `src` value and which section/component it belongs to.
- **Sections that have NO image** – these need one added.

### 3. Map images → sections
Match each image filename to the most logical section by name (e.g. `overview.png` → Overview section, `eligibility.png` → Eligibility section, `Process.png` → Process section, `support.png` → Features/Support section, etc.).

### 4. Replace existing placeholder images
For every `<img>` tag that currently uses an external URL (Unsplash, placeholder, etc.), replace the `src` with the local path: `/<Source Folder Name>/<filename>`.

### 5. Add images to sections that are missing them
For sections that have no image at all:
- Convert the section to a **two-column responsive grid** (`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-14`).
- Place text content in one column and the image in the other.
- **Alternate image placement** (left/right) across consecutive sections for visual variety.
- Use responsive ordering (`order-first lg:order-last`) so images appear logically on mobile.

### 6. Ensure vertical centering & responsiveness
- Add `items-center` to grid containers so images and text align vertically.
- Add `flex justify-center items-center` to image wrapper divs.
- Use `w-full max-w-md lg:max-w-lg rounded-2xl shadow-sm` on `<img>` tags for consistent sizing.
- Keep `max-w-7xl mx-auto px-6 lg:px-12` on outer containers for consistent width.

### 7. Maintain design consistency
- Keep the existing color palette (`#072b47` headings, `#005a9c` accents, `#e6f0fa` badges, `#f59e0b` CTAs).
- Keep existing font sizes, spacing, and Tailwind utility classes.
- If converting a plain list to a styled list, use `CheckCircle2` icons from `lucide-react` (import if needed).
- Add hover effects and micro-interactions consistent with the rest of the page.

### 8. Verify
Confirm every image from the source folder is now referenced in the destination file, and no external placeholder URLs remain.
