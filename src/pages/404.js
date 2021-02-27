import React from "react"
import styled from "styled-components"

import GlobalStateProvider from "../context/provider"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContentWrapper from "../styles/contentWrapper"

const StyledSection = styled.section`
  width: 100%;
  max-width: 62.5rem;
  margin: 0 auto;
  padding: 0 2.5rem;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  h1 {
    font-size: 2rem;
  }
  p {
    font-size: 1.5rem;
  }
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    margin: 0;
    padding: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const NotFoundPage = () => {
  const globalState = {
    isIntroDone: true,
    darkMode: false,
  }

  return (
    <GlobalStateProvider initialState={globalState}>
      <Layout>
        <SEO
          title="404: Üzgünüz, böyle bir sayfa mevcut değil."
          meta={[{ name: "robots", content: "noindex" }]}
        />
        <StyledSection>
          <StyledContentWrapper>
            <h1 data-testid="heading">(╯°□°）╯︵ ┻━┻</h1>
            <h1>404 BULUNAMADI</h1>
            <p>
              Aradığın şeyi belki{" "}
              <a
                href="https://discord.gg/J3PTmeFj6s"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#7289DA" }}
              >
                burada 👀
              </a>{" "}
              bulabilirsin!
            </p>
          </StyledContentWrapper>
        </StyledSection>
      </Layout>
    </GlobalStateProvider>
  )
}

export default NotFoundPage
