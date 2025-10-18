import telephoneSvg from "../Assets/telephone.svg"
import QualitySvg from "../Assets/quality.svg"


const GalleryUrls= `https://images.unsplash.com/photo-1657778415071-670910578f7b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=300
https://media.istockphoto.com/id/542313176/photo/cute-young-girl-looking-at-display-window-with-cakes.webp?a=1&s=612x612&w=0&k=20&c=MEFvZFjDfUXU7ioNuAK8Ws0UckZBjMq3amJ7rAkbrZY=
https://media.istockphoto.com/id/931662010/photo/bakery-goods.webp?a=1&s=612x612&w=0&k=20&c=gWrXPRbHaWlxPWVHBYUxS4ZpxyCYKn60p7ln6AbdgP0=
https://media.istockphoto.com/id/937294312/photo/small-business.webp?a=1&s=612x612&w=0&k=20&c=XgjQvXgvB0gQd1ZHBSEkd29P-z1u4w492GM_RrrZdFs=
https://media.istockphoto.com/id/869695818/photo/a-date-in-a-pastry-shop.webp?a=1&s=612x612&w=0&k=20&c=ZFVRKQv7Y47BWygM0-CFjIu7mU8g2M_0heBJJFWnOQI=
https://images.unsplash.com/photo-1740391768299-ab184bed1328?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1733108948784-a4fecc17b8b7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1657373373633-70c2d663e03f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1580640663776-7ee70469730f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=300
https://plus.unsplash.com/premium_photo-1661349732311-22e630ce1a66?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1582659042116-63f96b514135?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1546237769-6f84ec1a512a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1738898326912-83ec04de4ccf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1755353676368-4379426fda18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1686515266396-080c4939e6b4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&q=60&w=300
https://images.unsplash.com/photo-1712419503554-e1cc88b71fef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=300`


const Data = {
  siteName: "CakeCity",
  home: {
    logo_type:"img",
    logo_bottom:"Bagerhat",
    logo: "/Assets/images/cakecity text.png",
    bio: "Handcrafted with love and the finest ingeredirnts, our cakes are perfect for meking your moments special",
    address: "Old Police-line Bagerhat",
    links: [
    {
    url: "https://www.facebook.com",
    icon: <i className="fa-brands fa-facebook-f"></i>
    },
    {
      url: "https://whatsapp.com",
      icon: <i className="fa-brands fa-whatsapp"></i>
    }]
  },
  about:{
    text:"CakeCity is a Popular Cake store on bagerhat. they provide sweet cake every popular cake. they also make castom order cake. We geranty that we give you our best quality cake. to make your program beutifull.",
    sarvices:[
      {
        image: telephoneSvg,
        name: "Customer Sarvice",
        text: "we avleable every time for our Customer care on facebook and whatsapp."
      },
      {
        image: QualitySvg,
        name: "Quality",
        text: "We offar you best quality cake. we used best matirial for cook cake."
      }
      ]
  },
  cakes:[
    {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8YqdR6Pvj-Kk9j5x7jc8cd2sul11W4P1nICokHhTw0g&s=10",
    name: "Chocolate Cake RedQueen",
    price: "500-1000"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU7wQX5di_SeufsNYdZTFPTO-cWIG-2z8isWOes_kWkA&s=10",
    name: "Vanilla Cream Delight",
    price: "400-800"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPjKdX3K1ZRqi98KdtgY0HjPHjj_WodPL2nTJvGOzWlw&s=10",
    name: "Red Velvet Dream",
    price: "600-1200"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfxoOxoT6GspU4ZQySplR7rWVvyTI780VRMQn1NtNo6g&s=10",
    name: "Black Forest Classic",
    price: "550-950"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskRIDwlAG4oHo7rsdCoRgTBlX7WOLA7d_4NrnaBgZ2Q&s=10",
    name: "Strawberry Bliss Cake",
    price: "450-850"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrDjDqirE0Q9fZ5VETdwikVHDPbgSN8UOIGj5gHyZm9w&s=10",
    name: "Blueberry Cheese Cake",
    price: "700-1300"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqENDYo0yKxifhvXeLkMyKj7Yf77nqiAui15GeOq9Eg&s=10",
    name: "Butterscotch Fantasy",
    price: "500-900"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmqfEib_dpyz4No20QYVbs_LmTszS5_OYoEmqFJeEZQ&s=10",
    name: "Coffee Mocha Cake",
    price: "550-1000"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJgeKnBe3kjWF1K3PvjlLaGNVtyPXYRdnLS6lZFCuxQ&s=10",
    name: "Pineapple Paradise",
    price: "400-750"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ccZ8mE5uYm5RWVy0ZUgrEC9PhgtKQ_dj-38LB9eE4Q&s=10",
    name: "Mango Cream Swirl",
    price: "500-950"
  }
    ],
  gallery:{
    images: GalleryUrls.split("\n").map((src,i)=> ({src,alt:"Photo"+i}))
  },
  contact:{
    address:[
      {
        title:"Bagerhat",
        text:"Khulna Bagerhat, Sador bagerhat"
      },
      {
        title:"Nur Morjid Road",
        text:"Nurmorjid-mor Bagerhat, old police-line"
      },
      ],
    location_src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.404785515073!2d89.78633880980885!3d22.658681943251416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fff6644cbc5c2d%3A0xc1ae8b36c9daf108!2sPolice%20line%20School!5e0!3m2!1sen!2sbd!4v1760503023558!5m2!1sen!2sbd"
  }
}

export default Data