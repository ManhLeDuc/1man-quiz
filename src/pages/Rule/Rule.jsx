import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './style.css';

export default function QuestionList() {

  return (
    <Container fluid >
      <Row className="justify-content-center" style={{ marginTop: '5%' }}>
        <Col lg="7" xl="7" className="ruleDetail">
          <Row className="justify-content-center">
            <label style={{ fontSize: '35px' }}>ゲーム紹介</label>
          </Row>
          <Row className="justify-content-center">
            <div style={{ textAlign: 'justify', padding: '14px', fontSize: '20px' }}>
            <p>これはクイズに答えるゲームです。</p>
            <p>あなたは自分のスコアー・トップランク・自分が追加したクイズ・プロフィールが確認できます。</p>
          　<p>そして自分でクイズ追加・編集・削除できます。</p>
            <p>ゲームをするとき、４つの答えから１つの正解もの選び、答えが正しければ、５ポイントをもらい、間違えると１ポイントを失い、３回間違えるとらゲーム終了になります。</p>																							
            <p>オープン環境のためあなたの知識を共有して下さい。</p>　																							
            <p>！アカウントがない場合はサインアップしてください。</p>																							
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
