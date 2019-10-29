import React, { Component } from 'react'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'
import Title from './Title'
export default class Services
 extends Component {
     state={
         services:[
             {
                 icon:<FaCocktail/>,
                 title:"Free Cocktails",
                 info: 'lorem  ipsum dolor sit amet sdfgsdfgsdf sdgsdfgsd. sdfgsg, sdfgsdfg!'
             },
             {
                icon:<FaHiking/>,
                title:"Endless hiking",
                info: 'lorem  ipsum dolor sit amet sdfgsdfgsdf sdgsdfgsd. sdfgsg, sdfgsdfg!'
            },
            {
                icon:<FaShuttleVan/>,
                title:"Free shuttle",
                info: 'lorem  ipsum dolor sit amet sdfgsdfgsdf sdgsdfgsd. sdfgsg, sdfgsdfg!'
            },
            {
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info: 'lorem  ipsum dolor sit amet sdfgsdfgsdf sdgsdfgsd. sdfgsg, sdfgsdfg!'
            }
         ]
     }
    render() {
        return (
            <section className="services">
                <Title title='services'/>
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
