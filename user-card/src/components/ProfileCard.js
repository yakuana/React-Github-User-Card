import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'; 

const ProfileCard = ({profile}) => {
  return (
    <Card>
      <Image src={profile.avatar_url} wrapped ui={false} />

      <Card.Content>
        <Card.Header>{profile.login}</Card.Header>
        <Card.Meta>{profile.type}</Card.Meta>
        <Card.Description>
            GitHub: {profile.html_url}
        </Card.Description>
      </Card.Content>

      <Card.Content extra>
          <Icon name='user'/>
          Id: {profile.id} 
      </Card.Content>
  </Card>
  )
}

export default ProfileCard; 