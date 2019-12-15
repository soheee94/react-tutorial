import React from 'react';

const profileData = {
  velopert: {
    name: '김민준',
    description: 'Front End Engineer',
  },
  gildong: {
    name: '길동이',
    description: '나는야 길동이',
  },
};

function Profile({ match }) {
  // 파라미터를 받아올 때 match 안 params 값을 참조!
  const { username } = match.params;
  const profile = profileData[username];
  if (!profile) {
    return <div>존재하지 않는 사용자</div>;
  }
  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
    </div>
  );
}

export default Profile;
