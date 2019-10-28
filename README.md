

# This project is for [Fabelio](https://fabelio.com) Furniture prototype

>  This app currently fethces data from a non-secure source as an API
    You will get such an error: 
    
`The page is loaded over HTTPS, but requested an insecure resource 'http://www.mocky.io/v2/5c9105cb330000112b649af8'. This request has been blocked; the content must be served over HTTPS.`

This can be solved by clicking on `load unsafe script`

![img](https://i.ibb.co/60ySYYD/w-CScu-CITEu.png) 

Normal display like this

![img](https://i.ibb.co/L0mYh0Z/chrome-T3-WXur-Sk2g.png)
### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Design 

we used semantic ui for this demo

https://react.semantic-ui.com/elements/divider/

```
## API -- GraphQL


name, description : string


furniture_style  : `array` ... ["Classic", "Midcentury", "Scandinavian", "Modern", "Contemporary"]

> tagged 

https://react.semantic-ui.com/elements/label/


delivery_time ( 1 <days < 31) 
price  ==> int


TODO 

-  price tag  `tag group` 
