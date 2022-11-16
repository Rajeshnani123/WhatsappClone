export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      imageUri
      status
      Messages {
        items {
          id
          text
          chatroomID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
      ChatRooms {
        items {
          id
          chatRoomID
          userID
          createdAt
          updatedAt
          chatRoom {
            id
            users {
              items {
                user {
                  id
                  name
                  imageUri
                  status
                }
              }
            }
          }
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
