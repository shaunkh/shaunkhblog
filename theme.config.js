import {
  AiOutlineTwitter,
  AiOutlineGithub,
  AiOutlineInstagram
} from 'react-icons/ai'
import { HiOutlineMail } from 'react-icons/hi'
const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <div style={{ display: 'block' }}>
        <time>{YEAR}</time> © Shaun Khundker.
        <a href="/feed.xml">RSS</a>
        <style jsx>{`
          a {
            float: right;
          }
          @media screen and (max-width: 480px) {
            article {
              padding-top: 2rem;
              padding-bottom: 4rem;
            }
          }
        `}</style>
        <div style={{ display: 'flex' }}>
          <a href="https://twitter.com/shaunkhundker">
            <AiOutlineTwitter size={30} color="black" />
          </a>
          <a href="https://instagram.com/shaunkhundker">
            <AiOutlineInstagram size={30} color="black" />
          </a>
          <a href="https://github.com/shaunkh">
            <AiOutlineGithub size={30} color="black" />
          </a>
          <a href="mailto:shaun.khundker@gmail.com">
            <HiOutlineMail size={30} color="black" />
          </a>
        </div>
      </div>
    </small>
  )
}
