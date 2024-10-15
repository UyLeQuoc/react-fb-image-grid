
# React Facebook-like Image Grid

`ReactFbImageGrid` is a simple React component that displays a grid of images similar to the layout used on Facebook. It dynamically adjusts the grid layout based on the number of images provided, and if there are more than five images, it will show the first five and display a "+X" overlay indicating how many additional images are hidden.

## Installation

You can install this package using npm:

```bash
npm install react-fb-image-grid
```

or with yarn:

```bash
yarn add react-fb-image-grid
```

## Usage

First, import the component in your React application:

```tsx
import { ReactFbImageGrid } from 'react-fb-image-grid';
```

Then, you can use the component by passing an array of image URLs as a prop:

```tsx
export default function App() {
  const images = [
    'https://example.com/image1.jpg',
    'https://example.com/image2.jpg',
    'https://example.com/image3.jpg',
    'https://example.com/image4.jpg',
    'https://example.com/image5.jpg',
    'https://example.com/image6.jpg'
  ];

  return (
    <div>
      <h1>Facebook-like Image Grid</h1>
      <ReactFbImageGrid images={images} />
    </div>
  );
}
```

### Props

The `ReactFbImageGrid` component accepts the following props:

| Prop       | Type       | Required | Description                                                   |
|------------|------------|----------|---------------------------------------------------------------|
| `images`   | `string[]` | Yes      | An array of image URLs to display.                            |
| `className`| `string`   | No       | Optional additional CSS classes to apply to the grid container.|

### Example

Here's how the component works with different numbers of images:

```tsx
import React from 'react';
import { ReactFbImageGrid } from 'react-fb-image-grid';

const images = [
  'https://example.com/image1.jpg',
  'https://example.com/image2.jpg',
  'https://example.com/image3.jpg',
  'https://example.com/image4.jpg',
  'https://example.com/image5.jpg',
  'https://example.com/image6.jpg'
];

export default function Example() {
  return (
    <div>
      <ReactFbImageGrid images={images} />
    </div>
  );
}
```

### Grid Layout Logic

The layout dynamically adapts based on the number of images:

- 1 image: Displays a single image.
- 2 images: Displays a 2-column grid.
- 3 images: Displays a 2x2 grid, with the last image spanning across both columns.
- 4 images: Displays a 2x2 grid.
- 5+ images: Displays the first five images in a 2-column, 3-row grid, with the last image showing an overlay with the count of additional images (`+X`).

### Custom Styling

You can add custom styling to the grid by passing the `className` prop:

```tsx
<ReactFbImageGrid images={images} className="my-custom-grid" />
```

You can further customize the styles of the images or the grid layout using CSS.

### Development

To develop this package locally, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/react-fb-image-grid
cd react-fb-image-grid
npm install
```

You can run the development server using:

```bash
npm run dev
```

### License

This package is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more details.
