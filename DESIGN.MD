# Design System Specification



## 1. Overview & Creative North Star: "The Velvet Void"



This design system is engineered to move away from the sterile, flat appearance of standard fintech dashboards. Our Creative North Star is **"The Velvet Void."** It is an aesthetic rooted in deep, obsidian depths, where hierarchy is established not by lines, but by light, shadow, and tonal "gravity."



By utilizing a high-contrast dark palette punctuated by a vibrant purple/indigo energy, we create an editorial experience that feels premium and authoritative. We break the traditional grid through intentional layering—elements do not simply sit next to each other; they float, sink, and glow within a three-dimensional space.



## 2. Colors



The color palette is designed to maintain legibility in ultra-dark environments while using the primary accent as a "light source" for the UI.



### Core Tones

- **Background/Surface:** `#0e0e0e` (Deep Obsidian)

- **Primary Accent:** `#bd9dff` (Luminous Indigo)

- **Primary Container:** `#b28cff` (Vibrant Glow)

- **On-Surface (Primary Text):** `#ffffff` (Pure White)

- **On-Surface Variant (Secondary Text):** `#adaaaa` (Cool Grey)



### The "No-Line" Rule

**Borders are prohibited for sectioning.** To separate a sidebar from a main feed or a header from a content area, use background shifts. For example, place a `surface_container_low` (`#131313`) section directly against the `surface` (`#0e0e0e`) background. This creates a sophisticated, seamless transition that feels "carved" rather than "drawn."



### Surface Hierarchy & Nesting

Use the container tiers to define importance.

* **Surface Lowest (#000000):** Use for deeply recessed areas like input tracks or background wells.

* **Surface (#0e0e0e):** The standard canvas.

* **Surface Container High (#201f1f):** Use for elevated cards or floating menus.



### The "Glass & Gradient" Rule

For high-impact areas (Hero sections, CTAs), utilize semi-transparent layers of `surface_variant` (`#262626`) with a `24px` backdrop blur. Enhance main action buttons with a subtle linear gradient from `primary` (`#bd9dff`) to `primary_dim` (`#8a4cfc`) to provide a tactile, "soulful" quality.



## 3. Typography: Plus Jakarta Sans



We use **Plus Jakarta Sans** for its clean, geometric shapes that maintain a professional yet modern edge.



* **Display (Lg/Md/Sm):** Set with tight letter-spacing (-2%). Used for big numbers or marketing headlines to anchor the page.

* **Headlines & Titles:** These convey the brand's authority. Use `headline-lg` (2rem) for page titles to create a clear starting point for the user's eye.

* **Body (Lg/Md/Sm):** Optimized for long-form reading and data density. `body-md` (0.875rem) is our workhorse for descriptions.

* **Labels:** Reserved for functional data, micro-copy, and small metadata.



The hierarchy relies on extreme contrast between white `on_surface` titles and the dimmed `on_surface_variant` body text, ensuring the user's path is always illuminated.



## 4. Elevation & Depth



In this system, depth is a functional tool, not a decoration. We use **Tonal Layering** and **Dark Neomorphism.**



### The Layering Principle

Think of the UI as stacked sheets of obsidian. Instead of shadows, use "recessed" and "raised" tones. An input field should feel like it is cut *into* the surface (`surface_container_lowest`), while a primary card should feel like it is floating *above* it (`surface_container_highest`).



### Ambient Shadows & Glows

* **Floating Elements:** Use extra-diffused shadows. Blur: `40px`, Opacity: `8%`, Color: `#000000`.

* **The Signature Glow:** Primary buttons and active states should emit a soft indigo bloom. Use a drop shadow with the `primary` color at `15%` opacity to simulate a neon-like radiance.



### The "Ghost Border" Fallback

If contrast ratios require a boundary, use the **Ghost Border**: 1px width, `outline_variant` token, at **15% opacity**. It should be felt, not seen.



## 5. Components



### Buttons

* **Primary:** Solid `primary` background. `on_primary` text. No border. Soft glow on hover.

* **Secondary:** `surface_container_high` background with a `primary` "Ghost Border."

* **Tertiary:** Ghost button (transparent background) with `primary` text.



### Neomorphic Inputs

Fields should use `surface_container_lowest` for the track. On focus, the border becomes a "Ghost Border" of the `primary` color, accompanied by a subtle inner-shadow to emphasize the "carved" look.



### Cards & Lists

**Strictly no dividers.** Use `1.5rem` (Scale 6) of vertical whitespace to separate items. For lists, use a subtle hover state change to `surface_bright` (`#2c2c2c`) to indicate interactivity.



### Additional Components: The "Pulse" Indicator

For a DEX (Decentralized Exchange), real-time data is key. Use a small `4px` circle using the `primary` color with a `6px` blur animation to signify "live" data streams.



## 6. Do's and Don'ts



### Do

* **Do** use asymmetrical layouts. Let content breathe with large gaps (Scale 12 or 16) to create an editorial feel.

* **Do** use `xl` (1.5rem) roundedness for major containers to soften the "tech" feel.

* **Do** layer glassmorphic panels over subtle indigo gradients to create a sense of infinite depth.



### Don't

* **Don't** use 100% opaque white borders. They break the "Velvet Void" immersion.

* **Don't** use standard grey shadows. Shadows should be deep black or tinted indigo.

* **Don't** crowd the interface. If a screen feels busy, increase the spacing scale rather than adding lines.

* **Don't** use pure white for large blocks of body text; use `on_surface_variant` to prevent eye strain in dark mode.