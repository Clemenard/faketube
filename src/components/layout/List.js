
import React, { Component, Fragment } from 'react';
export class List extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalList: this.props.globalList,
            asctitle: this.props.ascTitle,
            ascdate: this.props.ascDate,
            ascvues: this.props.ascVues
        };
    }


    orderby(key, asc, e) {

        var list = this.props.globalList.sort(function (a, b) {
            if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                return false;
            }
            const varA = (typeof a[key] === 'string') ?
                a[key].toUpperCase() : a[key];
            const varB = (typeof b[key] === 'string') ?
                b[key].toUpperCase() : b[key];

            if (varA > varB) {
                var comparaison = 1;
            } else {
                var comparaison = -1;
            }
            return ((asc == false) ? (comparaison * -1) : comparaison
            )
        });

        this.setState({
            globalList: list,
        });
        var stateObject = function () {
            let returnObj = {};
            returnObj["asc" + key] = (asc) ? false : true;
            return returnObj;
        }

        this.setState(stateObject);
    }
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
        return (
            <div style={{ width: "18rem" }} className="card" key={index}>
                <img className="card-img-top" style={{ width: "120px", height: "90px" }} src={"http://img.youtube.com/vi/" + element.link + "/1.jpg"} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-text">{element.vues + " vues depuis le " + element.date}</p>
                    <p className="card-text">{element.desc}</p>
                    <a href="#" className="btn btn-primary">Lien vers la vidéo</a>
                </div>
            </div>

        );
    }
    render() {

        return (
            <Fragment>
                <div className="navbar navbar-expand-sm navbar-light bg-light">
                    <h3>Trier par</h3>
                    <button onClick={(e) => this.orderby("date", this.state.ascdate, e)}>Par date</button>
                    <button onClick={(e) => this.orderby("vues", this.state.ascvues, e)}>Par vues</button>
                    <button onClick={(e) => this.orderby("title", this.state.asctitle, e)}>Alphabétiquement</button>
                </div>
                <div >
                    {this.listElements(this.state.globalList)}
                </div>
            </Fragment>
        );
    }
}
export default List