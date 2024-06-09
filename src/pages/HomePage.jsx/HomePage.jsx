import { Box, Flex } from '@chakra-ui/react';
import FeedPosts from '../../Components/FeedPosts/FeedPosts';
import SuggestedUsers from '../../Components/SuggestedUsers/SuggestedUsers';

const HomePage = () => {
  return (
    <Flex gap={20}>
      <Box flex={2} py={10}>
        <FeedPosts />
      </Box>
      <Box flex={3} mr={20}
      display={{base:"none",lg:"block"}} maxW={"300px"}>
       <SuggestedUsers />

      </Box>
    </Flex>
  )
}

export default HomePage