'use client'
import styled from 'styled-components'
import React from 'react'
import { QUERIES } from '@/lib/constants/constants'
import Header from '@/components/home/Header'
import ShoeIndex from '@/components/home/ShoeIndex'

export default function Home() {
  const [sortId, setSortId] = React.useState('newest')
  return (
    <>
      <Header />
      <Main>
        <ShoeIndex
          sortId={sortId}
          setSortId={setSortId}
        />
      </Main>
    </>
  )
}

const Main = styled.main`
  padding: 64px 32px;

  @media ${QUERIES.tabletAndSmaller} {
    padding: 48px 32px;
  }
  @media ${QUERIES.phoneAndSmaller} {
    padding: 48px 16px;
  }
`
