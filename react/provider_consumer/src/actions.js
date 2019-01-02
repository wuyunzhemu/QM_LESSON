import axios from 'axios';
// 支持action函数返回不再是{plain object} 还可以是函数
export const filmAction = () => {
  return function(dispatch) {
    axios.get('https://www.easy-mock.com/mock/5bca9240e6742c1bf8220bbd/kicamp/movies#!method=get')
    .then(res => {
      dispatch({type: 'GET_FILM_DATA',
      payload: res.data.data.films})
    })
  }
}