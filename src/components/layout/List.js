
import React, { Component } from 'react';
export class List extends Component {
    listElements(list) {
        let items = []
        list.forEach((element, index) => {
            items.push(this.renderElement(element, index))
        });
        return (
            <div>
                {items}
            </div>
        )
    }
    renderElement(element, index) {
        let miniature = "http://img.youtube.com/vi/" + element.link + "/1.jpg"
        let title = element.title
        let desc = element.desc
        return (
            <div style={{ width: "18rem" }} className="card" key={index}>
                <img className="card-img-top" style={{ width: "120px", height: "90px" }} src={miniature} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">Lien vers la vidéo</a>
                </div>
            </div>

        );
    }
    render() {
        var list = [{ "title": "aurora", "desc": "Aurora concert", "link": "P_XguuxLo10", "vues": 2, "date": "12-12-2000" },
        { "title": "stromae", "desc": "Stromae concert", "link": "eOZLDQm9c2E", "vues": 1, "date": "12-12-2001" }
        ]

        return (
            <div >
                {this.listElements(list)}
            </div>
        );
    }
}
export default List