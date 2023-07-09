import React from "react";
import "./Cardslider.css";

const Cardslider=()=>{
    const Card = (props) => (
        <div className="card card12">
          <img className="img12" src={ props.imgUrl } 
            alt={'Image' } />
          </div>
      );
      const CardContainer = (props) => (
        <div className="cards-container container12">
          {
            props.cards.map((card) => (
              <Card imgUrl={ card.imgUrl } />
            ))
          }
        </div>
      );
      const cardsData = [
        {id: 1,  imgUrl: 'https://m.media-amazon.com/images/I/41te0QSxqpL._AC_SY200_.jpg'},
        {id: 2, imgUrl: 'https://m.media-amazon.com/images/I/81cz9Qim4yL._AC_SY200_.jpg'},
        {id: 3, imgUrl: 'https://m.media-amazon.com/images/I/71eFDoRqVvL._AC_SY200_.jpg'},
        {id: 4, imgUrl: 'https://m.media-amazon.com/images/I/715b-vqjZPL._AC_SY200_.jpg'},
        {id: 5, imgUrl: 'https://m.media-amazon.com/images/I/41-DGGm544L._AC_SY200_.jpg'},
        {id: 6,imgUrl: 'https://m.media-amazon.com/images/I/31ObzpB9RML._AC_SY200_.jpg'},
        {id: 7,imgUrl: 'https://m.media-amazon.com/images/I/31a8OFFrgtL._AC_SY200_.jpg'},
        {id: 8,  imgUrl: 'https://m.media-amazon.com/images/I/51SwNn7xWAL._AC_SY200_.jpg'},
        {id: 9, imgUrl: 'https://m.media-amazon.com/images/I/51SwNn7xWAL._AC_SY200_.jpg'},
        {id: 10, imgUrl: 'https://m.media-amazon.com/images/I/51pQeFfwiCL._AC_SY200_.jpg'},
        {id: 11,  imgUrl: 'https://m.media-amazon.com/images/I/31jSfjq9GJL._AC_SY200_.jpg'},
        {id: 12, imgUrl: 'https://m.media-amazon.com/images/I/81cz9Qim4yL._AC_SY200_.jpg'},
        {id: 13, imgUrl: 'https://m.media-amazon.com/images/I/71eFDoRqVvL._AC_SY200_.jpg'},
        {id: 14, imgUrl: 'https://m.media-amazon.com/images/I/715b-vqjZPL._AC_SY200_.jpg'},
        {id: 15, imgUrl: 'https://m.media-amazon.com/images/I/41-DGGm544L._AC_SY200_.jpg'},
      ]
      const cardsData2 = [
        {id: 1,  imgUrl: 'https://m.media-amazon.com/images/I/71fEgl3UhrL._AC_SY200_.jpg'},
        {id: 2, imgUrl: 'https://m.media-amazon.com/images/I/61ry6PloYfL._AC_SY200_.jpg'},
        {id: 3, imgUrl: 'https://m.media-amazon.com/images/I/71aC74bA6IL._AC_SY200_.jpg'},
        {id: 4, imgUrl: 'https://m.media-amazon.com/images/I/416HPjPH+YL._AC_SY200_.jpg'},
        {id: 5, imgUrl: 'https://m.media-amazon.com/images/I/71rlCU6fBiL._AC_SY200_.jpg'},
        {id: 6,imgUrl: 'https://m.media-amazon.com/images/I/61Rrexl5AeS._AC_SY200_.jpg'},
        {id: 7,imgUrl: 'https://m.media-amazon.com/images/I/61INH+-JS5L._AC_SY200_.jpg'},
        {id: 8,  imgUrl: 'https://m.media-amazon.com/images/I/41gdgwPfxUL._AC_SY200_.jpg'},
        {id: 9, imgUrl: 'https://m.media-amazon.com/images/I/61Jcpqe0hcL._AC_SY200_.jpg'},
        {id: 10, imgUrl: 'https://m.media-amazon.com/images/I/61VmOcTl-uL._AC_SY200_.jpg'},
        {id: 11,  imgUrl: 'https://m.media-amazon.com/images/I/51YkL+O5zQL._AC_SY200_.jpg'},
        {id: 12, imgUrl: 'https://m.media-amazon.com/images/I/41asxiEZAnL._AC_SY200_.jpg'},
        {id: 13, imgUrl: 'https://m.media-amazon.com/images/I/31Dv4PiE8eL._AC_SY200_.jpg'},
        {id: 14, imgUrl: 'https://m.media-amazon.com/images/I/61F6xL4cMYL._AC_SY200_.jpg'},
        {id: 15, imgUrl: 'https://m.media-amazon.com/images/I/51j9uND0DQL._AC_SY200_.jpg'},
        {id: 16, imgUrl: 'https://m.media-amazon.com/images/I/81lSpbHtVDL._AC_SY200_.jpg'},
        {id: 17, imgUrl: 'https://m.media-amazon.com/images/I/61BR5fifP3L._AC_SY200_.jpg'},
        {id: 18, imgUrl: 'https://m.media-amazon.com/images/I/61NPBdDBojL._AC_SY200_.jpg'},
      ]
      return (
        <div className="bigdiv">
<div className="contain12">
<h1  className="headslide" style={{ 'text-align': 'left' }}>
Best Sellers in Computers & Accessories
        </h1>
        <CardContainer className="cardslide" cards={ cardsData } />
      </div>
      <div className="contain123">
      <h1 className="headslide"  style={{ 'text-align': 'left' }}>
      Up to 50% off | Summer fashion for women
        </h1>
        <CardContainer className="cardslide" cards={ cardsData2 } />
      </div>
        </div>
        
      )

}
export default Cardslider;
  
