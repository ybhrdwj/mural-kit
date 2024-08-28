# MuralKit

MuralKit is a React component that provides a context menu for managing brand assets such as logos and brandmarks.

## Installation

To install MuralKit, run one of the following commands in your project directory:

```bash
npm install muralkit
# or
yarn add muralkit
```

## Usage

First, import the `MuralKit` component in your React file:

```javascript
import { MuralKit } from 'muralkit';
```

Then, use the component in your JSX:

```jsx
<MuralKit
  logoSvg={yourLogoSvgString}
  brandmarkSvg={yourBrandmarkSvgString}
  brandkitUrl="https://your-brandkit-url.com"
  onCopyLogo={() => console.log('Logo copied')}
  onCopyBrandmark={() => console.log('Brandmark copied')}
  onDownloadBrandkit={() => console.log('Brandkit download initiated')}
>
  {/* Your content goes here */}
  <div>Your brand content</div>
</MuralKit>
```

## Props

| Prop               | Type       | Description                                      |
|--------------------|------------|--------------------------------------------------|
| `logoSvg`          | `string`   | SVG string for the logo                          |
| `brandmarkSvg`     | `string`   | SVG string for the brandmark                     |
| `brandkitUrl`      | `string`   | URL to download the brandkit                     |
| `onCopyLogo`       | `function` | Callback function when logo is copied            |
| `onCopyBrandmark`  | `function` | Callback function when brandmark is copied       |
| `onDownloadBrandkit` | `function` | Callback function when brandkit download is initiated |
| `children`         | `ReactNode`| Content to be wrapped by MuralKit                |

## Example

Here's a complete example of how to use MuralKit in a React component:

```javascript
import React from 'react';
import { MuralKit } from 'muralkit';

const logoSvg = '<svg>...</svg>'; // Your logo SVG string
const brandmarkSvg = '<svg>...</svg>'; // Your brandmark SVG string

const MyComponent = () => {
  return (
    <MuralKit
      logoSvg={logoSvg}
      brandmarkSvg={brandmarkSvg}
      brandkitUrl="https://example.com/brandkit"
      onCopyLogo={() => console.log('Logo copied')}
      onCopyBrandmark={() => console.log('Brandmark copied')}
      onDownloadBrandkit={() => console.log('Brandkit download initiated')}
    >
      <div className="my-content">
        <h1>Welcome to My Brand</h1>
        <p>Right-click anywhere to access brand assets</p>
      </div>
    </MuralKit>
  );
};

export default MyComponent;
```