import React/* , { Component } */ from 'react';
import PropTypes from 'prop-types';
import LineEllipsis from 'react-lines-ellipsis'
import './Test.css';

/*

class Test extends Component {

    static propTypes = {
        //-> 들어오는 data type이 어떤거야 하는지 확인해줌 
        //-> father로부터 어떤 prop을 받는지 확인
             // => 개발자모드에서 확인 가능
        order: PropTypes.string.isRequired, //-> required 속성도 줄 수 있음
        image: PropTypes.string
    }


    render() {
        return (
            <div>
                <Image image={this.props.image}/>
                <h1>{this.props.order}</h1>
            </div>
        )
    }
}
*/



/* class Image extends Component {

    static propTypes = {
        image: PropTypes.string.isRequired
    }

    render() {

        return (
            <img src={this.props.image} alt="some photos"/>

        )
    }
} */


// 위의 Test, Image Component를 function으로 만듦  => because they are dumb (only return one thing)
// -> Smarter way! as long as it's just for returning one props


function Test({ title, image, genres, synopsis }) {
    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <Image image={image} alt={title}/>
            </div>

            <div className="Movie_Columns">
                <h2>{title}</h2>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <Genre genre={genre} key={index} />)}
                </div>
                <div className="Movie_Synopsis">
                <LineEllipsis
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'
                />
                </div>

            </div>



        </div>
    )
}

function Image({ image, alt }) {

    return (
        <img src={image} alt={alt} title={alt} className="Movie_Poster"/>

    )
}


function Genre({ genre }) {
    return (
        <span className="Movie_Genres"> {genre}  </span>
    )
}


Test.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
}


Image.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}


Genre.prototype = {
    genres: PropTypes.string.isRequired
}

export default Test