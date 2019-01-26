# React Image Webp

## Features
- Rendering image in [WebP format](https://developers.google.com/speed/webp/) if browser supports.
- Server-side rendering using [React Context](https://reactjs.org/docs/context.html)

*Note: as of January, 2019 only **72.59%** supports WebP format ([caniuse.com](https://caniuse.com/#feat=webp))*

## Installation
Using [npm](https://npmjs.com):
```bash
npm i react-img-webp
```

## Usage
For runtime webp checking:

```js
import { Image, canUseWebP } from "react-img-webp";

const jpg = "https://cdn.horatius.pro/image.jpg";
const webP = "https://cdn.horatius.pro/image.webp";

export const Component = (
    <Image src={jpg} webP={webP} />
);

const isBrowserSupportWebP = canUseWebP(); // if you want to detect webP support in other places

```

### Server-side rendering
Library supports rendering webP on server-side.
All you need to pass `Accept` header value to context controller.
```js
import { Context } from "react-img-webp";

// it may be any http request
const request = {
    headers: {
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8"
    }
}

const jpg = "https://cdn.horatius.pro/image.jpg";
const webP = "https://cdn.horatius.pro/image.webp";

export const Component = () => {
    return (
        <Context.WebPController accept={request.headers.Accept}>
            <Context.Image src={jpg} webP={webP} />
        </Context.WebPController>
    )
}
```

## Contributors
- [Alexander <horat1us> Letnikow](mailto:reclamme@gmail.com)

## License
[MIT](./LICENSE)
