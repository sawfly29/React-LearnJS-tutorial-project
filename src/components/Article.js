import React, { Component, PureComponent } from "react";
class Article extends PureComponent {
// class Article extends Component {
    constructor(props) {
      super(props)
      this.state = {
        count: 0
        // передали свойство, открыт ли текст статьи по умолчанию
      };
    }
  // state = {
  //   isOpen: true,
  // };
  //экспериментальный синтаксис
  componentWillMount(){
    console.log('---', 'will mount')}

    // componentWillReceiveProps(nextProps){
    //   if (nextProps.defaultOpen !== this.props.defaultOpen) this.setState({
    //     isOpen: nextProps.defaultOpen
    //   })
    // }
  componentWillUpdate(){
    console.log('---', 'will update')
  }



  render() {
    const { article, isOpen, onButtonClick } = this.props;
    const body = isOpen && <section className='card-text'>{article.text}</section>;
    // показываем статью только если состояние изОпен = тру
    // console.log("вот так в консоль вывести переданные параметры!", this.props);
    return (
      <div className="card mx-auto" style={{width: '50%'}}>
        {/* внешние фигурные скобки означают, что внутри JS приложение, а вторые - это обычная литеральная нотация */}
        <div className='card-header'>
          <h2 onClick={this.incrementCounter}>
            {article.title}
            clicked {this.state.count}
            <button onClick={onButtonClick} className='btn btn-primary btn-lg float-right' >{isOpen ? 'close' : 'open'}</button>
          </h2>
        </div>
        <div className="card-body">
          <h6 className='card-subtitle text-muted'>
            Creation date: {new Date(article.date).toDateString()}
            </h6>
          {body}
        </div>
      </div>
    );
  }
incrementCounter = () => {
   this.setState({
     count: this.state.count +1
   })
}

  handleClick = () => {
    console.log("---", "clicked");
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

// function handleClick() {
//   console.log("---", "clicked");
// }

export default Article;
