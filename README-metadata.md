# React-Unhead Metadata Management

This project uses `@unhead/react` for client-side metadata and title management. This allows you to dynamically set page titles and meta tags for each page in your React application.

## How It Works

The `@unhead/react` library provides hooks that allow you to manage the document `<head>` from within your React components. When you navigate between pages, the metadata updates automatically.

## Usage

### Setting Page-Specific Metadata

Use the `useHead` hook in any component to set page-specific titles and meta tags:

```jsx
import { useHead } from "@unhead/react";

export default function MyPage() {
  useHead({
    title: 'Page Title',
    meta: [
      { name: 'description', content: 'Page description for SEO' },
      { property: 'og:title', content: 'Open Graph title' },
      { property: 'og:description', content: 'Open Graph description' },
      { property: 'og:image', content: 'https://example.com/image.jpg' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],
  });

  return (
    <div>
      {/* Your page content */}
    </div>
  );
}
```

### Default Site-Wide Metadata

Default metadata is configured in `App.tsx` and applies to all pages:

```jsx
useHead({
  titleTemplate: '%s | KiddiCove',
  meta: [
    { name: 'description', content: 'KiddiCove - Premium childcare and early education centers' },
    { name: 'keywords', content: 'childcare, daycare, preschool, early education, kids' },
    { property: 'og:site_name', content: 'KiddiCove' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ],
});
```

The `titleTemplate` uses `%s` as a placeholder that gets replaced with the page-specific title.

## Available Hooks

### `useHead(input)`
Main hook for setting head elements including title, meta tags, links, and scripts.

### `useSeoMeta(input)`
Simplified hook specifically for SEO meta tags with better TypeScript support.

### `useHeadSafe(input)`
Similar to `useHead` but with XSS protection for user-generated content.

## Examples

### Basic Page Title
```jsx
useHead({
  title: 'About Us'
});
// Results in: <title>About Us | KiddiCove</title>
```

### SEO Meta Tags
```jsx
useHead({
  title: 'Contact',
  meta: [
    { name: 'description', content: 'Get in touch with KiddiCove' },
    { name: 'keywords', content: 'contact, kiddicove, childcare' },
  ],
});
```

### Social Media Tags
```jsx
useHead({
  title: 'Programs',
  meta: [
    { property: 'og:title', content: 'Our Programs - KiddiCove' },
    { property: 'og:description', content: 'Explore our child development programs' },
    { property: 'og:image', content: 'https://kiddicove.com/programs.jpg' },
    { property: 'og:url', content: 'https://kiddicove.com/programs' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Our Programs - KiddiCove' },
  ],
});
```

## Testing

To verify that metadata is working:

1. Run the dev server: `npm run dev`
2. Open your browser and navigate to different pages
3. Open browser DevTools (F12)
4. Go to the Elements/Inspector tab
5. Look at the `<head>` section - you should see the meta tags updating as you navigate

## Notes

- **Client-Side Only**: This is client-side metadata management. For true SSR (Server-Side Rendering), you would need a framework like Next.js or Remix.
- **SEO Limitations**: While this improves user experience and works for some crawlers, traditional search engine bots may not execute JavaScript, so they might not see these dynamic meta tags.
- **No Provider Needed**: Unlike some other head management libraries, `@unhead/react` doesn't require a provider component - just use the hooks directly.

## Resources

- [Unhead Documentation](https://unhead.unjs.io/)
- [GitHub Repository](https://github.com/unjs/unhead)
