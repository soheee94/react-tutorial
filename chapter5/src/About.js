import React from 'react';
import qs from 'qs';

function About({ location }) {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const detail = query.detail === 'true';
  return (
    <div>
      <h1> 소개 페이지 </h1>
      {detail && <p>추가 정보가 있나보다!</p>}
    </div>
  );
}

export default About;
