import React, { useState, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { motion, useAnimation } from "framer-motion"

import { detectMobileAndTablet, isSSR } from "../../utils"
import { useOnScreen } from "../../hooks"
import ContentWrapper from "../../styles/contentWrapper"
import Button from "../../styles/button"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
`

const StyledCategories = styled.div`
  display: grid;
  /* Calculate how many columns are needed, depending on categories count */
  grid-template-columns: repeat(
    ${({ itemCount }) => Math.ceil(itemCount / 2)},
    15.625rem
  );
  grid-template-rows: repeat(2, auto);
  grid-auto-flow: column;
  column-gap: 1rem;
  row-gap: 1rem;
  padding: 0 2.5rem 1.25rem 2.5rem;
  overflow-x: scroll;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  /* Workaround: https://stackoverflow.com/questions/38993170/last-margin-padding-collapsing-in-flexbox-grid-layout */
  &::after {
    content: "";
    width: ${({ itemCount }) =>
      Math.ceil(itemCount / 2) % 2 === 1 ? "17.125rem" : "2.5rem"};
  }
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-auto-flow: row;
    grid-template-columns: repeat(3, 15.625rem);
    overflow: visible;
    padding: 0;
  }
  /* Show scrollbar if desktop and wrapper width > viewport width */
  @media (hover: hover) {
    scrollbar-color: ${({ theme }) => theme.colors.scrollBar} transparent; // Firefox only
    &::-webkit-scrollbar {
      display: block;
      -webkit-appearance: none;
    }

    &::-webkit-scrollbar:horizontal {
      height: 0.8rem;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      border: 0.2rem solid ${({ theme }) => theme.colors.background};
      background-color: ${({ theme }) => theme.colors.scrollBar};
    }

    &::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.colors.background};
      border-radius: 8px;
    }
  }

  .categories {
    width: 15.625rem;
    height: 3rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 1rem;
    border: 0.125rem solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.card};
    .emoji {
      margin-right: 0.5rem;
    }
  }
`

const Categories = ({ content }) => {
  const { exports, frontmatter } = content[0].node
  const { shownItems, categories } = exports

  const [shownCategories, setShownCategories] = useState(shownItems)

  const ref = useRef()
  const onScreen = useOnScreen(ref)

  const iControls = useAnimation()
  const bControls = useAnimation()

  useEffect(() => {
    // If mobile or tablet, show all categories initially
    // Otherwise categories.mdx will determine how many categories are shown
    // (isSSR) is used to prevent error during gatsby build
    if (!isSSR && detectMobileAndTablet(window.innerWidth)) {
      setShownCategoriess(categories.length)
    }
  }, [categories])

  useEffect(() => {
    const sequence = async () => {
      if (onScreen) {
        // i receives the value of the custom prop - can be used to stagger
        // the animation of each "categories" element
        await iControls.start(i => ({
          opacity: 1,
          scaleY: 1,
          transition: { delay: i * 0.1 },
        }))
        await bControls.start({ opacity: 1, scaleY: 1 })
      }
    }
    sequence()
  }, [onScreen, shownCategories, iControls, bControls])

  const showMoreItems = () => setShownCategories(shownCategories + 4)

  return (
    <StyledSection id="categories">
      <StyledContentWrapper>
        <h3 className="section-title">
          <a
            href="https://discord.gg/J3PTmeFj6s"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7289DA" }}
          >
            {frontmatter.discord}
          </a>{" "}
          {frontmatter.title}
        </h3>
        <StyledCategories itemCount={categories.length} ref={ref}>
          {categories.slice(0, shownCategories).map(({ name, emoji }, key) => (
            <motion.div
              className="categories"
              key={key}
              custom={key}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={iControls}
            >
              <span className="emoji">{emoji}</span>
              {name}
            </motion.div>
          ))}
          {shownCategories < categories.length && (
            <motion.div initial={{ opacity: 0, scaleY: 0 }} animate={bControls}>
              <Button
                onClick={() => showMoreItems()}
                type="button"
                textAlign="left"
              >
                + Daha Fazlası
              </Button>
            </motion.div>
          )}
        </StyledCategories>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Categories.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        exports: PropTypes.shape({
          categories: PropTypes.array.isRequired,
          shownItems: PropTypes.number.isRequired,
        }).isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Categories
