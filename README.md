

# This project is for [Fabelio](https://fabelio.com) Furniture prototype

>  This app currently fethces data from a non-secure source as an API
    You will get such an error: 
    
`The page is loaded over HTTPS, but requested an insecure resource 'http://www.mocky.io/v2/5c9105cb330000112b649af8'. This request has been blocked; the content must be served over HTTPS.`

This can be solved by clicking on `load unsafe script`

![img](https://i.ibb.co/60ySYYD/w-CScu-CITEu.png) 

Normal display like this

![img](https://i.ibb.co/L0mYh0Z/chrome-T3-WXur-Sk2g.png)



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
