import React, { Component } from 'react';
import Viewer from 'components/Viewer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apodActions from 'store/modules/apod';

class ViewerContainer extends Component {
  req = null

  getApod = async () => {
    const { ApodActions, loading, date } = this.props;
    loading && this.req.cancel(); // 로딩중이라면 취소하기

    try {
      // this.req 에 Promise 담기
      this.req = ApodActions.getApod(date || '');
      await this.req; // 끝날 때 까지 대기
      // console.log(this.props.url);
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    // 컴포넌트가 처음 나타날 때 요청
    this.getApod();
  }

  componentDidUpdate(prevProps, prevState) {
    // date 가 변경되면 요청
    if(this.props.date !== prevProps.date) {
      this.getApod();
    }
  }
  
  
  render() {
    const { date, url ,mediaType, loading } = this.props;
    return (
      <Viewer 
        date={date}
        url={url}
        mediaType={mediaType}
        loading={loading}
      />
    );
  }
}

export default connect(
  ({ apod, pender }) => ({
    date: apod.get('date'),
    url: apod.get('url'),
    mediaType: apod.get('mediaType'),
    loading: pender.pending['apod/GET_APOD']
  }),
  (dispatch) => ({
    ApodActions: bindActionCreators(apodActions, dispatch)
  })
)(ViewerContainer);