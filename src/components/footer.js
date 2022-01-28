import * as React from "react"
import styled from "@emotion/styled"
import { css } from "@emotion/react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const NavLink = styled(Link)`
  color: #222;
  font-size: 1rem;
  font-weight: ${props => props.fontWeight || "normal"};
  line-height: 1;
  margin: 0 56px 0 0;
  text-decoration: none;
  color: #4f5abf;

  &.current-page {
    border-bottom: 2px solid #222;
    color: #4f5abf;
  }

  &:last-of-type {
    margin-right: 0;
  }
`

const Footer = () => (
  <footer
    css={css`
      height: 80px;

      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
    `}
  >
    <nav css={css``}>
      <NavLink
        className="hover-link-footer"
        target="_blank"
        to="https://github.com/alexvlasov182"
        activeClassName="current-page"
      >
        GitHub
      </NavLink>
      <NavLink
        className="hover-link-footer"
        target="_blank"
        to="https://www.linkedin.com/in/alexandr-vlasov-9969ab19b/"
        activeClassName="current-page"
      >
        LinkedIn
      </NavLink>
      <NavLink
        className="hover-link-footer"
        target="_blank"
        to="https://alexvlasov182.github.io/site/concept/index.html"
        activeClassName="current-page"
      >
        Paste in Work and describe
      </NavLink>
      <NavLink
        className="hover-link-footer"
        target="_blank"
        to="https://alexvlasov182.github.io/site/mixlab/index.html"
        activeClassName="current-page"
      >
        Paste in Work and describe and this to
      </NavLink>
    </nav>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
