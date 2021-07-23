import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import Modal from 'react-awesome-modal';

class header extends Component {

  constructor(props){
    super(props);
    this.state = {
      visible : true,
      id: "",
      password: "",
    }
  }

  //modal 실행
  _openModal = function() {
    this.setState({
        visible : true
    });
  }

  _logout = function() {
    if(window.confirm('로그아웃 하시겠습니까?')) {
      sessionStorage.removeItem('login')
      this.setState({ login : false })
    }
  }

/*
  //modal 종료
  _closeModal = function() {
    this.setState({
        visible : false
    });
  }
*/
  _changeID = function() {
    const id_v = document.getElementsByName('id')[0].value;
    
    this.setState({
      id : id_v
    });
  }

  _changePW = function() {
    const pw_v = document.getElementsByName('password')[0].value;

    this.setState({
        password : pw_v
    });
  }

  _selectUserData = async (e) => {
    const id = this.state.id.trim();
    const password = this.state.password.trim();

    if(id === "") {
      return alert('아이디를 입력해주세요.');

    } else if(password === "") {
      return alert('비밀번호를 입력해주세요.');
    }
/*
    const obj = { id : id, password : password }

    const res = await axios('/send/pw', {
      method : 'POST',
      data : obj,
      headers: new Headers()
      })

      if(res.data) {
        console.log(res.data.msg);

        if(res.data.suc){
          seesionStorage.setItem('login', true)
          this.setState({login : true})
          this._closeModal();

          return alert('로그인되었습니다')
        }
        else{
          return alert('아이디 및 비밀번호가 일치하지않습니다.')
        }
      }*/
   }

  render() {

    return (
        <div class='header_grid'>
          <div className='acenter'>
          {this.state.login 
          ? <h5> <Link to='/write'> 포스트 작성 </Link> </h5>
          : null
          }

          </div>
            <div> </div>
            <div className='acenter'>
                <Route path='/'/>
                <Link className='link_tit' to='/'> <h3> MJ's Blog </h3> </Link>
            </div>

            <div className='acenter'>
              <ul className='btn_list'>
            {this.state.login ? <h5 className='btn_cursor' onClick={() => this._logout()}> 로그아웃 </h5>
                              : <h5 className='btn_cursor' onClick={() => this._openModal()}> 로그인 </h5>
            } 
            
               
                </ul>
            </div>
        </div>
    );

  }
}

export default header;

