import React, { Component } from 'react';
import Search from './component/search';
import Movielist  from './component/movielist';
import './component/style.css'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {


count: [{img:"https://vignette.wikia.nocookie.net/marvelstudios/images/6/65/Avengers-infinity-war-affiche-poster-hd.jpg/revision/latest?cb=20180317131550&path-prefix=fr",title:"Tueurs",rate:2},
{img:"http://fr.web.img6.acsta.net/pictures/18/12/13/12/12/2738771.jpg",title:"Kin",rate:3},
 {img:"https://i.pinimg.com/originals/e0/f0/d6/e0f0d63842b412cf315428cac292005c.jpg",title:"Remede mortel",rate:5},
 {img:"http://ekladata.com/AVTWkeHbQBMMsBobLNb_crZBvsk.jpg",title:"Rachel ",rate:4}],

 search: '',
 rate: 0
}
}
handelChange = (search) => {
this.setState({
 search
})
}

changeRate=(rate)=>{
this.setState({
rate
})
}


render() {
return (
 <div>
   <Search onChange={this.handelChange} rating={this.state.rate} changeRate={this.changeRate} />
   <Movielist count={this.state.count.filter(el => el.title.toLowerCase().includes(this.state.search.toLowerCase().trim()) &&this.state.rate<=el.rating)} />
 </div>
)
}
}

