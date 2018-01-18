// lets just say this state lives in redux
const state = {name: 'Roman', age: 5}

const myConnect = (mapStateToProps) => {

  let props = mapStateToProps(state);

  return function(component){
    return component.bind(null, props);
  }
}

export default myConnect;
