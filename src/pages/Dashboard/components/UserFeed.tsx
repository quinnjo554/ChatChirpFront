"use client"
import { useGlobalContext } from '@/contexts/UserContext'
import { Box } from '@chakra-ui/react'
import React from 'react'

function UserFeed() {
  const {name,email,image} = useGlobalContext()
  return (

  <Box>
    <p>{email}</p>
  </Box>
  )
}

export default UserFeed