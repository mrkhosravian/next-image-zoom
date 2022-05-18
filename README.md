
# Next Image Zoom

Medium.com image zoom style for [Next.js](https://nextjs.org) optimized image component


## Demo

You can check [demo from here](github)


## Installation

Install package with npm

NPM

```bash
  npm install --save next-image-zoom
```

Yarn

```bash
  yarn add next-image-zoom
```

## Usage/Examples

First import `Zoom` component

```javascript
import Zoom from "next-image-zoom";
```


`layout={'responsive'}`

```javascript
import Zoom from "next-image-zoom";

<div style={{width: 700}}>
    <Zoom src={image1} layout={"responsive"}/>
</div>
```

`layout={'fill'}`

```javascript
import Zoom from "next-image-zoom";

<div style={{flex: "1", height: 300, backgroundColor: "yellow"}}>
    <Zoom src={image4} layout={"fill"} objectFit={"contain"}/>
</div>
```

`layout={'fixed'}`


```javascript
import Zoom from "next-image-zoom";

<Zoom src={image2} layout={"fixed"} width={200} height={400}/>
```

```javascript
import Zoom from "next-image-zoom";

<Zoom src={"/surface-LCOnczVeFio-unsplash-2.jpg"} layout={"responsive"} width={800} height={500}/>
```
## License

[MIT](https://choosealicense.com/licenses/mit/)


## Support

For support, email mrkhdev@gmail.com.

