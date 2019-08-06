import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'; 

const ProfileCard = ({profile}) => {
  return (
    <Card>
      <Image src={profile.avatar_url} wrapped ui={false} />

      <Card.Content>
        <Card.Header>{profile.login}</Card.Header>
        <Card.Meta>Public Repos: {profile.public_repos}</Card.Meta>
        <Card.Description>
            Name: {profile.name}{"\n"}
        </Card.Description>
        <Card.Description>
            Bio: {profile.bio}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
          <Icon name='user'/>
          Followers: {profile.followers} 
      </Card.Content>
  </Card>
  )
}

export default ProfileCard; 