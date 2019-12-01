import React, { Component } from 'react';
import './App.css';
import Test from './Test';

/*ver1) 
  const orders = [
  "first",
  "second",
  "third",
  "forth",
  "fifth"
]

const images = [
  "../favicon.ico",
  "../logo192.png",
  "../logo192.png",
  "../graphql.png",
  "../tomcat.png"
] */



class App extends Component {
  /*
  Render: componentWillMount() -> render() -> componentDidMount()
  
  Update: componentWillReceiveProps() -> shouldComponentUpdate() => [true] -> componentWillUpdate() -> render() -> componentDidUpdate()
  */


  state = {
    greeting: "Hello!",

  }

  componentDidMount() {

    /* 처음에 data 박고 한 것
      setTimeout(() => {
      this.setState({
        greeting: "Hello again!"
      })
    }, 5000);
     */

    /*  setTimeout(() => {
 
       this.setState({
         objects: [ */

    /* ...this.state.[] 하지 않으면 덮어 쓰게 됨! */
    /*         ...this.state.objects, */
    // -> 기존 array를 보존하면서 추가하겠다는 뜻
    // -> 이게 추가하는 것의 뒤에 가도 됨! 그럼 기존 array 앞에 추가됨
    /*     {
          order: "sixth",
          image: "../graphql.png"
        },
        {
          order: "first",
          image: "../favicon.ico"
        },
        {
          order: "second",
          image: "../logo192.png"
        },

        {
          order: "third",
          image: "../logo512.png"
        },

        {
          order: "forth",
          image: "../graphql.png"

        },

        {
          order: "fifth",
          image: "../tomcat.png"
        }
      ]

    })
  }, 2000)
*/
    this._getObjects();

  }


  _renderObjects = () => {
    const objects = this.state.objects.map(object => {

      console.log(object)

      return <Test title={object.title_english}
        image={object.medium_cover_image}
        genres={object.genres}
        key={object.id}
        synopsis={object.synopsis} />
      //-> title_english이랑 medium_cover_image는 yts.lt/api에 있는 것들이라서 데려올 수 있음!
    })

    return objects
  }


  // [ async & await ]

  _getObjects = async () => {
    const objects = await this._callApi()
    //-> _callApi() 의 return 결과에 상관 없이 complete 될 때까지 기다리고, return value를 objects에 넣겠다
    this.setState({
      objects
    })
  }

  _callApi = () => {
    /* fetch를 사용하면 비동기 통신  */
    return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=like_count')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
    //-> catch 는 에러를 출력함

  }


  render() {
    const { objects} = this.state;

    return (
      /* 이 안에 있는게 jsx */

        /* 
        ver1)

        <Test title={orders[0]} img={images[0]} />
        <Test title={orders[1]} img={images[1]} />
        <Test title={orders[2]} img={images[2]} />
        <Test title={orders[3]} img={images[3]} />
        <Test title={orders[4]} img={images[4]} /> 
        */

        /*{this.state.greeting} */

        <div className={objects ? "App" : "App--loading"}>
          {this.state.objects ? this._renderObjects() : "Loading"}
        </div>

    );
  }
}

export default App;
